function beforeSubmit()
{
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("inputdate.value ", inputdate.value);//string ----> converted into Date (local en_In)
    
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    console.log("formattedDate " ,formattedDate)
    outputdate.value = formattedDate;

}