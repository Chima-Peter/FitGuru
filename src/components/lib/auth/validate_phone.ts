import { isEmpty, isMobilePhone } from "validator"

// function to validate phone no and return the result
const validatePhone = (phone: string) => {
    if (isEmpty(phone)) {
        return{ error: "What's your phone no!" }
    }
    else if (!isMobilePhone(phone)) {
        return { error:'Enter a valid phone no!' }
    }
    else {
        return { error: '' }
    }
}

export default validatePhone