import { createContext, useState } from "react";


export const StateContext = createContext({});

export default function ThemeContext({children}: any) {

const [theme, setTheme] = useState(true);

function toggleTheme() {
    setTheme(prevTheme => !prevTheme)
}

const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    return (
        
        <StateContext.Provider value={
            {
                toggleTheme,
                theme,
                toggleMenu,
                isOpen
            }
        }>
          {children}
        </StateContext.Provider>
    )
}

