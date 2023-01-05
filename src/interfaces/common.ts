export type TObjWithStringValues = {
  [prop: string]: string;
};

export type TObjWithStringOrNumValues = {
  [prop: string]: string | number;
};

export type VoidCallbackType<T> = (data: T) => void;
