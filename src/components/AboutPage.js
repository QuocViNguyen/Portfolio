import * as React from 'react';
import { Box, Card, CardHeader } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@material-ui/core';
import GitHub from '../imgs/GitHub.png';
import LinkedIn from '../imgs/LinkedInLg.png';
import Itchio from '../imgs/itchio.svg';
import CVicon from '../imgs/cv.png';
import CV from '../documents/Resume.pdf';

function AboutPage() {
    return (
        <Box className='h-auto w-screen bg-gray-50'>
            <Box className='flex-col'>
                <p className='text-center text-2xl font-bold pt-8 pb-8'>Welcome to my portfolio</p>
                <Card className='w-8/12 ml-20 sm:ml-72 rounded-lg'>
                    <CardHeader title=''
                        className='text-center text-2xl font-bold pt-10 bg-gray-300 w-12 rounded-sm'
                        avatar={<Avatar sx={{ bgcolor: 'black', width: 20, height: 20, }} aria-label="recipe">X</Avatar>}>
                    </CardHeader>
                    <Divider />
                    <br />

                    <p className='ml-8 sm:ml-64 w-9/12 text-sm sm:text-lg'>
                        I am Jarvis Nguyen, a soon-to-be graduated Computer Science student. I am flattered that you take some
                        to look at my portfolio. Currently I am working on a MERN project and also maintain a Xamarin Project
                        using previous experience from Flutter & Android Studio Projects.
                        <br /><br />
                        I am actively looking for an open junior position in Software & Web Development. My projects and work
                        experiences below is the proof that I am a quality choice if you are looking for one.
                    </p>
                </Card>
                <Box className='flex socialpages justify-center space-x-10 py-6'>
                    <a href='https://github.com/QuocViNguyen' target="_blank" rel="noreferrer">
                        <Avatar alt="GitHub" src={GitHub} className='w-16 h-auto hover:bg-gray-300' variant='rounded' sx={{ width: 52, height: 52 }}/>
                    </a>
                    <a href='https://www.linkedin.com/in/quoc-nguyen-57064b194/' target="_blank" rel="noreferrer">
                        <Avatar alt="LinkedIn" src={LinkedIn} className='w-16 h-auto hover:bg-gray-300' variant='rounded' sx={{ width: 52, height: 52 }}/>
                    </a>
                    <a href='https://itch.io/c/1870755/charlesivnguyen4s-collection' target="_blank" rel="noreferrer">
                        <Avatar alt="Itch.io" src={Itchio} className='w-16 h-auto hover:bg-gray-300' variant='rounded' sx={{ width: 52, height: 52 }}/>
                    </a>
                    <a href={CV} target="_blank" rel="noreferrer">
                        <Avatar alt="My Resume" src={CVicon} className='w-16 h-auto hover:bg-gray-300' variant='rounded' sx={{ width: 52, height: 52 }}/>
                    </a>
                </Box>
            </Box>
        </Box>
    );
}

export default AboutPage;