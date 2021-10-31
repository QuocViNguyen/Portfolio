//#region import
import * as React from 'react';
import { Box } from '@material-ui/core';

import ProjectCard from './ProjectCard';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import payrollThumb from '../imgs/projects/payroll_thumb.jpg';
import tubtrunk from '../imgs/projects/tubtrunk.png';
import littleviet from '../imgs/projects/littleviet.png';
import FindOrDie from '../imgs/projects/FindOrDie.png';
import Abyssal from '../imgs/projects/Abyssal.png';
import PrairieTruckWebsite from '../imgs/projects/PrairieTruckWebsite.png';
//Payroll project's
import mySQL from '../imgs/techIcons/mysql.png';
import php from '../imgs/techIcons/php.png';
import xamarin from '../imgs/techIcons/xamarin.png';
//Truck Service Website's
import html from '../imgs/techIcons/html.png';
import css from '../imgs/techIcons/css.png';
import javascript from '../imgs/techIcons/javascript.png';
import bootstrap from '../imgs/techIcons/bootstrap.png';
//Tubtrunk's
import flutter from '../imgs/techIcons/flutter.png';
import firebase from '../imgs/techIcons/firebase.png';
//LittleViet's
import react from '../imgs/techIcons/react.png';
import materialui from '../imgs/techIcons/materialui.png';
import tailwindcss from '../imgs/techIcons/tailwindcss.svg';
//ReadyYet's
import ReadyYet from '../imgs/projects/ReadyYet.png';
//Game's
import unity from '../imgs/techIcons/unity.png';
//#endregion import


function ProjectPage() {
    return (
        <Box className='flex-col bg-blue-100'>
            <br /><br /><br />
            <h1 className='text-center text-2xl font-bold'>MY PROJECTS</h1>
            <Box className='flex items-center justify-center m-auto w-full sm:w-8/12 h-1/5 sm:h-1/2 pt-36 pb-24'>
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
                    slides={[
                        (<ProjectCard className=''
                            title="Payroll Mobile App"
                            images={[payrollThumb]}
                            icons={[mySQL, php, xamarin]}
                            link={""}
                            gitlink={""}
                            description={"Payroll Mobile Application is a project that I worked on at Norwind Interactive Ltd. Using Xamarin platform and MVVM to develop a mobile app to manage emplyee's work hours, sendout payroll and support invoice/estimate's related functionality."}
                        />),
                        (<ProjectCard className=''
                            title="Ready Yet Web App"
                            images={[ReadyYet]}
                            icons={[react, materialui, tailwindcss]}
                            link={""}
                            gitlink={"https://github.com/QuocViNguyen/ReadyYet"}
                            description={"A personal web app project with the idea of adding, tracking and notifying (using Twilio) patient's prescriptions so they can come and pick it up when it is ready. The website will send sms to patient when their prescription is ready for pickup."}
                        />),
                        (<ProjectCard
                            title="Truck Service Website"
                            images={[PrairieTruckWebsite]}
                            icons={[html, css, javascript, bootstrap]}
                            link={"http://prairietruckservice.com/"}
                            gitlink={'https://github.com/QuocViNguyen/PraireTruckService'}
                            description={"A static website using HTML and CSS mostly to display advertise photos and information of a truck service in Prairie, Manitoba."}
                        />),
                        (<ProjectCard
                            title="Android Focus Mobile App"
                            images={[tubtrunk]}
                            icons={[flutter, firebase]}
                            link={""}
                            gitlink={'https://github.com/tuanngo1001/tubtrunk'}
                            description={"Tubtrunk is an android focusing mobile application developed using Flutter and Firebase. It helps the users focus by letting them set a focus time goal and reward them when achieve that goal. Tubtrunk's reward is progressive, encouraging users to focus day by day."}
                        />),
                        (<ProjectCard
                            title="Little Viet Bubble Tea Website"
                            images={[littleviet]}
                            icons={[react, materialui, tailwindcss]}
                            link={""}
                            gitlink={'https://github.com/QuocViNguyen/LittleVietProject'}
                            description={"A web app for a small business in bubble tea and drink. Mainly for advertising its store, delicious drinks, deals and allows online ordering for pickup."}
                        />),
                        (<ProjectCard
                            title="Find Or Die"
                            images={[FindOrDie]}
                            icons={[unity]}
                            link={"https://tndev.itch.io/find-or-die"}
                            gitlink={'https://github.com/thain-gd/FindOrDie'}
                            description={"A deja-vu theme game that you need to find a shapeshifting monster trying to kill you. Inspired by SCP-173 and the concept of SCP - Containment Breach video game. Made by a team of three in a two-day game jam."}
                        />),
                        (<ProjectCard
                            title="Abyssal Secret"
                            images={[Abyssal]}
                            icons={[unity]}
                            link={"https://charlesivnguyen4.itch.io/mask-madness"}
                            gitlink={'https://github.com/QuocViNguyen/AbyssalSecrets'}
                            description={"A fun, Covid-19 timed game made in Unity. The object of the game is to try to survise and finish the daily tasks without getting attacked by infected patients on the street."}
                        />),
                    ]}
                />
            </Box>
        </Box>
    );
}


export default ProjectPage;