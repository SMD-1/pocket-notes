import { useState } from "react";
import PropTypes from "prop-types";

const LeftSidebar = ({ notes, setNotes, selectedNote, setSelectedNote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

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
    if (!groupName.trim()) {
      alert("Please enter a group name before creating a group.");
      return;
    }
    if (!color) {
      alert("Please choose a color before creating a group.");
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

  return (
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
            className={`note-item ${selectedNote?.id === note.id ? "active" : ""}`}
            onClick={() => setSelectedNote(note)}
          >
            <div
              className="note-initials"
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
  );
};

LeftSidebar.propTypes = {
  notes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
  selectedNote: PropTypes.object,
  setSelectedNote: PropTypes.func.isRequired,
};

export default LeftSidebar;
