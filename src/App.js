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

  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    // this.setState({ data, requestParams });
  };

  return (
    <>
      <Header />
      <div>Request Method: {props.method}</div>
      <div>URL: {props.url}</div>
      <Form handleApiCall={callApi} />
      <Results />
      <Footer />
    </>
  );
}

export default App;
