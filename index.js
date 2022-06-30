const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    return appendCat = [...cats.slice(), name];
}
function prependCat(name) {
    return prependCat = [name, ...cats.slice()];
}
function removeLastCat() {
    return removeLastCat = cats.slice(0, 2);
}
function removeFirstCat() {
    return removeFirstCat = cats.slice(1);
}