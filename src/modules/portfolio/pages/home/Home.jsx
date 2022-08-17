// Components
import Aboutme from './sections/aboutme/Aboutme';
import Superhero from './sections/superhero/Superhero';

// Scss
import './Home.scss';
import Experience from './sections/experience/Experience';
import Contact from './sections/contact/Contact';

const Home = () => {
    return (
        <div className="home__container">
            <section>
                <Superhero />
            </section>

            <section>
                <Aboutme />
            </section>

            <section className="experience__section">
                <Experience />
            </section>

            <section className="contact__section">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
