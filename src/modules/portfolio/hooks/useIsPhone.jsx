const { useMediaQuery } = require('react-responsive');

const useIsPhone = () => {
    return useMediaQuery({ query: '(max-width: 576px)' });
};

export default useIsPhone;
