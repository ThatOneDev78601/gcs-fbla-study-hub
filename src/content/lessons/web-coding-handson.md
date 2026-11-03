---
title: "Hands-on web development: HTML, CSS, JavaScript, and testing"
summary: "Write semantic, accessible HTML, build responsive layouts with CSS, add validated interactive features with JavaScript and saved state, debug in the browser, test across devices, and deploy original code."
sourceIds: ["mdn","wcag"]
reviewed: "2026-11-02"
---

## Structure with semantic HTML

HTML describes what content is. Semantic elements such as header, nav, main, section, article, and footer give structure that browsers, search engines, and screen readers understand. Use one h1 per page and headings in order. Every image needs an alt attribute describing its purpose (empty alt="" for decoration). Every form field needs a label element linked by for and id.

Shared navigation should be identical on every page, with the current page marked using aria-current="page". Include the viewport meta tag, meta name="viewport" content="width=device-width, initial-scale=1", so pages scale on phones.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Events | Riverside Book Club</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav aria-label="Main">
      <a href="index.html">Home</a>
      <a href="events.html" aria-current="page">Events</a>
    </nav>
  </header>
  <main>
    <h1>Upcoming events</h1>
    <section class="cards">...</section>
  </main>
  <footer>Contact: club@example.org</footer>
</body>
</html>
```

## Responsive layout with CSS

Write styles mobile-first: a single-column layout by default, then media queries add columns on wider screens. Flexbox arranges items in one direction, such as a navigation bar. Grid arranges two-dimensional layouts, such as cards. Use relative units (rem, %) so text and spacing scale. Keep a visible focus style for keyboard users, and check color contrast.

```css
body { font-family: system-ui, sans-serif; line-height: 1.6; margin: 0; }
nav { display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem; }
.cards { display: grid; gap: 1rem; grid-template-columns: 1fr; padding: 1rem; }
@media (min-width: 700px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}
a:focus-visible, button:focus-visible { outline: 3px solid #1a5e63; }
```

## Interaction, validation, and saved state

JavaScript responds to events such as clicks and form submissions. Validate on the page for a fast, helpful experience, and validate again on the server if there is one, since browser checks can be bypassed. Show errors next to the field in text, and announce them to screen readers with aria-live. Insert user text with textContent, never innerHTML, to prevent script injection.

localStorage saves small amounts of data in the browser so it survives a page reload. It is stored only on that browser and device, so it is not a substitute for a database when users need shared or secure data.

```html
<form id="signup" novalidate>
  <label for="email">Email</label>
  <input id="email" type="email" required>
  <p id="email-error" aria-live="polite"></p>
  <button type="submit">Join the list</button>
</form>
<ul id="list"></ul>
<script>
const form = document.querySelector("#signup");
const email = document.querySelector("#email");
const error = document.querySelector("#email-error");
const list = document.querySelector("#list");
const saved = JSON.parse(localStorage.getItem("emails") || "[]");
saved.forEach(addItem);

function addItem(text) {
  const li = document.createElement("li");
  li.textContent = text; // textContent never runs user text as HTML
  list.append(li);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.validity.valid) {
    error.textContent = "Enter an email like name@example.com.";
    email.focus();
    return;
  }
  error.textContent = "";
  const value = email.value.trim();
  saved.push(value);
  localStorage.setItem("emails", JSON.stringify(saved));
  addItem(value);
  form.reset();
});
</script>
```

> **Example**
>
> A user submits the form empty, then types "sam@" and submits, then types "sam@example.org" and submits, then reloads the page. What happens?
>
> 1. Empty: validity fails because the field is required; the error message appears and focus returns to the field.
> 2. "sam@": validity fails because it is not a complete email; the same message appears.
> 3. "sam@example.org": the error clears, the address is saved to localStorage, added to the list, and the form resets.
> 4. Reload: the saved array is read from localStorage and the address appears in the list again.
>
> The page validates presence and format, explains the fix in text, keeps keyboard focus sensible, and persists the result in the browser.

## Debug, test, deploy, and document

Browser developer tools (F12 or right-click, Inspect) show the HTML and CSS applied to each element, JavaScript errors in the Console, network requests and failed files in the Network tab, and device emulation for different screen sizes. Read the first error in the Console and its line number.

Test on desktop, tablet, and phone sizes and in at least two browsers. Check every link, test keyboard-only navigation (Tab, Shift+Tab, Enter), run an automated accessibility and performance audit such as Lighthouse, and compress large images. Record each test, its result, and any fix in a test log.

Deploy to a static host such as GitHub Pages or Netlify, or follow the event's submission rules. Website Coding and Development prohibits website templates, so write your own HTML, CSS, and JavaScript and credit any libraries, fonts, and images with their licenses. Comment code where the reason is not obvious, and keep version history as evidence of original work.

> **Try it yourself**
>
> Add a second field to the form: a required "Name" field with a label and its own error message. Write the HTML for the field and the JavaScript check that runs before the email check.

<details>
<summary>Check your answer</summary>

HTML: <label for="name">Name</label> <input id="name" required> <p id="name-error" aria-live="polite"></p>. JavaScript, at the top of the submit handler after preventDefault: const name = document.querySelector("#name"); const nameError = document.querySelector("#name-error"); if (!name.value.trim()) { nameError.textContent = "Enter your name."; name.focus(); return; } nameError.textContent = "";. Using trim rejects names that are only spaces, which the required attribute alone allows.

</details>

## Key terms

**Semantic HTML.** HTML elements that describe the meaning of content, such as nav and main.

**Media query.** A CSS rule that applies styles at certain screen sizes or conditions.

**Mobile-first design.** Writing base styles for small screens and adding layouts for larger ones.

**localStorage.** Browser storage that keeps small text data on one device between visits.

**Script injection.** An attack in which user-supplied text is run as code on a page.
