import './App.css';
import Portfolio from './MainPage';
import Blog from './Blog';
import BlogPost from './BlogPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
