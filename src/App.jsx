import { useState, useEffect } from "react";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("pocketNotes");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("pocketNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`App ${selectedNote ? "note-open" : ""}`}>
      {/* Left sidebar */}
      <LeftSidebar
        notes={notes}
        setNotes={setNotes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
      {/* main content */}
      <MainContent
        notes={notes}
        setNotes={setNotes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
    </div>
  );
}

export default App;
