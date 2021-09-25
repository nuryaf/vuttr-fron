import React, { useState } from 'react';
import 'components/Card/ToolCard.css'

const CardComponent = (props) => {
    return (
        <div className="card">
            <header className="card__header">
                <a href={props.toolInfo.link} target="_blank" className="card__title">
                    {props.toolInfo.title}
                </a>
                <button className="card__button" onClick={() => props.removeCard(props.toolInfo.id)}>
                    X Remove
                </button>
            </header>
            <div className="card__info">
                <p>
                    {props.toolInfo.description}
                </p>

                {props.toolInfo.tags.map(tag => {
                    return <p className="card__tag">#{tag}</p>
                })}
            </div>
        </div>
    )
}

export default CardComponent;