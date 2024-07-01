import React from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const MyForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form method="post" name="MemoryForm" data-netlify="true" onSubmit={handleSubmit}>
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                name="name" // Add field name for Netlify
            />
            <TextareaAutosize
                id="message"
                placeholder="Message"
                minRows={3}
                maxRows={6}
                style={{ width: '100%', padding: '8px', resize: 'vertical' }}
                required
                name="message" // Add field name for Netlify
            />
            <input
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png, .pdf"
                required
                name="file" // Add field name for Netlify
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Memory
            </Button>
        </form>
    );
};

export default MyForm;
