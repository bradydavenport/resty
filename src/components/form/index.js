import { React, useState } from 'react';

import './form.scss';

const Form = (props) => {

  const [ method, setMethod ] = useState('GET');
  const [ url, setUrl ] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: {method},
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  };

  const handleMethodSelect = e => {
    console.log(`${e.target.id} clicked`);
    let newMethod = e.target.id;
    setMethod(newMethod);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: {url}</span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button id="GET" onClick={handleMethodSelect}>GET</button>
          <button id="POST"onClick={handleMethodSelect}>POST</button>
          <button id="PUT"onClick={handleMethodSelect}>PUT</button>
          <button id="DELETE" onClick={handleMethodSelect}>DELETE</button>
        </label>
      </form>
    </>
  );
};

export default Form;
