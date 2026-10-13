let applications = JSON.parse(localStorage.getItem("applications")) || [];

let total = applications.length;
let shortlistedCount = applications.filter(app => app.status === "Shortlisted").length;
let interviewsCount = applications.filter(app => app.status === "Interview Scheduled").length;
let selectedCount = applications.filter(app => app.status === "Selected").length;
let rejectedCount = applications.filter(app => app.status === "Rejected").length;
let appliedCount = applications.filter(app => app.status === "Applied").length;

document.getElementById("totalApplications").textContent = total;
document.getElementById("shortlisted").textContent = shortlistedCount;
document.getElementById("interviews").textContent = interviewsCount;
document.getElementById("selected").textContent = selectedCount;
document.getElementById("rejected").textContent = rejectedCount;

console.log(`Total: ${total}, Applied: ${appliedCount}, Shortlisted: ${shortlistedCount}, Interviews: ${interviewsCount}, Selected: ${selectedCount}, Rejected: ${rejectedCount}`);