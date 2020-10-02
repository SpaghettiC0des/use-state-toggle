export type InitialState<T> = boolean | T;
export type StateToggleTuple<T> = [InitialState<T>, () => void];
