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
            categories: ['Workshops']
        },
        {
            image: 'assets/images/2-2nd_Stem_Cell_Engineering_Workshop.jpeg',
            link: false,
            title: '2nd_Stem_Cell_Engineering_Workshop',
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
            categories: ['Workshops']
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
            categories: ['Workshops']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://github.com/abhn/RPi-Status-Monitor',
            title: 'Raspberry Pi Monitor',
            demo: false,
            technologies: ['python', 'flask'],
            description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
            categories: ['webdev', 'diy']
        },
        {
            image: 'assets/images/s3scan.png',
            link: 'https://github.com/abhn/S3Scan',
            title: 'S3Scan',
            demo: false,
            technologies: ['python'],
            description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
            categories: ['native', 'security']
        },
        {
            image: 'assets/images/elementary.png',
            link: 'https://github.com/abhn/Elementary',
            title: 'Elementary',
            demo: 'https://elementary-jekyll.github.io/',
            technologies: ['Jekyll', 'CSS3'],
            description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/soot-spirits.png',
            link: 'https://github.com/abhn/Soot-Spirits',
            title: 'Soot Spirits',
            demo: 'https://sootspirits.github.io',
            technologies: ['Jekyll', 'CSS3'],
            description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/python-chat.png',
            link: 'https://www.nagekar.com/2014/12/lan-group-messenger-in-python.html',
            title: 'Terminal Group Chat',
            demo: false,
            technologies: ['Python', 'Sockets'],
            description: "Simple terminal group chat based on native sockets using Python.",
            categories: ['native']
        },
        {
            image: 'assets/images/old-lcd.jpg',
            link: 'https://www.nagekar.com/2018/05/reusing-old-laptop-lcd-panel.html',
            title: 'Reusing Old LCD Panel',
            demo: false,
            technologies: ['DIY'],
            description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
            categories: ['diy']
        },
        {
            image: 'assets/images/nextcloud-enc.png',
            link: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
            title: 'Encrypted Self-Hosted Cloud',
            demo: false,
            technologies: ['NextCloud', 'GnuPG'],
            description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
            categories: ['diy', 'security']
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
            link: 'https://www.dropbox.com/s/xna8sw9t8u9z3rf/LSSSDC-CERTIFICATE-LEVEL-5.jpeg?dl=0',
            title: 'LSSSDC ',
            demo: false,
            technologies: ['Electron', 'Javascript'],
            description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
            categories: ['native']
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