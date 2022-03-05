import { ProjectsGalleryProps, Project} from './interface';
import styles from './projectgallery.module.scss'

export default function ProjectGallery(props :ProjectsGalleryProps) {
    return (
        <section id={styles.projectsGalleryContainer}>
             { props.projects.map((item :Project, index :number) => {
                 return (
                    <div className={styles.content} key={index}>
                        <img src={item.image} />
                        <p> {item.name} </p>
                    </div>
                 )
             })
             }
        </section>
    )
}
