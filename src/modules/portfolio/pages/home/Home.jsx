// Components
import Superhero from './sections/superhero/Superhero';
import Aboutme from './sections/aboutme/Aboutme';
import Experience from './sections/experience/Experience';
import Contact from './sections/contact/Contact';
import Work from './sections/work/Work';

// Scss
import './Home.scss';

const Home = () => {
    return (
        <div className="home__container">
            <section className="container">
                <Superhero />
            </section>

            <section className="container">
                <Aboutme />
            </section>

            <section className="experience__section container">
                <Experience />
            </section>

            <section>
                <Work />
            </section>

            <section className="contact__section container">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
