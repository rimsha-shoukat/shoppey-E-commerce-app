export function validateSignupFields({ form, setErrorMessage }) {
    if (form.name.trim() === "" || form.email.trim() === "" || form.password.trim() === "") {
        setErrorMessage("All fields are required.");
        return false;
    }
    if (form.name.trim().length < 3) {
        setErrorMessage("Name must be atleast 3 characters long.");
        return false;
    }
    if (form.password.trim().length < 8) {
        setErrorMessage("Your password must be atleast 8 characters.");
        return false;
    }
    if (!(/[a-z]/).test(form.password)) {
        setErrorMessage("Your password must contain atleast one lowercase letter.");
        return false;
    }
    if (!(/[A-Z]/).test(form.password)) {
        setErrorMessage("Your password must contain atleast one uppercase letter.");
        return false;
    }
    if (!(/[0-9]/).test(form.password)) {
        setErrorMessage("Your password must contain atleast one digit.");
        return false;
    }
    return true;
}

export function validateSigninFields({ form, setErrorMessage }) {
    if (form.email.trim() === "" || form.password.trim() === "") {
        setErrorMessage("All fields are required.");
        return false;
    }
    return true;
}