import StatList from './StatList';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
        <section className={styles.statistics}>
            {title && (<h2 className={styles.title}>{title}</h2>)}
            <StatList stats={stats} />
        </section>
    );

export default Statistics;