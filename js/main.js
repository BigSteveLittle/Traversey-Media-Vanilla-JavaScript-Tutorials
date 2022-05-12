// Invoke strict mode.
"use strict";
// JAVASCRIPT TYPE WRITER EFFECT.

// 'TypeWriter': method to set up properties for the type writer.
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
// 'TypeWriter': instantiate a prototype of the 'TypeWriter' method.
TypeWriter.prototype.type = function() {
    // 'currentWord': obtain the current index of the current word.
    const currentWord = this.wordIndex % this.words.length;
    // 'fullTxt': grab the of the 'currentWord'.
    const fullText = this.words[currentWord];
    // Check if the action is deleting.
    if(this.isDeleting) {
        
    }
    setTimeout(() => this.type(), 500);
    console.log(fullText);
}
// add an eventListener on DOM load.
document.addEventListener('DOMContentLoaded', init);
// method to initialise the type writer.
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Initiate the 'TypeWriter' method.
    new TypeWriter(txtElement, words, wait);
}