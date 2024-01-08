

function Search(){
    let item = parseFloat(document.getElementById("input").value);


    let adult = document.getElementById("adult");


    let child = document.getElementById("child");

    let others = document.getElementById("other")

    let others2 = document.getElementById("other2")
    
    let others3 = document.getElementById("other3")
    
    let others4= document.getElementById("other4")
    
    let others5 = document.getElementById("other5")
    


    if (item >= 18) {
        adult.style.display = "block";
        others.style.display = "none";
        others2.style.display = "none";
        others3.style.display = "none";
        others4.style.display = "none";
        others5.style.display = "none";
        child.style.display = "none";
    }
    else {
        child.style.display = "block";
        others.style.display = "none";
        others2.style.display = "none";
        others3.style.display = "none";
        others4.style.display = "none";
        others5.style.display = "none";
        adult.style.display = "none";
    }

}
