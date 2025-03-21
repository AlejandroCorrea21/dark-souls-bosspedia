import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Bosses from './pages/Bosses';
import BossDetail from './pages/BossDetail';
import PageNotFound from './pages/PageNotFound';
import Comments from './pages/Comments';
import EditCommentForm from './components/EditCommentForm';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bosses" element={<Bosses />} />
        <Route path="/boss/:id" element={<BossDetail />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/edit/:commentId" element={<EditCommentForm />} />
      </Routes>

    </div>
  )
}

export default App