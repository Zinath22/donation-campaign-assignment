import PropTypes from 'prop-types'
import swal from "sweetalert";


const DonateCard = ({donate}) => {

    const {id,title,description,price,card_img} = donate || {}

    const handleAddDonation =()=>{
        const addedDonationArray =[];

        const donationItem = JSON.parse(localStorage.getItem('donation'))
        
        if(!donationItem){
       addedDonationArray.push(donate)
       localStorage.setItem('donation', JSON.stringify(addedDonationArray))
       swal("Good job!", "Donation Added", "success");
        }
 else{
    const isExits = donationItem.find(donate=>donate.id === id)
   if(!isExits){
    addedDonationArray.push(...donationItem, donate)
    localStorage.setItem('donation', JSON.stringify(addedDonationArray))
    swal("Good job!", "Donation Added");

   }
   else{
    swal("Opps!", "No duplicate Donation Added");
   }
}

     }


    return (
        <div className="flex justify-center items-center ">
              <div className="mx-auto flex w-[600px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className="w-full rounded-xl  h-[300px]"
      src={card_img}/>
      <div className=" absolute bottom-0  p-4 bg-black bg-opacity-50 w-full">
        <button 
        onClick={handleAddDonation}
        className="w-auto px-2 h-[32px] text-xl  rounded-sm  text-white bg-red-500">
            Donate ${price}
            </button>

      </div>
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p className="mt-3 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
     {description}
    </p>
  </div>
 
        </div>
        </div>
    );
};
DonateCard.propTypes ={
  donate: PropTypes.object,
}

export default DonateCard;