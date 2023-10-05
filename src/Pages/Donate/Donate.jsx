import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "./DonateCard";


const Donate = () => {

    const [donate, setDonate] = useState({})

    const {id} = useParams()
    const IntId = parseInt(id)
    // console.log(id);

    const donations = useLoaderData()
    // console.log(donations);

    useEffect(()=>{
      const findDonate = donations?.find(donate=>donate.id === IntId);
    //   console.log(findDonate);
      setDonate(findDonate);

    },[id, donations])
    console.log(donate);

    return (
        <div className="">
   <DonateCard donate={donate}></DonateCard>
        </div>
    );
};

export default Donate;