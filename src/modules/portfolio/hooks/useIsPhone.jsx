const { useEffect } = require('react');
const { useState } = require('react');
const { useMediaQuery } = require('react-responsive');

const useIsPhone = () => {
    const isPhone = useMediaQuery({ query: '(max-width: 576px)' });

    return isPhone;
};

export default useIsPhone;
