import * as React from 'react';
import { LayoutProps } from 'react-admin';
import AppBar from './AppBar'
import Menu from './Menu'
import Box from '@mui/material/Box';


export default (props: LayoutProps) => {
    const {
        children,
        title,
      } = props

    return (  
        <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                minHeight: '100vh',
                justifyContent: 'flex-start',
                backgroundColor: '#E2E8D9'
            }}>
            <Menu />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <AppBar title="Coucou" />
                <Box sx={{
                    padding: 1,
                }}>
                        {children}
                </Box>
            </Box>
        </Box>
      );
};
