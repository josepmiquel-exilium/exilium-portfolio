export const orderArrByNum = (array) => {
    return array.sort((a, b) => a.order - b.order);
};
