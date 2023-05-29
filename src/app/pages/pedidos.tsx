"use client"

import { useEffect, useState } from "react";
import { ProductsContainer } from "../components/productsContainer";
import { ProductsSelectedContainer } from "../components/productsSelectedContainer";
import styles from '../styles/pedidos.module.css';
import { PedidosContainer } from "../components/pedidosContainer";

export default function Pedidos(){

    const [pedidos, setPedidos] = useState([]);

    const [products, setProducts] = useState([
        {id: 1, name: 'Produto 1',img: 'Img', price: 8},
        {id: 2, name: 'Produto 2',img: 'Img', price: 7},
        {id: 4, name: 'Produto 3',img: 'Img', price: 2},
        {id: 5, name: 'Produto 4',img: 'Img', price: 6},
        {id: 3, name: 'Produto 5',img: 'Img', price: 10},
        {id: 6, name: 'Produto 6',img: 'Img', price: 5},
        {id: 7, name: 'Produto 7',img: 'Img', price: 8},
        {id: 8, name: 'Produto 8',img: 'Img', price: 7},
        {id: 9, name: 'Produto 9',img: 'Img', price: 10},
        {id: 10, name: 'Produto 10',img: 'Img', price: 2},
        {id: 11, name: 'Produto 11',img: 'Img', price: 6},
        {id: 12, name: 'Produto 12',img: 'Img', price: 5},
    ]);

    const [changed, setChanged] = useState(false);

    const [selectedProducts, setSelectedProducts] = useState([]); 

    useEffect(() => {
        setChanged(false);
    }, [changed])

    return(
    <>  
        <div className={styles.pedido}>
            <div className={styles.separador}>
                <div className={styles.titleSection}>Lista de Pedidos</div>
                <PedidosContainer 
                    pedidos={pedidos} 
                    setPedidos={setPedidos}/>
            </div>
            <div className={styles.separador}>
                <div className={styles.titleSection}>Lista de produtos</div>
                <ProductsContainer 
                    selectedProducts={selectedProducts} 
                    setSelectedProducts={setSelectedProducts} 
                    products={products} 
                    setChanged={setChanged}/>
            </div>
            <div className={styles.separador}>
                <div className={styles.titleSection}>Produtos selecionados</div>
                <ProductsSelectedContainer 
                    selectedProducts={selectedProducts} 
                    setSelectedProducts={setSelectedProducts}
                    pedidos={pedidos}
                    setPedidos={setPedidos}
                    setChanged={setChanged}/>
            </div>
        </div>
    </>
    )
}