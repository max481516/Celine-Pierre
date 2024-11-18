import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styled, { createGlobalStyle } from "styled-components";
import UploadIcon from "../media/UploadIcon.svg?react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FONTS } from "../constants";

export default function UploadMedia() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    const totalFiles = files.length;
    let filesUploaded = 0;

    files.forEach((file) => {
      const storagePath = `CP-PhotoAlbum/${file.name}-${Date.now()}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(Math.round(progress));
        },
        (error) => {
          console.error("Upload failed:", error);
          setIsUploading(false);
          setUploadProgress(0);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          const mediaItem = {
            url: downloadURL,
            name: file.name,
            type: file.type,
            storagePath: storagePath, // Store the storage path
            createdAt: serverTimestamp(),
          };

          try {
            await addDoc(collection(firestore, "mediaItems"), mediaItem);
          } catch (error) {
            console.error("Error adding document to Firestore:", error);
          }

          filesUploaded += 1;

          if (filesUploaded === totalFiles) {
            setIsUploading(false);
            setUploadProgress(0);
          }
        }
      );
    });
  };

  return (
    <>
      <GlobalStyle />
      <UploadContainer>
        {isUploading ? (
          <>
            <SpinnerIcon />
            <UploadText>{uploadProgress}%</UploadText>
          </>
        ) : (
          <>
            <StyledUploadIcon />
            <UploadText>UPLOAD</UploadText>
          </>
        )}
        <FileInput
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleUpload}
        />
      </UploadContainer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const UploadContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100px;
  height: 38px;
  bottom: 12px;
  left: 0;
  z-index: 10;
`;

const StyledUploadIcon = styled(UploadIcon)`
  flex-shrink: 0;
  color: var(--color-primary-blue);
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const SpinnerIcon = styled(AiOutlineLoading3Quarters)`
  flex-shrink: 0;
  color: var(--color-primary-blue);
  width: 100%;
  height: 100%;
  animation: spin 1s linear infinite;
`;

const UploadText = styled.span`
  ${FONTS.titleFont};
  font-weight: 800;
  color: var(--color-primary-blue);
`;

const FileInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
