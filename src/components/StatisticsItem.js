import PropTypes from "prop-types";
export default function StatisticsItem ({id,label,percentage}) {
    return (
      <li class="item" key = {id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    )
}

StatisticsItem.propTypes ={
    label : PropTypes.string.isRequired,
    percentage :PropTypes.number.isRequired
}