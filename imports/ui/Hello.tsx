import React, { useState } from 'react';
import {LinksCollection, Link} from '../api/links';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const addNewLink = () => {
    LinksCollection.insert({title:'new link', url:'abc', createdAt: new Date()})
  }

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <button onClick={addNewLink}>Add new link</button>
    </div>
  );
};
