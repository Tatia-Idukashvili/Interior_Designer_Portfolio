const projects = [
    { id: 1, title: "Project 01", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/1.jpg" },
    { id: 2, title: "Project 02", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/2.jpg" },
    { id: 3, title: "Project 03", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/3.jpg" },
    { id: 4, title: "Project 04", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/4.jpg" },
    { id: 5, title: "Project 05", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/5.jpg" },
    { id: 6, title: "Project 06", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/6.jpg" },
    { id: 7, title: "Project 07", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/7.jpg" },
    { id: 8, title: "Project 08", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/8.jpg" },
    { id: 9, title: "Project 09", description: "This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.", image: "./Media/Project Details/9.jpg" }
];

const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));

const currentProject = projects.find(p => p.id === projectId);

if (currentProject) {
    document.getElementById("project-title").textContent = currentProject.title;
    document.getElementById("project-image").src = currentProject.image;
    document.getElementById("project-description").textContent = currentProject.description;

    if (projectId === 1) {
        document.getElementById("prev-project").style.display = "none";
    }

    if (projectId === projects.length) {
        document.getElementById("next-project").style.display = "none";
    }
}

document.getElementById("prev-project").addEventListener("click", () => {
    const prevId = projectId > 1 ? projectId - 1 : projects.length;
    window.location.href = `project-details.html?id=${prevId}`;
});

document.getElementById("next-project").addEventListener("click", () => {
    const nextId = projectId < projects.length ? projectId + 1 : 1;
    window.location.href = `project-details.html?id=${nextId}`;
});