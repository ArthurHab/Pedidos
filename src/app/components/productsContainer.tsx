import { Container } from "./container"
import { ProductCard } from "./productCard"

export const ProductsContainer = (props: any) => {
    return(
        <>
        <Container>
            {
                props.products.map((product: any) => (
                    <ProductCard key={product.id} 
                    id={product.id}
                    name={product.name} 
                    price={product.price} 
                    img={product.img} 
                    setSelectedProducts={props.setSelectedProducts} 
                    setChanged={props.setChanged}
                    selectedProducts={props.selectedProducts}/>
                ))
            }
        </Container>
        </>
    )
}