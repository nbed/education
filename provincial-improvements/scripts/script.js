let viewMode = "light";
function switchViewMode() {
    const node = document.getElementById("dark");
    const viewBox = document.getElementById("viewModeId");
    if (viewMode === "light") {
        viewMode = "dark";
        viewBox.innerText = "Light Mode";
        node.media = '';
    } else {
        viewMode = "light";
        viewBox.innerText = "Dark Mode";
        node.media = 'none';
    }
}
function expandAll(number) {
    var expOrCol;
    var divIter;

    var x = document.getElementById("expInd" + number);
    const expandText = "Expand Indicator " + number + " + subindicators";
    if (x.innerText === expandText) {
        x.innerText = "Collapse Indicator " + number + " + subindicators";
        expOrCol = "exp"
        x.classList.add("button-selected");
    } else {
        x.innerText = expandText;
        expOrCol = "col"
        x.classList.remove("button-selected");
    }

    var x = document.querySelectorAll('[id^=indicator' + number + '-],'
        + '[id^=indicator' + number + 'MAIN]');
    for (divIter = 0; divIter < x.length; divIter++) {
        if (expOrCol === "exp") {
            x[divIter].style.display = "block";
        } else {
            x[divIter].style.display = "none";
        }
    }

    var x = document.querySelectorAll('[id^=ind' + number + '-],'
        + '[id^=ind' + number + 'MAIN]');
    for (divIter = 0; divIter < x.length; divIter++) {
        if (expOrCol === "exp") {
            x[divIter].innerText = "-";
            x[divIter].parentElement.classList.add("header-selected");
        } else {
            x[divIter].innerText = "+";
            x[divIter].parentElement.classList.remove("header-selected");
        }
    }
}
function onHeaderSelected(id, id2) {
    var x = document.getElementById(id);
    console.log("Header height: " + x.style.height);
    if (!x.style.height || x.style.height === "0px") {
        x.style.height = "auto";
    } else {
        x.style.height = "0px";
    }
    x = document.getElementById(id2);
    if (x.innerText === "+") {
        x.innerText = "-";
        x.parentElement.classList.add("header-selected");
    } else {
        x.innerText = "+";
        x.parentElement.classList.remove("header-selected");
    }
}
function expandTab(id, num, headerID) {
    var allDiv = document.getElementsByClassName(num);
    var divIter;

    for (divIter = 0; divIter < allDiv.length; divIter++) {
        allDiv[divIter].style.display = "none";
    }

    var x = document.getElementById(id);
    x.style.display = "block";

    var idToFind = "Domain" + headerID.split('-')[0];
    console.log(idToFind);
    var x = document.querySelectorAll('[id^=' + idToFind + '-]');
    console.log(x);
    for (divIter = 0; divIter < x.length; divIter++) {
        console.log(x[divIter].innerText);
        x[divIter].classList.remove("tab-selected");
    }

    var x = document.getElementById("Domain" + headerID);
    x.classList.add("tab-selected");
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    if(menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}