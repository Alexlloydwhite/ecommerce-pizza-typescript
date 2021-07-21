import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers/_rootReducer";

export default function App() {
  const dispatch = useDispatch();
  const listOfPizza = useSelector((state: RootState) => {
    return state.pizzas;
  });

  useEffect(() => {
    dispatch({
      type: 'FETCH_PIZZA'
    });
  }, [dispatch]);

  return (
    <div>
      <h5>Pizza Time!</h5>
      <pre>
        {JSON.stringify(listOfPizza, null, 2)}
      </pre>
    </div>
  );
}
