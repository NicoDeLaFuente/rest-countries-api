import { createContext, useState } from "react";


const ThemeContext = createContext(false);

const ThemeProvider = ({children}) => {

    const [isDark, setIsDark] = useState(false)

    const clickHandlerThemeMode = () => {
        setIsDark(!isDark)
    }


    return  <ThemeContext.Provider value={{isDark, clickHandlerThemeMode}}>
                {children}
            </ThemeContext.Provider>
}

export {ThemeContext, ThemeProvider}