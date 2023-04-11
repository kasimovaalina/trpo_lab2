import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <h1>~Приложение работает~</h1>
      <iframe title='pandas' src="https://giphy.com/embed/ieaUdBJJC19uw" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/panda-slide-ieaUdBJJC19uw">via GIPHY</a></p>
      <MyComponent text="Testing!"></MyComponent>
    </div>
  );
}

export default App;
