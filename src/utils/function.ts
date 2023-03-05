export type EmptyFunction = () => void;

export type EmptyFunctionThatReturns<T extends Array<unknown> = []> = {
  null: (...args: T) => null;
  string: (...args: T) => string;
  number: (...args: T) => number;
  boolean: (...args: T) => false;
};

export const emptyFunction: EmptyFunction = () => null;
export const emptyFunctionThatReturns = {
  null: (..._) => null,
  string: (..._) => "",
  number: (..._) => 0,
  boolean: (..._) => false,
};
