import './projects.css'

const Projects = () => {
    let projects = [
        {
            title: 'MaskOut',
            description: 'Jetson based DeepStream application to identify areas of high risk through intuitive heat maps.',
            image: 'https://github.com/imneonizer/maskout/raw/main/Docs/heatmap-browser.png',
            href: 'https://github.com/imneonizer/maskout'
        },
        {
            title: 'TLT Lightning',
            description: 'Nvidia Transfer Learning Toolkit based easy to use web application to train various neural networks.'
        },
        {
            title: 'ALPR',
            description: 'India License Plate recognition, DeepStream SSD + SSD + CRNN, Optimized to run on Jetson Nano.'
        },
        {
            title: 'Autolycus',
            description: 'React JS & Flask backend progressive web application for downloading and streaming torrent files remotely.',
            image: 'https://github.com/imneonizer/autolycus/raw/main/images/web-login.png'
        },
        {
            title: 'Yandex Crawler',
            description: 'Automated image scraper which can scrape and download millions of similar images quickly.'
        },
        {
            title: 'Kitti Augmentor',
            description: 'Image augmentation library to augment object detection dataset transforming both images and bounding boxes.'
        }
        
    ];
    
    const openLink = (link) => {if (link){window.open(link)}};

    return (
        <div className="project-section-container">
            {projects.map((project, idx) => 
                <div className="project-card" key={idx} onClick={() => openLink(project.href)} style={{cursor: 'pointer'}}>
                    <img src={project.image ? project.image: 'https://via.placeholder.com/500x300'} />
                    <p className="project-title" style={{paddingTop: ".5em"}}><b>{project.title}</b></p>
                    <p className="project-description">{project.description}</p>
                </div>
            
            )}
        </div> 
    )
}

export default Projects;