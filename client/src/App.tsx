import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  name?: string;
  id?: number;
}

const user: User = {
  name: 'Hayes',
  id: 0,
};

function App() {
  const [data, setData] = useState('');
  console.log('Loading');

  useEffect(() => {
    axios.get('http://localhost:5000/').then((res: any): void => {
      console.log('fetching');
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <div>{data}</div>
      <div>{user.name}</div>
    </div>
  );
}

export default App;
