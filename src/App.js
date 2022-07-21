import { useEffect, useState } from 'react';
import axios from 'axios';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = props => {

  const [ data, setData ] = useState(null);
  const [ requestParams, setRequestParams ] = useState({});
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    if (requestParams) {
      callApi();
    }
  }, [requestParams]);

  const callApi = async () => {
    const apiUrl = requestParams.url;
    const response = await axios.get(apiUrl);
    const { data } = response;
    setData(data);
  };

  const counter = () => {
    setCount(count + 1);
  }

  const updateRequestParams = (arg) => {
    setRequestParams(arg);
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form
      counter={counter}
      updateRequestParams={updateRequestParams} />
      <Results
      data={data}
      count={count} />
      <Footer />
    </>
  );
}

export default App;
