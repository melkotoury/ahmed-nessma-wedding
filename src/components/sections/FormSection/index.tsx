// components/FormSection.tsx

import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    fileInput: {
        display: 'none'
    }
}));

interface FormData {
    name: string;
    message: string;
    file: File | null;
}

const FormSection: React.FC = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        message: '',
        file: null
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFormData((prevData) => ({ ...prevData, file }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission (e.g., send data to Netlify or your server)
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} data-sb-field-path="components/FormSection" netlify>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={classes.fileInput}
                id="file-upload"
                data-sb-field-path="components/FormSection.fileInput"
            />
            <label htmlFor="file-upload" data-sb-field-path="components/FormSection.uploadLabel">
                <Button variant="contained" component="span" startIcon={<CloudUploadIcon />} data-sb-field-path="components/FormSection.uploadButton">
                    Upload File
                </Button>
            </label>
            <TextareaAutosize
                minRows={4}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                fullWidth
                required
                data-sb-field-path="components/FormSection.messageTextarea"
            />
            <Button type="submit" variant="contained" color="primary" data-sb-field-path="components/FormSection.submitButton">
                Share your memory
            </Button>
        </form>
    );
};

export default FormSection;
