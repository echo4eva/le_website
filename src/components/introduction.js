import Layout from './layout';
import Image from 'next/image';
import profilePicture from '../../public/pfp.jpg';
import gitHubPicture from '../../public/github.svg';
import blogPicture from '../../public/blog.svg';
import profileFlag from '../../public/flag.gif';
import linkedInPicture from '../../public/linkedin.svg';
import pythonPicture from '../../public/python.png';
import styles from '../styles/introduction.module.css';
import utilStyles from '../styles/utils.module.css';

const description = "Welcome to my profile! This portfolio website made with JavaScript, React, and Next.js is a mock of Steam's user profile reimagined in lightmode.";
// const description = "test";
const nickname = "echo";
const location = "California, United States";
const name = "Jericho Imperial";
const linkedInLink = "https://www.linkedin.com/in/jerichoimperial/";
const gitHubLink = "https://github.com/echo4eva";
const blogLink = "https://blog4eva.vercel.app/";

export default function Introduction() {
    return (
        <div className={styles.container}>
            <Image
                className = {styles.portrait}
                src = {profilePicture}
                width={200}
                height={0}
                style={{
                    aspectRatio: 1,
                    objectFit: ('cover'),
                }}
            />
            <div className={styles.text}>
                <h1 className={utilStyles.header}>{name}</h1>
                <div className={styles.textUnderName}>
                    <p>{nickname}</p>
                    <span></span>
                    <Image 
                        className = {styles.flagUnderName}
                        src = {profileFlag}
                    />
                    <span></span>
                    <p>{location}</p>
                    <span></span>

                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                <div className={styles.socials}>
                    <ul className={utilStyles.listNoBullets}>
                        <li className={utilStyles.listHorizontal}>
                            <Image
                                className = {styles.socialsColor}
                                src = {gitHubPicture}
                                style = {{
                                    marginRight: ('0.5rem')
                                }}
                            />
                            <a href={gitHubLink} target='_blank'>Github</a>
                        </li>
                        <li className={utilStyles.listHorizontal}>
                            <Image
                                className = {styles.socialsColor}
                                src = {linkedInPicture}
                                style = {{
                                    marginRight: ('0.5rem')
                                }}
                            />
                            <a href={linkedInLink} target='_blank'>LinkedIn</a>
                        </li>
                        <li className={utilStyles.listHorizontal}>
                            <Image
                                className = {styles.socialsColor}
                                src = {blogPicture}
                                style = {{
                                    marginRight: ('0.5rem')
                                }}
                            />
                            <a href={blogLink}>Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.extra}>
                <div className={styles.level}>
                    <div className={styles.levelLevel}>
                        <p className={utilStyles.header3}>Level</p>
                    </div>
                    <div className={styles.levelNumberContainer}>
                        <p>21</p>
                    </div>
                </div>
                <div className={styles.badgeContainer}>
                    <div className={styles.badgeIconContainer}>
                        <Image 
                            src = {pythonPicture}
                            style = {{
                                maxWidth: (50),
                                maxHeight: (50),
                            }}
                        />
                    </div>
                    <div className={styles.badgeInfoContainer}>
                            <p className={utilStyles.pmini}>Pythonic</p>
                            <p className={utilStyles.pmini}>500 XP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}