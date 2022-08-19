const TitleLine = ({ number, title }) => {
    return (
        <h2 className="title__section title__line">
            <span className="menu__number">{number}.</span> {title}
        </h2>
    );
};

export default TitleLine;
