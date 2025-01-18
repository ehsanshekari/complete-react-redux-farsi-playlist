function Quote(props) {
    return <div className="card" style={{marginBottom: '10px'}}>
    <div className="card-header">
      Quote
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>{props.text}</p>
        <footer className="blockquote-footer">{props.author} in <cite title="Source Title">{props.source}</cite></footer>
      </blockquote>
    </div>
  </div>
}

export default Quote;