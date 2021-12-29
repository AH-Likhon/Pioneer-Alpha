import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Package1 from './Package1';
import Package2 from './Package2';
import Package3 from './Package3';

const Packages = () => {
    return (
        <Container>
            <Typography sx={{ mt: 5, mb: 0, fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
                Choose Your Plan
            </Typography>
            <Typography sx={{ mt: 0, }} variant="caption" display="block" gutterBottom>
                Take your desired best plan to get access all of our course. I like to offer special license to you.
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Package1 />
                <Package2 />
                <Package3 />

            </Grid>

            <Typography sx={{ my: 3, fontWeight: 'bold' }} variant="caption" display="block" gutterBottom>
                ©️2021, All Rights Reserved  by Md. Akramul Hoque
            </Typography>
        </Container>
    );
};

export default Packages;