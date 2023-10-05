import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const DonationsCard = ({donate}) => {
    const {id,category_name,title,card_bg,category_name_bg,text_color,card_img} = donate || {}
    console.log(donate);
    return (
        <div >
      <Link to={`/donations/${id}`}>
      <div
     
      style={{backgroundColor: card_bg}}
       className=" flex w-[95%] mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
  <div className="relative  overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className="rounded-md w-full"
      src={card_img}
      
    />
  </div>
  <div className="p-6">
    <h4 
   
    style={{color: text_color, backgroundColor:category_name_bg}} 
    className="w-max px-3 py-2 rounded-md block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {category_name}
      
    </h4>
    <p 
    style={{color: text_color}}
    className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
     {title}
    </p>
  </div>
  </div>
      </Link>
  </div>
  
      

       
    );
};
DonationsCard.propTypes ={
  donate: PropTypes.object
}

export default DonationsCard;