import React, { useState } from 'react'
 
import {

  RouterProvider,
  
} from "react-router-dom";

import { router } from './Router.jsx';
import { MyContext } from './Context.jsx';

function App() {
  const [user, setUser] = useState([])
  console.log(user)
  return (
    <React.StrictMode>
        <MyContext.Provider value={{ user, setUser }}>
          <RouterProvider router={router} />
        </MyContext.Provider>
      </React.StrictMode>
  )
}

export default App
