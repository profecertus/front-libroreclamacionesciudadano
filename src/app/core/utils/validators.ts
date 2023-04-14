import { FormControl } from '@angular/forms';

export const dateRangeValidator = (control: FormControl) => {
    let value = control.value;

    // console.log('fechaValidator', value);
    if (value && (!value[0] || !value[1])) {
      return {
        range: true,
      };
    }
    return null;
}

export const noWhitespaceValidator = (control: FormControl) => {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}
