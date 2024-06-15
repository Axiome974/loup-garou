document.addEventListener('DOMContentLoaded', function() {


    const btn = document.getElementById("upload-btn");
    const valid = document.getElementById("valid-btn");
    const input = document.getElementById("upload-input");
    const name = document.getElementById("name-input");
    const submit = document.getElementById("submit-input");

    btn.addEventListener("click", function() {
        input.click();
    });

    name.addEventListener('keyup', checkForValidStatus);

    input.addEventListener('change', checkForValidStatus);
    input.addEventListener('change', function (event) {
        const target = event.target;
        if(input.value){
            btn.style = "display: none";
            valid.style = "";
        }else {
            btn.style = "";
            valid.style = "display: none";
        }
    });

    function checkForValidStatus(){
        if( name.value && input.value ){
            submit.style = "";
        }else{
            submit.style = "display: none";
        }
    }




});