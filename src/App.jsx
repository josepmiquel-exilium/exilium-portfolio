// React utils
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './modules/portfolio/pages/home/Home';

// Components
import Layout from './modules/portfolio/layout/Layout';

// Scss
import './App.scss';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:section" element={<Home />} />
            </Routes>
        </Layout>
    );
}

export default App;
