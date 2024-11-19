const capitalize = string => {
    let firstLetter = string.charAt(0).toUpperCase();
    return firstLetter += string.slice(1, string.length);
}

module.exports = {
    capitalize,
};