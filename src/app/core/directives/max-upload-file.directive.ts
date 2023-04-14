import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function maxUploadFileValidator(maxBits: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log('maxUploadFileValidator', control);
    const size = control.value ? control.value.size : 0;
    return size > maxBits
      ? { maxUploadFile: { size: size, maxBits: maxBits } }
      : null;
  };
}
