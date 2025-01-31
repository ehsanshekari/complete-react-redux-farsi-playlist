import Box from "./Box";
import ClearInput from "./ClearInput";
import Animes from "./Animes";

function App() {
  return (
    <div style={{margin: '20px'}}>
      <Box text='react'/>
      <hr />
      <ClearInput />
      <hr />
      <Animes />
    </div>
  );
}

export default App;
