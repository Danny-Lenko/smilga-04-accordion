import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const allQuestions = data.map(question => (
    <SingleQuestion key={question.id} {...question} />
  ))

  return (
    <main>
      <section className="container">
        <h3>question and answers about login</h3>
        <div>{allQuestions}</div>
      </section>
    </main>
  )
}

export default App;
