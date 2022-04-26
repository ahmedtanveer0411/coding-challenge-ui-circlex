
import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: new Date(),
        loss: '',
        company: '',
        address: '',
        city: '',
        code: '',
        state: ''
    });
    return (
        <AppContext.Provider value={{ formData, setFormData }}>{children}</AppContext.Provider>
    )
}

export default AppProvider