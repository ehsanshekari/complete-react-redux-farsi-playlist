import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Child() {
  const { theme } = useContext(ThemeContext);

  const styles = theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light';

  return (
    <div className={`p-3 rounded ${styles}`}>
      This is the <strong>Child component</strong> and you have selected this
      theme: {theme}
    </div>
  );
}

export default Child;
