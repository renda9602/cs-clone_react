//외부라이브
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//스타일
import './index.css';

//컴포넌트
import About from './pages/About';
import Footer from './pages/common/Footer';
import Header from './pages/common/Header';
import Main from './pages/Main';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
    <About />
    <Footer />
  </StrictMode>
);
