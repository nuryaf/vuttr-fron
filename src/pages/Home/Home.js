import React, { useEffect, useState } from "react";
import Modal from 'react-modal';

import api from "services/api";
import CardComponent from "components/Card/ToolCard";
import AddNewToolComponent from "components/Modal/AddNewTool";
import UIContainer from "components/UI/Container/Container";
import 'styles/Global.css'

const Home = () => {
    const [tools, setTools] = useState([]);
    const [search, setSearch] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [addTool, setAddTool] = useState(false);


    useEffect(() => {
        handleSearch(search, checkbox)
    }, [search, checkbox]);

    const handleCheckBox = () => {
        setCheckbox(!checkbox)
    }

    const handleToggleAddTool = () => {
        setAddTool(!addTool)
    }

    const handleSearch = (search, checkbox) => {
        let endpoint = '';
        if (search !== '') {
            endpoint += checkbox ? '?tags_like=' : '?q=';
            endpoint += search;
        }

        api.get(endpoint)
            .then(response =>
                setTools(response.data)
            )
    }

    const handleRemoveCard = value => {
        api.delete(`/${value}`)
            .then(() => handleSearch(search, checkbox))
    }

    const handleAddCard = tool => {
        api.post('', tool)
            .then(() => {
                handleSearch(search, checkbox);
                handleToggleAddTool();
            })
    }

    return (
        <div>
            <UIContainer>
                <div className="tools-search">
                    <h1 className="tools-search__title">
                        VUTTR
                    </h1>
                    <h2 className="tools-search__subtitle">
                        Very Useful Tools to Remember
                    </h2>

                    <section className="tools-search__list-add">
                        <input className="tools-search__input"
                            type="search"
                            placeholder="Search"
                            value={search}
                            onChange={event => setSearch(event.target.value)} />
                        <input type="checkbox" value={checkbox} onChange={handleCheckBox} /><label>search in tags only</label>

                        <button
                            className="tools-search__button"
                            onClick={handleToggleAddTool}>
                            + Add
                        </button>
                    </section>

                    <AddNewToolComponent isOpen={addTool} requestClose={handleToggleAddTool} submitTool={handleAddCard} />

                    {tools.map(tool => (
                        <CardComponent toolInfo={tool} removeCard={handleRemoveCard} />
                    ))}
                </div>
            </UIContainer>
        </div>
    )
};

export default Home;