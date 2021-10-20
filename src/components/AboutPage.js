import * as React from 'react';
import { Box } from '@material-ui/core';


function AboutPage() {
    return (
        <Box className='h-96 w-screen bg-yellow-100'>
            <Box className='flex-col'>
                <p className='text-center text-2xl font-bold pt-10'>Welcome to my portfolio</p>
                <br/>
                <p className='ml-10 sm:ml-96 w-7/12 mx-8 text-sm sm:text-lg '>
                    I am Jarvis Nguyen, a soon-to-be graduated Computer Science student. I am flattered that you take some
                    to look at my portfolio. Currently I am working on a MERN project and also maintain a Xamarin Project 
                    using previous experience from Flutter & Android Studio Projects.
                <br/><br/>
                    I am actively looking for an open junior position in Software & Web Development. My projects and work experiences below
                    is the proof that I am a quality choice if you are looking for one.
                </p>
                <Box className=''>
                    
                </Box>
            </Box>
        </Box>
    );
}

export default AboutPage;