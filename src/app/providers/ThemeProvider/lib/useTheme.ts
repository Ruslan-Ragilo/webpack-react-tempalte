import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext";

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): IUseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme == Theme.DARK ? Theme.LIGTH : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {
    theme,
    toggleTheme
  }
}
