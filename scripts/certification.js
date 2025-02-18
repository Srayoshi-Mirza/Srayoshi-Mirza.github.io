// Define certification data
const certifications = [
    {
        title: "Basic Bioinformatics to Computers Aided Drug and Vaccine Design",
        image: "assets/images/bioinformatics.jpg"
    },    {
        title: "Summary Statistics in Public Health",
        image: "assets/images/public_health_stitstics-01.jpg"
    },
    {
        title: "Data Scientist Bootcamp Job Ready Program",
        image: "assets/images/Data_Analyst_Bootcamp.jpg"
    },
    {
        title: "Data Analysis with R Programming",
        image: "assets/images/R.jpg"
    }
];

// Insert all certifications dynamically into the row
const certificationContainer = document.getElementById('certification-list');
certifications.forEach(certification => {
    const certificationItem = document.createElement('div');
    certificationItem.classList.add('col-md-3', 'mb-4'); // Ensures 4 items per row
    certificationItem.innerHTML = `
        <div class="certification-item shadow-lg p-3 rounded">
            <img src="${certification.image}" alt="Certification Image" class="img-fluid rounded">
            <h3>${certification.title}</h3>
            <a href="${certification.link}" class="btn btn-primary">View Certificate</a>
        </div>
    `;
    certificationContainer.appendChild(certificationItem);
});