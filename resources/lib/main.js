$(document).ready(function() {
    $(".mc_small").height($(".mc_small").width());
    $(".mc_large, .mc_right").height($(".mc_large").width());

    var padding;
    if ($(document).width() < 800)
        padding = $("header").height() + 45 + "px";

    else
        padding = $("header").height() + 30 + "px";

    $("main").css("margin-top", padding);

    if ($("#numberOfItems").text() == "0")
        $(".badge").addClass("hidden");

    var template = `
        <form id="addForm" class="form-inline" onsubmit="return false;">
            <label class="sr-only" for="inlineFormInputName2">Items</label>
            <input type="number" class="form-control mb-2 mr-sm-2" id="enterNum">
            <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <p>PCE</p>
                                    
            <button type="submit" class="btn btn-danger mb-2 addFormBtn danger" onclick="clicked();">
                <i class="icon-cart-in"></i>
                Add to cart
            </button>
        </form>
    `

    windowHeight = $(window).height();

    btnPosition = $("header").height() + $("main").height() -10;

    if (windowHeight <= btnPosition) {
        $("#formDiv1, #formDiv2").append(template);
    }
    else
    $("#formDiv1, #formDiv2").append(template);
    

})

var counter = 0;
var windowHeight;
var btnPosition;

//  Function that handles shoppingcart-related events

const clicked = () => {
    let enteredNum = Number(document.getElementById("enterNum").value);

    if ((Number(enteredNum)) <= 0)  alert("Please enter a valid number of items.");
    else  {
        counter += enteredNum;
        $("#numberOfItems")
            .animate({
                width: '+=10px',
                height: '+=10px'
            }, 350)
            .animate({
                width: '-=10px',
                height: '-=10px'
        }, 350);
    }
    
    document.getElementById("numberOfItems").innerHTML = counter;
    document.getElementById("enterNum").value = "";
}

//  Function END



