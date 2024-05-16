import './App.css';
import { Tooltip } from './Components/Tooltip';

function App() {
  return (
    <div className="App">
      {/* text is mendatory, position is optional and if not provided will be right */}
      <Tooltip text="Hello, I'm Chandrika" position="top">
        <button className='btn'>Say Hello</button>
      </Tooltip>
      <Tooltip text="I'm Monkey D Luffy" position="right">
        <img className='Luffy' src='https://preview.redd.it/w2xgfjroo9e51.png?auto=webp&s=4e3cf3ecb3ab58a16fc6eae303f320be4d9c2539' alt='Batman' />
      </Tooltip>
    </div>
  );
}

export default App;
