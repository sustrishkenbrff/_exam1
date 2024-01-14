import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import News from './pages/news';
import NotFound from './pages/errorpage';
import New from './pages/news/new1';
import Header from './components/Header'
import Footer from './components/Footer'
import DonatePage from './pages/donate'

function App() {
  return (
    <BrowserRouter>
            <Header/>

      <Routes>       
        <Route path="" element={<Auth />} />
        <Route path="news" element={<News />} />
        <Route path="new1" element={<New />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
            <Footer/>
    </BrowserRouter>
  );
}

export default App;