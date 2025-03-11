import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Bosses from './pages/Bosses';
import BossDetail from './pages/BossDetail';
import EditForm from './pages/EditForm';
import PageNotFound from './pages/PageNotFound';

function App() { // Asegurarme luego de que las tengo bien linkeadas las Routes.

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bosses" element={<Bosses />} />
        <Route path="/boss/:id" element={<BossDetail />} />
        <Route path="/edit-form" element={<EditForm />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>

    </div>
  )
}

export default App