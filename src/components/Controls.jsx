import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
    dispatch(counterActions.add({ num: inputElement.current.value }));
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button "
          className="btn btn-primary my_button"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button "
          className="btn btn-success my_button"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button "
          className="btn btn-warning my_button"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          ref={inputElement}
          placeholder="Enter Number"
          className="number-input"
        />

        <button
          type="button"
          className="btn btn-info my_button"
          onClick={handleAdd}
        >
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger my_button"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
