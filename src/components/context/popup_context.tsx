import React, { createContext, useState, ReactNode } from "react";

// Define types for the context state
export interface PopUpContextType {
    popup: boolean;
    setPopUp: (popup: boolean) => void;
    step: number,
    setStep: (step: number) => void,
    review: boolean;
    setReview: (review: boolean) => void
    reviewStep: number,
    setReviewStep: (step: number) => void,
}

// Create the context with a default value of undefined
export const PopUpContext = createContext<PopUpContextType | undefined>(undefined);


// Create the provider component
const PopUpProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [popup, setPopUp] = useState(false); 
    // this state controls when the payment popup would open or close.

    const [step, setStep] = useState(0)
    // state that controls which stage we are in filling the popup

    const [review, setReview] = useState(false)
     // this state controls when the review popup would open or close.

     const [reviewStep, setReviewStep] = useState(0)
    // state that controls which stage we are in filling the review popup

    const value = { popup, setPopUp, step, setStep, review, setReview, reviewStep, setReviewStep };

    return <PopUpContext.Provider value={value}>{children}</PopUpContext.Provider>;
};

export default PopUpProvider
