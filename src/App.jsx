// React utils
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './modules/portfolio/pages/home/Home';

// Scss
import './App.scss';
import Layout from './modules/portfolio/layout/Layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    );
}

export default App;
