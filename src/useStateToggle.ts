import {useState, useCallback} from 'react';
import {StateToggleTuple, TruthyOrFalsy} from './types';

/**
 * Toggle boolean state or custom truthy/falsy state
 * @param initialState boolean or truthy/falsy value from `config`
 * @param config custom truthy/falsy values
 * 
 * Sample config
 * 
 * `{ truthy: 'yes', falsy: 'no'}`
 */
export const useStateToggle = <S, T, F>(
  initialState: S,
  config?: TruthyOrFalsy<T, F>,
) => {
  const [state, setState] = useState(initialState);

  const flip = useCallback(
    (prevState) => {
      if (config) {
        if (Object.keys(config).length < 2) {
          throw new Error(
            'useStateToggle: Set the `truthy` and `falsy` values.',
          );
        }

        const {truthy, falsy} = config;
        return prevState === truthy ? falsy : truthy;
      }

      return !prevState;
    },
    [config],
  );

  // @ts-ignore for now
  const toggleState = useCallback(() => setState(flip), [flip, setState]);

  return [state, toggleState] as StateToggleTuple<S>;
};