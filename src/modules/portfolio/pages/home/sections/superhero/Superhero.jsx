// Scss
import './Superhero.scss';

const Superhero = () => {
    return (
        <div className="superhero__container">
            <div className="superhero__text">
                <h2>Hi, my name is</h2>

                <div className="superhero__presentation">
                    <h1>Josep Miquel.</h1>
                    <h2>I build things for the web</h2>
                </div>

                <p>
                    I’m a software engineer specializing in building (and occasionally designing)
                    exceptional digital experiences. Currently, I’m focused on building accessible,
                    human-centered products at Upstatement.
                </p>
            </div>

            <button className="first__button">Download my resume!</button>
        </div>
    );
};

export default Superhero;
