import Layout from '@/components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import styles from '../styles/showcase.module.css';
import placeholder from '../../public/placeholder.png';
import githubImg from '../../public/github.svg';
import slidesImg from '../../public/googleslides.svg';
import youtubeImg from '../../public/youtube.svg';

const yapping = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function Showcase(props) {
    return (
        <div className={styles.container}>
            <div className={styles.showcaseTitleContainer}>
                <p>{props.proj}</p>
            </div>
            <div className={styles.showcaseContentContainer}>
                <div className={styles.showcaseImageContainer}>
                    <Image 
                        src = {props.img}
                        width = {0}
                        height= {0}
                        style = {{
                            width: 'auto',
                            height: 'auto'
                        }}
                    />
                </div>
                <div className={styles.showcaseDescriptionContainer}>
                    <p><b>{props.internship}</b></p>
                    <p className={utilStyles.pWrap}>
                    {props.tech?.map((name) => ( 
                        <span className={utilStyles.spanSpace} key={name.id}>{name}</span>
                    ))}
                    </p>
                    <p>{props.desc}</p>
                    <div className={styles.projectLinkContainer}>
                        {props.github ?
                            <a href={props.github} target="_blank">
                                <Image
                                    src={githubImg}
                                    className={styles.socialStyle}
                                    width={50} 
                                />
                            </a>
                            :
                            <></>
                        }
                        {props.pres ?
                            <a href={props.pres} target="_blank">
                                <Image
                                    src={slidesImg}
                                    className={styles.socialStyle}
                                    width={50} 
                                />
                            </a>
                            :
                            <></>
                        }
                        {props.yt ?
                            <a href={props.yt} target="_blank">
                                <Image
                                    src={youtubeImg}
                                    className={styles.socialStyle}
                                    width={50} 
                                />
                            </a>
                            :
                            <></>
                        }
                    </div>                    
                </div>
            </div>
        </div>
    );
}