import { useState } from 'react';

export function useReducer<State, Action>(
    reducer: (state: State, action: Action) => State,
    initialState: State
) {
  const [state, setState] = useState(initialState);

    function dispatch(action: Action) {
      setState((currentState) => {
        return reducer(currentState, action);
      });
    }

  return [state, dispatch] as const;
}
