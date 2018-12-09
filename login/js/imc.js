

$('.validate-form').on('submit', function () {
    var estatura = $('#estatura').val() / 100;
    var peso = $('#peso').val();
    var color = "white";
    var result = peso / Math.pow(estatura, 2);
    var text = "";
    var diagnostic = "";
    if (result < 18) {
        text = "Necesario valorar signos de desnutrición";
        color = "#ff6a00"
        diagnostic = "Peso Bajo"
    }
    else if (result >= 18 && result < 25) {
        text = "Normal";
        color = "green"
        diagnostic = " "
    }
    else if (result >= 25 && result < 30) {
        text = "Sobrepeso";
        color = "#ff6a00"
        diagnostic = "Sobrepeso"
    }
    else if (result >= 30 && result < 35) {
        text = "Riesgo relativo alto para desarrollar enfermedades cardiovasculares";
        color = "red"
        diagnostic = "Obesidad grado I"
    }
    else if (result >= 35 && result < 40) {
        text = "Riesgo relativo muy alto para el desarrollo de enfermedades cardiovasculares";
        diagnostic = "Obesidad grado II o Severa"
        color = "red"
    }
    else if (result >= 40 && result < 50) {
        text = "Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares";
        diagnostic = "Obesidad grado III o Morbida"
        color = "red"
    }
    else if (result >= 50) {
        text = "Riesgo extremo acude al Dr. Arturo Valdez";
        diagnostic = "Super Obesidad"
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
