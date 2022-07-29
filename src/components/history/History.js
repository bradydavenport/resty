import './history.scss';

const History = ({ url, updateRequestParams, idx }) => {

  const lastSearch = {
    url,
    method: "GET",
  }

  return (
    <section id="historySection">{idx + 1}
      <ul>
      <li>URL: {lastSearch.url}</li>
      <li>Method: {lastSearch.method}</li>
      </ul>
    </section>
  )
}

export default History;