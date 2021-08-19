import { Breadcrumbs, Container, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductDesc from '../products/productDesc/ProductDesc';
import ProductInfo from '../products/productInfo/ProductInfo';

function ProducDetail() {
    return (
        <Container style={{marginTop: '20px', marginBottom: '40px'}}>
            <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: '20px'}}>
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Link color="inherit" to="/list">
                    List
                </Link>
                <Typography color="textPrimary">Product</Typography>
            </Breadcrumbs>
            <ProductDesc />
            <ProductInfo />
        </Container>
    );
}

export default ProducDetail; 