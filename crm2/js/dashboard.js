// ==============================
// Revenue Line Chart
// ==============================

const revenueCtx = document.getElementById("revenueChart");

new Chart(revenueCtx, {
    type: "line",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul"
        ],
        datasets: [{
            label: "Revenue ($)",
            data: [
                12000,
                18000,
                15000,
                22000,
                26000,
                24000,
                30000
            ],
            borderColor: "#2563eb",
            backgroundColor: "rgba(37,99,235,0.2)",
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: "#2563eb"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// ==============================
// Customer Pie Chart
// ==============================

const customerCtx = document.getElementById("customerChart");

new Chart(customerCtx, {
    type: "pie",
    data: {
        labels: [
            "Premium",
            "Regular",
            "Inactive"
        ],
        datasets: [{
            data: [
                35,
                50,
                15
            ],
            backgroundColor: [
                "#2563eb",
                "#10b981",
                "#f59e0b"
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// ==============================
// KPI Animation
// ==============================

const cards = document.querySelectorAll(".card h3");

cards.forEach(card => {

    const finalValue = card.innerText;

    if (finalValue.includes("$")) {

        let target = parseInt(finalValue.replace(/[$,]/g, ""));
        let count = 0;

        const update = setInterval(() => {

            count += Math.ceil(target / 50);

            if (count >= target) {

                count = target;

                clearInterval(update);

            }

            card.innerText = "$" + count.toLocaleString();

        }, 20);

    }

    else if (finalValue.includes("%")) {

        let target = parseInt(finalValue);
        let count = 0;

        const update = setInterval(() => {

            count++;

            card.innerText = count + "%";

            if (count >= target) {

                clearInterval(update);

            }

        }, 60);

    }

    else {

        let target = parseInt(finalValue.replace(/,/g, ""));
        let count = 0;

        const update = setInterval(() => {

            count += Math.ceil(target / 40);

            if (count >= target) {

                count = target;

                clearInterval(update);

            }

            card.innerText = count.toLocaleString();

        }, 20);

    }

});

// ==============================
// Greeting
// ==============================

const hour = new Date().getHours();

let greeting = "Welcome";

if (hour < 12) {

    greeting = "Good Morning";

}
else if (hour < 18) {

    greeting = "Good Afternoon";

}
else {

    greeting = "Good Evening";

}

document.querySelector(".topbar h1").innerHTML =
`${greeting}, Admin 👋`;