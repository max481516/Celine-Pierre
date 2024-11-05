import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function UploadMedia() {
  const handleUpload = (event) => {
    const files = Array.from(event.target.files);

    files.forEach((file) => {
      const storagePath = `CP-PhotoAlbum/${file.name}-${Date.now()}`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Optional: Track upload progress
        },
        (error) => {
          console.error("Upload failed:", error);
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
        }
      );
    });
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={handleUpload}
      />
    </div>
  );
}
