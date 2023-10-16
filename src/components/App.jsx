import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "redux/store";

export const App = () => {

  const dispatch = useDispatch()
  const defaultValue = useSelector(state => state.counterValue);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap:10,
      }}
    >
      React homework template
      <h1>Learning REDUX TOOLKIT</h1>
      <button type="button"
              onClick={()=>dispatch(increment(1))}
              style={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
                flexDirection: 'column',
        }}>BUTTON+</button>
      <button type="button"
              onClick={()=>dispatch(decrement(1))}
              style={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
                flexDirection: 'column',
      }}>BUTTON-</button>
      <p>Number:</p>
      <span>
        {defaultValue}
      </span>
    </div>
  );
};
