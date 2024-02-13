export type ObjectValues<T> = T[keyof T];

export type StringMap<T> = {
  [key: string]: T;
};
