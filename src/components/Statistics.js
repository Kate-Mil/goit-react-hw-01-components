import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import StatisticsTitle from './StatisticsTitle';

export default function Statistics({ stats, title }) {
  return (
    <section class="statistics">
      {title && <StatisticsTitle title={title} />}
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
