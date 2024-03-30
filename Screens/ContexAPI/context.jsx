import React, { createContext, useState } from 'react';


export const ChangeMode = createContext();

export const ModeChanged = ({children}) => {
    const [light,setLight] = useState(false)

    const handleChange = () => {
        setLight(!light)
    }


   
   return (
    <ChangeMode.Provider value={{handleChange,light,}}>
        {children}
    </ChangeMode.Provider>
   )
}

