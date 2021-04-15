import StatItem from './StatItem';
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

const StatList = ({ stats }) => (
        <ul className={styles.list}>
            {stats.map((dataItem) => (
                <StatItem key={dataItem.id} label={dataItem.label} percentage={dataItem.percentage} />
            ))}
        </ul>
    );

StatList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};


export default StatList;