import { applications } from "../Data/data.js";

const container = document.getElementById("applications-container");

function render() {
    const applicationHtml = applications.map((item) => {
        const html = ` <div class="application-card">
        <h3>${item.company}</h3>
        <p class="role">${item.role}</p>
        <div class="application-info">
        <p>Location: ${item.location}</p>
         <p>Salary: ₹${item.salary}</p>
          <p class="status">${item.status}</p>
          <p>Applied: ${item.appliedDate}</p>  </div>
          </div>
        `;


        return html;
    });

    container.innerHTML = applicationHtml.join("");


}

function updateDashboard() {
    const totalApplication = applications.length;


    const appliedApplications = applications.filter(
        (item) => item.status === "Applied"
    );

    const interviewed = applications.filter(
        (item) => item.status === "Interview"
    );

    const rejected = applications.filter(
        (item) => item.status === "Rejected"
    );

    const totalSalary = applications.reduce((salary, curr) => {
        return salary + curr.salary;
    }, 0);

    const averageSalary = totalSalary / totalApplication;

    const salaries = applications.map((item) => {
        return item.salary;
    });

    const highestSalary = Math.max(...salaries);
    const lowestSalary = Math.min(...salaries);

    document.getElementById("total-applications").textContent =
        totalApplication;

    document.getElementById("applied-count").textContent =
        appliedApplications.length;

    document.getElementById("interview-count").textContent =
        interviewed.length;

    document.getElementById("rejected-count").textContent =
        rejected.length;

    document.getElementById("average-salary").textContent =
        `₹${averageSalary}`;

    document.getElementById("highest-salary").textContent =
        `₹${highestSalary}`;

    document.getElementById("lowest-salary").textContent =
        `₹${lowestSalary}`;


}

render();
updateDashboard();



const form = document.getElementById("application-form");

const handleSubmit = (e)=>{
e.preventDefault();

const company = document.getElementById("company").value;
const role = document.getElementById("role").value;
const location = document.getElementById("location").value;
const salary = document.getElementById("salary").value;
const status = document.getElementById("status").value;
const appliedDate = document.getElementById("appliedDate").value;
const skills = document.getElementById("skills").value;
const notes = document.getElementById("notes").value;


}

form.addEventListener("submit", handleSubmit);