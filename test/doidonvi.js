$(document).ready(() => {
    $("btnDoiTien").click(() => {
        let st = parseFloat($("#stId").val());
        let dv = $("#dvId").val();
        let k = "Ket qua tai day..."
        switch(dv) {
            case usd:
                k=st*0.000042;
                break;
            case eur:
                k=st*0.000038;
                break;
            case aud:
                k=st*0.000064;
                break;
        }
        $("#kq").html(`<h1>${k}<h1>`);
    });
});