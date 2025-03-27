import { useState } from "react";

const fetchStockData = async () => {
  let allData = [];
  try {
    const requests = Array.from({ length: 5 }, (_, i) =>
      fetch(`https://jsonmock.hackerrank.com/api/stocks?page=${i + 1}`).then(
        (response) => response.json()
      )
    );
    const responses = await Promise.all(requests);
    allData = responses.flatMap((res) => res.data);
  } catch (error) {
    console.error(`Error fetching page ${page}:`, error);
  }
  return allData;
};

function App() {
  const [data, setData] = useState([]);
  const [stockDaysData, setStockDaysData] = useState(0);

  // const handleClick = async () => {
  //   let allData = [];
  //   for (let page = 1; page <= 5; page++) {
  //     debugger;
  //     try {
  //       const response = await fetch(
  //         `https://jsonmock.hackerrank.com/api/stocks?page=${page}`
  //       );
  //       const result = await response.json();
  //       setStockDaysData(result.total);
  //       allData = [...allData, ...result.data];
  //     } catch (error) {
  //       console.error(`Error fetching page ${page}:`, error);
  //     }
  //   }
  //   setData(allData);
  // };

  const handleClick = async () => {
    const stockData = await fetchStockData();
    setData(stockData);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Stock Data</h1>
      <div className="m-10">
        <button className="border rounded-xs px-3 py-1" onClick={handleClick}>
          Get Data
        </button>
      </div>
      <table className="table-auto border w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Open</th>
            <th className="py-2 px-4 border">High</th>
            <th className="py-2 px-4 border">Low</th>
            <th className="py-2 px-4 border">Close</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border">
                <td className="py-2 px-4 border">{item.date}</td>
                <td className="py-2 px-4 border">{item.open}</td>
                <td className="py-2 px-4 border">{item.high}</td>
                <td className="py-2 px-4 border">{item.low}</td>
                <td className="py-2 px-4 border">{item.close}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-2">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
