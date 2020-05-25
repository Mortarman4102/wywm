/*
    Given a string, return the max number of occurrences of ANY substring 
    under the following rules.

        1)the number of unique chars in the substring must be <= maxLetters
        2)the substring sixe mmust be between minSise and maxSize

*/

function constrainedMaxOccurances(string, maxLetters, minSize, maxSize) {
    const subStringMap = new Map();
    //using a Map to store
	let max = 0;

	action: for (let i = 0; i <= string.length - minSize; ++i) {
		const substr = string.substr(i, minSize);
		const setCharacter = new Set();

		for (const character of substr) {
			setCharacter.add(character);
			if (setCharacter.size > maxLetters) continue action;
		}
		const count = subStringMap.has(substr) ? subStringMap.get(substr) + 1 : 1;
		subStringMap.set(substr, count);
		count > max && (max = count);
	}
	return max;
}
