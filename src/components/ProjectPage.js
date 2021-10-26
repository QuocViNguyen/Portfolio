//#region import
import * as React from 'react';
import { Box, Link } from '@material-ui/core';
import PrairieTruckWebsite from '../imgs/projects/PrairieTruckWebsite.png';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import payrollThumb from '../imgs/projects/payroll_thumb.jpg';
import tubtrunk from '../imgs/projects/tubtrunk.png';
import littleviet from '../imgs/projects/littleviet.png';
import FindOrDie from '../imgs/projects/FindOrDie.png';
import Abyssal from '../imgs/projects/Abyssal.png';

import GitHub from '../imgs/GitHub.png';
import LinkedIn from '../imgs/LinkedInLg.png';
import Itchio from '../imgs/itchio.svg';

//Payroll project's tech
import mySQL from '../imgs/techIcons/mysql.png';
import php from '../imgs/techIcons/php.png';
import xamarin from '../imgs/techIcons/xamarin.png';
//Truck Service Website's tech
import html from '../imgs/techIcons/html.png';
import css from '../imgs/techIcons/css.png';
import javascript from '../imgs/techIcons/javascript.png';
import bootstrap from '../imgs/techIcons/bootstrap.png';
//Tubtrunk's tech
import flutter from '../imgs/techIcons/flutter.png';
import firebase from '../imgs/techIcons/firebase.png';
//LittleViet's tech
import react from '../imgs/techIcons/react.png';
import materialui from '../imgs/techIcons/materialui.png';
import tailwindcss from '../imgs/techIcons/tailwindcss.svg';
//Game's tech
import unity from '../imgs/techIcons/unity.png';

//#endregion import


function ProjectPage() {
    return (
        <Box className='flex-col h-screen w-screen bg-blue-100'>
            <Box className='flex items-center justify-center m-auto w-8/12 h-1/2 pt-96'>
                <Carousel
                    plugins={[
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        },
                    ]}
                >
                    <ProjectCard className=''
                        title="Payroll Mobile App"
                        image={payrollThumb}
                        icons={[mySQL, php, xamarin]}
                    />
                    <ProjectCard
                        title="Truck Service Website"
                        image={PrairieTruckWebsite}
                        icons={[html, css, javascript, bootstrap]}
                    />
                    <ProjectCard
                        title="Android Focus Mobile App"
                        image={tubtrunk}
                        icons={[flutter, firebase]}
                    />
                    <ProjectCard
                        title="Little Viet Bubble Tea Website"
                        image={littleviet}
                        icons={[react, materialui, tailwindcss]}
                    />
                    <ProjectCard
                        title="Find Or Die"
                        image={FindOrDie}
                        icons={[unity]}
                    />
                    <ProjectCard
                        title="Abyssal Secret"
                        image={Abyssal}
                        icons={[unity]}
                    />
                </Carousel>
            </Box>
        </Box>
    );
}


export default ProjectPage;