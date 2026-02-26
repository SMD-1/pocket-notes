import { useState } from "react";
import PropTypes from "prop-types";
import welcomeBg from "../assets/hero_background.svg";

const MainContent = ({ notes, setNotes, selectedNote, setSelectedNote }) => {
  const [userInput, setUserInput] = useState("");

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
    <>
      {selectedNote ? (
        <section className="main-content">
          {/* header */}
          <div className="header">
            <button
              className="left-arrow-icon"
              onClick={() => setSelectedNote(null)}
              aria-label="Back to groups"
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.27507 10.85C6.47507 10.65 6.57107 10.4083 6.56307 10.125C6.55507 9.84167 6.45074 9.6 6.25007 9.4L3.42507 6.575H14.5751C14.8584 6.575 15.0961 6.479 15.2881 6.287C15.4801 6.095 15.5757 5.85767 15.5751 5.575C15.5751 5.29167 15.4791 5.054 15.2871 4.862C15.0951 4.67 14.8577 4.57433 14.5751 4.575H3.42507L6.27507 1.725C6.47507 1.525 6.57507 1.28733 6.57507 1.012C6.57507 0.736666 6.47507 0.499333 6.27507 0.3C6.07507 0.0999997 5.8374 0 5.56207 0C5.28674 0 5.0494 0.0999997 4.85007 0.3L0.27507 4.875C0.17507 4.975 0.104069 5.08333 0.0620689 5.2C0.0200691 5.31667 -0.000597954 5.44167 6.86646e-05 5.575C6.86646e-05 5.70833 0.0210705 5.83333 0.0630703 5.95C0.10507 6.06667 0.175736 6.175 0.27507 6.275L4.87507 10.875C5.0584 11.0583 5.2874 11.15 5.56207 11.15C5.83674 11.15 6.0744 11.05 6.27507 10.85Z"
                  fill="white"
                />
              </svg>
            </button>
            <div
              className="note-initials"
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
      ) : (
        <div className="welcome-page">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              alt="welcome background"
              src={welcomeBg}
              style={{ width: "90%" }}
            />
            <h1 style={{ marginBottom: "10px" }}>Pocket Notes</h1>
            <p className="welcome-message">
              Send and receive messages without keeping your phone online.
              <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
              phone
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              position: "absolute",
              bottom: "20px",
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.125 21C1.54063 21 1.04019 20.804 0.623689 20.412C0.207189 20.02 -0.000706529 19.5493 1.80391e-06 19V9C1.80391e-06 8.45 0.208252 7.979 0.624752 7.587C1.04125 7.195 1.54134 6.99933 2.125 7H3.1875V5C3.1875 3.61667 3.70565 2.43733 4.74194 1.462C5.77823 0.486667 7.03092 -0.000665984 8.5 6.8306e-07C9.96979 6.8306e-07 11.2228 0.487667 12.2591 1.463C13.2954 2.43833 13.8132 3.61733 13.8125 5V7H14.875C15.4594 7 15.9598 7.196 16.3763 7.588C16.7928 7.98 17.0007 8.45067 17 9V19C17 19.55 16.7918 20.021 16.3753 20.413C15.9588 20.805 15.4587 21.0007 14.875 21H2.125ZM8.5 16C9.08438 16 9.58482 15.804 10.0013 15.412C10.4178 15.02 10.6257 14.5493 10.625 14C10.625 13.45 10.4168 12.979 10.0003 12.587C9.58375 12.195 9.08367 11.9993 8.5 12C7.91563 12 7.41519 12.196 6.99869 12.588C6.58219 12.98 6.37429 13.4507 6.375 14C6.375 14.55 6.58325 15.021 6.99975 15.413C7.41625 15.805 7.91634 16.0007 8.5 16ZM5.3125 7H11.6875V5C11.6875 4.16667 11.3776 3.45833 10.7578 2.875C10.138 2.29167 9.38542 2 8.5 2C7.61459 2 6.86198 2.29167 6.24219 2.875C5.6224 3.45833 5.3125 4.16667 5.3125 5V7Z"
                fill="#292929"
              />
            </svg>
            <p>end-to-end encrypted</p>
          </div>
        </div>
      )}
    </>
  );
};

MainContent.propTypes = {
  notes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
  selectedNote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      }),
    ).isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }),
  setSelectedNote: PropTypes.func.isRequired,
};

export default MainContent;
