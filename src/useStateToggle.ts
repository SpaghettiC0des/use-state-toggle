import {useState, useCallback} from 'react';
import {InitialState, StateToggleTuple} from './types';

export const useToggleState = <T>(initialState: InitialState<T>) => {
  const [state, setState] = useState(initialState);

  const flip = useCallback((prevState: InitialState<T>) => !prevState, []);

  const toggleState = useCallback(() => setState(flip), [flip]);

  return [state, toggleState] as StateToggleTuple<T>;
};
