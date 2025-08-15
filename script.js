function checkuser(){
    let role = document.getElementById("role").value.trim();

    if (role === "user"){
        alert("you are user");
    }

    else if (role === "admin"){
        alert("you are admin");
    }

    else{
        alert("please enter right user");
    }
}