// import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donate }) => {
  const {
    category_name,
    title,
    price,
    card_bg,
    category_name_bg,
    text_color,
    card_img,
    id
  } = donate || {};

  return (
    <div style={{ background: card_bg }} className="flex rounded-lg flex-col md:flex-row gap-4 items-center ">
      <img className="" src={card_img} alt={title} />
      <div>
        <h3 className=" py-1 px-2 mb-2 rounded inline-block font-semibold text-lg text-center" style={{ color: text_color, backgroundColor: category_name_bg }}>{category_name}</h3>
        <p className="text-2xl text-black mb-2 font-semibold">{title}</p>
        <p className="text-lg font-semibold" style={{ color: text_color }}>${price}</p>
        <Link to={`/donations/${id}`}>
          <button className="btn text-lg text-white p-2 rounded mt-2 mb-3 " style={{ background: text_color }}>View Details</button>
        </Link>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  donate: PropTypes.object,
};

export default DonationCard;
