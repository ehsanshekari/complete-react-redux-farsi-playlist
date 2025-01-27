import {useContext} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import ThemeContext from '../contexts/ThemeContext';

export default function ColorToggleButton({theme, onThemeChange}) {
  const myThemeContext = useContext(ThemeContext);

  const handleChange = (event, theme) => {
    if(theme){
      myThemeContext.onThemeChange(theme);
    }
  };

  return (
    <div className="d-flex justify-content-center mb-5">
      <ToggleButtonGroup
        color="primary"
        value={myThemeContext.theme}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
