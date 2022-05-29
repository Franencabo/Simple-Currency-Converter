const music = ["rock", "pop", "hip-hop", "electronic"];

const myFavoriteMusic = () => {
    music.forEach(function (item, _, array) {
        console.log(`My favorite music is ${item} choosing from ${array}`)
    });
}
