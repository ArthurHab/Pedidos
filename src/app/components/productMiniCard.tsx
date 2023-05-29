import { decreaseProducts, increaseProducts } from '../services/product';
import { ButtonProduct } from './buttonProduct';
import styles from '../styles/productMiniCard.module.css';

export const ProductMiniCard = ({ id, name, price, img, quant, setSelectedProducts, eventController, selectedProducts}: any) => {

    function increaseProduct(){
        setSelectedProducts(increaseProducts(selectedProducts, id));
        eventController(true);
    }

    function decreaseProduct(){
        setSelectedProducts(decreaseProducts(selectedProducts, id));
        eventController(true);
    }

    return(
        <>
            <div className={styles.miniBox}>
                <div>{name}</div>
                <div>Quant: {quant}</div>
                <div>R$ {price * quant}</div>
                <div className={styles.buttons}>
                    <ButtonProduct icon={'-'} color='red' event={decreaseProduct}/>
                    <ButtonProduct icon={'+'} color='green' event={increaseProduct}/>
                </div>
            </div>
        </>
    )
}