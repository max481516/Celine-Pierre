import { useState, useEffect } from "react";
import UploadMedia from "../components/UploadMedia";
import AlbumGrid from "../components/AlbumGrid";
import { firestore, storage } from "../firebase/firebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import styled from "styled-components";
import { FONTS, QUERIES } from "../constants";
import Border from "../media/Border.svg?react";
import { useTranslation } from "react-i18next";

export default function Album() {
  const [mediaFiles, setMediaFiles] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const q = query(
      collection(firestore, "mediaItems"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMediaFiles(items);
    });

    return () => unsubscribe();
  }, []);

  // Delete Function
  const handleDelete = async (mediaItem) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this media item?"
    );
    if (!confirmDelete) return;

    try {
      // Delete the file from Firebase Storage
      const fileRef = ref(storage, mediaItem.storagePath);
      await deleteObject(fileRef);

      // Delete the document from Firestore
      await deleteDoc(doc(firestore, "mediaItems", mediaItem.id));

      // Optional: Provide user feedback
      alert("Media item deleted successfully.");
    } catch (error) {
      console.error("Error deleting media item:", error);
      alert("An error occurred while deleting the media item.");
    }
  };

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <Title>{t("Album.Title")}</Title>
        <Description>{t("Album.Description")}</Description>
        <UploadMedia />
        <AlbumGrid mediaItems={mediaFiles} onDelete={handleDelete} />
        <StyledBottomBorder />
      </FrameContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;

  @media ${QUERIES.largeTabletAndUp} {
    padding: 3rem;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 8rem 14rem;
    background-color: var(--color-lighter-sand);
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 8rem 20rem;
  }
`;

const FrameContainer = styled.div`
  @media ${QUERIES.laptopAndUp} {
    padding: 2rem;
    box-shadow: 0 26px 58px 0 rgba(0, 0, 0, 0.22),
      0 5px 14px 0 rgba(0, 0, 0, 0.18);
    background-color: var(--color-light-sand);
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 3rem;
  }
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  font-size: 2rem;
  color: var(--color-primary-blue);
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  ${FONTS.titleFont};
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledBorder = styled(Border)`
  padding-bottom: 1rem;
  color: var(--color-primary-blue);
`;

const StyledBottomBorder = styled(StyledBorder)`
  padding-bottom: 1rem;
  padding-top: 1rem;
  transform: rotate(180deg);
`;
