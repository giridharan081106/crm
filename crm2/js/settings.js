// =====================================
// Settings Page Script
// =====================================

const settingsForm = document.getElementById("settingsForm");

const nameInput = document.getElementById("name");
const profileEmailInput = document.getElementById("profileEmail");
const phoneInput = document.getElementById("phone");
const companyInput = document.getElementById("company");

const resetBtn = document.getElementById("resetBtn");

// =====================================
// Load Saved Profile
// =====================================

function loadProfile(){

    const savedProfile =
    localStorage.getItem("profile");

    if(savedProfile){

        const profile =
        JSON.parse(savedProfile);

        nameInput.value = profile.name || "";
        profileEmailInput.value = profile.email || "";
        phoneInput.value = profile.phone || "";
        companyInput.value = profile.company || "";

    }

}

// =====================================
// Email Validation
// =====================================

function validateEmail(value){

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(value);

}

// =====================================
// Save Profile
// =====================================

settingsForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(nameInput.value.trim()===""){

        alert("Please enter your name");
        return;

    }

    if(!validateEmail(profileEmailInput.value)){

        alert("Please enter a valid email");
        return;

    }

    const profile = {

        name: nameInput.value.trim(),
        email: profileEmailInput.value.trim(),
        phone: phoneInput.value.trim(),
        company: companyInput.value.trim()

    };

    localStorage.setItem(
        "profile",
        JSON.stringify(profile)
    );

    alert("Settings saved successfully!");

});

// =====================================
// Reset Form
// =====================================

resetBtn.addEventListener("click",()=>{

    const confirmReset =
    confirm("Reset all fields?");

    if(confirmReset){

        settingsForm.reset();

        localStorage.removeItem("profile");

    }

});

// =====================================
// Initial Load
// =====================================

loadProfile();