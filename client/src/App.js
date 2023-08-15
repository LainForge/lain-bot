import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Chat from './pages/chat';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Chat />} />
            {/* <Route path="/chat" element={<Chat />} />
            <Route path='Placeholder' element={<Placeholder />} /> */}
        </Routes>
    </BrowserRouter>
  )
}   