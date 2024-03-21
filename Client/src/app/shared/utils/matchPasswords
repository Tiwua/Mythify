import { ValidatorFn } from "@angular/forms";

export function matchPasswords(password: string, confirmPassword: string): ValidatorFn {
    return (control) => {
        const passwordString = control.get(password);
        const confirmPasswordString = control.get(confirmPassword);

        const areMatching = passwordString?.value == confirmPasswordString?.value;

        return areMatching ? null : { matchPasswords: true};
    };
}