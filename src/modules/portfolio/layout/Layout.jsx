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

                {/* Body */}
                <div className="layout__body__container">{children}</div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Layout;
