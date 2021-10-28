import * as React from 'react';
import { Box, Card, CardHeader } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import '../Projects.css';

function ProjectCard(props) {
    return (
        <Box className='flex transform project-box hover:scale-110 hover:-translate-y-1 transition ease-in-out'>
            <Card className='w-80 rounded-lg'>
                {/* <CardHeader className='text-base'
                // title={props.title}
            /> */}
                <p className='text-xl font-bold text-center my-2 antialiased '>{props.title}</p>
                <CardMedia
                    component="img"
                    height="194"
                    image={props.image}
                    alt="payroll mobile"
                />
                <CardActions disableSpacing className='justify-center'>
                    {
                        props.icons &&
                        (props.icons).map((icon, index) => {
                            return (<img src={icon} className='px-1 w-10'/>);
                        })
                    }
                </CardActions>

            </Card>
        </Box>

    );
}

export default ProjectCard;