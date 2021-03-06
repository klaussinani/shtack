declare namespace stack {
  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    readonly size: number;
    clear(): this;
    duplicate(): this;
    forEach(fn: (x: T) => void): this;
    includes(value: T): boolean;
    isEmpty(): boolean;
    peek(): T | undefined;
    pop(): T | undefined;
    push(value: T): this;
    reverse(): this;
    rotateLeft(n: number): this;
    rotateRight(n: number): this;
    swap(): this;
    toArray(): T[];
  }
}

declare namespace shtack {
  export interface Stack<T = any> extends stack.Instance<T> {}
}

declare const shtack: {
  Stack: stack.Constructor;
};

export = shtack;
