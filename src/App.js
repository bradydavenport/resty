import { useEffect, useReducer } from 'react';
import axios from 'axios';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/Form';
import Results from './components/results';
import History from './components/history/History';

export const initialState = {
  data: null,
  count: 0,
  requestParams: '',
  searches: [],
}

export const restyReducer = (state, action) => {

  switch (action.type) {

    case 'DATA':
      return {
        ...state,
        data: action.payload,
      }

    case 'PARAMS':
      return {
        ...state,
        searches: [...state.searches, action.payload.url],
        count: state.count + 1,
        requestParams: action.payload
      }

    default:
      return state
  }
}

const App = () => {

  const [state, dispatch] = useReducer(restyReducer, initialState);

  useEffect(() => {
    if (state.requestParams) {
      callApi(state.requestParams.url);
    }
  }, [state.requestParams]);

  const callApi = async (url) => {
    const response = await axios.get(url);
    const { data } = response;
    dispatch({ type: 'DATA', payload: data })
  };

  const updateRequestParams = (a) => {
    dispatch({ type: "PARAMS", payload: a })
  }

  return (
    <>
      <Header />
      {state.searches.length > 0 && <h4>History</h4>}
      {state.searches.length > 0 &&
        state.searches.map((url, idx) => {
          return (
            <History key={idx} idx={idx} url={url} updateRequestParams={updateRequestParams} />
          );
        })}
      <Form
        updateRequestParams={updateRequestParams} />
      <Results
        data={state.data}
        count={state.count} />
      <Footer />
    </>
  );
}

export default App;
