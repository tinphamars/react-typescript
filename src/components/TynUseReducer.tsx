import * as React from "react";
import CountDeg from "./CountDeg";

interface ITynUseReducerProps {}

const initialState: number = 0;

const UP_ACTION = "UP_ACTOIN";
const DOW_ACTION = "DOW_ACTION";

const reducer = (state: typeof initialState, action: string): number => {
  switch (action) {
    case UP_ACTION:
      return state + 1;

    case DOW_ACTION:
      return state - 1;
    default:
      return state;
  }
};

const TynUseReducer: React.FunctionComponent<ITynUseReducerProps> = (props) => {
  const [counter, dispatchCounter] = React.useReducer(reducer, initialState);

  const dispatchAActionToReducer = (): void => {
    dispatchCounter(UP_ACTION);
  };

  const dispatchAcDowActionToReducer = (): void => {
    dispatchCounter(DOW_ACTION);
  };

  return (
    <>
      <h1>User Reducer: {counter}</h1>
      <div>
        <button onClick={dispatchAActionToReducer}>Dispatch up action </button>
      </div>
      <div>
        <button onClick={dispatchAcDowActionToReducer}>
          Dispatch dow action{" "}
        </button>
      </div>
      <div>
        <CountDeg />
      </div>
    </>
  );
};

export default TynUseReducer;
