import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'helper/randomColor';

export const Statistic = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.titleWrap}>
        {title && <h2 className={css.title}>{title}</h2>}
      </div>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
