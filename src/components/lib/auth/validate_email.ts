import { isEmail, isEmpty } from "validator"

// function to validate user email
const validateEmail = (email: string) => {
    if (isEmpty(email)) {
        return { error: "What's your email address!" }
    }
    else if (!isEmail(email)) {
        return { error:'Enter a valid email address!' }
    }
    else {
        return { error: '' }
    }
}

export default validateEmail