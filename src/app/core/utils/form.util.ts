import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

export const CHECK_INPUT = (
  formulario: FormGroup,
  input: string,
  type: string,
  errorType: string = '',
  isSubmited: boolean = false
): boolean => {
  if (!!errorType) {
    return (
      formulario.get(input)[type] !== undefined &&
      formulario.get(input)[type] &&
      (formulario.get(input).dirty ||
        formulario.get(input).touched ||
        isSubmited) &&
      formulario.get(input).errors !== null &&
      formulario.get(input).errors[errorType] !== undefined &&
      formulario.get(input).errors[errorType]
    );
  }
  return (
    formulario.get(input)[type] !== undefined &&
    formulario.get(input)[type] &&
    (formulario.get(input).dirty || formulario.get(input).touched || isSubmited)
  );
};

export const SET_HEADERS = (
  needReload: boolean = false,
  attachToken: boolean = false,
  delayRequest: boolean = false,
  showAlert: boolean = false,
  element: string = '',
  isPrivate: boolean = true
): HttpHeaders => {
  let headers = new HttpHeaders();
  if (needReload) headers = headers.set('needReload', 'true');
  if (attachToken) headers = headers.set('attachToken', 'true');
  if (delayRequest) headers = headers.set('delayRequest', 'true');
  if (showAlert) headers = headers.set('showAlert', 'true');
  if (!!element) headers = headers.set('setElement', element);
  if (!!element) headers = headers.set('setElement', element);
  if (isPrivate) headers = headers.set('isPrivate', 'true');
  return headers;
};

export const roundTo = (n: number, digits: number): number => {
  if (digits === undefined) digits = 0;
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  return Math.round(n) / multiplicator;
};

export const markGroupDirty = (formGroup: FormGroup) => {
  Object.keys(formGroup.controls).forEach((key) => {
    switch (true) {
      case formGroup.get(key) instanceof FormGroup:
        markGroupDirty(formGroup.get(key) as FormGroup);
        break;
      case formGroup.get(key) instanceof FormArray:
        markArrayDirty(formGroup.get(key) as FormArray);
        break;
      case formGroup.get(key) instanceof FormControl:
        markControlDirty(formGroup.get(key) as FormControl);
        break;
    }
  });
};

export const markArrayDirty = (formArray: FormArray) => {
  formArray.controls.forEach((control) => {
    switch (true) {
      case control instanceof FormGroup:
        markGroupDirty(control as FormGroup);
        break;
      case control instanceof FormArray:
        markArrayDirty(control as FormArray);
        break;
      case control instanceof FormControl:
        markControlDirty(control as FormControl);
        break;
    }
  });
};

export const markControlDirty = (formControl: FormControl) => {
  formControl.markAsDirty();
};
