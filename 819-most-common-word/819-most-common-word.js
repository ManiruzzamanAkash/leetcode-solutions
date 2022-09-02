/**
 * Find Most Common Word
 *
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const matchedWords = paragraph.match(/\w+/g);
    const hashmap = {};

    let mostCommonWord = '';
    let mostCommonWordCount = 0;

    matchedWords.forEach(wordString => {
        const word = wordString.trim().toLowerCase();

        if (!banned.includes(word)) {
            if (Object.keys(hashmap).includes(word)) {
                hashmap[word] = parseInt(hashmap?.[word] ?? 0) + 1;
            } else {
                hashmap[word] = 1;
            }
            
            if (hashmap[word] > mostCommonWordCount) {
                mostCommonWordCount = hashmap[word];
                mostCommonWord = word;
            }
        }
    });
    
    return mostCommonWord;
};