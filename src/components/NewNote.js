import React, { useState } from 'react'

export const NewNote = ({ addNote }) => {
    const [text, setText] = useState("")

    const handleInput = () => {
        addNote(text)
        setText("")
    }

    return (
        <div id='note-new'>
            <textarea maxLength={200} value={text} onChange={(e) => setText(e.target.value)} placeholder='Type to add a note...'></textarea>
            <div>
                <small>{200 - text.length} Remaining</small>
                <button onClick={handleInput}>Add</button>
            </div>
        </div>
    )
}
