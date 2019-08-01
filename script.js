window.onload = function() {
    var element = document.getElementsByTagName("button");
    // declare function for "onMouseOver" event:
    for (let p = 0; p < 17; p++) {
        element[p].onmouseover = function () {
            var nameOfClass = "hovering";
            element[p].classList.add(nameOfClass);
        }
        // declare function for "onMouseOut" event:
        element[p].onmouseout = function () {
            var nameOfClass = "hovering";
            element[p].classList.remove(nameOfClass);
        }
    }
}
let lastcharacter;
let charsToSearch = ["+", "-", "*", "/"];
let i = 0;
var inscherm = "";
let rekensom = "";
var someVar;
let resultaat = "";
var someInput = document.getElementsByTagName('button');
for (let i = 0; i < someInput.length; i++) {
    if (window.addEventListener) { //Firefox, Chrome, Safari, IE 10
        someInput[i].addEventListener('click', function() {
            myFunc(this.innerText)
        });
    }
}
document.addEventListener('keydown', function() {
    myFunc("",event)
});
function myFunc(someVar, event)
{

    event = event || window.event;
    lastcharacter = rekensom[rekensom.length - 1];
    var scherm = document.getElementById("calc-preview");
    if (someVar === "%" || event.shiftKey && event.key==="%") {

        someVar = someVar.replace("%", "/100*");

    }
    if (someVar === "=" || (event.which===187 && !event.shiftKey)) {
        resultaat = eval(rekensom);

        rekensom = resultaat;
        scherm.innerHTML = resultaat;
    } else if (someVar === "C" || event.which===67){
        rekensom = "";

        scherm.innerHTML = "";
    } else if (event.shiftKey && event.which>=48 && event.which<=57)  {
        rekensom += String.fromCharCode(event.which);

    } else if ((event.shiftKey && event.key==="+")  || (event.shiftKey && event.key==="/") || (event.shiftKey && event.key==="*") || (event.key==="-"))  {
        if  (charsToSearch.indexOf(lastcharacter) !== -1 && charsToSearch.indexOf(event.key) !== -1)  {
            return
        } else {
            rekensom += event.key;

        }
    } else if  (charsToSearch.indexOf(lastcharacter) !== -1 && charsToSearch.indexOf(someVar) !== -1) {

        return;


    } else {
        rekensom += someVar;
    }
    //alert(charsToSearch.indexOf(event.key));
    scherm.innerHTML = rekensom;

}
