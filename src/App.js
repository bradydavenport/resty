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
    this.setState({ data, requestParams });
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {this.state.requestParams.method}</div>
      <div>URL: {this.state.requestParams.url}</div>
      <Form handleApiCall={this.callApi} />
      <Results data={this.state.data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
