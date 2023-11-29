let captchachecked = false;
function beforeSubmit()
{
    if(captchachecked){
        let inputdate = document.querySelector(".inputdate");
        let outputdate = document.querySelector(".outputdate");
        console.log("inputdate.value ", inputdate.value);//string ----> converted into Date (local en_In)
    
        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
        console.log("formattedDate " ,formattedDate)
        outputdate.value = formattedDate;
    }
    else{
        alert("Please select the recaptcha box to submit the lead")
    }
}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") 
    {
    var elems = JSON.parse(
        document.getElementsByName("captcha_settings")[0].value
        );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value = 
    JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500); 

function captchasuccess(){
    captchachecked = true;
}
