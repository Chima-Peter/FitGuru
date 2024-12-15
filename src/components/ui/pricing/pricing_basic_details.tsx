import { useState } from "react"
import Input from "./input_basic"
import PricingStage from "./pricing_stage"
import validateEmail from "../../lib/auth/validate_email"
import validateName from "../../lib/auth/validate_name"
import validatePhone from "../../lib/auth/validate_phone"
import PricingButton from "./pricing_button"
import { FiFileText } from "react-icons/fi";
import usePopUpContext from "../../hooks/usePopUpHook"

const PricingBasicDetails = () => {
    // state for managing basic details
    const [basicDetails, setBasicDetails] = useState({
        name: '',
        phone: '',
        email: '',
        age: '',
        height: '',
        weight: '',
        gender: '',
    })

    // state for managing the error for basic details
    const [basicDetailsError, setBasicDetailsError] = useState({
        nameError: '',
        phoneError: '',
        emailError: '',
        genderError: true,
        ageError: true,
        heightError: true,
        weightError: true,
    })

    const [_file, setFile] = useState<File | null>(null); // state for image collection
    const [fileError, setFileError] = useState('') // state for image error

    const { setStep } = usePopUpContext()

    // loading animation for form submit button 
    const [isLoading, setIsLoading] = useState(false)

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 2MB
    const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif"];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]

        if (selectedFile) {
            // Check file type
            if (!ALLOWED_TYPES.includes(selectedFile.type)) {
                setFileError("Only images (JPEG, PNG, GIF) are allowed.");
                return;
            }

            // Check file size
            if (selectedFile.size > MAX_FILE_SIZE) {
                setFileError("File size must be less than 5MB.");
                return;
            }

            setFileError(""); // Clear errors
            setFile(selectedFile)
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // update value of input as user types
        setBasicDetails({ ...basicDetails, [e.target.name]: e.target.value })
        setBasicDetailsError({...basicDetailsError, [e.target.name + 'Error']: '' }) // clear error message when input is changed
    }

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // update selected option of dropdown
        setBasicDetails({...basicDetails, gender: e.target.value })
        setBasicDetailsError({...basicDetailsError, genderError: true }) // clear error message when input is changed
    }

    // function to validate user input and proceed to nest stage
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true) // start loading animation while making request

        // load animation first
        setTimeout(async () => {
            // collect all user input validation result in object
            const validateInput = {
                name: validateName(basicDetails.name, 'What is your name?'),
                email: validateEmail(basicDetails.email),
                phone: validatePhone(basicDetails.phone),
                gender: basicDetails.gender === '' ? false : true,
                age: basicDetails.age.length <= 0 ? false : true,
                height: basicDetails.height.length <= 0 ? false : true,
                weight: basicDetails.weight.length <= 0 ? false :true,
            }

            // if they all return false then the user input is valid
            if ((validateInput.name.error === '') && (validateInput.phone.error === '') && (validateInput.email.error === '') && validateInput.gender, validateInput.age, validateInput.height, validateInput.weight) {
                // proceed to next stage
                setStep(1)
            } else {
                 // set the error message as user input is invalid.
                setBasicDetailsError({
                    ...basicDetailsError,
                    nameError: validateInput.name.error,
                    emailError: validateInput.email.error,
                    phoneError: validateInput.phone.error,
                    genderError: validateInput.gender,
                    ageError: validateInput.age,
                    heightError: validateInput.height,
                    weightError: validateInput.weight
                })
                setIsLoading(false) // stop loading animation when error occurs
            }
        }, 2000)
    }
  return (
    <section className="flex flex-col gap-6">
        <PricingStage stage1={true} stage2={false} stage3={false} />
        <div className="flex flex-col gap-4 xl:gap-6">
            <h6 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                Basic Details
            </h6>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-2 xl:gap-4">
                <section className="w-[100%] flex gap-4 md:flex-row flex-col md:gap-0 md:justify-between">
                    <div className="flex flex-col gap-2">
                        <Input type="text" value={basicDetails.name} name="name" placeholder="Enter your name" error={basicDetailsError.nameError === '' ? false : true} errorMessage={basicDetailsError.nameError} onInputChange={onInputChange} widthDiff={true} />
                        <Input type="number" value={basicDetails.phone} name="phone" placeholder="Enter your phone no" error={basicDetailsError.phoneError === '' ? false : true} errorMessage={basicDetailsError.phoneError} onInputChange={onInputChange} widthDiff={true} />
                        <Input type="email" value={basicDetails.email} name="email" placeholder="Enter your email" error={basicDetailsError.emailError === '' ? false : true} errorMessage={basicDetailsError.emailError} onInputChange={onInputChange} widthDiff={true} />
                    </div>
                    <label htmlFor="file" className="border py-4 h-[155px] w-[100%] border-dashed cursor-pointer border-gray-400 md:w-[260px] xl:w-[300px] 2xl:w-[350px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <FiFileText className="w-8 h-8 xl:w-12 xl:h-12 p-2 xl:p-3 bg-gray-200 rounded-full" />
                        <input type="file" onChange={handleFileChange} name="file" id="file" className="hidden" />
                        <p className="text-[15px] font-light xl:text-[17px]">
                            Drop your file here or browse
                        </p>
                        <p className="text-[10px] opacity-70 xl:text-sm">
                            Maximum file upload size: 05 MB
                        </p>
                        <p className="text-xs text-red-500 font-medium">
                            {fileError}
                        </p>
                    </label>
                </section>
                <div className="w-[100%] flex justify-between gap-4 md:gap-0 flex-wrap">
                    <select onChange={onSelectChange} value={basicDetails.gender} name="gender" id="gender" className={`text-[14px] w-[100%] md:w-[23%] font-normal opacity-80 text-black px-4 h-[42px] border cursor-pointer bg-gray-100 rounded-md focus:shadow-xl focus:border-0 focus:outline-none shadow-lg appearance-none ${!basicDetailsError.genderError ? 'border-2 border-red-500' : 'border-gray-200'}`}>
                        <option value="">
                            Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <Input type="number" value={basicDetails.age} name="age" placeholder="Enter age" error={!basicDetailsError.ageError} errorMessage="" onInputChange={onInputChange} widthDiff={false} />
                    <Input type="number" value={basicDetails.height} name="height" placeholder="Enter height" error={!basicDetailsError.heightError} errorMessage="" onInputChange={onInputChange} widthDiff={false} />
                    <Input type="number" value={basicDetails.weight} name="weight" placeholder="Enter weight" error={!basicDetailsError.weightError} errorMessage="" onInputChange={onInputChange} widthDiff={false} />
                </div>
                <PricingButton loading={isLoading} />
            </form>
        </div>
    </section>
  )
}

export default PricingBasicDetails