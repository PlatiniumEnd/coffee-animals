function noter(note) {
let test = document.notation.votre_note.value;
if (test < 20) {
    alert("Vous avez tapé : " + test + ". Je suis sûr que vous pouvez faire mieux !");
} else {
    alert("Un 20/20, Waouh !")
}
}

while (test !== 20) {
    noter(note)
}