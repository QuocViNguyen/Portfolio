import * as React from 'react';
import { Box, Card } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import '../Projects.css';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useToggle } from "rooks";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Source from '../imgs/source.png';
import Show from '../imgs/show.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ProjectCard(props) {
    const [open, setOpen] = useToggle();

    function toggle() {
        setOpen(!open);
    }

    useEffect(() => {
    }, [open]);

    return (
        <div>
            <Box className='flex transform project-box hover:scale-110 hover:-translate-y-1 transition ease-in-out' onClick={toggle}>
                <Card className='w-20 sm:w-80 rounded-lg'>
                    <p className='sm:text-xl text-base font-bold text-center my-2 antialiased '>{props.title}</p>
                    <CardMedia
                        component="img"
                        // height="194"
                        image={props.images[0]}
                        alt="payroll mobile"
                    />
                    <CardActions disableSpacing className='justify-center'>
                        {
                            props.icons &&
                            (props.icons).map((icon, index) => {
                                return (<img src={icon} alt="used techs" className='px-1 w-5 sm:w-10'/>);
                            })
                        }
                    </CardActions>
                </Card>

            </Box>
            <Modal
                keepMounted
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={toggle}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Card className='transition-modal-title rounded-lg'>
                            <p className='text-xl font-bold text-center my-2 antialiased '>{props.title}</p>
                            <CardMedia
                                component="img"
                                width='200'
                                image={
                                    (props.images && props.images[0])
                                }
                                alt="payroll mobile"
                            />
                            <br/>
                            <Box className="text-center text-sm sm:text-sm">{props.description}</Box>

                            <CardActions disableSpacing className='justify-center' id="transition-modal-description">
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={5} className='flex space-x-2 justify-center'>
                                        <a href={props.gitlink} target="_blank" rel="noreferrer" title="To The Source" className="">
                                            <Avatar alt="Source" src={Source} className='w-1 sm:w-4 h-auto hover:bg-gray-300' variant='rounded' sx={{
                                                 width: {
                                                    xs:18,
                                                    sm: 36
                                                 }, 
                                                 height: {
                                                    xs:18,
                                                    sm: 36
                                                 }
                                                 }} />
                                        </a>
                                        <a href={props.link} target="_blank" rel="noreferrer" title="To The App" className="">
                                            <Avatar alt="App" src={Show} className='w-1 sm:w-4 h-auto hover:bg-gray-300' variant='rounded' sx={{
                                                width: {
                                                    xs: 18,
                                                    sm: 36
                                                },
                                                height: {
                                                    xs: 18,
                                                    sm: 36
                                                }
                                            }} />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12} md={4} className='flex justify-center' >
                                        {
                                            props.icons &&
                                            (props.icons).map((icon, index) => {
                                                return (<img src={icon} alt="used techs" className='px-2 w-8 sm:w-12'/>);
                                            })
                                        }
                                    </Grid>
                                    <Grid item xs={2} md={3} className=''>

                                    </Grid>

                                </Grid>

                            </CardActions>
                        </Card>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ProjectCard;

