import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";
// import DonationCard from "../Donation/DonationCard";
// import DonationsCard from "../../Components/Donations/DonationsCard";


const Home = () => {
    const donations = useLoaderData()
    const [input, setInput] =useState('')
    const[filterData,setFilterData] =useState(donations)
    // console.log(donations); 
    const handleInput = e =>{
        setInput(e.target.value)
    }

    const handleSearch = ()=>{
        const filterData = donations.filter((donate)=>donate.category_name.
        toLowerCase().includes(input.toLowerCase()))
        setFilterData(filterData)
    }
    return (
        <div>
           <Banner searchName={handleSearch} input={input} inputValue={handleInput}></Banner>
           <Donations key={donations.id} donations={filterData} ></Donations>
        </div>
    );
};

export default Home;