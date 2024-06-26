// import React from "react"
import PropTypes from "prop-types";
export default function Sidebar(props) {
    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split('\n')[0]}</h4>
                <button 
                    className="delete-btn"
                    // eslint-disable-next-line react/prop-types
                    onClick={()=>props.deleteNote(note.id)}
                >
                  -
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
Sidebar.propTypes = {
    currentNote: PropTypes.shape({
        id: PropTypes.string.isRequired, // Define the structure of currentNote object
    }).isRequired,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // Define other properties of a note if needed
        })
    ).isRequired,
    setCurrentNoteId: PropTypes.func.isRequired,
    newNote: PropTypes.func.isRequired,
};