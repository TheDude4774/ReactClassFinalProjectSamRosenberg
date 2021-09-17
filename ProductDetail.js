import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import "./styles.css";
// import { CartState } from "../context/Context";

const ProductDetails = () => {

    // const {
    //     state: {cart},
    //     dispatchAdd,
    // } = CartState();

    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("Err ", err);
        });

        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return () => {
           dispatch(removeSelectedProduct()); 
        }
    },[productId]);
    return (
        <div style={{backgroundColor: "moccasin"}}>
        <div className="ui grid container" style={{border: "none", backgroundColor: "moccasin", margin: "0rem 8rem 5rem 8rem", paddingLeft:"4rem", paddingRight:"4rem"}}>
            {Object.keys(product).length === 0 ? (
                <div style={{backgroundColor: "cadetblue", fontSize: "4rem", fontFamily: "Brush Script MT", textAlign: "center", verticalAlign: "center", padding: "18rem 35rem 24rem 24rem", position: "relative"}}>...Loading</div>
            ) : (
                <div className="ui segment" style={{border: "none", backgroundColor: "moccasin"}}>
                    <div className="ui two column stackable center aligned grid">
                        {/* <div className="ui vertical divider" style={{fontFamily: "courier new", color: "cadetblue", fontWeight: "700"}}></div> */}
                        <div className="middle aligned row">
                            
                            <div className="column rp">
                                <h1 style={{fontFamily: "Brush Script MT", color: "cadetblue", fontSize: "4rem"}}>{title}</h1>
                                <h2>
                                    <p className="ui blue tag label">${price}</p>
                                </h2>
                                <h3 className="ui blue block" style={{color: "cadetblue"}}>{category}</h3>
                                <p style={{color: "cadetblue", fontWeight: "500"}}>{description}</p>
                                <p style={{marginTop: "1.2rem", color: "cadetblue", fontWeight: "500", fontSize: "1.2rem", marginBottom: "0"}}>Quantity</p>
                                <input id="quantity" name="quantity" autocomplete="off" style={{width: "1.1rem", display: "block", margin: ".4rem  auto", marginBottom: "1.2rem", color: "darkslateblue", border: "1px solid cadetblue"}} placeholder="1"/>
                                {/* <select id="quantity" name="quantity" style={{width: "1.2rem", display: "block", margin: ".4rem  auto", marginBottom: "1.2rem"}} placeholder="1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                </select> */}
                                <button className="ui vertical animated button blue" tabIndex="0" onClick={() => {
                                    dispatchAdd({
                                        type: "ADD_TO_CART",
                                        payload: product,
                                    })
                                }}>
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </button>
                                
                            </div>
                            <div className="column lp">
                                <figure>
                                <img className="ui fluid image enlarge-pic" style={{margin: "1rem", padding: "2rem", borderRadius: "10%", border: "4px dotted cadetblue", zIndex: "100"}} src={image} />
                                <figcaption style={{color: "cadetblue", fontWeight: "500", paddingLeft: "3rem"}}>Click and hold to zoom</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>)};
        </div>
        </div>
    )};
            


export default ProductDetails;