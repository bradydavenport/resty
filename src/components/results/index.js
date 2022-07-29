import JSONPretty from "react-json-pretty";
import 'react-json-pretty/themes/monikai.css';

const Results = ({ data, count }) => {

  return (
    <section>
      Results: 
      <p>{count} call(s)</p>
      {data && <JSONPretty id='json-pretty' data-testid="test-results" data={JSON.stringify(data)}></JSONPretty>}
    </section>
  );
};

// `props.data ? JSON.stringify(props.data, undefined, 2) : null`
export default Results;
