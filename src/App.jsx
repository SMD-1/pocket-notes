import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("pocketNotes");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedNote, setSelectedNote] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [groupName, setGroupName] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    localStorage.setItem("pocketNotes", JSON.stringify(notes));
  }, [notes]);

  const colorOptions = [
    "#9B7AE5",
    "#E765D8",
    "#39C0D4",
    "#E88963",
    "#144EE3",
    "#5B84E6",
  ];
  // Create Group function
  const createGroup = (groupName, color) => {
    if (!color) {
      alert("Please choose a color before creating a group.");
      return;
    }
    if (!groupName.trim()) {
      alert("Please enter a group name before creating a group.");
      return;
    }
    if (
      notes.some((note) => note.title.toLowerCase() === groupName.toLowerCase())
    ) {
      alert("A group with this name already exists.");
      return;
    }
    const newGroup = {
      id: notes.length + 1,
      title: groupName,
      content: [],
      backgroundColor: color,
    };
    setNotes([...notes, newGroup]);
    setSelectedNote(newGroup);
    setIsOpen(false);
    setGroupName("");
    setSelectedColor(null);
  };

  // Send button function
  const handleSend = (id) => {
    if (!userInput.trim()) {
      alert("Please enter some text before sending.");
      return;
    }
    const currentDate = new Date();
    const newContent = {
      id: selectedNote.content.length + 1,
      text: userInput,
      date: currentDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      time: currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          content: [...note.content, newContent],
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setSelectedNote((prevNote) => ({
      ...prevNote,
      content: [...prevNote.content, newContent],
    }));
    setUserInput("");
  };

  return (
    <div className="App">
      {/* Left sidebar */}
      <section className="left-sidebar">
        {/* logo */}
        <div className="logo">
          <h1>Pocket Notes</h1>
        </div>
        {/* Notes list */}
        <div className="notes-list">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`note-item ${selectedNote.id === note.id ? "active" : ""}`}
              onClick={() => setSelectedNote(note)}
            >
              <div
                className="notes-initials"
                style={{ backgroundColor: note.backgroundColor }}
              >
                {note.title
                  .trim()
                  .split(/\s+/)
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <h2>{note.title}</h2>
            </div>
          ))}
        </div>
        <button className="add-btn" onClick={() => setIsOpen(true)}>
          <svg
            width="35"
            height="37"
            viewBox="0 0 35 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.1113 13.9453V21.3623H0V13.9453H34.1113ZM21.0547 0V36.2305H13.0908V0H21.0547Z"
              fill="white"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>Create New group</h2>

              <div className="form-row">
                <label htmlFor="group-name">Group Name</label>
                <input
                  id="group-name"
                  type="text"
                  placeholder="Enter group name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  aria-label="Enter group name"
                />
              </div>

              <div className="form-row">
                <label htmlFor="color-choice">Choose colour</label>
                <div className="colors">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      className={`color-circle ${
                        selectedColor === color ? "selected" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>
              <div className="actions">
                <button
                  className="create-btn"
                  onClick={() => createGroup(groupName, selectedColor)}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* main content */}
      <section className="main-content">
        {/* header */}
        <div className="header">
          <div
            className="notes-initials"
            style={{ backgroundColor: selectedNote?.backgroundColor }}
          >
            {selectedNote?.title
              .trim()
              .split(/\s+/)
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </div>
          <h2>{selectedNote?.title}</h2>
        </div>
        <div className="group-notes">
          {selectedNote?.content.length > 0 &&
            selectedNote.content.map((content) => (
              <div key={content.id} className="note">
                <p className="note-content">{content.text}</p>
                <div className="timeline">
                  <p className="date">{content.date}</p>
                  <span className="dot"></span>
                  <p className="time">{content.time.toUpperCase()}</p>
                </div>
              </div>
            ))}
        </div>
        {/* input text area */}
        <div className="input-area">
          <textarea
            name="user-input"
            id="user-input"
            placeholder="Enter your text here...."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && userInput.trim()) {
                e.preventDefault();
                handleSend(selectedNote.id);
              }
            }}
          ></textarea>
          <button
            className="send-btn"
            onClick={() => handleSend(selectedNote.id)}
            disabled={!userInput.trim()}
          >
            <svg
              width="35"
              height="29"
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
                className="send-icon"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
