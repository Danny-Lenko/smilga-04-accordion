import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [fullText, setFullText] = useState(false)

  return(
    <article className="question">
      <header>
        <h4>{title}</h4>
        <div 
          className="btn"
          onClick={ () => setFullText(!fullText) }
        >
          { fullText ? <AiOutlineMinus /> : <AiOutlinePlus /> }
        </div>
      </header>
      { fullText && <p>{info}</p> }
    </article>
  )
};

export default Question;
