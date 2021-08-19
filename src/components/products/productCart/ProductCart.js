import { IconButton } from '@material-ui/core';
import React from 'react';
import './ProductCart.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { toast } from 'react-toastify';
import { addQuantity, subtractQuantity, deleteCart} from '../../../app/reducer/cartSlice'
import { useDispatch } from 'react-redux';

function ProductCart({item}) {
    const handelChange = (e) => {
        return 1
    }

   const url = `/product/${item.id}`
   const dispatch = useDispatch();

    const handleDelete = () => {
        toast.error("🗑 Item removed to cart", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        const action = deleteCart(item)
        dispatch(action)
    }

    const handleAdd = () => {
    
        const action = addQuantity(item)
        dispatch(action)
    }

    const handleSubtract = () => {
        const action = subtractQuantity(item)
        dispatch(action)
    }

    return (
        <tr className="item">
            <td className="item__detail">
                <a href={url}>{item.name}</a>
            </td>
            <td className="item__detail">${item.price}</td>
            <td className="item__detail">
                <div className="quantity">
                    <div className="quantity__handle">
                        <button className="quantity__subtract" onClick={handleSubtract}>─</button>
                        <button className="quantity__add" onClick={handleAdd}>╋</button>
                        <input 
                            className="quantity__input" 
                            value={item.quantity}
                            onChange={handelChange}
                        >
                        </input>
                    </div>
                </div>  
            </td>
            <td className="item__detail">
                ${item.price * item.quantity}
            </td>
            <td className="item__detail">
                <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </td>
        </tr>
    );
}

export default ProductCart;