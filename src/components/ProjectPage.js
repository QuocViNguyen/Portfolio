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

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
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
                        icons={[GitHub, LinkedIn]}
                    />
                    <ProjectCard
                        title="Truck Service Website"
                        image={PrairieTruckWebsite}
                    />
                    <ProjectCard
                        title="Android Focus Mobile App"
                        image={tubtrunk}
                    />
                    <ProjectCard
                        title="Little Viet Bubble Tea Website"
                        image={littleviet}
                    />
                    <ProjectCard
                        title="Find Or Die"
                        image={FindOrDie}
                    />
                    <ProjectCard
                        title="Abyssal Secret"
                        image={Abyssal}
                    />
                </Carousel>
            </Box>
        </Box>
    );
}


export default ProjectPage;