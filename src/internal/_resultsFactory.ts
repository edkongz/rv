import { IError } from "./_errorFactory";

/*################################################################
  Build results
  ################################################################*/
export interface IResults extends IError {
  isRommel: boolean;
  isValid: boolean;
  errors?: IError[];
}

/*---------------------------------------------------------------
  Export
  ---------------------------------------------------------------*/
export default (isValid:boolean)=> ({
  // isRommel: true,
  // isValid
})
