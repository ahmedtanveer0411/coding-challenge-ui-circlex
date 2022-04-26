import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import { validationSchema } from "../validation/ClaimFormValidation";


export default function useClaim() {
    const [dateObj, setDateObj] = useState(new Date());
    const [stateObj, setStateObj] = useState();
    const { formData, setFormData } = useContext(AppContext);

    const navigate = useNavigate();
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            ...formData,
        },
        validationSchema,
        onSubmit: (values) => {
            setFormData({ ...values, date: dateObj, state: stateObj });
            navigate('/review');
        },
    });

    useEffect(() => {
        setDateObj(formData?.date);
        setStateObj({ value: formData?.stateObj, name: 'state' });
    }, [formData?.date, formData?.stateObj]);

    const onChange = (date) => {
        setDateObj(date);
    }

    const onSelect = (event) => {
        setStateObj(event.target.value);
    }

    return {
        handleSubmit,
        handleChange,
        values, 
        errors,
        touched,
        onChange, 
        onSelect,
        formData,
        stateObj,
        dateObj,
        setStateObj,
        setDateObj,
    }
}