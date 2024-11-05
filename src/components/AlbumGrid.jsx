export default function AlbumGrid({ mediaItems, onDelete }) {
  const handleDownload = (item) => {
    const confirmDownload = window.confirm(
      "Do you want to download this file?"
    );
    if (!confirmDownload) return;

    fetch(item.url, {
      method: "GET",
      headers: {
        // Include any headers if necessary
      },
      credentials: "same-origin", // Include credentials if needed
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = item.name; // Set the filename
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

  return (
    <div className="album-grid">
      {mediaItems.map((item, index) => (
        <div key={index} className="media-item">
          {item.type.startsWith("image/") ? (
            <img src={item.url} alt={item.name} />
          ) : (
            <video src={item.url} controls />
          )}
          <div className="media-actions">
            <button onClick={() => handleDownload(item)}>Download</button>
            <button onClick={() => onDelete(item)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
