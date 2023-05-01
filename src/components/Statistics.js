import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";

export default function Statistics ({stats}){
    return (
    <section class="statistics">
    <h2 class="title">Upload stat</h2>

    <ul class="stat-list">
        {stats.map(data =>(
        <StatisticsItem
        key = {data.id}
        label = {data.label}
        percentage = {data.percentage}
        />
        ))}
    </ul>
</section>
    )
}

Statistics.propTypes = {
    stats : PropTypes.arrayOf(PropTypes.object)
}