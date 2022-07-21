import JSONPretty from "react-json-pretty";
import 'react-json-pretty/themes/monikai.css';

const Results = (props) => {

  return (
    <section>
      <p>{props.count} call(s)</p>
      <JSONPretty id='json-pretty' data-testid="test-results" data={JSON.stringify(props.data)}></JSONPretty>
    </section>
  );
};

// `props.data ? JSON.stringify(props.data, undefined, 2) : null`
export default Results;
