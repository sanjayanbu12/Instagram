import React from 'react';
import './Createpost.css';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Create() {
  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Do something with the selected file, like uploading to a server or processing it
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="create__container">
      <p>create new post</p>
      <div className="create__items">
        <NoteAddIcon style={{ fontSize: '5rem', color: '#343a40' }} />
        <p>Drag photos and videos here</p>
        {/* File input for adding files from the computer */}
        <input
          type="file"
          id="fileInput"
          accept="image/*, video/*" // Specify accepted file types (images and videos in this case)
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the default file input UI
        />
        <label htmlFor="fileInput" className="custom-file-input-label">
          Add from computer
        </label>
      </div>
    </div>
  );
}

export default Create;
