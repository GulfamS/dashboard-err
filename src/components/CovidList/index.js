import React, { useState, useEffect } from 'react';

const CovidList = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ai-random-user-generator.p.rapidapi.com/random-user?results=7&gender=female&nation=en_US', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'ai-random-user-generator.p.rapidapi.com',
            'x-rapidapi-key': '12f2e63d7bmshb2dbdd4c7619415p1dd412jsnb9b85eeef10c',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUserData(data.results);
        setLoading(false); 
      } catch (error) {
        console.log('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>AI Random User Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {userData && userData.map((user) => (
            <li key={user.name}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CovidList;

