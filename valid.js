
function selectOption(e) {
    let option = parseInt(prompt(" Enter Your Option Here: "));

    if (option != null) {
        switch (option) {
            case 1:
                document.body.innerHTML = `
                <form class="center" id="form">
                <div><h3> Enter your email here: </h3> </div>
                <input name ="email" id="inputVal" required />
                <input type="submit" value='Submit Now' id="val" onclick=" submittedVal()"/> 
                </form>
                    `;


                break;
            case 2:
                document.body.innerHTML = `
                <form class=" center" id="form">
                <div><h3> Enter your Phone Number here: </h3> </div>
                <input  name ="number" id="inputVal" required />
                <input type="submit" value='Submit Now' id="val" onclick=" submittedNum()"/> 
                </form>
                `;
                break;
            case 3:
                document.body.innerHTML = `
                <form class=" center" id="form">
                <div><h3> Enter your Post Code here: </h3> </div>
                <input  name ="post " id="inputVal" required />
                <input type="submit" value='Submit Now' id="val" onclick=" submittedPost()"/>
                </form> 
                `;
                break;
            default:
                alert("Invalid input");
                break;

        }

    }
    else {
        alert(" Hey!! You must enter a option here!")
    }
    e.preventDefault();
}

function submittedVal(e) {
    let y = document.getElementById("inputVal").value;
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (y != "") {
        if (re.test(y)) {
            alert(" Okay!! Tikh ache!!");
        }
        else {
            alert("hey! Email vul hyche!! Abar try koro...");

        }
    }
    else {
        alert("Please fill up the input field..")
    }
}

function submittedNum(e) {
    let y = document.getElementById("inputVal").value;
    let re = /^(\+)?(88)?01[0-9]{9}$/;
    if (y != "") {

        if (re.test(y)) {
            alert(" Okay!! Tikh ache!!");
        }
        else {
            alert("hey! Phone Number vul hyche!! Abar try koro...");
        }
    }
    else {
        alert("Please fill up the input field..")
    }
}
function submittedPost(e) {
    let y = document.getElementById("inputVal").value;
    let re = /^([0-9]{5}|[a-zA-Z][a-zA-Z ]{0,49})$/;
    if (y != "") {
        if (re.test(y)) {
            alert(" Okay!! Tikh ache!!");
        }
        else {
            alert("hey! Post Code vul hyche!! Abar try koro...");
        }
    }
    else {
        alert("hey! Post Code vul hyche!! Abar try koro...");
    }

}


