import { Breadcrumbs, Button, Checkbox, FormControlLabel, FormGroup, Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from '@material-ui/lab/Pagination';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFilter, clearFilter } from '../../../app/reducer/listSlice';
import productList from '../../../assets/productList';
import ProductCard from '../../products/productCard/ProductCard';
import Background from '../../sections/background/Background';
import './ProductList.css';

function ProductList() {
    const [filter, setFilter] = useState({
        Smartwatches: false,
        Cameras: false,
        Audio: false,
        Games: false,
        Televisions: false,
        Tablets: false,
        Phones: false
    });
    const dispatch = useDispatch();
    const productFilter = useSelector(state => state.list)
    
    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.checked });
        
    }

    const handleFilter = () => {
        const filterProduct = Object.keys(filter).filter(item => filter[item] === true);
        const action = addFilter(filterProduct)
        dispatch(action)
    }

    const handleClear = () => {
        setFilter({
            Smartwatches: false,
            Cameras: false,
            Audio: false,
            Games: false,
            Televisions: false,
            Tablets: false,
            Phones: false
        })
        dispatch(clearFilter(1))
    }
    
    return (
        <div>
            <Background title="Product List"/>
            <div style={{maxWidth: '1200px', margin: 'auto'}}>
                <Breadcrumbs aria-label="Breadcrumbs" >
                    <Link color="inherit" to="/">
                        Home
                    </Link>
                    <Typography color="textPrimary">List</Typography>
                </Breadcrumbs>
            </div>
            
            <section className="list">
                <div className="list__sidebar">
                    <div className="sidebar__container">
                        <div className="sidebar__header">
                            <h5>Filters:</h5>
                            <Button color="primary" onClick={handleClear}>Clear All</Button>
                        </div>
                        <div className="sidebar__category">
                            <Accordion style={{backgroundColor: '#fafafa', borderBottom:'1px solid #ccc'}} elevation={0}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <Typography >Category</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup >
                                        <FormControlLabel
                                            control={<Checkbox color="primary"/>}
                                            color="primary"
                                            label="Smartwatches"
                                            onChange={handleChange}
                                            name="Smartwatches"
                                            checked={filter.Smartwatches}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox color="primary"/>}
                                            color="primary"
                                            label="Cameras"
                                            onChange={handleChange}
                                            name="Cameras"
                                            checked={filter.Cameras}

                                        />
                                        <FormControlLabel
                                            control={<Checkbox color="primary"/>}
                                            color="primary"
                                            label="Audio"
                                            onChange={handleChange}
                                            name="Audio"
                                            checked={filter.Audio}

                                        />
                                        <FormControlLabel
                                            control={<Checkbox color="primary"/>}
                                            color="primary"
                                            label="Games"
                                            onChange={handleChange}
                                            name="Games"
                                            checked={filter.Games}

                                        />
                                        <FormControlLabel
                                            control={<Checkbox color="primary"/>}
                                            color="primary"
                                            label="Televisions"
                                            onChange={handleChange}
                                            name="Televisions"
                                            checked={filter.Televisions}

                                        />
                                        <FormControlLabel
                                            control={<Checkbox color="primary"/>}
                                            color="primary"
                                            label="Tablets"
                                            onChange={handleChange}
                                            name="Tablets"
                                            checked={filter.Tablets}

                                        />
                                        <FormControlLabel
                                            control={<Checkbox color="primary"/>}
                                            color="primary"
                                            label="Phones"
                                            onChange={handleChange}
                                            name="Phones"
                                            checked={filter.Phones}
                                        />
                                    </FormGroup>
                                </AccordionDetails>
                                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                    <Button variant="outlined" color="primary" onClick={handleFilter}>
                                        Filter
                                    </Button>
                                </div>
                            </Accordion>
                        </div>
                        
                    </div>
                </div>
                <div className="list__main">
                    <Grid container spacing={2}>
                        {productFilter.length !== 0  
                            ? productFilter.map(item => {
                                return (
                                <Grid item xs={12} sm={6}  md={4} key={item.id}>
                                    <ProductCard item={item}/>
                                </Grid>
                                )
                            })
                            : productList.map(item => {
                                return (
                                <Grid item xs={12} sm={6}  md={4} key={item.id}>
                                    <ProductCard item={item}/>
                                </Grid>
                                )
                            })    
                        }
                    </Grid>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                        <Pagination  count={1} variant="outlined" size="large"/>
                    </div>
                </div>
                
            </section>
        </div>
    );
}

export default ProductList;