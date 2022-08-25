import React from 'react'
import { NewNote } from './NewNote';
import { Note } from './Note'

export const NotesList = ({ searchText, notes, addNote, deleteNote, editNote, saveEdit }) => {
    return (
        <div id='note-list'>
            {notes && notes.filter(item => item.text.includes(searchText)).map(item => {
                return <Note saveEdit={saveEdit} id={item.id} edit={item.edit} color={item.color} text={item.text} date={item.date} deleteNote={deleteNote} editNote={editNote} />
            })}
            <NewNote addNote={addNote} />
        </div>
    )
}
