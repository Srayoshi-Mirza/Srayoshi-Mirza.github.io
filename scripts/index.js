document.addEventListener("DOMContentLoaded", function () {
    // Function to display the most recent projects on the homepage
    function displayRecentProjects(projects, containerId, isDashboard = false) {
        const container = document.getElementById(containerId);
        projects.slice(0, 4).forEach(project => {  // Display top 4 recent projects
            const projectElement = createProjectElement(project, isDashboard);
            container.appendChild(projectElement);
        });

        // Add See Others link
        const seeOthersLink = document.createElement('a');
        seeOthersLink.href = 'projects.html';  // Link to the projects page
        seeOthersLink.classList.add('btn', 'btn-link');
        seeOthersLink.textContent = 'See Others';
        container.appendChild(seeOthersLink);
    }

    // Function to display the most recent certifications
    function displayRecentCertifications(certifications, containerId) {
        const container = document.getElementById(containerId);
        certifications.slice(0, 4).forEach(certification => {  // Display top 4 recent certifications
            const certificationElement = createCertificationElement(certification);
            container.appendChild(certificationElement);
        });

        // Add See Others link
        const seeOthersLink = document.createElement('a');
        seeOthersLink.href = 'certifications.html';  // Link to the certifications page
        seeOthersLink.classList.add('btn', 'btn-link');
        seeOthersLink.textContent = 'See Others';
        container.appendChild(seeOthersLink);
    }

    // Function to display the most recent blogs
    function displayRecentBlogs(blogs, containerId) {
        const container = document.getElementById(containerId);
        blogs.slice(0, 4).forEach(blog => {  // Display top 4 recent blogs
            const blogElement = createBlogElement(blog);
            container.appendChild(blogElement);
        });

        // Add See Others link
        const seeOthersLink = document.createElement('a');
        seeOthersLink.href = 'blogs.html';  // Link to the blogs page
        seeOthersLink.classList.add('btn', 'btn-link');
        seeOthersLink.textContent = 'See Others';
        container.appendChild(seeOthersLink);
    }

    // Run these display functions to populate the homepage
    displayRecentProjects(dataAnalyticsProjects, "data-analytics-projects");
    displayRecentProjects(dashboardProjects, "dashboard-projects", true);  // 'true' for dashboards
    displayRecentCertifications(certifications, "recent-certification");
    displayRecentBlogs(blogs, "recent-blogs-list");
});
