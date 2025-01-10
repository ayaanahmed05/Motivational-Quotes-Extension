// random quotes
// TODO: store quotes and authors in a 2d array ex [["quote"], ["author"]]
const quotes = [
    "\"We cannot solve problems with the kind of thinking we employed when we came up with them.\" - Albert Einstein",
    "\"Learn as if you will live forever, live like you will die tomorrow.\" - Mahatma Gandhi",
    "\"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.\" - Mark Twain",
    "\"When you change your thoughts, remember to also change your world.\" - Norman Vincent Peale",
    "\"The road to success and the road to failure are almost exactly the same.\" - Colin R. Davis"
]

// element selectors
const quoteParagraph = document.getElementById("quote-text");
const refreshButton = document.getElementById("refresh-button");

// returns a random integer between main (inclusive) and max (included)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// API Fetching

/* 
    We are using ZenQuotes.io to provide our quotes for us, and we 
    cannot use Access-Control-Allow-Origin headers without a premium key. 
    As a result, we are using https://cors-anywhere.herokuapp.com/ to 
    allow us to use this API. 

    This project is purely for learning purposes, and I have no intentions 
    of monetizing this in any way. 

    In order for this to work, you must click on the link above and request 
    temporary access for the API calls to work. Visit:
    https://cors-anywhere.herokuapp.com/corsdemo
    and click the "Request temporary access" button.
*/
async function fetchQuote() {
    const proxyURL = "https://cors-anywhere.herokuapp.com/"
    const apiURL = "https://zenquotes.io/api/random"

    try {
        const response = await fetch(proxyURL + apiURL);
        if (!response.ok) {
            throw new Error("Response is not ok");
        }

        const data = await response.json();
        const quote = data[0].q;
        const author = data[0].a;

        console.log(`${quote} - ${author}`);
        console.log(data);

        return data[0];
    }
    catch (error) {
        console.error("There is a problem fetching the quote");
    }
}

async function displayQuote() {
    // get quote from api and wait for it to return
    const quoteData = await fetchQuote();

    if (quoteParagraph === null) {
        alert("null element");
    } else {
        quoteParagraph.innerHTML = `<em>${quoteData.q}</em> &mdash; ${quoteData.a}` || "Undefined";
    }
}


if (refreshButton === null) {
    alert("null element");
} else {
    refreshButton.addEventListener("click", displayQuote);
}

displayQuote();
