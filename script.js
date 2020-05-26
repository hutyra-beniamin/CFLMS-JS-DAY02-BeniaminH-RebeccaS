var randomTemp = Math.floor(Math.random() * 31) - 5;
document.write(randomTemp);

if (randomTemp > 11) {
    document.write(" The weather is moderate ");
} else {
    document.write(" The weather is cold ");
}