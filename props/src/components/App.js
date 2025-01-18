import Quote from './Quote';
import LikeDislike from './LikeDislike';

// const quotes = [
//   {
//     id: "id1",
//     text: "Frankly, my dear, I don't give a damn.",
//     author: 'Clark Gable',
//     source: 'Gone with the Wind',
//   },
//   {
//     id: "id2",
//     text: 'Show me the money!',
//     author: 'Rod Tidwell',
//     source: 'Jerry Maguire',
//   },
//   {
//     id: "id3",
//     text: "E.T. phone home.",
//     author: 'E.T.',
//     source: 'E.T. the Extra-Terrestrial',
//   },
// ];

function App() {
  return (
    // <div className="container" style={{ margin: '10px' }}>
    //   {
    //     quotes.map(quote => <Quote text={quote.text} author={quote.author} source={quote.source} key={quote.id} />)
    //   }
    // </div>
    <div className='container'>
      <LikeDislike>
        <Quote text="I love react" author="Ehsan Shekari" source="React course"/>
      </LikeDislike>
    </div>
  );
}

export default App;
