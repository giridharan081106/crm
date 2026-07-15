// =====================================
// Orders Data
// =====================================

let orders = [

{
    id:"ORD1001",
    customer:"John Smith",
    date:"2026-06-01",
    amount:450,
    status:"Completed"
},

{
    id:"ORD1002",
    customer:"Emma Wilson",
    date:"2026-06-03",
    amount:720,
    status:"Pending"
},

{
    id:"ORD1003",
    customer:"Michael Brown",
    date:"2026-06-05",
    amount:300,
    status:"Cancelled"
},

{
    id:"ORD1004",
    customer:"Sophia Davis",
    date:"2026-06-08",
    amount:980,
    status:"Completed"
},

{
    id:"ORD1005",
    customer:"David Miller",
    date:"2026-06-10",
    amount:250,
    status:"Pending"
},

{
    id:"ORD1006",
    customer:"Olivia Taylor",
    date:"2026-06-12",
    amount:600,
    status:"Completed"
}

];


// =====================================
// Display Orders
// =====================================

let filteredOrders=[...orders];


function displayOrders(){

    const table =
    document.getElementById("orderTable");


    table.innerHTML="";


    filteredOrders.forEach(order=>{


        let row = `

        <tr>


        <td>${order.id}</td>


        <td>${order.customer}</td>


        <td>${order.date}</td>


        <td>
        $${order.amount}
        </td>


        <td>

        <select 
        onchange="changeStatus('${order.id}',this.value)"
        class="status-select">


        <option 
        ${order.status==="Pending"?"selected":""}>
        Pending
        </option>


        <option 
        ${order.status==="Completed"?"selected":""}>
        Completed
        </option>


        <option 
        ${order.status==="Cancelled"?"selected":""}>
        Cancelled
        </option>


        </select>


        </td>



        <td>


        <button 
        class="action-btn delete-btn"
        onclick="deleteOrder('${order.id}')">

        Delete

        </button>


        </td>



        </tr>


        `;


        table.innerHTML+=row;


    });


}



// =====================================
// Search Orders
// =====================================

document
.getElementById("orderSearch")
.addEventListener("input",(e)=>{


let value =
e.target.value.toLowerCase();



filteredOrders =
orders.filter(order=>


order.id.toLowerCase()
.includes(value)


||

order.customer.toLowerCase()
.includes(value)


);



displayOrders();


});



// =====================================
// Filter Status
// =====================================


document
.getElementById("orderFilter")
.addEventListener("change",(e)=>{


let value=e.target.value;



if(value==="all"){


filteredOrders=[...orders];


}

else{


filteredOrders =
orders.filter(order=>

order.status===value

);


}


displayOrders();


});




// =====================================
// Change Status
// =====================================


function changeStatus(id,status){


let order =
orders.find(order=>order.id===id);



if(order){

order.status=status;

}



displayOrders();


}




// =====================================
// Delete Order
// =====================================


function deleteOrder(id){


let confirmDelete =
confirm("Delete this order?");


if(confirmDelete){


orders =
orders.filter(order=>

order.id!==id

);



filteredOrders=[...orders];


displayOrders();


}


}




// =====================================
// First Load
// =====================================

displayOrders();