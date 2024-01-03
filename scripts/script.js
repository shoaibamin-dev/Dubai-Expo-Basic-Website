function calc_price(){
    
    //write your code below
    
    
    
    
    var type = document.querySelector("#type").value;
    var day = document.querySelector("#day").value;
    var resident_button = document.querySelector("#resident_button");


    console.log(type, day, resident_button)

    if (type == "staf") {
        if (day == "sun") {
            if (resident_button.checked) {
                document.querySelector("#price").innerHTML = "25"
            }
            else {
                document.querySelector("#price").innerHTML = "50"
            }
        }
        else {
            alert(" Event not available for the selected day")
        }
    }

    else if (type == "saud") {
        if (day == "wed") {
            if (resident_button.checked) {
                document.querySelector("#price").innerHTML = 35
            }
            else {
                document.querySelector("#price").innerHTML = 70
            }
        }
        else {
            alert(" Event not available for the selected day")
        }
    }

    else if (type == "balet") {
        if (day == "mon") {
            if (resident_button.checked) {
                document.querySelector("#price").innerHTML = 10
            }
            else {
                document.querySelector("#price").innerHTML = 20
            }
        }
        else {
            alert(" Event not available for the selected day")
        }
    }
    
    
    
    
    
    
    
    
    
    
    return false;   
}