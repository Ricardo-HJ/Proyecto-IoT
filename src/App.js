import React, { useState, useEffect } from 'react';



export function LastReading({ CompID }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://10.22.207.25:3100/api/getLastLog/${CompID}`)
      .then(response => response.json())
      .then(data => { setData(data.data); })
      .catch(console.error);
  }, [CompID]); // Include CompID in the dependency array

  if (data) {
    const lastData = data[data.length - 1];
    const logValue = lastData.LogValue;

    return (
      <div>
      {`${logValue}`}
      </div>
    );
  }

  return <div>0.00</div>;
}


