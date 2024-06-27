import React, { useState, useEffect } from 'react';

const CovidList = () => {
  const [covidData, setCovidData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
            'x-rapidapi-key': '12f2e63d7bmshb2dbdd4c7619415p1dd412jsnb9b85eeef10c',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCovidData(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>COVID-19 Data by State</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {covidData && covidData.map((stateData) => (
            <li key={stateData.stateName}>
              {stateData.stateName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CovidList;
