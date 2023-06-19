import sanityAPI from '../sanitySetup';
import imageUrlBuilder from '@sanity/image-url';

export const fetchExperience = async () => {
    return await sanityAPI.fetch(`*[_type == "experience"]{
        company,
        position,
        duration,
        tasks,
        order
    }`);
};

export const fetchWork = async () => {
    return await sanityAPI.fetch(`*[_type == "work"]{
        type,
        name,
        description,
        image,
        roles,
        techs,
        github,
        url,
        order
    }`);
};

export const fetchImage = (url) => {
    const builder = imageUrlBuilder(sanityAPI);

    return builder.image(url).url().toString();
};
