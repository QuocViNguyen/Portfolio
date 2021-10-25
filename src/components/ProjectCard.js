import * as React from 'react';
import { Box, Card, CardHeader } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';


function ProjectCard(props) {
    return (
        <Box className='flex'>
        <Card className='w-80 ml-20 sm:ml-72 rounded-lg'>
            {/* <CardHeader className='text-base'
                // title={props.title}
            /> */}
            <p className='text-xl font-bold text-center my-2 antialiased '>{props.title}</p>
            <CardMedia
                component="img"
                height="194"
                image= {props.image}
                alt="payroll mobile"
            />
            <CardActions disableSpacing>
                    {
                    props.icons && 
                    (props.icons).map((icon, index) => {
                        return (<img src={icon} width={30}/>);

                    })
                    }
            </CardActions>

        </Card>
        </Box>

    );
}

export default ProjectCard;