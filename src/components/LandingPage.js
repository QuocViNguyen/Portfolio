import * as React from 'react';
import { Box } from '@material-ui/core';
import Typical from 'react-typical';
import landingEmoji from '../imgs/landing-emoji.gif';
import GitHub from '../imgs/techIcons/gitcorner.png';
import Avatar from '@mui/material/Avatar';

function LandingPage(props) {
    return (
        <Box className='h-screen w-screen bg-blue-100'>
            <a href='https://github.com/QuocViNguyen/Portfolio' target="_blank" rel="noreferrer">
                <Avatar alt="GitHub" src={GitHub} className='w-24 h-auto' variant='rounded' sx={{ width: 84, height: 84 }} />
            </a>
            <Box className='flex items-center justify-center m-auto w-6/12 h-1/2 pt-96'>
                <Box className='flex-col w-full'>
                    {/* From width size small and larger, apply ml-80 */}
                    <div className='sm:ml-80'>
                        <img src={landingEmoji} alt="loading..." />
                        <p className='text-4xl font-bold'>JARVIS NGUYEN</p>
                        <p className='text-2xl -ml-16'> I AM A JUNIOR {' '}
                            <Typical
                                steps={['WEB DEVELOPER 🌐', 1600, 'MOBILE APP DEVELOPER 📱', 1600]}
                                loop={Infinity}
                                wrapper="text"
                            />
                        </p>
                    </div>
                </Box>
            </Box>
        </Box>
    );
}

export default LandingPage;