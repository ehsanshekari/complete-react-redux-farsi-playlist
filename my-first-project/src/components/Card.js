function Card(){
    return <div class="card" style={{width: '18rem', marginBottom: '10px'}}>
    <img class="card-img-top" src="https://picsum.photos/200" alt="alt text" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="http://google.com" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default Card;