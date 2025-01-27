import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  onThemeChage: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
export default ThemeContext;