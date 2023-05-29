export const increaseProducts = ( selectedProducts: any, id: number) => {
    let tempSeletedProducts = selectedProducts;
    tempSeletedProducts.map((product:any) => {
        if (product.productInfo.id == id){
            product.quant += 1;
        }
    })
    return tempSeletedProducts;
}

export const decreaseProducts = ( selectedProducts: any,id: number) => {
    let tempSeletedProducts = selectedProducts;
    let index = -1;
    tempSeletedProducts.map((product: any) => {
        index += 1;
        if (product.productInfo.id == id){
            product.quant -= 1;
            if (product.quant == 0){
                tempSeletedProducts.splice(index,1);
            }
        }
    })
    return tempSeletedProducts;
}

export const addProduct = (selectedProducts: any, id: number, img: string, name: string, price: number) => {
    let tempSeletedProducts = selectedProducts;
    let encontrado = false;
    tempSeletedProducts.map((product: any) => {
        if (product.productInfo.id == id){
            encontrado = true;
        }
    })
    if (!encontrado) {
        selectedProducts.push({quant: 1, productInfo: {id: id, name: name,img: img, price: price}});
    } else{
        alert('Produto já está no pedido!')
    }
    return tempSeletedProducts;
}

export const addPedido = (pedidos: any, pedido: any) => {
    pedidos.push({
        idPedido: pedidos.length + 1,
        items: pedido,
    })
    return pedidos;
}

export const pedidoValorTotal = (pedido: any) => {
    let valorTotal = 0;
    pedido.items.map((pedido: any) => {
        valorTotal += pedido.productInfo.price * pedido.quant;
    })
    return valorTotal;
}