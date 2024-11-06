import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox, {
  IconButton,
  useLightboxState,
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import styled from "styled-components";
import { FaRegTrashCan, FaPlay } from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { QUERIES } from "../constants";

export default function AlbumGrid({ mediaItems, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState({});

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
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

  const handleVideoPlay = (event, index) => {
    event.stopPropagation(); // Prevent triggering lightbox when clicking on play button
    setPlayingVideos((prev) => ({ ...prev, [index]: true }));
  };

  const slides = mediaItems
    .map((item) => {
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

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <MasonryGrid breakpointCols={breakpointColumns}>
        {mediaItems.map((item, index) => (
          <MediaItem key={index} onClick={() => openLightbox(index)}>
            {item.type.startsWith("image/") ? (
              <StyledImage src={item.url} alt={item.name} />
            ) : (
              <VideoContainer>
                <StyledVideo
                  src={item.url}
                  controls={!!playingVideos[index]}
                  onClick={(e) => e.stopPropagation()} // Prevent lightbox when video is clicked directly
                  onPlay={() => handleVideoPlay(null, index)}
                />
                {!playingVideos[index] && (
                  <PlayButton onClick={(e) => handleVideoPlay(e, index)}>
                    <FaPlay size={36} />
                  </PlayButton>
                )}
              </VideoContainer>
            )}
          </MediaItem>
        ))}
      </MasonryGrid>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Video]}
        toolbar={{
          buttons: [
            <DownloadButton key="download" handleDownload={handleDownload} />,
            <DeleteButton key="delete" onDelete={onDelete} />,
            "close",
          ],
        }}
        on={{
          view: ({ index }) => {
            setCurrentIndex(index);
          },
        }}
      />
    </>
  );
}

// Custom Download Button
function DownloadButton({ handleDownload }) {
  const { currentSlide } = useLightboxState();

  return (
    <IconButton
      size="20"
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

// Custom Delete Button
function DeleteButton({ onDelete }) {
  const { currentSlide } = useLightboxState();

  return (
    <StyledIconButton
      label="Delete"
      icon={FaRegTrashCan}
      disabled={!currentSlide}
      onClick={() => {
        if (currentSlide && currentSlide.mediaItem) {
          onDelete(currentSlide.mediaItem);
        }
      }}
    />
  );
}

// Styled Components
const MasonryGrid = styled(Masonry)`
  display: flex;
  width: 100%;
  padding: 8px;

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

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  pointer-events: none; // Prevent interaction until play button is clicked
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
  width: 50px;
  height: 50px;
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

const StyledIconButton = styled(IconButton)`
  width: 27%;
`;
