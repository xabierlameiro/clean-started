import { Keyword } from '../constants/keywords.contants';

export const useLocalStorage = () => {
    const setOnStorage = <T extends Object>(key: Keyword, data: T) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const getFromStorage = (key: Keyword) => {
        return localStorage.getItem(key);
    };

    return {
        setOnStorage,
        getFromStorage,
    };
};
