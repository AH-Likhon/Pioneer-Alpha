import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, ListItem, ListItemIcon, Typography } from '@mui/material';
import package1 from '../images/package4.png';
import CheckIcon from '@mui/icons-material/Check';

const Package2 = () => {
    return (
        <Grid item sx={{ my: 5, }} xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, mt: '-12px', backgroundColor: '#625A99' }}>
                <CardMedia
                    component="img"
                    style={{ marginX: 'auto', marginTop: '20px' }}
                    image={package1}
                    height='210px'
                    alt="package1"
                />
                <CardContent sx={{ textAlign: 'left', mt: '-25px' }}>
                    <Typography variant="p" component="div">
                        Yearly Access
                    </Typography>
                    <Typography sx={{ color: 'white' }} variant="h6" component="div">
                        {'\u09F3'}10,000 / year
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

                    <ListItem sx={{ mt: '-10px' }}>
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

                    <ListItem sx={{ mt: '-10px' }}>
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            Dynamic Content
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ mt: '-10px' }}>
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
                            Creative Assistant
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ mt: '-10px' }} >
                        <ListItemIcon sx={{ color: 'inherit', mr: 0 }}>
                            <CheckIcon sx={{ fontSize: '18px' }} />
                        </ListItemIcon>
                        <Typography component="span" sx={{ fontSize: '12px', ml: '-30px' }}>
                            24/7 Email & Chat Support
                        </Typography>
                    </ListItem>


                    <Button sx={{ width: '100%', backgroundColor: 'white', color: 'black', textTransform: 'capitalize', fontWeight: 'bold', mt: '15px', '&:hover': { backgroundColor: 'white', color: 'black', textTransform: 'capitalize', fontWeight: 'bold', } }} variant="contained">Get Started</Button>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Package2;