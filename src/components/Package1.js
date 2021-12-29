import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, ListItem, ListItemIcon, Typography } from '@mui/material';
import package1 from '../images/package11.png';
import CheckIcon from '@mui/icons-material/Check';

const Package1 = () => {
    return (
        <Grid item sx={{ my: 5 }} xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ margin: '5px auto' }}
                    image={package1}
                    height='200px'
                    alt="package1"
                />
                <CardContent sx={{ textAlign: 'left', mt: '0px' }}>
                    <Typography variant="p" component="div">
                        Monthly Access
                    </Typography>
                    <Typography sx={{ color: 'red' }} variant="h6" component="div">
                        {'\u09F3'}2000 / month
                    </Typography>

                    <ListItem sx={{ mb: '-10px' }}>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Advanced Segmentation
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ my: 0 }}>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Multivariate Testing
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }}>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Comparative Reporting
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }}>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Unlimited Seats & Role-Based Access
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }}>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Phone & Priority Support
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }} disabled>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Behavioral Targeting
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }} disabled>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Custom Templates
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }} disabled>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Dynamic Content
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }} disabled>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            A/B Testing
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }} disabled>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            24/7 Email & Chat Support
                        </Typography>
                    </ListItem>

                    <Button sx={{ width: '100%', backgroundColor: '#625A99', color: 'white', textTransform: 'capitalize', fontWeight: 'bold', mt: '10px', '&:hover': { backgroundColor: '#625A99', color: 'white', textTransform: 'capitalize', fontWeight: 'bold', } }} variant="contained">Get Started</Button>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Package1;