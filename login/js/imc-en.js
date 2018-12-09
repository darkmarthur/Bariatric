

$('.validate-form').on('submit', function () {
    var estatura = $('#estatura').val() / 100;
    var peso = $('#peso').val();
    var color = "white";
    var result = peso / Math.pow(estatura, 2);
    var text = "";
    var diagnostic = "";
    if (result < 18) {
        text = "Necessary to evaluate the signs of malnutrition.";
        color = "#ff6a00"
        diagnostic = "Under weight"
    }
    else if (result >= 18 && result < 25) {
        text = "Normal";
        color = "green"
        diagnostic = " "
    }
    else if (result >= 25 && result < 30) {
        text = "Over Weight";
        color = "#ff6a00"
        diagnostic = " "
    }
    else if (result >= 30 && result < 35) {
        text = "Over weight";
        color = "red"
        diagnostic = "Obesity grade I"
    }
    else if (result >= 35 && result < 40) {
        text = "Relative high risk to develop cardiovascular diseases";
        diagnostic = "Obesity grade II or severe"
        color = "red"
    }
    else if (result >= 40 && result < 50) {
        text = "High relative risk for the development of cardiovascular diseases ";
        diagnostic = "Obesity grade III or Morbid Extremely"
        color = "red"
    }
    else if (result >= 50) {
        text = "Extreme risk, go to Dr. Arturo Valdez.";
        diagnostic = "Super Obesity"
        color = "red"
    }
    $('#resultado').text("IMC = " + Math.round(result));
    $('#texto').text(text);
    $('#resultSet').last().addClass("resultSet");
    $('#resultado').css("color", color);
    $('#resultadoDiagnostic').text(diagnostic);
    $('#resultadoDiagnostic').css("color", color);
    return false;
});
