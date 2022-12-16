import { Children  , createContext , useContext , useState } from "react";

const ThemeContext = createContext({});

export const useThemeContext = ()  => {
    return useContext(ThemeContext)
}


const ThemeContextProvider = ({children}) => {


const [ theme , SetTheme ] = useState('light');
const themeHandler = ( state ) => {
 SetTheme(state);
}


return (
    <ThemeContext.Provider value={{ theme , themeHandler }}>
        {children}
    </ThemeContext.Provider>
)


}

export default ThemeContextProvider;