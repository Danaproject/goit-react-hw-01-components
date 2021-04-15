import styles from './Statistics.module.css';

const StatItem = ({ label, percentage }) => (
        <li className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>
    );

export default StatItem;