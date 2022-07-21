import { useState } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = props => {

  const [ data, setData ] = useState(null);
  const [ requestParams, setRequestParams ] = useState({});
  const [ count, setCount ] = useState(0);

  const callApi = (requestParams) => {
    setData(data);
    setRequestParams(requestParams);
  };

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results
      data={data}
      count={count} />
      <Footer />
    </>
  );
}

export default App;
