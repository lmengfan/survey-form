// get container element from html
const submitButton = document.getElementById('submit')
const result = document.getElementById('result')
// let rating = document.querySelector('input[name="rating"]:checked').value;
// functions

function displayRadioValue() {
    var ele = document.getElementsByName('rating');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("result").innerHTML
                = "Result: " + ele[i].value;
    }
}
function showresult(){
    //document.getElementById("result").innerHTML = rating;
    displayRadioValue()
}
function submit() {
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", showresult)
    }
// execution
//setProjectId('2635-2-000')
//setUrl('https://raw.githubusercontent.com/YiwenChe/ProjectPage/main/sample.json')
submit()

