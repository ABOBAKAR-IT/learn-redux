import { useSelector } from "react-redux";
export default function Counter(props) {
  const state = useSelector((state) => state);
  let count;
  switch (props.type) {
    case 0:
      count = state.count;
      break;
    case 1:
      count = state.count1;
      break;
    case 2:
      count = state.count2;
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <h2>{count}</h2>
    </div>
  );
}
