// import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noDataFound, setNoDataFound] = useState(false)
    const [seeMore, setSeeMore] = useState(false)
    
    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation'))

        if(donationItem){
            setDonation(donationItem)
        }
        else{
        
            setNoDataFound('no data found')
        }
    },[])

    console.log(donation);
    
    const handleRemove = ()=>{
        localStorage.clear()
        setDonation([])
        setNoDataFound('No Data Found')
    }

    return (
        <div>
             {noDataFound? <p className=" flex justify-center items-center">{noDataFound}</p>: 
             <div>
                {donation.length > 0 && (
                <button 
                onClick={handleRemove}
                className="mx-auto text-lg bg-green-500 text-white rounded-sm  block px-2 py-2 mb-10 ">Delete All card</button>
                )}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                seeMore?donation.map(donate=>(
                <DonationCard key={donate.id} donate={donate}></DonationCard>
                    ))
                    :
                    donation.slice(0, 4).map(donate=>(
                        <DonationCard key={donate.id} donate={donate}></DonationCard>))

                }
               </div>

             {donation.length > 4 &&   <button 
                onClick={()=>setSeeMore(!seeMore)}
                className="mx-auto text-lg mt-10 bg-green-500  block px-3 rounded-sm py-2 mb-10 text-white ">{seeMore? "See Less" :"See More"}</button>}
             </div>
             }
        </div>
    );
};
// Donation.propTypes={
//     donate: PropTypes.array
// }

export default Donation;