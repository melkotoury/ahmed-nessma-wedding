import * as React from 'react';
import type * as types from 'types';

import MuiBox from '@mui/material/Box';

import MuiGrid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';
import { Button, TextField, TextareaAutosize } from '@mui/material';
import { title } from 'process';

export type Props = types.FormSection & types.StackbitFieldPath;

export const FormSection: React.FC<Props> = (props) => {
    const { title, subtitle, items = [], 'data-sb-field-path': fieldPath } = props;
    return (
        <MuiBox sx={{ py: { xs: 6, sm: 10 } }} data-sb-field-path={fieldPath}>
            {title && (
                <MuiTypography component="h2" variant="h2" align="center" color="text.primary" data-sb-field-path=".title">
                    {title}
                </MuiTypography>
            )}
            {subtitle && (
                <MuiTypography component="p" variant="h5" align="center" color="text.primary" sx={{ ...(!!title && { mt: 1 }) }} data-sb-field-path=".subtitle">
                    {subtitle}
                </MuiTypography>
            )}
            {items.length > 0 && (
                <MuiGrid container spacing={4} sx={{ ...(!!(title || subtitle) && { pt: 6 }) }} data-sb-field-path=".items">
                    {items.map((item, index) => (
                        <FormSectionItem key={index} {...item} titleTag={title ? 'h3' : 'h2'} data-sb-field-path={`.${index}`} />
                    ))}
                </MuiGrid>
            )}
        </MuiBox>
    );
};

const FormSectionItem: React.FC<types.Form & types.StackbitFieldPath & { titleTag?: 'h3' | 'h2' }> = (props) => {
    const { name, message, file, actions = [], titleTag = 'h3', 'data-sb-field-path': fieldPath } = props;
    return (
        <form name={title} method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value={title} />
            <TextField label="Name" name="name" fullWidth />
            <TextareaAutosize maxRows={4} aria-label="maximum height" placeholder="Write your message here" />
            <input type="file" name="file" accept=".pdf,.doc,.docx" />
            <Button type="submit" variant="contained" color="primary">
                Share Your Memory
            </Button>
        </form>
    );
};
