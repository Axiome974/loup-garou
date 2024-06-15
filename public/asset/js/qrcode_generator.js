const qrcode_generator = new QRCode("qrcode");

function makeCode () {


    qrcode_generator.makeCode("http://192.168.1.17/create");
}

makeCode();

$("#text").on("blur", function () {
    makeCode();
}).on("keydown", function (e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});