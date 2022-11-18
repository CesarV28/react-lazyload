import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

import img from '../assets/coffee-mug.png';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img
}


export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping store</h1>
        <hr/>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

            <ProductCard product={product}>
                <ProductCard.Image/>
                <ProductCard.Title title='Caffe cup'/>
                <ProductCard.Buttons/>
            </ProductCard>
            
            <ProductCard product={product}>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </ProductCard>
 
        </div>
    </div>
  )
}
