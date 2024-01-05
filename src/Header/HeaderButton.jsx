import { Link } from 'react-router-dom';
import styles from './HeaderButton.module.css'

export const HeaderButton = ({ path, title, currentPath }) => {

    return (
        <Link className={path === currentPath ? `${styles.button} ${styles.active}` : styles.button} to={ path }>{ title }</Link>
    )

}