// ==UserScript==
// @name         Genome Remover 1000
// @version      1.00
// @description  all my homies hate genome.
// @author       you know who i am.
// @downloadURL  https://github.com/useruserusernames/ayylmao/raw/main/index.js
// @updateURL    https://github.com/useruserusernames/ayylmao/raw/main/index.js
// @match        https://docs.google.com/spreadsheets/d/*
// @match        https://docs.google.com/document/d/*
// @match        https://docs.google.com/presentation/d/*
// @match        https://docs.google.com/forms/d/*
// @match        https://klickhealth.proofhq.com/review/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @noframes
// ==/UserScript==


function removeInjectedElements() {
  var hubStyles = document.getElementById('hub-styles');
  if (hubStyles) {
    hubStyles.parentNode.removeChild(hubStyles);
    console.log('Removed #hub-styles');
  }

  var genomeSidebar = document.getElementById('genome-sidebar');
  if (genomeSidebar) {
    genomeSidebar.parentNode.removeChild(genomeSidebar);
    console.log('Removed #genome-sidebar');
  }
}


window.onload = function() {
  var intervalId = setInterval(removeInjectedElements, 500);

  setTimeout(function() {
    clearInterval(intervalId);
    console.log('Stopped checking for elements to remove.');
  }, 30000);
};