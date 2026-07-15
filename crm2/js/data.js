/* =====================================
   DATA MANAGEMENT
===================================== */


// Load JSON Data

async function loadData(file){

    try{

        const response = await fetch(file);

        if(!response.ok){

            throw new Error("Failed to load data");

        }

        const data = await response.json();

        return data;


    }catch(error){

        console.error("Data Loading Error:",error);

        return [];

    }

}



// Save Data To Local Storage

function saveLocalData(key,data){

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}



// Get Data From Local Storage

function getLocalData(key){

    let data =
    localStorage.getItem(key);


    return data
    ? JSON.parse(data)
    : null;

}



// Remove Local Data

function removeLocalData(key){

    localStorage.removeItem(key);

}



// Format Currency

function formatCurrency(amount){

    return "$" + amount.toLocaleString();

}



// Generate ID

function generateId(prefix="ID"){

    return prefix +
    Date.now();

}