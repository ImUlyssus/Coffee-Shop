var expanded = false;
function showCheckBoxes(){
    var checkBoxes = document.getElementById("checkboxes");
    if(!expanded){
        checkBoxes.style.display = "block";
        expanded = true;
    }else{
        checkBoxes.style.display = "none";
        expanded = false;
    }
}
