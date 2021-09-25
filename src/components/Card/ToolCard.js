import React, { useState } from 'react';
import 'components/Card/ToolCard.css'

const CardComponent = ({ toolInfo, removeCard }) => {
    return (
        <div className="card">
            <header className="card__header">
                <a href={toolInfo.link} target="_blank" className="card__title">
                    {toolInfo.title}
                </a>
                <button className="card__button" onClick={() => removeCard(toolInfo.id)}>
                    X Remove
                </button>
            </header>
            <div className="card__info">
                <p>
                    {toolInfo.description}
                </p>

                {toolInfo.tags.map(tag => {
                    return <p className="card__tag">#{tag}</p>
                })}
            </div>
        </div>
    )
}

export default CardComponent;