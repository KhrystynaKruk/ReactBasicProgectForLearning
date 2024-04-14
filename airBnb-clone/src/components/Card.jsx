import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";

export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./src/assets/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
            <FaStar />
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    );
}

Card.propTypes = {
    item: PropTypes.shape({
        openSpots: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        coverImg: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            rating: PropTypes.number.isRequired,
            reviewCount: PropTypes.number.isRequired
        }).isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
};
