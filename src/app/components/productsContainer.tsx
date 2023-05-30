import { Container } from "./container"
import { ProductCard } from "./productCard"

export const ProductsContainer = ({ products, selectedProducts, setSelectedProducts, setChanged }: any) => {
    return(
        <>
        <Container>
            {
                products.map((product: any) => (
                    <ProductCard key={product.id} 
                    id={product.id}
                    name={product.name} 
                    price={product.price} 
                    img={product.img} 
                    setSelectedProducts={setSelectedProducts} 
                    setChanged={setChanged}
                    selectedProducts={selectedProducts}/>
                ))
            }
        </Container>
        </>
    )
}