// React utils
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './modules/portfolio/pages/home/Home';

// Components
import Layout from './modules/portfolio/layout/Layout';

// Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Scss
import './App.scss';

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#f5cb25',
                main: '#ffcd00',
                dark: '#c6a00c',
                contrastText: '#fff',
            },
            secondary: {
                light: '#333333',
                main: '#000000',
                dark: '#000000',
                contrastText: '#000',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:section" element={<Home />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
