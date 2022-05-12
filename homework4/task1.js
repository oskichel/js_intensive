const log100 = () => console.log(100);

const createDebounceFunction = (callback, lag) => {
    let timeOut;
    clearTimeout(timeOut);
    timeOut = setTimeout(callback, lag);
};

const debounceLog100 = () => {
    return createDebounceFunction(log100, 1000);
};

debounceLog100();