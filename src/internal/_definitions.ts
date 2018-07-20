export enum TYPES {
  NUMBER = 'Number',
  OBJECT = 'Object',
  STRING = 'String',
  NULL = 'Null',
  UNDEFINED = 'Undefined',
  ARRAY = 'Array',
  BOOLEAN = 'Boolean',
}

export interface Primitive {
  allowNull: boolean;
  allowUndefined: boolean;
  shouldPass: ((value) => boolean)[];
}
