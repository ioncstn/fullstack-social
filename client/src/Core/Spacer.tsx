import { SxProps } from '@mui/system';
import { useTheme, Box, Theme } from '@mui/material';
import React from 'react';

interface Props {
    height: number;
    width: number;
    component: React.ElementType;
    sx?: SxProps<Theme>;
}

const Spacer = (props: Props) => {
    const theme = useTheme();

    return (
        <Box
            component={props.component}
            sx={{ height: theme.spacing(props.height), width: theme.spacing(props.width), ...props.sx }}
        />
    );
};

Spacer.defaultProps = {
    height: 1,
    width: 0,
    component: 'div',
};

export default Spacer;
