import React, { useState } from 'react';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Upload Image</h2>
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      {/* Image icon */}
      {/* <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/photo.png"
          alt="Upload"
          style={{ width: '50px', height: '50px' }}
        />
      </label> */}
      {/* Image preview */}
      {preview && (
        <div>
          <h3>Image Preview:</h3>
          <img src={preview} alt="Preview" style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
