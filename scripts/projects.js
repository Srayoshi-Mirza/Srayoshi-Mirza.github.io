const projects = [
    {
        title: "Analyzing COVID-19 Vaccination Trends",
        githubLink: "https://github.com/Srayoshi-Mirza/Analyzing-COVID-19-Vaccination-Trends-Updated-Quarterly-",
        image: "assets/images/global_covid_19_vaccin_trend.png"
    },
    {
        title: "Naive Bayes and the Challenge of Spam Detection A Statistical Analysis",
        githubLink: "https://github.com/Srayoshi-Mirza/Naive-Bayes-and-the-Challenge-of-Spam-Detection-A-Statistical-Analysis",
        image: "assets/images/probability calculation.jpg"
    },
    {
        title: "Temporal Analysis of Lasik Complications: A Data Exploration and Regression Modeling Approach",
        githubLink: "https://github.com/Srayoshi-Mirza/Temporal-Analysis-of-Lasik-Complications-A-Data-Exploration-and-Regression-Modeling-Approach",
        image: "assets/images/top_10_most_common_problems.png"
    },
    {
        title: "Customer Segmentation Analysis Using Unsupervised Learning",
        githubLink: "https://github.com/Srayoshi-Mirza/Customer-Segmentation-Unsupervised-Learning-",
        image: "assets/images/stress_detection.png"
    },
    {
        title: "Stress Detection Analysis",
        githubLink: "https://github.com/Srayoshi-Mirza/Stress_Detection_Analysis",
        image: "assets/images/All clusters.png"
    },
    {
        title: "Beximco Stock Price in the Pandemic Data App",
        githubLink: "https://github.com/Srayoshi-Mirza/Beximco_Stock_Price_Data_App",
        image: "assets/images/Beximco_Stock_Price.png"
    },
    {
        title: "Popular-programming-language",
        githubLink: "https://github.com/Srayoshi-Mirza/Popular-programming-language",
        image: "assets/images/popular_programming.png"
    },
    {
        title: "Merchandise Sales Dashboard",
        dashboardLink: "https://public.tableau.com/views/MerchandiseSalesDataVisualization/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        image: "assets/images/Dashboard 1 (3).png"
    },
    {
        title: "Bangladesh Mental Health Statistics Dashboard",
        dashboardLink: "https://public.tableau.com/views/BangladeshMentalHealthStat/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        image: "assets/images/Dashboard 1 (2).png"
    },
    {
        title: "South Asian Covid19 Dashboard",
        dashboardLink: "https://public.tableau.com/shared/RMDS6PY62?:display_count=n&:origin=viz_share_link",
        image: "assets/images/Dashboard 1.png"
    },
    {
        title: "AirBNB Project (Followed Alex The Analyst Tutorial)",
        dashboardLink: "https://public.tableau.com/views/AirBNBProjectFollowedAlexTheAnalystTutorial/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        image: "assets/images/Dashboard 1 (1).png"
    }
];


// Insert all projects dynamically into the row
const projectContainer = document.getElementById('data-analytics-projects');
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('col-md-3', 'mb-4'); // Ensures 4 items per row

    projectItem.innerHTML = `
        <div class="project-item shadow-lg p-3 rounded">
            <img src="${project.image}" alt="Project Image" class="img-fluid rounded">
            <h3>${project.title}</h3>
            <a href="${project.githubLink || project.dashboardLink}" class="btn btn-primary">Read More</a>
        </div>
    `;
    projectContainer.appendChild(projectItem);
});
