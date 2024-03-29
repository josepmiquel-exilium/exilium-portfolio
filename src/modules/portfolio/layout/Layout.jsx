// Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// Scss
import './Layout.scss';

const Layout = ({ children }) => {
    return (
        <>
            <div className="layout__container">
                <Header />
                <div className="layout__body__container">{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
