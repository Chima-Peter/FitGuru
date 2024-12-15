/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { PopUpContext } from "../context/popup_context";

// Create a custom hook for accessing the context
const usePopUpContext = () => {
    const context = useContext(PopUpContext);
    if (!context) {
        throw new Error("usePopUpContext must be used within a PopUpProvider");
    }
    return context;
};

export default usePopUpContext