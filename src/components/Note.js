import React, { useState } from 'react'
import { FaTrash, FaPen, FaSave } from "react-icons/fa"
import { ImCross } from "react-icons/im"

export const Note = ({ id, text, date, deleteNote, color, edit, editNote, saveEdit }) => {

    const [txt, setTxt] = useState("")

    return (
        <div style={{ backgroundColor: color }} className='note'>
            {edit ? (
                <>
                    <textarea onChange={(e) => setTxt(e.target.value)} maxLength={200} defaultValue={text} placeholder='Enter the new text and click on save button' style={{ backgroundColor: color }}></textarea>
                </>
            ) : <p>{text}</p>
            }
            <div className='note-footer'>
                <small>{date}</small>
                <div>
                    {edit ? (
                        <>
                            <button onClick={() => saveEdit(id, txt)} className='note-btn'>
                                <FaSave />
                            </button>
                            <button onClick={() => editNote(id)} className='note-btn'>
                                <ImCross />
                            </button>
                        </>
                    ) : <>
                        <button onClick={() => editNote(id)} className='note-btn'>
                            <FaPen />
                        </button>
                        <button onClick={() => deleteNote(id)} className='note-btn'>
                            <FaTrash />
                        </button>
                    </>
                    }
                </div>
            </div >
        </div >
    )
}
