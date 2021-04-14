import StatItem from './StatItem';
import PropTypes from "prop-types";

const StatList = ({ stats }) => (
        <ul className="stat-list">
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