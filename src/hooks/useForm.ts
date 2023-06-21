import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {
    const [formData, setFormData] = useState(initState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name as keyof T]: value,
        });
    };

    const resetForm = () => {
        setFormData({ ...initState });
    };

    return {
        formData,
        setFormData,
        handleInputChange,
        resetForm,
    };
};
