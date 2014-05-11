var selected
var dd = 0;
var op1 = 0;
var op2 = 0;
var op3 = 0;

function nameValidate(name) {
    var isnum = /^[A-Za-z ]+$/.test(name);
    if (isnum)
        return true;
    return false;
}

function phoneValidate(phone) {
    var isnum = /^[0-9]+$/.test(phone);
    var length = phone.length;
    if (isnum & length >= 5 & length <= 9)
        return true;
    return false;
}

function cardnumberValidate(phone) {
    var isnum = /^[0-9]+$/.test(phone);
    var length = phone.length;
    if (isnum & length == 9)
        return true;
    return false;
}

function secnumValidate(phone) {
    var isnum = /^[0-9]+$/.test(phone);
    var length = phone.length;
    if (isnum & length == 3)
        return true;
    return false;
}

function purchase() {
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;
    var p5 = 0;
    var p6 = 0;
    //fname
    if ($("#myForm1 input[name=firstname]").val() != "" && nameValidate($("#myForm1 input[name=firstname]").val())) {
        $("#myForm1 input[name=firstname]").css("border-color", "green");
        p1 = 1;
    }
    else
        $("#myForm1 input[name=firstname]").css("border-color", "red");
    //lname
    if ($("#myForm1 input[name=lastname]").val() != "" && nameValidate($("#myForm1 input[name=lastname]").val())) {
        $("#myForm1 input[name=lastname]").css("border-color", "green");
        p2 = 1;
    }
    else
        $("#myForm1 input[name=lastname]").css("border-color", "red");
    //addres
    if ($("#myForm1 input[name=addr]").val() != "" && nameValidate($("#myForm1 input[name=addr]").val())) {
        $("#myForm1 input[name=addr]").css("border-color", "green");
        p3 = 1;
    }
    else
        $("#myForm1 input[name=addr]").css("border-color", "red");
    //phone
    if (phoneValidate($("#myForm1 input[name=phone]").val())) {
        $("#myForm1 input[name=phone]").css("border-color", "green");
        p4 = 1;
    }
    else
        $("#myForm1 input[name=phone]").css("border-color", "red");
    //card number
    if ($("#myForm1 input[name=cardnumber]").val() != "" && cardnumberValidate($("#myForm1 input[name=cardnumber]").val())) {
        $("#myForm1 input[name=cardnumber]").css("border-color", "green");
        p5 = 1;
    }
    else
        $("#myForm1 input[name=cardnumber]").css("border-color", "red");
    //security number
    if ($("#myForm1 input[name=secnum]").val() != "" && secnumValidate($("#myForm1 input[name=secnum]").val())) {
        $("#myForm1 input[name=secnum]").css("border-color", "green");
        p6 = 1;
    }
    else
        $("#myForm1 input[name=secnum]").css("border-color", "red");


    if (p1 == 1 & p2 == 1 & p3 == 1 & p4 == 1 & p5 == 1 & p6 == 1) {
        alert("Successfully bought!");
    }
}



function proceed() {
    $("#inf").remove();
    $("#options").remove();
    $("#backbtn").remove();
    $("#prcbtn").remove();
    $("#total").css("top", "490");
    $("#sum").css("top", "490");
    $("#cart").append("<div style='position:absolute; top: 112px; left: 278px; font-weight:900;'>    <form id='myForm1'>" +
        "First name:<br> <input type='text' name='firstname'><br>" +
        "Last name:<br> <input type='text' name='lastname'><br>" +
        "Addres:<br> <input type='text' name='addr'><br>" +
        "Phone Number:<br> <input type='text' name='phone'><br>" +
        "Credit card number:<br> <input type='text' name='cardnumber'><br>" +
        "Security number:<br> <input type='text' name='secnum'><br>" +
    "</form></div>" +
    "<button type='button' id='purchase' onclick='purchase()' style='position: absolute; top: 404px; left: 280px; font-weight: bolder; font-size: xx-large; background: #849dd3; height: 48px; width: 160px; border-radius:20px;'>Purchase</button>" +
    "<button type='button' id='reload' onclick='location.reload();' style='position: absolute; top: 491px; left: 581px; font-weight: bolder; font-size: xx-large; background: #849dd3; height: 48px; width: 160px; border-radius:20px;'>Cancel</button>");
}
function backProcedure() {
    dd = 0;
    op1 = 0;
    op2 = 0;
    op3 = 0;
    $('#mi-slider').css("visibility", "visible");
    $('#back').css("visibility", "visible");
    $('#cart').css("visibility", "hidden");
    $('#def1').prop('checked', true);
    $('#def2').prop('checked', true);
    $('#def3').prop('checked', true);
}

$("input:radio[name=brakes]").click(function () {
    op1 = parseInt($(this).val());
    $('#sum').html(dd + op1 + op2 + op3 + "$");
});

$("input:radio[name=saloon]").click(function () {
    op2 = parseInt($(this).val());
    $('#sum').html(dd + op1 + op2 + op3 + "$");
});

$("input:radio[name=wheels]").click(function () {
    op3 = parseInt($(this).val());
    $('#sum').html(dd + op1 + op2 + op3 + "$");
});

$(document).ready(function () {
    $('#mi-slider').catslider();
    $('.mi-current').css("visibility", "hidden");
});

$(".choises").click(function () {
    $('.mi-current').css("visibility", "visible");
    $('#videoDiv').css("visibility", "hidden");
});

$("#mainDiv").click(function () {
    $('.mi-current').css("visibility", "hidden");
    $('#videoDiv').css("visibility", "visible");
});

$(".carSelect").click(function () {
    selected = this.id;
    $('#mi-slider').css("visibility", "hidden");
    var elements = $("#" + selected).html();
    var found = $('.mname', elements);
    if (selected != null)
        $('#videoDiv').remove();
    $('#back').css("visibility", "hidden");
    $('#cart').css("visibility", "visible");
    $('#inf').html("");
    switch (selected) {
        case 'tt-coupe': {
            if (dd == 0) dd += 31000;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Audi TT Coupe is the fastest way to steal looks. Its iconic shape is enhanced by an Audi Singleframe® grille and distinctive LED daytime running light technology.</p>");
        }
        case 'tts-coupe': {
            if (dd == 0) dd += 34000;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Audi TTS Coupe brings a boldness to performance driving. Its powerfully designed Audi Singleframe® grille hints at a potent 2.0-liter turbocharged TFSI® engine generating a plentiful 265 hp.</p>");
        }
        case 'tt-roadster': {
            if (dd == 0) dd += 33000;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Audi TT Roadster grabs glances with its accentuated curves, sharp lines and provocative Audi Singleframe® grille. And with its thermally insulated power-folding acoustic roof, top down driving is always an option.</p>");
        }
        case 'tts-roadster': {
            if (dd == 0) dd += 36000;
            $('#imge').css("top", "0");
            $('#imge').html("<img src='images/" + selected + ".png' height='100'>");
            $('#mdel').html("<p style='font-size:50px; color:black; font-weight:bold'>" + $(found).html() + "</p>");
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'> Audi TTS Roadster brings you top down freedom. It's a distinctive vehicle with a 2.0-liter turbocharged TFSI® engine, Audi magnetic ride suspension and legendary Audi quattro® all-wheel drive.</p>");
            break;
        }
        case 'tt-drift1': {
            if (dd == 0) dd += 42600;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Audi TT drift series stage 3 is all about performance.In this package you get fully rebuild 3.2 litre engine custom twin turbo intage system suspension upgrade and huge brembo brakes.</p>");
            $('#imge').css("top", "-29");
            $('#mdel').html("<p style='font-size:50px; color:black; font-weight:bold'>" + $(found).html() + "</p>");
            $('#imge').html("<img src='images/" + selected + ".png' height='150'>"); break;
            break;
        }
        case 'tt-drift2': {
            if (dd == 0) dd += 37000;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Audi TT Drift Slim package offers you slim factory look with a beast hiding under the hood.3.2 litre engine with custom turbo kit that produces up to 560 HP or pump gas.From the outside nobody will spot the difference.</p>");
        }
        case 'tt-drift3': {
            if (dd == 0) dd += 37900;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Audi TT drift series stage 2 offers 3.2 litre engine with single custom made turbo huge front mounted intercooler and fully rebuilt suspention.Optimal package to burn some tires.</p>");
            $('#imge').css("top", "-16");
            $('#mdel').html("<p style='font-size:50px; color:black; font-weight:bold'>" + $(found).html() + "</p>");
            $('#imge').html("<img src='images/" + selected + ".png' height='150'>"); break;
            break;
        }
        case 'tt-track1': {
            if (dd == 0) dd += 40000;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Audi TT Track edition v1 is our first TT brought to World track standarts.Rolling cage,3.2 litre twin turbo engine that produces 715 HP on racing fuel,ceramic brake system and racing exhaust.</p>");
            $('#imge').css("top", "-29");
            $('#mdel').html("<p style='font-size:50px; color:black; font-weight:bold'>" + $(found).html() + "</p>");
            $('#imge').html("<img src='images/" + selected + ".png' height='150'>"); break;
            break;
        }
        case 'tt-track2': {
            if (dd == 0) dd += 44000;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Audi TT Formula is our track prepared stock TT with few aftermarket upgrades.</p>");
        }
        case 'tt-track3': {
            if (dd == 0) dd += 44900;
            if ($('#inf').html() == "")
                $('#inf').html("<p style='font-size:20px;'>Special Edition TT is custom built with each order.</p>");
        }
        default: {
            $('#imge').css("top", "-40");
            $('#mdel').html("<p style='font-size:50px; color:black; font-weight:bold'>" + $(found).html() + "</p>");
            $('#imge').html("<img src='images/" + selected + ".png' height='150'>"); break;
        }
    }
    $('#sum').html(dd + "$");

});

$('#vid').bind('ended', function () {
    $('#videoDiv').remove();
});