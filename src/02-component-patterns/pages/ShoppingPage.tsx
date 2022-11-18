import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

import '../styles/custom-styles.css';

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

            <ProductCard product={product} className='bg-dark'>
                <ProductCard.Image className='custom-image'/>
                <ProductCard.Title title='Caffe cup' className='text-white'/>
                <ProductCard.Buttons className='custom-buttons'/>
            </ProductCard>
            
            <ProductCard 
                product={product}
                className='bg-dark'
            >
                <ProductImage 
                    className='custom-image'
                    style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }}
                />
                <ProductTitle className='text-white'/>
                <ProductButtons className='custom-buttons'/>
            </ProductCard>

            <ProductCard 
                product={product}
                style={{
                    backgroundColor: '#70D1F8'
                }}
            >
                <ProductImage 
                    style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }}
                />
                <ProductTitle 
                    style={{
                        color: '#363a45',
                        fontWeight: 'bold',
                        display: 'block',
                        textAlign: 'center',
                    }}
                />
                <ProductButtons 
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                />
            </ProductCard>
 
        </div>
    </div>
  )
}
