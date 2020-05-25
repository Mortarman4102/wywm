/*
        SENATE
  party         party
 Radiant         Dire
 
Gameplay: 1 senator will continue to have voting rights as long as
the senator is not banned. 

Remaining senator will announce vicotory and push party agenda.

let string = "p1p2"

one solution is to find the max char in the string, and label that the winner. 

if even number of senators then find the second to last senator.


*/

function senatePartyMajorityFinder(string) {
	let senators = string.toLowerCase();
	//So we can have consistent character values even if one char is cased
	//different.

	const characterMap = {};
	let max = 0;
	let maxCharacter = '';
	let winningParty = '';

	for (let party of senators) {
		if (characterMap[party]) {
			characterMap[party]++;
		} else {
			characterMap[party] = 1;
		}
	}

	for (let party in characterMap) {
		if (characterMap[party] > max) {
			max = characterMap[party];
			maxCharacter = party;
		}
	}
	if (maxCharacter === 'r') {
		winningParty = 'Radiant';
	} else if (maxCharacter === 'd') {
		winningParty = 'Dire';
	}
	return winningParty;
}
let senators = 'Rdd';
console.log(senatePartyMajorityFinder(senators));
