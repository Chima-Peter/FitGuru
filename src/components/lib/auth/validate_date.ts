import { isDate } from "validator"

// function to validate date
const validateDate = (date: string) => {
    if (!isDate(date)) {
        return { error: 'Pick a valid date!' }
    }
    else if (new Date(date) < new Date()) {
        return { error: `You can't start in the past lol` }
    }
    else {
        return { error: '' }
    }
}

export default validateDate