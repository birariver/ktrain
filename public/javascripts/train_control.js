hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

function kclear() {   
    hash_name = hashCode(container.querySelector(".username").innerHTML)
    buttons_layout = container.querySelector('input[name=layout]:checked')
    localStorage.removeItem("keys_result" + hash_name + buttons_layout.value)
}

function button_layout_click() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/kboard", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "layout": this.value
    }));
}

var layout = ""

container = document.querySelector(".container")
buttons_layout = container.querySelectorAll('input[name="layout"]')
for (i = 0; i < 3; i++) {
    if (buttons_layout[i].checked) {layout=buttons_layout[i].value}
    buttons_layout[i].addEventListener("click",button_layout_click)
}

if (layout == "") {
        buttons_layout[0].checked = true
        layout = "en"
    }