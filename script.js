// Sample expense data
const expenses = [
    { category: "Food", amount: 150 },
    { category: "Transport", amount: 80 },
    { category: "Entertainment", amount: 100 },
    { category: "Shopping", amount: 200 },
    { category: "Bills", amount: 120 },
];

const filterDropdown = document.getElementById("filter");
const searchInput = document.getElementById("search");
const expenseItems = document.getElementById("expenseItems");
const ctx = document.getElementById("expenseChart").getContext("2d");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let expenseChart;

// Toggle Mobile Menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Function to render expense list
function renderExpenseList(filteredExpenses) {
    expenseItems.innerHTML = "";
    filteredExpenses.forEach((expense) => {
        const li = document.createElement("li");
        li.className = "expense-item";
        li.innerHTML = `<span>${expense.category}</span> <span class="amount">$${expense.amount}</span>`;
        expenseItems.appendChild(li);
    });
}

// Function to update chart
function updateChart(filteredExpenses) {
    const categories = filteredExpenses.map(exp => exp.category);
    const amounts = filteredExpenses.map(exp => exp.amount);

    if (expenseChart) {
        expenseChart.destroy();
    }

    expenseChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: categories,
            datasets: [{
                label: "Expenses",
                data: amounts,
                backgroundColor: "#4f46e5",
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Function to filter data
function filterData() {
    const searchText = searchInput.value.toLowerCase();
    const filteredExpenses = expenses.filter(exp => exp.category.toLowerCase().includes(searchText));
    
    renderExpenseList(filteredExpenses);
    updateChart(filteredExpenses);
}

// Event Listeners
searchInput.addEventListener("input", filterData);
filterDropdown.addEventListener("change", filterData);

// Initial rendering
filterData();
