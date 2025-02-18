// Define blog data
const blogs = [
    {
        title: "Understanding Unsupervised Learning through a Customer Segmentation Analysis",
        blogLink: "https://medium.com/@srayoshimirza/understanding-unsupervised-learning-through-a-customer-segmentation-analysis-0da52076c03c",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-sbynwUv6WUY3xwQQTesYA.jpeg"
    },
    {
        title: "Understanding Exploratory Data Analysis with SaYoPillow Dataset",
        blogLink: "https://medium.com/@srayoshimirza/understanding-exploratory-data-analysis-with-sayopillow-dataset-b5b384a715de",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*If06jPg6D-yEYjgWmEcLGQ.png"
    },
    {
        title: "START, STOP, and the ORF: Mapping the Genetic Landscape",
        blogLink: "https://www.linkedin.com/pulse/start-stop-orf-mapping-genetic-landscape-srayoshi-bashed-mirza-6e6sc/?trackingId=19yAwQuEQLi64XDHZwxWCQ%3D%3D",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGe-GXIDkOKnQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728982858846?e=1745452800&v=beta&t=P6vabjPH7pffmq_0c1LuwqM2hyo_DerPJfK93MDe1-M"
    },
    {
        title: "Unlocking Bio-Molecular Sequence Analysis",
        blogLink: "https://www.linkedin.com/pulse/unlocking-bio-molecular-sequence-analysis-key-tools-concepts-mirza-c2s3c/?trackingId=19yAwQuEQLi64XDHZwxWCQ%3D%3D",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGLuq1RPkPibQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727852257873?e=1745452800&v=beta&t=sW9jQ5JUIfpVKaUUT6PbgQcFTbn-2dlvv84fyHY_aF8"
    },
    {
        title: "A Guide to Learning Molecular Biology for Tech Enthusiasts",
        blogLink: "https://www.linkedin.com/pulse/from-code-cells-guide-learning-molecular-biology-tech-mirza-ev2rc/?trackingId=19yAwQuEQLi64XDHZwxWCQ%3D%3D",
        image: "https://media.licdn.com/dms/image/v2/D5612AQE46q40D0cJjA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727580761903?e=1745452800&v=beta&t=e4dn_S6Jde3wkp3kuqEIs7rId8bwyNogn-IsytiyuuA"
    },
    {
        title: "Bioinformatics: The Future of Data-Driven Biology",
        blogLink: "https://www.linkedin.com/pulse/bioinformatics-future-data-driven-biology-srayoshi-bashed-mirza-fphlc/?trackingId=19yAwQuEQLi64XDHZwxWCQ%3D%3D",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGqM73z1betoA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727500465807?e=1745452800&v=beta&t=3uL6BhTSRDUtnnt0iOSncBVjhlsRL0H9AlUUycB7nhI"
    },
    {
        title: "Introduction to Blockchain",
        blogLink: "https://medium.com/@srayoshimirza/introduction-to-blockchain-7416aef550cc",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrTRLPM4XPMDLzRtbNQWUA.png"
    },
    {
        title: "Python Libraries for Data Science",
        blogLink: "https://medium.com/@srayoshimirza/python-libraries-for-data-science-22d6fc4c2c09",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XYQ80mplxLUmj0f2pLXU8g.png"
    },
    {
        title: "Python Basics (Functions- Continuation 2)",
        blogLink: "https://medium.com/@srayoshimirza/python-basics-functions-continuation-2-c4348c1536a7",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CuCCUVGvRZrsom0WKyzwiA.png"
    },
    {
        title: "Python Basics (Functions-Continuation 1)",
        blogLink: "https://medium.com/@srayoshimirza/python-basics-functions-continuation-1-cb0d7be36c08",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bbKq5YKDIFMEtMhnqr0-hw.png"
    },
    {
        title: "Python Basics (Loop, Conditions, Functions)",
        blogLink: "https://medium.com/@srayoshimirza/python-basics-loop-conditions-functions-4f21a3d81067",
        image: "assets/images/Python Loops and Branching.png"
    },
    {
        title: "Python Basics (Data Structure)",
        blogLink: "https://medium.com/@srayoshimirza/python-basics-data-structure-aee9fa3db3fb",
        image: "assets/images/Data Structures in Python.jpg"
    },
    {
        title: "Python Basics (Operators)",
        blogLink: "https://medium.com/@srayoshimirza/python-basics-operators-fe24088bd9da",
        image: "assets/images/Blog 3-02.jpg"
    },
    {
        title: "Python Basics (Variables)",
        blogLink: "https://medium.com/@srayoshimirza/python-basics-variables-0667e38b8dfb",
        image: "assets/images/Blog 3-01.jpg"
    },
    {
        title: "Python in Data Science",
        blogLink: "https://medium.com/@srayoshimirza/python-in-data-science-9ed5c6743e8e",
        image: "assets/images/python.png"
    },
    {
        title: "Introduction to Data Science",
        blogLink: "https://medium.com/@srayoshimirza/introduction-to-data-science-30c828b419d9",
        image: "assets/images/intro.png"
    }
];

// Insert all blogs dynamically into the row
const blogContainer = document.getElementById('blog-list');
blogs.forEach(blog => {
    const blogItem = document.createElement('div');
    blogItem.classList.add('col-md-3', 'mb-4'); // Ensures 4 items per row
    blogItem.innerHTML = `
        <div class="blog-item shadow-lg p-3 rounded">
            <img src="${blog.image}" alt="Blog Image" class="img-fluid rounded">
            <h3>${blog.title}</h3>
            <a href="${blog.link}" class="btn btn-primary">Read More</a>
        </div>
    `;
    blogContainer.appendChild(blogItem);
});