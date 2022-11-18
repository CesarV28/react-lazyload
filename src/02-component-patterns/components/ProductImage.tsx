import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export const ProductImage = ({ pImg = ''}) => {

    const { product } = useContext( ProductContext );

    let imgToShow: string;

    if( pImg ){
        imgToShow = pImg;
    } else if( product.img ) {
        imgToShow = product.img;
    }else{
        imgToShow = noImage;
    }

    return (
        <img className={ styles.productImg } src={ imgToShow } alt="Product_Photo" />
    );
}