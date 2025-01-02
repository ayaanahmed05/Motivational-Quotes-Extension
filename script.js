// element selectors
const quoteParagraph = document.getElementById("quote-text");
const refreshButton = document.getElementById("refresh-button");

// random quotes
// TODO: store quotes and authors in a 2d array ex [["quote"], ["author"]]
const quotes = [
    "\"We cannot solve problems with the kind of thinking we employed when we came up with them.\" - Albert Einstein",
    "\"Learn as if you will live forever, live like you will die tomorrow.\" - Mahatma Gandhi",
    "\"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.\" - Mark Twain",
    "\"When you change your thoughts, remember to also change your world.\" - Norman Vincent Peale",
    "\"The road to success and the road to failure are almost exactly the same.\" - Colin R. Davis"
]

// returns a random integer between main (inclusive) and max (included)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function refresh() {
    if (quoteParagraph === null) {
        alert("null element");
    } else {
        quoteParagraph.innerText = quotes[getRandomInteger(0, quotes.length - 1)] || "Undefined";
    }
}

if (quoteParagraph === null) {
    alert("null element");
} else {
    quoteParagraph.innerText = quotes[getRandomInteger(0, quotes.length - 1)] || "Undefined";
}

if (refreshButton === null) {
    alert("null element");
} else {
    refreshButton.onclick = refresh;
}