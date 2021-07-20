import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_PIZZA'
    });
  })
  return (
    <div>
      <h5>Pizza Time!</h5>
    </div>
  );
}
