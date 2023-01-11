import Header from './components/header/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/login" element={<h1>This is login</h1>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
