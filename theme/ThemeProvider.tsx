import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const dafaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGTH;

const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(dafaultTheme) 

  const dafaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])
  return (
    <ThemeContext.Provider value={dafaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;