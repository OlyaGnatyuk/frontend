'use strict';

let fibonacci;
let previosElem = 0;
let currentElem = 1;
let n = 1;
fibonacci = function () {
    if (n === 1) {
        console.log(0);
    } else if (n === 2) {
        console.log(1);
    } else {
        let nextElem = previosElem + currentElem;
        console.log(nextElem);
        previosElem = currentElem;
        currentElem = nextElem;
    }
    n++;
}

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();