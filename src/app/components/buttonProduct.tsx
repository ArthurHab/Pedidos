import styles from '../styles/buttonProduct.module.css'

export const ButtonProduct = ({event, color, icon}: any) => {
    return(
        <>
            <button className={styles.button} onClick={event} style={{background: color}}>
                {icon}
            </button>
        </>
    )
}