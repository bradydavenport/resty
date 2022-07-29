import { React, useState } from 'react';

import './form.scss';

const Form = ({ updateRequestParams }) => {

  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [JSON, setJSON] = useState('');

  const apiUrl = url;
  const apiMethod = method;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    updateRequestParams(formData);
  };

  const handleMethodSelect = e => {
    let newMethod = e.target.id;
    setMethod(newMethod);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input id='formInput' name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
          {method === "POST" || method === "PUT" ? (
            <textarea
              id='JSON-input'
              name='JSON input'
              label='JSON input'
              value={JSON}
              onChange={(e) => setJSON(e.target.value)}
            ></textarea>
          ) : null}
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button id="GET" onClick={handleMethodSelect}>GET</button>
          <button id="POST" onClick={handleMethodSelect}>POST</button>
          <button id="PUT" onClick={handleMethodSelect}>PUT</button>
          <button id="DELETE" onClick={handleMethodSelect}>DELETE</button>
        </label>
      </form>
    </>
  );
};

export default Form;
