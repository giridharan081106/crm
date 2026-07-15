/* =====================================
   GLOBAL THEME MANAGEMENT
===================================== */


const themeToggle =
document.getElementById("themeToggle");



// Load Saved Theme

function loadTheme(){

    const savedTheme =
    localStorage.getItem("theme");


    if(savedTheme==="dark"){

        document.body.classList.add("dark");


        if(themeToggle){

            themeToggle.checked=true;

        }

    }

}



// Change Theme

function changeTheme(enabled){


    if(enabled){


        document.body.classList.add("dark");


        localStorage.setItem(
            "theme",
            "dark"
        );


    }

    else{


        document.body.classList.remove("dark");


        localStorage.setItem(
            "theme",
            "light"
        );


    }

}



// Toggle Event

if(themeToggle){


    themeToggle.addEventListener(
        "change",
        ()=>{


            changeTheme(
                themeToggle.checked
            );


        }
    );


}



// Initialize

loadTheme();

