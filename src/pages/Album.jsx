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

export default function Album() {
  const [mediaFiles, setMediaFiles] = useState([]);

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
    <>
      <h2>Album</h2>
      <UploadMedia />
      <AlbumGrid mediaItems={mediaFiles} onDelete={handleDelete} />
    </>
  );
}
