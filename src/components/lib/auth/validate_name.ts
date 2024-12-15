import { isEmpty, isNumeric } from "validator"

// function to validate user name
const validateName = (name: string, msg: string) => {
    if (isEmpty(name)) {
        return { error: msg }
    }
    else if (isNumeric(name)) {
        return { error: 'Enter only alphabets!' }
    }
    else {
        return { error: '' }
    }
}

export default validateName