import { Button } from '@material-ui/core';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import './ProductCard.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addCart} from '../../../app/reducer/cartSlice'

function ProductCard({item}) {
    const dispatch = useDispatch();
    
    const url = `/product/${item.id}`;
    const addProduct = () => {
        toast.success("✔ Item added to cart!",  {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const action = addCart(item)
        dispatch(action)
    }
    return (
        <div className="card">
            
            <div className="card__media">
                <a className="card__media-link" href={url}>
                    <img src={item.img1} alt="image_product1" className="card__image1" />
                    <img src={item.img2} alt="image_product2" className="card__image2"></img>
                </a>
                <div className="card__action">
                    <div className="card__action-left">
                        <a href={url}>
                            <Button 
                                className="card__button" 
                                variant="contained" 
                                color="secondary" 
                                fullWidth
                                endIcon={<VisibilityIcon/>}
                            >
                            </Button>   
                        </a>
                    </div> 
                    <div className="card__action-right">
                        <Button 
                            className="card__button" 
                            variant="contained" color="secondary" 
                            fullWidth
                            endIcon={<AddShoppingCartIcon/>}
                            onClick={addProduct}
                        >
                        </Button>
                    </div> 
                </div> 
            </div>
            <div className="card__body">
                <div className="card__category">{item.category}</div>
                <a href={url}>{item.name}</a>
                <div className="card__price">
                    <span>${item.price}</span>
                </div>
                <ReactStars value={6} count={5} size={20} color={"#f4c10f"}></ReactStars>
            </div>
        </div>
    );
}

export default ProductCard;

