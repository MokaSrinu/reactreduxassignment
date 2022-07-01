import './App.css';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { Tododetails } from './components/Tododetails';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/Todo/:id" element={<Tododetails/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

