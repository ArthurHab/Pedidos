import { Container } from "./container"
import { PedidoCard } from "./pedidoCard"

export const PedidosContainer = ({ pedidos, setPedidos }: any) => {

    return(
        <>
            <Container>
            {
                pedidos.map((pedido: any) => (
                    <PedidoCard 
                        key={pedido.idPedido}
                        idPedido={pedido.idPedido}
                        pedido={pedido}
                        />
                ))
            }
            </Container>
        </>
    )
}