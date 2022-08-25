import { Header } from "./components/Header";
import { NotesList } from "./components/NotesList";
import { useEffect, useState } from "react"
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import randomColor from "randomcolor";

function generateDatabaseDateTime(date) {
  return date.toISOString().replace("T", " ").substring(0, 19);
}

function App() {
  const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem('noteList')) || [])
  const [searchText, setSearch] = useState("")

  const addNote = (txt) => {
    if (txt.trim().length > 0) {
      setNoteList(prev => [...prev, { id: nanoid(), text: txt, date: generateDatabaseDateTime(new Date()), color: randomColor(), edit: false }])
      localStorage.setItem("noteList", JSON.stringify(noteList))
      toast.success('New note has been added.')
    } else {
      toast.error('Please give some text.')
    }
  }

  useEffect(() => {
    localStorage.setItem('noteList', JSON.stringify(noteList))
  }, [noteList])

  const deleteNote = (id) => {
    setNoteList(noteList.filter(item => item.id !== id))
    localStorage.setItem("noteList", JSON.stringify(noteList))
    toast.success(`Note has been deleted.`)
  }

  const editNote = (id) => {
    setNoteList(noteList.map(item => {
      if (item.id === id) {
        return { ...item, edit: !item.edit }
      } else {
        return item
      }
    }))
  }

  const saveEdit = (id, txt) => {
    setNoteList(noteList.map(item => {
      if (item.id === id) {
        return { ...item, edit: !item.edit, text: txt, date: generateDatabaseDateTime(new Date()) }
      } else {
        return item
      }
    }))
    toast.success(`Note has been edited.`)
  }

  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
      <Header setSearch={setSearch} />
      <NotesList saveEdit={saveEdit} editNote={editNote} searchText={searchText} deleteNote={deleteNote} notes={noteList} addNote={addNote} />
    </div>
  );
}

export default App;
