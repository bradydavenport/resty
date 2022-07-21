import JSONPretty from "react-json-pretty";

const Results = (props) => {

  return (
    <section>
      <p>{props.count} call(s)</p>
      <JSONPretty data-testid="test-results">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</JSONPretty>
    </section>
  );
};

export default Results;
