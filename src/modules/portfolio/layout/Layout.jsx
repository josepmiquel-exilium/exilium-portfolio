// Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// Scss
import './Layout.scss';

const Layout = ({ children }) => {
    return (
        <>
            <div className="layout__container">
                {/* <div className="line line__top"></div>
                <div className="line line__bottom"></div>
                <div className="line line__left"></div>
                <div className="line line__right"></div> */}

                {/* Header */}
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
