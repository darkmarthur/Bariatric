

$('.validate-form').on('submit', function () {
    var estatura = $('#estatura').val() / 100;
    var peso = $('#peso').val();
    var color = "white";
    var result = peso / Math.pow(estatura, 2);
    var text = "";
    var diagnostic = "";
    if (result < 18) {
        text = "Peso bajo. Necesario valorar signos de desnutrición";
        color = "#c3c304"
        diagnostic = "Peso Bajo"
    }
    else if (result >= 18 && result < 25) {
        text = "Normal";
        color = "green"
        diagnostic = "Normal"
    }
    else if (result >= 25 && result < 27) {
        text = "Sobrepeso";
        color = "#c3c304"
        diagnostic = "Sobrepeso"
    }
    else if (result >= 27 && result < 30) {
        text = "Obesidad grado I. Riesgo relativo alto para desarrollar enfermedades cardiovasculares";
        color = "red"
        diagnostic = "Obesidad grado I"
    }
    else if (result >= 30 && result < 40) {
        text = "Obesidad grado II. Riesgo relativo muy alto para el desarrollo de enfermedades cardiovasculares";
        diagnostic = "Obesidad grado II"
        color = "red"
    }
    else if (result >= 40) {
        text = "Obesidad grado III Extrema o Mórbida. Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares";
        diagnostic = "Obesidad grado III"
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
