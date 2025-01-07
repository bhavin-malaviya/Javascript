// document.getElementById("21blitz").addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("21Blitz clicked");
// }, false);

// document.getElementById("images").addEventListener("click", (e) => {
//     console.log("Click Inside the ul");
// }, false);

// document.getElementById("google").addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Google clicked");
// }, false);

document.querySelector("#images").addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        let removeIt = e.target.parentNode;    
        removeIt.remove();
    }
})


/*    Type, timestamp, defaultprevented
     target, toElement, srcElement, currentTarget,
     clientX, clientY, screenX, screenY,
     altkey, shiftkey, ctrlkey, keyCode
*/

//  Event Propagation

//  1. Event Capturing
//  2. Event Bubbling

