// Scss
import './Superhero.scss';

const Superhero = () => {
    return (
        <div className="superhero__container">
            <div className="superhero__text">
                <h2>Hi, my name is</h2>

                <div className="superhero__presentation">
                    <h1>Josep Miquel.</h1>
                    <h2>Software developer.</h2>
                </div>

                <p>
                    I am a full stack javascript software developer who enjoys building digital
                    experiences and achieve challenges. <br />I can solve{' '}
                    <span className="overline__text">all of your problems</span> some of your
                    problems.
                </p>
            </div>

            <button className="first__button">Download my resume!</button>
        </div>
    );
};

export default Superhero;
