import StatList from './StatList';

const Statistics = ({ title, stats }) => {
    const titleMarkup = title && <h2 className="title">{title}</h2>;
    return (
        <section className="statistics">
            {titleMarkup}
            <StatList stats={stats} />
        </section>
    );
};
export default Statistics;