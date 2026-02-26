import { useState, useEffect } from "react";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";

// load initial notes from localStorage (kept outside component to avoid
// running during every render)
const loadNotes = () => {
  const saved = localStorage.getItem("pocketNotes");
  return saved ? JSON.parse(saved) : [];
};

function App() {
  const [notes, setNotes] = useState(loadNotes);
  const [selectedNote, setSelectedNote] = useState(null);

  // whenever the notes array changes we mirror it back to localStorage
  // (dependence on `notes` ensures the effect runs only when data mutates)
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
