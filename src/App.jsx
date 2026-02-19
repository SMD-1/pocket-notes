import { useState } from "react";
import "./App.css";

const notes = [
  {
    id: 1,
    title: "My Notes",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 2,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 3,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 4,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 5,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 6,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#0047FF",
  },
  {
    id: 2,
    title: "My CSS Notes",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 2,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 3,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 4,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 5,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
      {
        id: 6,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#6691FF",
  },
  {
    id: 3,
    title: "Journal",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#FF79F2",
  },
  {
    id: 4,
    title: "JavaScript Group",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#B38BFA",
  },
  {
    id: 5,
    title: "My Notes",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#0047FF",
  },
  {
    id: 6,
    title: "My CSS Notes",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#6691FF",
  },
  {
    id: 7,
    title: "Journal",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#FF79F2",
  },
  {
    id: 8,
    title: "JavaScript Group",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#B38BFA",
  },
  {
    id: 9,
    title: "My Notes",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#0047FF",
  },
  {
    id: 10,
    title: "My CSS Notes",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#6691FF",
  },
  {
    id: 11,
    title: "Journal",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#FF79F2",
  },
  {
    id: 12,
    title: "JavaScript Group",
    content: [
      {
        id: 1,
        text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
        date: "9 Mar 2023",
        time: "10:30 AM",
      },
    ],
    backgroundColor: "#B38BFA",
  },
];

function App() {
  const [selectedNote, setSelectedNote] = useState(notes[0]);
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
            <div key={note.id} className="note-item">
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
      </section>
      {/* main content */}
      <section className="main-content">
        {/* header */}
        <div className="header">
          <div
            className="notes-initials"
            style={{ backgroundColor: selectedNote.backgroundColor }}
          >
            {selectedNote.title
              .trim()
              .split(/\s+/)
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </div>
          <h2>{selectedNote.title}</h2>
        </div>
        <div className="group-notes">
          {selectedNote.content.length > 0 ? (
            selectedNote.content.map((content) => (
              <div key={content.id} className="note">
                <p className="note-content">{content.text}</p>
                <div className="timeline">
                  <p className="date">{content.date}</p>
                  <span className="dot"></span>
                  <p className="time">{content.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No content available for this note.</p>
          )}
        </div>
        {/* input text area */}
        <div className="input-area">
          <textarea
            name="user-input"
            id="user-input"
            placeholder="Enter your text here...."
          ></textarea>
          <div className="send-btn">
            <svg
              width="35"
              height="29"
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
                fill="#001F8B"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
