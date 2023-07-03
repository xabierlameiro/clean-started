export const capitalize = (str: string) => {
    const words = str.split(/[\s_]+/);
    const capitalizedWord = words.map((word: string) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1);
        return firstLetter + restOfWord;
    });
    return capitalizedWord.join(' ');
};
