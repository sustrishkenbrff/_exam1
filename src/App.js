import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import News from './pages/news';
import NotFound from './pages/errorpage';
import New from './pages/news/new1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Auth />} />
        <Route path="news" element={<News />} />
        <Route path="new1" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;