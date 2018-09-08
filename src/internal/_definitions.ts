export enum TYPES {
  NUMBER = 'Number',
  OBJECT = 'Object',
  STRING = 'String',
  NULL = 'Null',
  UNDEFINED = 'Undefined',
  ARRAY = 'Array',
  BOOLEAN = 'Boolean',
  FUNCTION = 'Function',
}

export interface Primitive {
  allowNull: boolean;
  allowUndefined: boolean;
  shouldPass: ((value) => boolean)[];
}
