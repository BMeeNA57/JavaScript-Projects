function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " are in the " + character.innerHTML + " universe!");
}