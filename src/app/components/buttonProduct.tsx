import styles from '../styles/buttonProduct.module.css'

export const ButtonProduct = (props: any) => {
    return(
        <>
            <button className={styles.button} onClick={props.event} style={{background: props.color}}>
                {props.icon}
            </button>
        </>
    )
}