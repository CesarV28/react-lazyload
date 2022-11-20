import { Product } from "../interfaces/interfaces";
import img from '../assets/coffee-mug.png';
import img2 from '../assets/coffee-mug2.png';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: img2
}

export const products: Product[] = [ product1, product2 ];