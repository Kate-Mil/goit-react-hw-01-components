import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import StatisticsTitle from './StatisticsTitle';
import css from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      {title && <StatisticsTitle title={title} />}
      <ul className={css.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
