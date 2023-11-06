import Head from 'next/head';
import Image from 'next/image';
import Introduction from '@/components/introduction';
import Showcase from '@/components/showcase';
import Layout from '@/components/layout';
import styles from '../styles/index.module.css';
import background from '../../public/background1.jpg';
import showcase_img_3 from '../../public/showcase_3.jpg';
import showcase_img_2 from '../../public/showcase_2.jpg';
import showcase_img_1 from '../../public/showcase_1.jpg';

const showcase_info = [{
  proj: "Project Gutenberg API",
  internship: "Internship Experience with CodeDay Labs and EBSCO",
  tech: ["Java", "Springboot", "AWS", "MySQL"],
  desc: "An API that allows users to store Project Gutenberg’s library in their own database for offline use.",
  img: showcase_img_1,
  github: "https://github.com/echo4eva/zjp",
  pres: "https://docs.google.com/presentation/d/1ixu9gwniqd5SCqLkZ6DLznSsu6Qjoun_gh1KG-HIchE/edit?usp=sharing",
  yt: "",
}, {
  proj: "WEJ-Tech Full Stack Webapp",
  internship: "Internship Experience from CodeDay Lab",
  tech: ["JavaScript", "React", "Python", "Django", "Djoser"],
  desc: "A prototyped full-stack webapp that outputs environmental data such as generated oxygen and carbon based on user inputted images of landscape.",
  img: showcase_img_2,
  github: "https://github.com/codeday-labs/wej-tech",
  pres: "https://docs.google.com/presentation/d/14Oj4Wrgs7afnl9u2rrt72WfRXmquNeh4o2EIdy663M8/edit?usp=sharing",
  yt: "https://youtu.be/KdazKTVkll0?si=FrTTmiyOELc-cC97"
}, {
  proj: "Requests Library Pull Request",
  internship: "Open Source Micro-Internship Experience from Computing Talent Initiative",
  tech: ["Python"],
  desc: "Submitted a pull-request that would allow the reuse of SSL context for a session to improve space and performance.",
  img: showcase_img_3,
  github: "https://github.com/psf/requests/pull/5971",
  pres: "",
  yt: ""
}]

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>Jericho&apos;s Portfolio</title>
        </Head>
          <Introduction />
          <Showcase {...showcase_info[0]}/>
          <Showcase {...showcase_info[1]}/>
          <Showcase {...showcase_info[2]}/>
      </Layout>
    </div>
  );
}
