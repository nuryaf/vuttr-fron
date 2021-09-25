import React, { useState } from "react";
import Modal from 'react-modal';
import 'components/Modal/AddNewTool.css'

const initialFormState = {
    title: '',
    link: '',
    description: '',
    tags: []
}

const AddNewToolComponent = props => {
    const [form, setForm] = useState(initialFormState)

    const setInput = value => {
        setForm(form => ({ ...form, ...value }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submitTool(form)
    }

    return (
        <Modal ariaHideApp={false} isOpen={props.isOpen} onRequestClose={props.requestClose}>
            <form onSubmit={handleSubmit} className="new-tool-modal">
                <div className="new-tool-modal__div">
                    <h1>
                        + Add new tool
                    </h1>

                    <button
                        className="new-tool-modal__close-button"
                        onClick={props.requestClose}
                    >Close</button>
                </div>

                <label>Tool Name</label>
                <input type="text" name="title" placeholder="Name" onChange={e => setInput({ title: e.target.value })} />

                <label>Tool Link</label>
                <input type="text" name="link" placeholder="Link" onChange={e => setInput({ link: e.target.value })} />

                <label>Tool Description</label>
                <input type="text" name="description" placeholder="Tool description" onChange={e => setInput({ description: e.target.value })} />

                <label>Tags</label>
                <input type="text" name="tags" placeholder="Only names separated by space" onChange={e => setInput({ tags: e.target.value.split(' ') })} />

                <input type="submit" value="Add tool" className="new-tool-modal__add-button" />
            </form>
        </ Modal>
    )
}

export default AddNewToolComponent;