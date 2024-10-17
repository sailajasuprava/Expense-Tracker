import { useGlobal } from "../context/GlobalContext";

function History() {
  const { state, dispatch } = useGlobal();
  function handleDelete(item) {
    dispatch({ type: "remove", payload: item.text });
  }

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {state.map((item, i) => (
          <li key={i} className="minus">
            {item.text} <span>{item.amount}</span>
            <button className="delete-btn" onClick={() => handleDelete(item)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default History;
