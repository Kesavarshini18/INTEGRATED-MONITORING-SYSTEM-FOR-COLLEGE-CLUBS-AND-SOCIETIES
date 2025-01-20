import React, { useState } from "react";
import axios from "axios";

// Document List Page

function DocumentList() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios
      .get("/api/documents")
      .then((res) => setDocuments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Document List</h1>
      <ul>
        {documents.map((document) => (
          <li key={document._id}>{document.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentList;
