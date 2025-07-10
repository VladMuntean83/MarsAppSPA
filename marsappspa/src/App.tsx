import { Routes, Route, Link } from 'react-router-dom'
import { HomePage, About } from './Pages.tsx'
import Nasa from './Nasa'
import './App.css'

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/counter">Counter</Link>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/counter" element={<Nasa />} />
            </Routes>
        </div>
    );
}




export default App;
