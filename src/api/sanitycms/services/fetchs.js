import sanityAPI from '../sanitySetup';
import imageUrlBuilder from '@sanity/image-url';

export const fetchExperience = async () => {
    const data = await sanityAPI.fetch(`*[_type == "experience"]{
        company,
        position,
        duration,
        tasks,
        order
    }`);

    return data;
};

export const fetchWork = async () => {
    const data = await sanityAPI.fetch(`*[_type == "work"]{
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

    return data;
};

export const fetchImage = (url) => {
    const builder = imageUrlBuilder(sanityAPI);

    return builder.image(url).url().toString();
};
