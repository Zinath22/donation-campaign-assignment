import { useEffect, useState } from "react";
import { Legend, Pie, PieChart } from "recharts";


const Statistics = () => {
    const [donatedCards, setDonatedCards] = useState([]);
  const [totalDonated, setTotalDonated] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [donatedPercentage, setDonatedPercentage] = useState(0);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    // Get donated cards from local storage
    const donatedCardsData = JSON.parse(localStorage.getItem("donation")) || [];
console.log(donatedCardsData)
    // Calculate total donated amount
    let totalDonated = 0;
    for (const card of donatedCardsData) {
      totalDonated += parseFloat(card.price);
    }
console.log(totalDonated);
    // Fetch data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Calculate total price from JSON data
        let totalPrice = 0;
        for (const card of data) {
          totalPrice += parseFloat(card.price);
        }

        // Calculate donated percentage
        const percentage = (totalDonated / totalPrice) * 100;

        // Update the pie chart data
        const updatedPieChartData = [
          { name: "Donated", value: totalDonated, fill: "green" },
          { name: "Remaining", value: totalPrice - totalDonated, fill: "red" },
        ];

        setDonatedCards(donatedCardsData);
        setTotalDonated(totalDonated);
        setTotalPrice(totalPrice);
        setDonatedPercentage(percentage.toFixed(2));
        setPieChartData(updatedPieChartData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Removed donatedCards from dependencies

  return (
    <div>
        totalprice: {totalPrice}
        <br />
        totaldonTion: {totalDonated}
      <h1 className="text-2xl font-bold text-center mt-10">Donation Statistics</h1>
      <div className="flex justify-center items-center h-[70vh]">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx={200}
            cy={160}
            innerRadius={0}
            outerRadius={130}
            paddingAngle={0}
          />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{
              position: "absolute",
              bottom: 40,
              right: 10,
            }}
            data={[
              { name: "Donated", value: "green", type: "square" },
              { name: "Remaining", value: "red", type: "square" },
            ]}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;