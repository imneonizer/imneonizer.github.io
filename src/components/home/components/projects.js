import './projects.css'
import tltLightning from './icons/tlt-lightning.png';
import alpr from './icons/alpr.png';
import yandexCrawler from './icons/yandex-crawler.png';
import autolycus from './icons/autolycus.png';
import kittiAugmentor from './icons/kitti-augmentor.png';
import maskout from './icons/maskout.png';

const Projects = () => {
    let projects = [
        {
            title: 'MaskOut',
            description: 'Jetson based DeepStream application to identify areas of high risk through intuitive heat maps.',
            image: maskout,
            url: 'https://github.com/imneonizer/maskout'
        },
        {
            title: 'TLT Lightning',
            description: 'Nvidia Transfer Learning Toolkit based easy to use web application to train various neural networks.',
            image: tltLightning
        },
        {
            title: 'ALPR',
            description: 'India License Plate recognition, DeepStream SSD + SSD + CRNN, Optimized to run on Jetson Nano.',
            image: alpr
        },
        {
            title: 'Autolycus',
            description: 'React JS & Flask backend progressive web application for downloading and streaming torrent files remotely.',
            image: autolycus
        },
        {
            title: 'Yandex Crawler',
            description: 'Automated image scraper which can scrape and download millions of similar images quickly.',
            image: yandexCrawler
        },
        {
            title: 'Kitti Augmentor',
            description: 'Image augmentation library to augment object detection dataset transforming both images and bounding boxes.',
            image: kittiAugmentor
        }
        
    ];
    
    const openLink = (link) => {if (link){window.open(link)}};

    return (
        <div className="project-section-container">
            {projects.map((project, idx) => 
                <div className="project-card" key={idx} onClick={() => openLink(project.url)} style={{cursor: 'pointer'}}>
                    <img src={project.image ? project.image: 'https://via.placeholder.com/500x300'} />
                    <p className="project-title" style={{paddingTop: ".5em"}}><b>{project.title}</b></p>
                    <p className="project-description">{project.description}</p>
                </div>
            
            )}
        </div> 
    )
}

export default Projects;