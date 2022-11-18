import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';


export interface Props {
    pImg?: string,
    className?: string,
    style?: React.CSSProperties
}

export const ProductImage = ({ pImg = '', className, style }:Props ) => {

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
        <img 
            className={ `${styles.productImg} ${className}` } 
            src={ imgToShow } 
            alt="Product_Photo" 
            style={ style }
        />
    );
}