import React from 'react';

function Card(props){
    return (
        <div className='Card'>
            <button onClick={() => props.onDelete(props.id)} type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

Card.propTypes = {
    onClickDelete: () => {}
  }

export default Card;