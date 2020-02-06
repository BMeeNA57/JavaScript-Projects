function my_dic() {
    var animal = {
        species:"dog",
        color:"red",
        breed:"poodle",
        age: 2,
        sound:"Bark!"
    };
    document.getElementById("Dic").innerHTML= animal.sound;
}

function my_diction() {
    var dog = {
        species:"species",
        color:"red",
        breed:"poodle",
        age: 2,
        sound:"Bark!"
    };
    delete dog.species
    document.getElementById("Diction").innerHTML= dog.species;
}