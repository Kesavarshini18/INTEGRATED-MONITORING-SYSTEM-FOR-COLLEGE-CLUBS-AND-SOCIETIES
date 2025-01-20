import React, { useState } from "react";
import axios from "axios";

function AnalyticsDashboard() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
    axios
      .get("/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
    axios
      .get("/api/documents")
      .then((res) => setDocuments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <p>Users: {users.length}</p>
      <p>Events: {events.length}</p>
      <p>Documents: {documents.length}</p>
    </div>
  );
}

export default AnalyticsDashboard;
