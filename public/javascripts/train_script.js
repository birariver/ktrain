var keys_top_list_en = [["Q","W","E","R","T","Y","U","I","O","P","[","]"],
					 ["littlefinger",
					  "ringfinger",
					  "middlefinger",
					  "indexfinger",
					  "indexfinger",
					  "indexfinger",
					  "indexfinger",
					  "middlefinger",
					  "ringfinger",
					  "littlefinger",
					  "littlefinger",
					  "littlefinger"
					 ]]

	keys_middle_list_en = [["A","S","D","F","G","H","J","K","L",";","\'"],
					 ["littlefinger",
					  "ringfinger",
					  "middlefinger",
					  "mainfinger",
					  "indexfinger",
					  "indexfinger",
					  "mainfinger",
					  "middlefinger",
					  "ringfinger",
					  "littlefinger",
					  "littlefinger"
					 ]]
	keys_bottom_list_en = [["Z","X","C","V","B","N","M",",",".","/"],
					 ["littlefinger",
					  "ringfinger",
					  "middlefinger",
					  "indexfinger",
					  "indexfinger",
					  "indexfinger",
					  "indexfinger",
					  "middlefinger",
					  "ringfinger",
					  "littlefinger"
					 ]]

    keys_weight_en = [[35,55,55,25,25,25,25,55,55,35,0,0],
                   [35,55,55,95,25,25,95,25,55,0,0],
                   [35,55,25,25,25,25,25,0,0,0]
                  ]

    keys_top_list_ru = [["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ"],
                     ["littlefinger",
                      "ringfinger",
                      "middlefinger",
                      "indexfinger",
                      "indexfinger",
                      "indexfinger",
                      "indexfinger",
                      "middlefinger",
                      "ringfinger",
                      "littlefinger",
                      "littlefinger",
                      "littlefinger"
                     ]]

    keys_middle_list_ru = [["Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э"],
                     ["littlefinger",
                      "ringfinger",
                      "middlefinger",
                      "mainfinger",
                      "indexfinger",
                      "indexfinger",
                      "mainfinger",
                      "middlefinger",
                      "ringfinger",
                      "littlefinger",
                      "littlefinger"
                     ]]
    keys_bottom_list_ru = [["Я","Ч","С","М","И","Т","Ь","Б","Ю",","],
                     ["littlefinger",
                      "ringfinger",
                      "middlefinger",
                      "indexfinger",
                      "indexfinger",
                      "indexfinger",
                      "indexfinger",
                      "middlefinger",
                      "ringfinger",
                      "littlefinger"
                     ]]

    keys_weight_ru = [[35,55,55,25,25,25,25,55,55,35,35,35],
                   [35,55,55,95,25,25,95,25,55,35,35],
                   [35,55,25,25,25,25,25,35,35,0]
                  ]

    keys_top_list_bg = [["Ы","У","Е","И","Ш","Щ","К","С","Д","З","Ц",";"],
                     ["littlefinger",
                      "ringfinger",
                      "middlefinger",
                      "indexfinger",
                      "indexfinger",
                      "indexfinger",
                      "indexfinger",
                      "middlefinger",
                      "ringfinger",
                      "littlefinger",
                      "littlefinger",
                      "littlefinger"
                     ]]

    keys_middle_list_bg = [["Ь","Я","А","О","Ж","Г","Т","Н","В","М","Ч"],
                     ["littlefinger",
                      "ringfinger",
                      "middlefinger",
                      "mainfinger",
                      "indexfinger",
                      "indexfinger",
                      "mainfinger",
                      "middlefinger",
                      "ringfinger",
                      "littlefinger",
                      "littlefinger"
                     ]]
    keys_bottom_list_bg = [["|","Й","Ъ","Э","Ф","Х","П","Р","Л","Б"],
                     ["littlefinger",
                      "ringfinger",
                      "middlefinger",
                      "indexfinger",
                      "indexfinger",
                      "indexfinger",
                      "indexfinger",
                      "middlefinger",
                      "ringfinger",
                      "littlefinger"
                     ]]

    keys_weight_bg = [[35,55,55,25,25,25,25,55,55,35,35,0],
                   [35,55,55,95,25,25,95,25,55,35,35],
                   [0,55,25,25,25,25,25,35,35,35]
                  ]

var keys_top_list_fr = [["A","Z","E","R","T","Y","U","I","O","P","ä","£"],
           ["littlefinger",
            "ringfinger",
            "middlefinger",
            "indexfinger",
            "indexfinger",
            "indexfinger",
            "indexfinger",
            "middlefinger",
            "ringfinger",
            "littlefinger",
            "littlefinger",
            "littlefinger"
           ]]

  keys_middle_list_fr = [["Q","S","D","F","G","H","J","K","L","M","\'"],
           ["littlefinger",
            "ringfinger",
            "middlefinger",
            "mainfinger",
            "indexfinger",
            "indexfinger",
            "mainfinger",
            "middlefinger",
            "ringfinger",
            "littlefinger",
            "littlefinger"
           ]]
  keys_bottom_list_fr = [["W","X","C","V","B","N","?",".","/","§"],
           ["littlefinger",
            "ringfinger",
            "middlefinger",
            "indexfinger",
            "indexfinger",
            "indexfinger",
            "indexfinger",
            "middlefinger",
            "ringfinger",
            "littlefinger"
           ]]

    keys_weight_fr = [[55,55,55,45,25,25,45,55,55,55,0,0],
                   [55,55,55,35,25,25,35,35,55,0,0],
                   [55,55,45,35,35,35,0,0,0,0]
                  ]


    keys = new Object()
    keys['en'] = [keys_top_list_en, keys_middle_list_en, keys_bottom_list_en, keys_weight_en]
    keys['ru'] = [keys_top_list_ru, keys_middle_list_ru, keys_bottom_list_ru, keys_weight_ru]
    keys['bg'] = [keys_top_list_bg, keys_middle_list_bg, keys_bottom_list_bg, keys_weight_bg]
    keys['fr'] = [keys_top_list_fr, keys_middle_list_fr, keys_bottom_list_fr, keys_weight_fr]


    r_rnd = -1;
    k_rnd = -1

    container = document.querySelector(".container")

    var tmr = undefined;


hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);}

function create_button_row1(r) {
	var button_row = ""
	for (i = 0; i < r.length; i++) {
    	button_row = button_row + "<div class=\"button_key\">"+r[i]+"</div>"
    }

    return button_row 
}

function create_button(b,c) {
	var one_key = document.createElement('div');
	one_key.className = c
	one_key.innerHTML = b

    return one_key
}

function create_button_row(r,l) {
	for (i = 0; i < r[0].length; i++) {

        if (keys_weight[l-2][i] < 20 && keys_weight[l-2][i] > 0 ) {
            b = "<pre> </pre>"
        }
        else {b = r[0][i]}

    	document.body.children[0].children[l].appendChild(create_button(b,"button_key "+r[1][i]))
    }
}

function change_button_row(r,l) {
    for (i = 0; i < r[0].length; i++) {

        if (keys_weight[l-2][i] < 20 && keys_weight[l-2][i] > 0 ) {
            b = "<pre> </pre>"
        }
        else {b = r[0][i]}
        document.body.children[0].children[l].children[i].innerHTML = b
    }
}


function keys_weight_sum() {
    var sum = 0
    for (r = 0; r < 3; r++) {
        for (i = 0; i < keys_weight[r].length; i++) {
            sum = sum + keys_weight[r][i]
        }
    }
    return sum
}

function keys_weight_stop(s) {
    var sum = 0
        r = 0
    while ((sum < s) && (r < 3)) {
        k = 0
        while ((sum < s) && (k < keys_weight[r].length)) {

            sum = sum + keys_weight[r][k]

            if (sum < s) {
                k++
            }
            else {
                switch(r){
                    case 0:
                        container.querySelector(".random_letter").innerHTML = keys_top_list[0][k]
                        break;
                    case 1:
                        container.querySelector(".random_letter").innerHTML = keys_middle_list[0][k]
                        break;
                    case 2:
                        container.querySelector(".random_letter").innerHTML = keys_bottom_list[0][k]
                        break;
                }

                r_rnd = r
                k_rnd = k
                r = 3
                k = 112
            }
        }
        r++
    } 
} 

function get_button_param(kc) {

    switch(kc) {

        case 81:
            r = 2, k = 0
            break;
        case 87:
            r = 2, k = 1
            break;
        case 69:
            r = 2, k = 2
            break;
        case 82:
            r = 2, k = 3
            break;
	case 84:
            r = 2, k = 4
            break;
	case 89:
            r = 2, k = 5
            break;
	case 85:
            r = 2, k = 6
            break;
	case 73:
            r = 2, k = 7
            break;
	case 79:
            r = 2, k = 8
            break;
	case 80:
            r = 2, k = 9
            break;
	case 219:
            r = 2, k = 10
            break;
	case 221:
            r = 2, k = 11
            break;
	case 65:
            r = 3, k = 0
            break;
        case 83:
	    r = 3, k = 1
            break;
        case 68:
            r = 3, k = 2
            break;
        case 70:
            r = 3, k = 3
            break;
	case 71:
            r = 3, k = 4
            break;
	case 72:
            r = 3, k = 5
            break;
	case 74:
            r = 3, k = 6
            break;
	case 75:
            r = 3, k = 7
            break;
	case 76:
            r = 3, k = 8
            break;
	case 59:
            r = 3, k = 9
            break;
	case 222:
            r = 3, k = 10
            break;
	case 90:
            r = 4, k = 0
            break;
        case 88:
	    r = 4, k = 1
            break;
        case 67:
            r = 4, k = 2
            break;
        case 86:
            r = 4, k = 3
            break;
	case 66:
            r = 4, k = 4
            break;
	case 78:
            r = 4, k = 5
            break;
	case 77:
            r = 4, k = 6
            break;
	case 188:
            r = 4, k = 7
            break;
	case 190:
            r = 4, k = 8
            break;
	case 191:
            r = 4, k = 9
            break;
    }
    return r,k
}

function press_key(e) {
//  кнопка в состоянии нажатия

    yellowkey = document.querySelector(".kp")
    if (yellowkey != null) {
		document.querySelector(".kp").classList.remove("kp");
    }


    r,k = get_button_param(e.keyCode)

    if (r-2 == r_rnd && k == k_rnd) {
        clearTimeout(tmr);
        console.log("попал")
        container.children[r].children[k].classList.add("kp")
	container.children[r].children[k].classList.add("truekp")
        if (keys_weight[r_rnd][k_rnd] > 5) {
            keys_weight[r_rnd][k_rnd] = keys_weight[r_rnd][k_rnd] - 10
        }
        if (keys_weight[r_rnd][k_rnd] < 20) {
           container.children[r].children[k].innerHTML = container.children[1].innerHTML
        }

    }
    else {
        keys_weight[r_rnd][k_rnd] = keys_weight[r_rnd][k_rnd] + 10

        container.children[r].children[k].classList.add("kp")

        if (keys_weight[r_rnd][k_rnd] > 20 && container.children[r_rnd+2].children[k_rnd].innerHTML == "<pre> </pre>") {
            container.children[r_rnd+2].children[k_rnd].innerHTML = container.children[1].innerHTML
        }
    }

    localStorage.setItem("keys_result" + hash_name + layout, JSON.stringify(keys_weight));

}

function up_key(e) {
    //нажая кнопка отпускается

    r,k = get_button_param(e.keyCode)

    console.log(r_rnd + " -- " + k_rnd + "  " + r + " " + k)

    if (r_rnd == r-2 && k_rnd == k) {
        if (keys_weight[r_rnd][k_rnd] < 20) {
           container.children[r].children[k].innerHTML = "<pre> </pre>"
        }
	rnd = Math.random() * keys_weight_sum()
        keys_weight_stop(rnd)
	console.log("попал! " + r_rnd+"-"+k_rnd + " " + r + ";" + k)
	document.querySelector(".truekp").classList.remove("truekp");
	if (keys_weight[r_rnd][k_rnd] < 20 && container.children[r_rnd+2].children[k_rnd].innerHTML == "<pre> </pre>") {
	    tmr = setTimeout(function() {
		container.children[r_rnd+2].children[k_rnd].innerHTML = container.children[1].innerHTML
		keys_weight[r_rnd][k_rnd] = 35
  		console.log("BOOM!");
	    }, 2000);
	}
    }
}

function button_layout_click() {
    layout = this.value

    keys_top_list = keys[layout][0]
    keys_middle_list = keys[layout][1]
    keys_bottom_list = keys[layout][2]

    if (localStorage.getItem("keys_result" + hash_name + layout) == null) {
        keys_weight = keys[layout][3]
    }
    else {
        keys_weight = JSON.parse(localStorage.getItem("keys_result" + hash_name + layout))
    }

    change_button_row(keys_top_list,2)
    change_button_row(keys_middle_list,3)
    change_button_row(keys_bottom_list,4)

    rnd = Math.random() * keys_weight_sum()
    keys_weight_stop(rnd)

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/kboard", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "layout": layout
    }));
}
   
function button_reset_click() {

}

// =========================================

    var layout = ""

    buttons_layout = container.querySelectorAll('input[name="layout"]')
    for (i = 0; i < 4; i++) {
        if (buttons_layout[i].checked) {layout=buttons_layout[i].value}
        buttons_layout[i].addEventListener("click",button_layout_click)
    }

    if (layout == "") {
        buttons_layout[0].checked = true
        layout = "en"
    }


    keys_top_list = keys[layout][0]
    keys_middle_list = keys[layout][1]
    keys_bottom_list = keys[layout][2]

    hash_name = hashCode(container.querySelector(".username").innerHTML)
    
    if (localStorage.getItem("keys_result" + hash_name + layout) == null) {
        keys_weight = keys[layout][3]  
    } 
    else {
        keys_weight = JSON.parse(localStorage.getItem("keys_result" + hash_name + layout))
    }

    create_button_row(keys_top_list,2)
    create_button_row(keys_middle_list,3)
    create_button_row(keys_bottom_list,4)

    rnd = Math.random() * keys_weight_sum()
    keys_weight_stop(rnd)

	addEventListener("keydown", press_key);
	addEventListener("keyup", up_key);
