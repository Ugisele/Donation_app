import React, { createContext, useState } from 'react';


export const ChangeMode = createContext();

export const modeChanged = ({children}) => {
    const [light,setLight] = useState(false)

    const handleChange = () => {
        setLight(!light)
    }

   return (
    <ChangeMode.Provider value={{handleChange}}>
        {children}
    </ChangeMode.Provider>
   )
}

