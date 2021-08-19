import { Button, FormControlLabel, Radio } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ProductCart from '../../products/productCart/ProductCart';
import Background from '../../sections/background/Background';
import './Cart.css';

function Cart() {

    const productCart = useSelector(state => state.cart);
    const money = productCart.reduce((total, current) => {
        return total + (current.price * current.quantity)
    }, 0)
    
    const handleCheckout = () => {
        toast.success("✔ Order Success", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div>
            <Background title="Shopping Cart"/>
            <section className="cart__main">
                <div className="cart__left">
                    <div className="cart__list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productCart.length !== 0 
                                    ? productCart.map(item => {
                                        return (
                                            <ProductCart key={item.id} item={item}/>
                                        )
                                    })
                                    : <tr>
                                        <td style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                            No products in cart 🛒
                                        </td>
                                    </tr>
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="cart__right">
                    <div className="cart__summary">
                        <h3 className="cart__title">
                            Cart total
                        </h3>
                        <table>
                            <tbody>
                                <tr className="subtotal">
                                    <td>Subtotal:</td>
                                    <td>${money}</td>
                                </tr>

                                <tr className="shipping">
                                    <td>Shipping:</td>
                                    <td></td>
                                </tr>
                            
                                <tr className="freeShip">
                                    <td>
                                        <FormControlLabel value={0} control={<Radio />} label="Freeship" checked/>
                                    </td>
                                    <td>$0.00</td>
                                </tr>
                                <tr className="freeShip">
                                    <td>
                                        <FormControlLabel disabled value={1} control={<Radio />} label="Standard Shipping"/>
                                    </td>
                                    <td>$10.00</td>
                                </tr>
                                <tr className="freeShip">
                                    <td>
                                        <FormControlLabel disabled value={2} control={<Radio />} label="Fastest Shipping"  />
                                    </td>
                                    <td>$20.00</td>
                                </tr>
                                <tr className="estimate">
                                    <td>
                                        <h4>Estimate for Your Country</h4>
                                    </td>
                                </tr>
                                <tr className="total">
                                    <td>Total:</td>
                                    <td>${money}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cart__checkout">
                            <Button variant="contained" color="primary" onClick={handleCheckout}><span style={{color:"#fff"}}>Proceed to checkout</span></Button>
                        </div>
                    </div>
                    <div className="continueShopping">
                        <a href='/list'>
                            <Button variant="outlined" color="primary" endIcon={<RestoreIcon/>}>Continue Shopping</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;