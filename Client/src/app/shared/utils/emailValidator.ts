import { ValidatorFn } from "@angular/forms";


export function emailValidator(): ValidatorFn{
    const regExp = new RegExp(`[\\w-]+(?:\\.[\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}`);

    return (control) => {
        const isEmailInvalid = control.value === '' || regExp.test(control.value);
        
        console.log(isEmailInvalid, control.value);

        return isEmailInvalid ? null : { emailValidator: true };
    };
}