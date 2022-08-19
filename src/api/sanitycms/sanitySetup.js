import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: process.env.REACT_APP_CMS_PROJECTID,
    dataset: process.env.REACT_APP_CMS_DATASET,
    useCdn: true,
});
