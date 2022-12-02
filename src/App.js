import './App.css';
import IndexRouter from './IndexRouter';
function App() {
  const Mock = {
    "carulla": {},
    "la_rebaja": {},
    "farmatodo": {},
    "hipermar": {},
    "olimpica": {},
  }

  return (
    <div className="App">
      <IndexRouter />
    </div>
  );
}

export default App;
