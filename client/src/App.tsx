import React from 'react';

interface User {
  name?: string;
  id?: number;
}

const user: User = {
  name: 'Hayes',
  id: 0,
};

function App() {
  return <div>{user.name}</div>;
}

export default App;
