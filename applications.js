let applicationsContainer = document.getElementById("applicationsContainer");
let applications = JSON.parse(localStorage.getItem("applications")) || [];

if(applications.length === 0){
    applicationsContainer.innerHTML = "<h2 style='width:100%;text-align:center;margin-top:50px'>No Applications Yet</h2>";
}

applications.forEach((app, index) => {
    let card = document.createElement("div");
    card.className = "application-card";
    card.innerHTML = `
        <h2>${app.description}</h2>
        <p>${app.company}</p>
        <p>${app.location}</p>
        <p class="status-badge" id="badge-${index}">${app.status}</p>
        <select class="statusSelect" id="select-${index}">
            <option value="Applied">Applied</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
        </select>
    `;
    
    let select = card.querySelector(`#select-${index}`);
    select.value = app.status;
    
    select.addEventListener("change", (e) => {
        // Get fresh data from storage
        let allApps = JSON.parse(localStorage.getItem("applications")) || [];
        allApps[index].status = e.target.value;
        localStorage.setItem("applications", JSON.stringify(allApps));
        
        // Update badge without reload
        document.getElementById(`badge-${index}`).textContent = e.target.value;
        alert(`Status changed to ${e.target.value}`);
    });
    
    applicationsContainer.appendChild(card);
});