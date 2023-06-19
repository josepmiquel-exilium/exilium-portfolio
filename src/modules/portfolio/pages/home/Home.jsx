// React utils
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Superhero from './sections/superhero/Superhero';
import Aboutme from './sections/aboutme/Aboutme';
import Experience from './sections/experience/Experience';
import Contact from './sections/contact/Contact';
import Work from './sections/work/Work';

// Scss
import './Home.scss';

const Home = () => {
    const aboutContainer = useRef(null);
    const experienceContainer = useRef(null);
    const workContainer = useRef(null);
    const contactContainer = useRef(null);

    const { section } = useParams();

    useEffect(() => {
        switch (section) {
            case 'about':
                aboutContainer.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'experience':
                experienceContainer.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'work':
                workContainer.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactContainer.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    }, [section, aboutContainer, experienceContainer, workContainer, contactContainer]);

    return (
        <div className="home__container">
            <section className="container">
                <Superhero />
            </section>

            <section className="container" id="about" ref={aboutContainer}>
                <Aboutme />
            </section>

            <section
                className="experience__section container"
                id="experience"
                ref={experienceContainer}
            >
                <Experience />
            </section>

            <section className="work__section" id="work" ref={workContainer}>
                <Work />
            </section>

            <section className="contact__section container" id="contact" ref={contactContainer}>
                <Contact />
            </section>
        </div>
    );
};

export default Home;
