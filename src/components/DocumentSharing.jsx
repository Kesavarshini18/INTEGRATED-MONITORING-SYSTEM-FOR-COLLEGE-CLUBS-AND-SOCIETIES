import React, { useState } from "react";
import axios from "axios";

// Document Sharing Page

function DocumentSharing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    axios
      .post("/api/documents", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Document Sharing</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>File:</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <br />
        <button type="submit">Upload Document</button>
      </form>
    </div>
  );
}

export default DocumentSharing;
