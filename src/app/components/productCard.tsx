'use client'

import { addProduct } from '../services/product'
import { ButtonProduct } from './buttonProduct'
import styles from '../styles//productCard.module.css'

export const ProductCard = ({id, name, price, img, setSelectedProducts, setChanged, selectedProducts}: any) => {
    
    function adicionarProduto(){
        setSelectedProducts(addProduct(selectedProducts, id, img, name, price));
        setChanged(true);
    }
    
    return(
        <>
            <div className={styles.box}>
                <div>{img}</div>
                <div className={styles.productInfos}>
                    <div>{name}</div>
                    <div>R$ {price}</div>
                    <div>
                        <ButtonProduct icon={'+'} color='green' event={adicionarProduto}/>
                    </div>
                </div>
            </div>
        </>
    )
}