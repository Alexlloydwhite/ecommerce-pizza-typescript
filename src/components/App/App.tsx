import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/_rootReducer";

import Hero from '../Hero/Hero';

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
      <Hero />
    </div>
  );
}
