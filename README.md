# Motivational Quotes Extension

A simple Chrome extension that displays motivational quotes to inspire you throughout your day. This extension fetches quotes from [ZenQuotes.io](https://zenquotes.io) and updates the quote dynamically.

---

## Features
- Displays a motivational quote with the author's name.
- A "Refresh" button to get a new quote.
- Fetches quotes from ZenQuotes.io.
- Uses **CORS Anywhere** to bypass API restrictions for learning purposes.

---

## Installation Instructions

Follow these steps to load the extension as an unpacked extension in Chrome:

1. Clone or download this repository to your computer.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** by toggling the switch in the top-right corner.
4. Click the **"Load unpacked"** button.
5. Select the folder containing the extension's files (e.g., the folder where `manifest.json` is located).

The extension will now appear in your list of extensions, and you will see its icon in the Chrome toolbar.

---

## Testing with CORS Anywhere

The extension fetches quotes from the [ZenQuotes.io API](https://zenquotes.io/api/).
We use cors-anywhere to utilize Access-Control-Origin headers for the chrome extension to work

### Instructions to Enable CORS Anywhere:
1. Visit [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo).
2. Click the **"Request temporary access"** button to enable the proxy for your browser session.
3. Once CORS Anywhere is enabled, open the extension by clicking its icon in the Chrome toolbar.
4. A motivational quote will be displayed. Click the **"Refresh"** button to fetch a new quote.

---

## Notes
- This project is for learning purposes only and is not intended for monetization.
- The use of **CORS Anywhere** requires you to request temporary access every time you open a new browser session.
