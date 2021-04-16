import styles from './list-items-item.module.scss';

// Assets
import shipping from '../../assets/images/ic_shipping@2x.png'
import { FC, HTMLAttributes } from 'react';

export interface IListItemsItemProps extends HTMLAttributes<HTMLDivElement> {}

export const ListItemsItem: FC<IListItemsItemProps> = (props) => {
    return (
        <div className={styles.ListItemsItem} {...props}>
            
          <div className={styles.ListItemsItem__image}></div>

          <div className={styles.ListItemsItem__content_wrapper}>
            
            <span className={styles.ListItemsItem__price_wrapper}>
                <span className={styles.ListItemsItem__price}>$ 1.980</span>
                <img className={styles.ListItemsItem__shipping} src={shipping} alt="Enviado por Mercado Libre"/>
            </span>
            
            <div className={styles.ListItemsItem__location_wrapper}>
                <span className={styles.ListItemsItem__location}>Córdoba</span>
            </div>

            <p className={styles.ListItemsItem__title}>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico</p>

          </div>

        </div>
    )
}
