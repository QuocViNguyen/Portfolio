//#region import
import * as React from 'react';
import { Box } from '@material-ui/core';
//#endregion


function Footer() {
    return (
        <Box className='flex-row bg-gray-800 justify-center'>
            <Box className='text-gray-100 text-center font-bold sm:text-xl pt-4'>CONTACTS</Box>
            <br/>
            <Box className='text-gray-100 text-center text-sm sm:text-lg'>Address: 107-110 Adamar Road, Winnipeg, MB, CA</Box>
            <Box className='text-gray-100 text-center text-sm sm:text-lg'>Email: quocvinguyen.official@gmail.com</Box>
            <Box className='text-gray-100 text-center text-sm sm:text-lg'>Phone: (204)-291-9411</Box><br/>
            <Box className='text-gray-100 text-center text-xs sm:text-sm'>Copyright © Jarvis Nguyen</Box>
            <br/>
        </Box>
      );
}

export default Footer;