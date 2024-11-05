export default function AlbumGrid({ mediaItems, onDelete }) {
  return (
    <div className="album-grid">
      {mediaItems.map((item, index) => (
        <div key={index} className="media-item">
          {item.type.startsWith("image/") ? (
            <img src={item.url} alt={item.name} />
          ) : (
            <video src={item.url} controls />
          )}
          <button onClick={() => onDelete(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
