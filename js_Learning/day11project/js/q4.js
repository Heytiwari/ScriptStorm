let startCharacter = prompt(`Enter Start Character: `);
let endCharacter = prompt(`Enter End Character: `);

do {
    document.write(`${startCharacter} &nbsp;`);
    startCharacter = String.fromCharCode(startCharacter.charCodeAt(0) + 1);
} while (startCharacter <= endCharacter);