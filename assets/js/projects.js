$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [{
            image: 'assets/images/1-Practical Approach of Computational Tools and Methods in Drug discovery and Admet Property Prediction_5days_Workshop.jpeg',
            link: false,
            title: 'Practical Approach of Computational Tools and Methods in Drug discovery and Admet Property Prediction 5days Workshop',
            technologies: ['Bioinformatics', 'Drug Discovery'],
            description: "Drug discovery 5 days workshop basic to Advance.",
            categories: ['Workshops', 'featured']
        },
        {
            image: 'assets/images/2-2nd_Stem_Cell_Engineering_Workshop.jpeg',
            link: false,
            title: '2nd Stem Cell Engineering Workshop',
            technologies: ['Stem Cell'],
            description: "A detailed Stem cell culture lecture workshop from NCBS.",
            categories: ['Workshops']
        },
        {
            image: 'assets/images/3-Quantum Mechanics,Molecular Mechanics and Metadynamics Workshop.jpeg ',
            link: false,
            title: 'Quantum Mechanics, Molecular Mechanics and Metadynamics Workshop',
            technologies: ['Molecular Dynamics', 'GROMACS'],
            description: "2 days workshop on Molecular Dynamics and simulations.",
            categories: ['Workshops', 'featured']
        }, {
            image: 'assets/images/4-R for Biologist__Certificate1.png',
            link: false,
            title: 'R for Biologist',
            technologies: ['R', 'Visualization', 'Research'],
            description: "R programming for Biologist learn Research visualization and Statistical analysis.",
            categories: ['Workshops']
        },
        {
            image: 'assets/images/5-DataScience_and_MachineLearning1.png',
            title: 'DataScience and MachineLearning',
            demo: false,
            technologies: ['Python', 'Data Science'],
            description: "Datascience and machine learning related to life science",
            categories: ['Workshops']
        },
        {
            image: 'assets/images/6-International_Bioinformatics_Workshop_On_Genome_Informatics1.png',
            link: false,
            title: 'International Bioinformatics Workshop On Genome Informatics',
            demo: false,
            technologies: ['Genomics ', 'Python', 'NGS'],
            description: "Genome informatics , Rnaseq, NGS,  Python",
            categories: ['Workshops', 'featured']
        },
        {
            image: 'assets/images/ADVANCE PYTHON PROGRAMMING.png',
            link: false,
            title: 'ADVANCE PYTHON PROGRAMMING',
            demo: false,
            technologies: ['python', 'OOPS'],
            description: "Python basics Beginer to Advance.",
            categories: ['Course', 'featured']
        },
        {
            image: 'assets/images/Bioinformatics Methods and Tools Master_14days.jpeg',
            link: false,
            title: 'Bioinformatics Methods and Tools Master_14days',
            demo: false,
            technologies: ['Bioinformatics'],
            description: "Bioinformatics Methods and Tools Master_14days.",
            categories: ['Excellence', 'featured']
        },
        {
            image: 'assets/images/Buisness Analytics with excel.jpg',
            link: false,
            title: 'Buisness Analytics with excel',
            demo: false,
            technologies: ['Microsoft', 'EXCEL'],
            description: "Buisness Analytics with excel.",
            categories: ['Course']
        },
        {
            image: 'assets/images/CertificateOfCompletion_Learning Python 20201.png',
            link: false,
            title: 'Certificate Of Completion_Learning Python',
            demo: false,
            technologies: ['Python', 'Basics'],
            description: "Certificate Of Completion_Learning Python.",
            categories: ['Course']
        },
        {
            image: 'assets/images/Computational approach for the Evaluation of Bioactive Compounds from Ethanobotanicals potential and biological Activity.jpeg',
            link: false,
            title: 'Computational approach for the Evaluation of Bioactive Compounds from Ethanobotanicals potential and biological Activity.',
            demo: false,
            technologies: ['Computational', 'Drug discovery'],
            description: "Computational approach for the Evaluation of Bioactive Compounds from Ethanobotanicals potential and biological Activity.",
            categories: ['Excellence', 'featured']
        },
        {
            image: 'assets/images/MEMBER OF THE EXPERTEZE RESEARCH TEAM1.png',
            link: false,
            title: 'MEMBER OF THE EXPERTEZE RESEARCH TEAM',
            demo: false,
            technologies: ['Research'],
            description: "MEMBER OF THE EXPERTEZE RESEARCH TEAM.",
            categories: ['Excellence', 'featured']
        },
        {
            image: 'assets/images/Plant based green synthesis of Zno nanoparticle of F.mysorensis As Novel Antimicrobial agents on Nacosomal Pathogens.jpeg',
            link: false,
            title: 'Plant based green synthesis of Zno nanoparticle of F.mysorensis As Novel Antimicrobial agents on Nacosomal Pathogens.',
            demo: false,
            technologies: ['Nanoparticle', 'GreenSynthesis'],
            description: "Plant based green synthesis of Zno nanoparticle of F.mysorensis As Novel Antimicrobial agents on Nacosomal Pathogens.",
            categories: ['Excellence', 'featured']
        },
        {
            image: 'assets/images/google-cloud-backup.png',
            link: 'https://www.nagekar.com/2018/05/encrypted-backup-with-duplicity.html',
            title: 'Encrypted Backups - Google Cloud',
            demo: false,
            technologies: ['NextCloud', 'Duplicity'],
            description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/pi-cloud.jpg',
            link: 'https://www.nagekar.com/2016/01/how-to-private-local-cloud-using-raspberrypi.html',
            title: 'Local Cloud - Raspberry Pi',
            demo: false,
            technologies: ['FTP', 'DIY'],
            description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
            categories: ['diy']
        },
        {
            image: 'assets/images/LSSSDC-CERTIFICATE-LEVEL-5.jpeg',
            link: false,
            title: 'LSSSDC',
            demo: false,
            technologies: ['LSSSDC', 'Research Associate'],
            description: "Research Associate-Product Development/Synthesis/Medicinal Chemistry (QP No - LFS/Q0505) Conforming to National skill Qualifications Framework Level-5.",
            categories: ['Excellence']
        },
    ]
    let projects = [];
    if (slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
        return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}