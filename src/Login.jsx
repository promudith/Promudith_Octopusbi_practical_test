import React from 'react'
import { useEffect, useState } from 'react';
import { db } from './firebase';


function Login() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = db.ref('data');
    dataRef.on('value', (snapshot) => {
      setData(snapshot.val());
    });
  }, []);
  return (
    <div>Login
      <div>
      {data && (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      )}
      </div>
    </div>
  )
}

export default Login