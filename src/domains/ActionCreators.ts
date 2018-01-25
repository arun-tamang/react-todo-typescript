import TypeKeys from './TypeKeys';

export interface Action<T> {
  type: T;
}

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

export interface ActionWithError<T, P> extends ActionWithPayload<T, P> {
  error: true;
}

export type ActionCategories<T, P> = Action<T> | ActionWithPayload<T, P> | ActionWithError<T, P>;

export function getAction<T extends string, P>(type: T, payload?: P): ActionCategories<T, P> {
  if (payload) {
    return { type, payload };
  }
  return { type };
}

export function createAction(type: TypeKeys) {
  return (...args: any[]) => {
    // const obj = {};
    for (const key of args) {
      console.log('key', key);
    }
    return getAction(type, {...args});
  };
}