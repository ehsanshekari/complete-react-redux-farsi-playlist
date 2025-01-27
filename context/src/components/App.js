import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ThemeSelector from './ThemeSelector';
import Parent from './Parent';
import { ThemeProvider } from '../contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');
  console.log(theme);

  return (
    <div className="container mt-3">
      <ThemeProvider
        value={{
          theme: theme,
          onThemeChange: (selectedTheme) => setTheme(selectedTheme),
        }}
      >
        <ThemeSelector />
        <hr />
        <Parent />
      </ThemeProvider>
    </div>
  );
}

export default App;
