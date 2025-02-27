function showProjectDetails(projectId) {
    const projectDetails = {
        project1: {
            title: "Project 1",
            description: "This is a detailed description of Project 1."
        },
        project2: {
            title: "Project 2",
            description: "This is a detailed description of Project 2."
        }
    };

    const details = projectDetails[projectId];
    if (details) {
        document.getElementById("project-title").textContent = details.title;
        document.getElementById("project-description").textContent = details.description;
        document.getElementById("project-details").classList.remove("hidden");
    }
}

function closeDetails() {
    document.getElementById("project-details").classList.add("hidden");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! Thank you for reaching out.");
});
