import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={styles.item}>
        <span className={isOnline ? styles.isOnline : styles.status}></span>
        <img className={styles.avatar} src={avatar} alt="Friend avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>
);

export default FriendListItem;