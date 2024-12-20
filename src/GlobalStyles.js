import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
//COLOR VARIABLES
:root {
  --color-blue: hsl(216, 51%, 46%);
  --color-dark-blue: HSL(176, 33%, 25%);
  --color-primary-blue: HSL(183, 94%, 25%);
  --color-light-blue: HSL(179, 35%, 50%);
  --color-lighter-blue: HSL(179, 35%, 50%);
  --color-lighter-sand: HSL(19, 40%, 90%);
  --color-light-sand: HSL(19, 34%, 85%);
  --color-dark-sand: HSL(27, 20%, 80%);
  --color-element-sand: HSL(20, 40%, 85%);
  --color-darker-sand: HSL(27, 10%, 60%);
  --color-sandstone: #796d64;
  --color-beige:  #B0E0E6;
  --color-grey-beige: #d6cdc8;
  --color-grey-beige-secondary: HSL(27, 20%, 70%);
  --color-nav: #dabcac;
  --color-body-primary: #dfcabb;
  --color-body-secondary: #ad9a94;
}

//FONTS


@font-face {
  font-family: 'TitleFont';
  src: url('/fonts/adventure.woff2') format('woff2'),
       url('/fonts/adventure.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

//KEYFRAMES
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

//CSS RESET
  *,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
  font-size: 16px;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  padding: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

//FORMSPREE RESET
/* reset */
form input,
form select,
form textarea,
form fieldset,
form optgroup,
form label,
.StripeElement {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
form label,
form legend {
  font-size: 0.825rem;
  margin-bottom: 0.5rem;
}
/* border, padding, margin, width */
form input,
form select,
form textarea,
.StripeElement {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75em 1rem;
  margin-bottom: 1.5rem;
}
form input:focus,
form select:focus,
form textarea:focus,
.StripeElement:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
}
form [type="text"],
form [type="email"],
.StripeElement {
  width: 100%;
}
form [type="button"],
form [type="submit"],
form [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
form [type="button"]:focus,
form [type="submit"]:focus,
form [type="reset"]:focus {
  outline: none;
}

form select {
  text-transform: none;
}

//Global Styles


body {
    background-color: var(--color-lighter-sand); 
    
    font-family: "Raleway", sans-serif;
}


`;

export default GlobalStyles;
