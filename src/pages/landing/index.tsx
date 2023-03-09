import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import SafariImg from '../../assets/images/Safari.png';
import PeopleImg from '../../assets/images/Group 28.png';
import PeopleImg2 from '../../assets/images/Group 148.png';
import MainImg1 from '../../assets/images/group2344.svg';
import MainImg2 from '../../assets/images/Image2.png';
import MainImg3 from '../../assets/images/Frame 1000002876.png';
import MainImg4 from '../../assets/images/Component 2.png';
import MainImg5 from '../../assets/images/group39.svg';
import './styles.scss';
import gsap from 'gsap';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const LandingPage = () => {
  const [mode, setMode] = useState('dark');
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const tl = useRef<any>(null);

  useEffect(() => {
    // tl.current = gsap.fromTo(firstSectionRef.current, { opacity: 0, y: 500 }, { opacity: 1, duration: 5, y: 0 });
    // gsap.fromTo(
    //   secondSectionRef.current,
    //   { opacity: 0, x: -500 },
    //   {
    //     scrollTrigger: {
    //       trigger: secondSectionRef.current,
    //       pin: true, // pin the trigger element while active
    //       start: "top top",
    //     },
    //     opacity: 1,
    //     x: 0,
    //     duration: 3,
    //   }
    // );
  }, []);
  return (
    <div className={`body ${mode} `}>
      <div className="bg">
        <header className="">
          <Navbar />
        </header>
        <section className="main1">
          <section ref={firstSectionRef} className="section1">
            <div className="">
              <h4 className={`${mode}`}>
                Data Insight for Engineering Excellence.
              </h4>
              <p className={`${mode}`}>
                We are enabling a culture of continuous improvement for
                engineering teams.
              </p>
            </div>
            <Link to="#" className="get-started">
              <div className="">Get started</div>
            </Link>
          </section>
          <section ref={secondSectionRef} className="section2">
            <img src={SafariImg} alt="" className="" />
            <div className="">
              <div className={`main-percentage ${mode}`}>35%</div>
              <p className={`${mode}`}>
                Of engineering productivity is lost due to Inefficiency
              </p>
            </div>
          </section>
          <section className="section3">
            <p className={`${mode}`}>
              Zeedas provides the data insight your team needs to make this a
              thing of the past
            </p>
            <div className="">
              <p className={`${mode}`}>
                Understand how you perform at every stage of your software
                delivery and surface issues faster.{' '}
              </p>
              <img src={PeopleImg} alt="" className="" />
            </div>
          </section>
        </section>
      </div>
      <section className="main2">
        <div className="section1">
          <p className="">
            Bad codes take <span className="percentage">30%</span> of teams'
            productivity weekly.{' '}
            <span className="p2">
              Understand how this impacts your teams and eradicate them.
            </span>
          </p>
          <div className="">
            <img src={MainImg1} alt="" />
          </div>
        </div>
        <div className="section2">
          <p className="">
            Resolving issues quickly and unblocking your team is a superpower
          </p>
          <div className="grid">
            <div className="div1">
              <img src={PeopleImg2} alt="" className="" />
              <p className="">
                Understand how you perform at each stage of software delivery
                and identify problems sooner.
              </p>
            </div>
            <div className="div2">
              <img src={MainImg2} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="">
            <p className="text1">
              Poor processes pose the biggest risk to developer productivity.
            </p>
            <p className="text2">
              Understand your team's productive, productive patterns and
              productivity uptime.{' '}
            </p>
          </div>
          <div className="img-div">
            <img src={MainImg3} alt="" className="" />
          </div>
        </div>
        <div className="section4">
          <p className="">
            {' '}
            <span className="percentage">83%</span> of engineers experience
            burnout regularly, costing teams valuable time
          </p>
          <div className="grid">
            <div className="div1">
              <p className="">
                Identify signs and trends that lead to burnout and prevent them.{' '}
              </p>
            </div>
            <div className="div2">
              <img src={MainImg4} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
      <section className="main3">
        <div className="section1">
          <p className="text1">
            Stand-ups are boring and repetitive, lacking any real insight
          </p>
          <img src={MainImg5} alt="" />
          <p className="text2">
            Run your standups and retrospect meetings with real data, and get
            more out of these meetings.{' '}
          </p>
        </div>
        <div className="section2">
          <div className="">
            <p className="">
              <span className="percentage">60+</span> analysis to make you a
              better engineering manager
            </p>
            <Link to="#" className="get-started">
              <div className="">Get started</div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
