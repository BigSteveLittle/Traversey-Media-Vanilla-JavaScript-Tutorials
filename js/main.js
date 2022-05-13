// Invoke strict mode.
"use strict";
// JAVASCRIPT TYPE WRITER EFFECT.
// 'TypeWriter': class will animate the type writer action.
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    // 1. 'type': instantiate a version of the 'TypeWriter' class.
    type() {
        // 'currentWord': obtain the current index of the current word.
        const currentWord = this.wordIndex % this.words.length;
        // 'fullTxt': grab the of the 'currentWord'.
        const fullText = this.words[currentWord];
        // 'this.isDeleting': Check if the action is deleting.
        if(this.isDeleting) {
            // 'this.txt': remove a character.
            this.txt = fullText.substring(0, this.txt.length - 1);
        }
        else {
            // 'this.txt': add a character.
            this.txt = fullText.substring(0, this.txt.length + 1);
        }
        // 'this.txtElement': insert 'this.txt' into the HTML '.txt-type' element.
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        // 'typeSpeed': set initial typing speed.
        let typeSpeed = 300;
        // 'typeSpeed': set speed to half if action is deleting.
        if(this.isDeleting) {
            typeSpeed /= 2; // Shorthand for typeSpeed / 2;.
        }
        // 'fullText': check if word is complete.
        if(!this.isDeleting && this.txt === fullText) {
            // 'typeSpeed': pause at end of typing.
            typeSpeed = this.wait;
            // 'this.isDeleting': reset to true for end of typing.
            this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt === '') {
            // 'this.isDeleting': reset to false for end of typing.
            this.isDeleting = false;
            // 'this.wordIndex': increment to next word in array.
            this.wordIndex++;
            // 'typeSpeed': pause before typing next word.
            typeSpeed = 500;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}
// 2. 'document': add an eventListener on DOM load.
document.addEventListener('DOMContentLoaded', init);
// 3. 'init': method to initialise the type writer.
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // 'TypeWriter': initiate the  method.
    new TypeWriter(txtElement, words, wait);
}