import PropTypes from 'prop-types';
import DonationsCard from "./DonationsCard";


const Donations = ({donations}) => {
    console.log("donation file",donations)
    return (
        <div className="py-10 ">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    donations?.map(donate =>(
                        <DonationsCard key={donate.id} donate={donate}></DonationsCard>
                    ))
                }
            </div>
        </div>
    );
};
Donations.propTypes ={
    donations: PropTypes.array
}

export default Donations;