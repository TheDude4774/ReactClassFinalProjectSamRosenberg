import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.css';

const ProductComponent = () => {
    const products= useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id,title,image,price,category} = product;
        return (
        <div style={{width: "25%", margin: "4.4rem 3rem 1rem 3rem"}}className="four column wide" key={id}>
            <Link to={`/product/${id}`}>
        <div className="ui link cards" style={{height: "100%", width: "100"}}>
            <div className="card supercard" style={{boxShadow: "4px 4px 4px darkgray", height: "100%", width: "100%", border: "1px solid darkgrey", padding: "2rem", verticalAlign: "center"}}>
                <div className="image" style={{ width: "100%"}}>
                    <img src={ image } alt={ title } />
                </div>
                <div className="content" style={{visibility: "hidden"}}>
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                </div>
                <div className="content" style={{position: "absolute", bottom: "10px"}}>
                    <div className="header">{title}</div>
                    <div className="meta price" style={{color: "cadetblue", fontWeight: "500"}}>$ {price}</div>
                    <div className="meta" style={{color: "cadetblue", fontWeight: "400"}}>{category}</div>
                </div>
            </div>
        </div>
        </Link>
    </div>);
    })
   
    return(
        <>{renderList}</>

      );
};

export default ProductComponent;