import { IError } from './_errorFactory';

/*################################################################
  Build results
  ################################################################*/
export interface IResults extends IError {
  __isRommel: boolean;
  isValid: boolean;
  errors?: IError[];
}

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default (isValid: boolean) => ({
  __isRommel: true,
  isValid,
});
