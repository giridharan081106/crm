// =====================================
// Customer Data
// =====================================

let customers = [

{
    id:1,
    name:"John Smith",
    email:"john@gmail.com",
    country:"USA",
    status:"Active"
},

{
    id:2,
    name:"Emma Wilson",
    email:"emma@gmail.com",
    country:"UK",
    status:"Inactive"
},

{
    id:3,
    name:"Michael Brown",
    email:"michael@gmail.com",
    country:"Canada",
    status:"Active"
},

{
    id:4,
    name:"Sophia Davis",
    email:"sophia@gmail.com",
    country:"Australia",
    status:"Active"
},

{
    id:5,
    name:"David Miller",
    email:"david@gmail.com",
    country:"Germany",
    status:"Inactive"
},

{
    id:6,
    name:"Olivia Taylor",
    email:"olivia@gmail.com",
    country:"France",
    status:"Active"
},

{
    id:7,
    name:"James Anderson",
    email:"james@gmail.com",
    country:"USA",
    status:"Active"
},

{
    id:8,
    name:"William Thomas",
    email:"william@gmail.com",
    country:"India",
    status:"Inactive"
},

{
    id:9,
    name:"Ava Martinez",
    email:"ava@gmail.com",
    country:"Spain",
    status:"Active"
},

{
    id:10,
    name:"Lucas Anderson",
    email:"lucas@gmail.com",
    country:"Brazil",
    status:"Active"
},

{
    id:11,
    name:"Isabella Moore",
    email:"isabella@gmail.com",
    country:"Italy",
    status:"Inactive"
},

{
    id:12,
    name:"Ethan Jackson",
    email:"ethan@gmail.com",
    country:"Japan",
    status:"Active"
}

];


// =====================================
// Variables
// =====================================

let currentPage = 1;

let rowsPerPage = 5;

let filteredCustomers = [...customers];

let ascending = true;


// =====================================
// Display Customers
// =====================================

function displayCustomers(){

    const table = document.getElementById("customerTable");

    table.innerHTML="";


    let start =
    (currentPage - 1) * rowsPerPage;


    let end =
    start + rowsPerPage;


    let pageCustomers =
    filteredCustomers.slice(start,end);



    pageCustomers.forEach(customer=>{


        let row = `

        <tr>

            <td>${customer.id}</td>

            <td>${customer.name}</td>

            <td>${customer.email}</td>

            <td>${customer.country}</td>


            <td>

            <span class="status 
            ${customer.status==="Active" 
            ? "active-status" 
            : "inactive-status"}">

            ${customer.status}

            </span>

            </td>


            <td>

            <button class="action-btn edit-btn">
            Edit
            </button>


            <button 
            class="action-btn delete-btn"
            onclick="deleteCustomer(${customer.id})">

            Delete

            </button>


            </td>


        </tr>

        `;


        table.innerHTML += row;


    });


    document.getElementById("pageNumber")
    .innerText=currentPage;

}


// =====================================
// Search
// =====================================

document
.getElementById("searchInput")
.addEventListener("input",(e)=>{


let value=e.target.value.toLowerCase();


filteredCustomers =
customers.filter(customer=>


customer.name.toLowerCase()
.includes(value)

||

customer.email.toLowerCase()
.includes(value)


);


currentPage=1;

displayCustomers();


});


// =====================================
// Filter
// =====================================

document
.getElementById("statusFilter")
.addEventListener("change",(e)=>{


let value=e.target.value;


if(value==="all"){

filteredCustomers=[...customers];

}

else{


filteredCustomers =
customers.filter(customer=>

customer.status===value

);


}


currentPage=1;

displayCustomers();


});


// =====================================
// Sorting
// =====================================

document
.getElementById("sortBtn")
.addEventListener("click",()=>{


filteredCustomers.sort((a,b)=>{


let result =
a.name.localeCompare(b.name);


return ascending ? result : -result;


});


ascending=!ascending;


displayCustomers();


});


// =====================================
// Delete Customer
// =====================================

function deleteCustomer(id){


let confirmDelete =
confirm("Delete this customer?");


if(confirmDelete){


customers =
customers.filter(customer=>

customer.id!==id

);


filteredCustomers =
[...customers];


displayCustomers();


}


}


// =====================================
// Pagination
// =====================================


document
.getElementById("nextBtn")
.addEventListener("click",()=>{


let maxPage =
Math.ceil(filteredCustomers.length / rowsPerPage);


if(currentPage < maxPage){

currentPage++;

displayCustomers();

}


});



document
.getElementById("prevBtn")
.addEventListener("click",()=>{


if(currentPage>1){

currentPage--;

displayCustomers();

}


});



// =====================================
// Initial Load
// =====================================

displayCustomers();