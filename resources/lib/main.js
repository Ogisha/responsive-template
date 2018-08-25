$(document).ready(function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var padding;
    var btnPosition;

    //  Set containers initial height & spacing
    $(".mc_small").height($(".mc_small").width());

    if (windowWidth > 634)  $(".mc_large, .mc_right").height($(".mc_large").width());
    else  $(".mc_large").height($(".mc_large").width());

    if (windowWidth < 800)  padding = $("header").height() + 45 + "px";
    else  padding = $("header").height() + 30 + "px";

    $("main").css("margin-top", padding);

    //  Change styles on scroll event
    $(window).on("scroll", function() {
        var scrolling;  
        window.addEventListener('scroll', function (e) {
            window.clearTimeout(scrolling);
            scrolling = setTimeout(function() {
                $("header").css("box-shadow", "none");
            }, 200);
        }, false);
        $("header").css("box-shadow", "2px 5px 8px #E7E7E7");
    });

    //  Inject form template
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
    `;

    // Position the btn element
    btnPosition = $("header").height() + $("main").height() -10;

    if (windowHeight <= btnPosition)
        $("#formDiv1").append(template);
    else
        $("#formDiv2").append(template);
});

//  Function that handles shoppingcart-related events
var counter = 0;
const clicked = () => {
    var enteredNum = Number(document.getElementById("enterNum").value);

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

    if (counter < 10) 
        document.getElementById("numberOfItems").innerHTML = counter;
  
    else {
        counter -= enteredNum;
        alert("You can have up to 9 items in your shoping cart.");
    }

    document.getElementById("enterNum").value = "";
}

//  Function END
