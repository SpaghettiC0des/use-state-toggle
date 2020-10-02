export type TruthyOrFalsy<T, F> = {
  truthy: T;
  falsy: F;
};

export type StateToggleTuple<S> = [S, () => void];
