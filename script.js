function beforeSubmit(){
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log(inputdate.value)

    let formattedDate = new Date (inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formattedDate;
}