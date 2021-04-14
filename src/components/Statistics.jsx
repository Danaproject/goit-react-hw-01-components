import StatList from './StatList';

const Statistics = ({ title, stats }) => (
        <section className="statistics">
            {title && (<h2 className="title">{title}</h2>)}
            <StatList stats={stats} />
        </section>
    );

export default Statistics;