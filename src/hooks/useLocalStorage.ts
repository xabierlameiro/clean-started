import { Keyword } from '../constants/keywords.contants';

export const useLocalStorage = () => {
    const setOnStorage = <T extends Object>(key: Keyword, data: T) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const getFromStorage = (key: Keyword) => {
        return localStorage.getItem(key);
    };

    const removeFromStorage = (key: Keyword) => {
        localStorage.removeItem(key);
    };

    return {
        setOnStorage,
        getFromStorage,
        removeFromStorage,
    };
};
