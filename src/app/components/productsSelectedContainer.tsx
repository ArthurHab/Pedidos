'use client'

import { useEffect, useState } from "react"
import { addPedido } from "../services/product"
import { Container } from "./container"
import { ProductMiniCard } from "./productMiniCard"
import styles from "../styles/buttonFinish.module.css"

export const ProductsSelectedContainer = (props: any) => {

    const [changed, setChanged] = useState(false);

    function newPedido(){
        props.setPedidos(addPedido(props.pedidos, props.selectedProducts));
        props.setSelectedProducts([]);
        props.setChanged(true);
    }

    useEffect(() => {
        setChanged(false);
    }, [changed]);

    return(
        <>
            <Container>
            {
                props.selectedProducts.map((product: any) => (
                    <ProductMiniCard 
                    key={product.productInfo.id}
                    id={product.productInfo.id}
                    name={product.productInfo.name} 
                    price={product.productInfo.price} 
                    img={product.productInfo.img} 
                    quant={product.quant}
                    setSelectedProducts={props.setSelectedProducts}
                    eventController={setChanged}
                    selectedProducts={props.selectedProducts}/>
                ))
            }
            </Container>
            {
                (props.selectedProducts.length > 0) && <button className={styles.botaoFinalizarPedido} onClick={newPedido}>Finalizar Pedido</button>
            }
            
        </>
    )
}