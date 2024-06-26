import React  from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split"
// import {nanoid} from "nanoid"
import { addDoc,
     onSnapshot,
     doc,
     deleteDoc,
     setDoc} from "firebase/firestore"
import {notesCollection,db} from "../firebase"

export default function App() {
const [notes, setNotes] = React.useState([])

React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
        // Sync up our local notes array with the snapshot data
     const notesArr=snapshot.docs.map(doc=>({
        ...doc.data(),
id:doc.id
     }))
     setNotes(notesArr)
    })
    return unsubscribe
}, [])

React.useEffect(() => {
    if (!currentNoteId) {
        setCurrentNoteId(notes[0]?.id)
    }
}, [notes])


    const [currentNoteId, setCurrentNoteId] = React.useState('')

    const currentNote =notes.find(note => {
        return note.id === currentNoteId
    }) || notes[0]

    // sorting
   
    const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt)

// creating
async function createNewNote() {
    const newNote = {
        createdAt:Date.now(),
        updatedAt:Date.now(),
        body: "# Type your markdown note's title here"
    }
 const newNoteRef= await addDoc(notesCollection,newNote)
    setCurrentNoteId(newNoteRef.id)
}

    // deleting
    async  function deleteNote(noteId) {
const docRef=doc(db,"notes",noteId)
await deleteDoc(docRef)
    }
    // updating
    async function updateNote(text) {
        const docRef = doc(db, "notes",currentNoteId)
        await setDoc(docRef,{ updatedAt:Date.now(),body:text} ,{ merge: true })
    }
     
    
  
    
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={sortedNotes}
                    currentNote={currentNote}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
               
                    <Editor 
                        currentNote={currentNote} 
                        updateNote={updateNote} 
                    />
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
