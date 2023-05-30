import { useState } from 'react'
import { pedidoValorTotal } from '../services/product'
import styles from '../styles/pedidoCard.module.css'
import { ButtonProduct } from './buttonProduct'

export const PedidoCard = ({ idPedido, pedido}: any) => {

    const [valorTotal, setValorTotal] = useState(pedidoValorTotal(pedido))

    return(
        <>
            <div className={styles.pedidoCard}>
                <div>Nº {idPedido}</div>
                <div>Valor total</div>
                <div>R$ {valorTotal}</div>
                <ButtonProduct color={'green'} icon={'Entregar'}/>
            </div>
        </>
    )
}