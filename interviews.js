let interviewsContainer = document.getElementById("interviewsContainer");
let applications = JSON.parse(localStorage.getItem("applications")) || [];

// Filter only Interview Scheduled
let interviewJobs = applications.filter(app => app.status === "Interview Scheduled");

if(interviewJobs.length === 0){
    interviewsContainer.innerHTML = `
        <div style="width:100%; text-align:center; margin-top:80px;">
            <h2>No Interviews Yet</h2>
            <p style="margin-top:10px; font-size:1.1rem;">Go to Applications page and change status to <b>"Interview Scheduled"</b></p>
            <a href="./applications.html"><button style="margin-top:20px; padding:10px 25px; border-radius:20px; border:2px solid navy; background:white; color:navy; font-weight:600; cursor:pointer;">Go to Applications</button></a>
        </div>
    `;
} else {
    interviewJobs.forEach((job) => {
        let card = document.createElement("div");
        card.className = "application-card";
        card.innerHTML = `
            <h2>${job.company}</h2>
            <p><b>${job.description}</b></p>
            <p>${job.location} | ${job.package}</p>
            <p>📅 Date: ${new Date().toLocaleDateString()}</p>
            <p>⏰ Time: 10:00 AM</p>
            <span class="status-badge">Interview Scheduled</span>
            <p style="font-size:0.9rem; margin-top:10px; color:green;">Good Luck! Prepare well.</p>
        `;
        interviewsContainer.appendChild(card);
    });
}