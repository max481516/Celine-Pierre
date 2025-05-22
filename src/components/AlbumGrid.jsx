import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Lightbox, {
  IconButton,
  useLightboxState,
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Share from "yet-another-react-lightbox/plugins/share";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import { QUERIES } from "../constants";
import CommentSection from "./CommentSection";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaCommentAlt } from "react-icons/lia";

export default function AlbumGrid({ mediaItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setIsCommentsOpen(false); // Reset comments container state
  };

  const handleDownload = (item) => {
    const confirmDownload = window.confirm(
      "Do you want to download this file?"
    );
    if (!confirmDownload) return;

    fetch(item.url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = item.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        alert("Failed to download the file.");
      });
  };
  // Function to add a new comment
  const addComment = async (text, name) => {
    const mediaItemId = slides[currentIndex].mediaItem.id;
    if (!mediaItemId) {
      console.error("Media item ID is undefined");
      return;
    }
    const commentsRef = collection(
      firestore,
      `mediaItems/${mediaItemId}/comments`
    );
    await addDoc(commentsRef, {
      text,
      name: name || "Anonymous",
      createdAt: serverTimestamp(),
    });
  };

  // Fetch comments when lightbox opens or current slide changes
  useEffect(() => {
    if (isOpen && slides[currentIndex]) {
      const mediaItemId = slides[currentIndex].mediaItem.id;
      if (!mediaItemId) {
        console.error("Media item ID is undefined");
        return;
      }
      const commentsRef = collection(
        firestore,
        `mediaItems/${mediaItemId}/comments`
      );
      const q = query(commentsRef, orderBy("createdAt", "asc"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const commentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentsData);
      });

      return () => unsubscribe();
    }
  }, [isOpen, currentIndex]);

  const slides = mediaItems
    .map((item) => {
      if (!item || !item.type || !item.url) return null;

      if (item.type.startsWith("image/")) {
        return {
          src: item.url,
          type: "image",
          alt: item.name,
          mediaItem: item,
        };
      } else if (item.type.startsWith("video/")) {
        return {
          type: "video",
          poster: item.url,
          sources: [
            {
              src: item.url,
              type: item.type,
            },
          ],
          mediaItem: item,
        };
      }
      return null;
    })
    .filter((slide) => slide !== null);

  // Custom Download Button
  function DownloadButton({ handleDownload }) {
    const { currentSlide } = useLightboxState();

    return (
      <IconButton
        label="Download"
        icon={RiDownloadLine}
        disabled={!currentSlide}
        onClick={() => {
          if (currentSlide && currentSlide.mediaItem) {
            handleDownload(currentSlide.mediaItem);
          }
        }}
      />
    );
  }

  // Custom Comments Toggle Button
  function CommentsButton() {
    return (
      <CommentsIconButton
        label="Comments"
        icon={LiaCommentAlt}
        onClick={() => setIsCommentsOpen(!isCommentsOpen)}
      />
    );
  }

  // Breakpoints for Masonry Grid
  const breakpointColumns = {
    default: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <MasonryGrid breakpointCols={breakpointColumns}>
        {mediaItems.map((item, index) => (
          <MediaItem key={index} onClick={() => openLightbox(index)}>
            {item.type && item.type.startsWith("image/") ? (
              <StyledImage src={item.url} alt={item.name} />
            ) : (
              <VideoContainer>
                <StyledVideoThumbnail src={item.url} type="video/mp4" />
                <PlayButton>
                  <FaPlay size={36} />
                </PlayButton>
              </VideoContainer>
            )}
          </MediaItem>
        ))}
      </MasonryGrid>

      <Lightbox
        styles={{ container: { padding: "64px 0" } }}
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Video, Share]}
        video={{
          controls: true,
          playsInline: true,
          autoPlay: true,
        }}
        toolbar={{
          buttons: [
            <CommentsButton key="comments" />,
            <DownloadButton key="download" handleDownload={handleDownload} />,
            "share",
            "close",
          ],
        }}
        render={{
          iconShare: () => <IoShareSocialOutline size={31} />,
          iconClose: () => <IoMdClose size={36} />,
          controls: () => (
            <CommentSection
              comments={comments}
              addComment={addComment}
              isOpen={isCommentsOpen}
              toggleOpen={() => setIsCommentsOpen(!isCommentsOpen)}
            />
          ),
        }}
        on={{
          view: ({ index }) => {
            setCurrentIndex(index);
            setIsCommentsOpen(false); // Reset comments container when slide changes
          },
        }}
      />
    </>
  );
}

// Styled Components
const MasonryGrid = styled(Masonry)`
  display: flex;
  width: 100%;

  @media ${QUERIES.laptopAndUp} {
    padding: 8px 24px;
  }
  & > div {
    background-clip: padding-box;
    padding: 4px;
  }
`;

const MediaItem = styled.div`
  margin-bottom: 8px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledVideoThumbnail = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
  pointer-events: none; /* Prevents the video from being clickable */
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const CommentsIconButton = styled(IconButton)`
  width: 51px;
  height: 51px;
`;
