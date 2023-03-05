export type EmptyFunction<T extends Array<unknown> = []> = {(): () => void, thatReturns: {
    "null": (...args: T) => null;
    "string": (...args: T) => string;
    "number": (...args: T) => number;
    "boolean": (...args: T) => false;
}};

const emptyFunction: EmptyFunction = <EmptyFunction>function() {
    return;
};

emptyFunction.thatReturns = {
    "null": (..._) => null,
    "string": (..._) => '',
    "number": (..._) => 0,
    "boolean": (..._) => false,
}

export default emptyFunction;