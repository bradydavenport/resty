import { React, useState } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = props => {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }

  const [ data, setData ] = useState();

  const callApi = (requestParams) => {
    // mock output
    const apiData = {data};
    setData(apiData);
    // this.setState({ data, requestParams });
  };

  return (
    <>
      <Header />
      <div>Request Method: {props.method}</div>
      <div>URL: {props.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data}/>
      <Footer />
    </>
  );
}

export default App;
