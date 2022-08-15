import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Group 18.png";
import SafariImg from "../../assets/images/Safari.png";
import PeopleImg from "../../assets/images/Group 28.png";
import PeopleImg2 from "../../assets/images/Group 148.png";
import MainImg1 from "../../assets/images/group2344.svg";
import MainImg2 from "../../assets/images/Image2.png";
import MainImg3 from "../../assets/images/Frame 1000002876.png";
import MainImg4 from "../../assets/images/Component 2.png";
import MainImg5 from "../../assets/images/group39.svg";
import "./styles.scss";

const LandingPage = () => {
  const [mode, setMode] = useState("dark");
  return (
    <div className={`body ${mode} `}>
      <div className="bg">
        <header className="">
          <div className="header-main">
            <img src={Logo} alt="" className="logo" />
            <div className="">
              <Link to="#" className="contact-us">
                <p className="">Contact Us</p>{" "}
              </Link>
              <Link to="#" className="get-started">
                <div className="">Get started</div>
              </Link>
            </div>
          </div>
        </header>
        <section className="main1">
          <section className="section1">
            <div className="">
              <h4 className={`${mode}`}>Data Insight for Engineering Excellence.</h4>
              <p className={`${mode}`}>We are enabling a culture of continuous improvement for engineering teams.</p>
            </div>
            <Link to="#" className="get-started">
              <div className="">Get started</div>
            </Link>
          </section>
          <section className="section2">
            <img src={SafariImg} alt="" className="" />
            <div className="">
              <div className={`main-percentage ${mode}`}>35%</div>
              <p className={`${mode}`}>Of engineering productivity is lost due to Inefficiency</p>
            </div>
          </section>
          <section className="section3">
            <p className={`${mode}`}>Zeedas provides the data insight your team needs to make this a thing of the past</p>
            <div className="">
              <p className={`${mode}`}>Understand how you perform at every stage of your software delivery and surface issues faster. </p>
              <img src={PeopleImg} alt="" className="" />
            </div>
          </section>
        </section>
      </div>
      <section className="main2">
        <div className="section1">
          <p className="">
            Bad codes take <span className="percentage">30%</span> of teams' productivity weekly.{" "}
            <span className="p2">Understand how this impacts your teams and eradicate them.</span>
          </p>
          <div className="">
            <img src={MainImg1} alt="" />
          </div>
        </div>
        <div className="section2">
          <p className="">Resolving issues quickly and unblocking your team is a superpower</p>
          <div className="grid">
            <div className="div1">
              <img src={PeopleImg2} alt="" className="" />
              <p className="">Understand how you perform at each stage of software delivery and identify problems sooner.</p>
            </div>
            <div className="div2">
              <img src={MainImg2} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="">
            <p className="text1">Poor processes pose the biggest risk to developer productivity.</p>
            <p className="text2">Understand your team's productive, productive patterns and productivity uptime. </p>
          </div>
          <div className="img-div">
            <img src={MainImg3} alt="" className="" />
          </div>
        </div>
        <div className="section4">
          <p className="">
            {" "}
            <span className="percentage">83%</span> of engineers experience burnout regularly, costing teams valuable time
          </p>
          <div className="grid">
            <div className="div1">
              <p className="">Identify signs and trends that lead to burnout and prevent them. </p>
            </div>
            <div className="div2">
              <img src={MainImg4} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
      <section className="main3">
        <div className="section1">
          <p className="text1">Stand-ups are boring and repetitive, lacking any real insight</p>
          <img src={MainImg5} alt="" />
          <p className="text2">Run your standups and retrospect meetings with real data, and get more out of these meetings. </p>
        </div>
        <div className="section2">
          <div className="">
            <p className="">
              <span className="percentage">60+</span> analysis to make you a better engineering manager
            </p>
            <Link to="#" className="get-started">
              <div className="">Get started</div>
            </Link>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-grid">
          <div className="div1">
            <svg width="81" height="60" viewBox="0 0 81 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M66.7294 30.2923C67.79 31.8934 69.4439 33.0199 71.336 33.4299C73.2281 33.84 75.2075 33.5008 76.8493 32.4853C78.4651 31.4379 79.602 29.8075 80.0169 27.9429C80.4318 26.0783 80.0917 24.1273 79.0694 22.5072C78.0088 20.906 76.3548 19.7795 74.4627 19.3695C72.5707 18.9595 70.5913 19.2987 68.9495 20.3142C67.3337 21.3616 66.1968 22.9919 65.7819 24.8566C65.367 26.7212 65.7071 28.6721 66.7294 30.2923Z"
                fill="#23B3E8"
              />
              <path
                d="M1.21313 34.8127C2.35851 36.5445 4.14477 37.7648 6.18956 38.2123C8.23435 38.6599 10.3753 38.2992 12.1542 37.2074C13.9131 36.0759 15.1525 34.3081 15.6058 32.2838C16.0592 30.2595 15.6905 28.1403 14.5788 26.3817C13.43 24.6477 11.6387 23.4278 9.58934 22.9837C7.53998 22.5397 5.39601 22.907 3.61778 24.0067C1.86763 25.1411 0.636223 26.9067 0.18687 28.926C-0.262483 30.9453 0.105855 33.0581 1.21313 34.8127Z"
                fill="#F15832"
              />
              <path
                d="M66.3443 7.76111L49.361 43.9335C49.0743 44.5176 48.6817 45.0444 48.2027 45.4878C47.7171 45.9343 47.148 46.2823 46.5275 46.5122C45.9043 46.729 45.2449 46.8249 44.5851 46.7948C43.9242 46.7747 43.2747 46.6183 42.6782 46.3356L41.7872 45.9293C41.1889 45.6514 40.6503 45.2616 40.2011 44.7813C39.7559 44.2993 39.4108 43.7351 39.1854 43.121C38.961 42.5044 38.8581 41.8509 38.8824 41.1958C38.9199 40.5432 39.0769 39.9029 39.3457 39.306L56.6676 2.44477C56.9015 1.94152 57.2335 1.48906 57.6445 1.11344C58.0554 0.737808 58.5373 0.446411 59.0623 0.256005C59.5873 0.0655979 60.1451 -0.0200637 60.7036 0.00394985C61.2622 0.0279634 61.8104 0.16118 62.3168 0.395932L63.9207 1.13775C64.5203 1.41296 65.0591 1.80308 65.5059 2.28562C65.9527 2.76816 66.2987 3.33358 66.524 3.94928C66.7493 4.56497 66.8494 5.21877 66.8186 5.87299C66.7877 6.52722 66.6266 7.16891 66.3443 7.76111Z"
                fill="#4DBD98"
              />
              <path
                d="M45.6766 9.94609L24.4312 57.2462C24.1782 57.8081 23.8226 58.3137 23.3842 58.7353C22.9381 59.1627 22.4161 59.4959 21.8473 59.7163C21.2784 59.9242 20.6768 60.0193 20.074 59.9966C19.4903 59.9572 18.9182 59.8088 18.3852 59.5587L17.2199 58.9981C16.6775 58.7293 16.1902 58.3545 15.7845 57.8944C15.3757 57.4362 15.0591 56.8982 14.8532 56.3116C14.6473 55.725 14.5563 55.1018 14.5854 54.4783C14.612 53.8709 14.7555 53.2753 15.0076 52.7264L36.5401 4.69053C36.7488 4.21738 37.0463 3.79203 37.415 3.43924C37.7838 3.08644 38.2165 2.81325 38.6879 2.63555C39.1594 2.45785 39.6603 2.37921 40.1613 2.40418C40.6624 2.42915 41.1536 2.55725 41.6065 2.78101L43.5149 3.69197C44.6183 4.2247 45.4729 5.18992 45.8908 6.37566C46.3088 7.5614 46.2561 8.87074 45.7442 10.0162L45.6766 9.94609Z"
                fill="#F3E503"
              />
            </svg>
          </div>
          <div className="div2">
            <p className="">Product</p>
            <ol className="">
              <li className="">Terms & Condition</li>
              <li className="">Privacy Policies</li>
            </ol>
          </div>
          <div className="div3">
            <p className="">Support</p>
            <ol className="">
              <li className="">(234) 1 631 6270</li>
              <li className="">12, Water view, Lekki Phase 1, Lagos, Nigeria</li>
              <li className="">info@Zeedas.com</li>
            </ol>
          </div>
          <div className="div4">
            <p className="">Community</p>
            <div className="">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.875 0H3.125C1.40156 0 0 1.40156 0 3.125V21.875C0 23.5984 1.40156 25 3.125 25H12.5V16.4062H9.375V12.5H12.5V9.375C12.5 6.78594 14.5984 4.6875 17.1875 4.6875H20.3125V8.59375H18.75C17.8875 8.59375 17.1875 8.5125 17.1875 9.375V12.5H21.0938L19.5312 16.4062H17.1875V25H21.875C23.5984 25 25 23.5984 25 21.875V3.125C25 1.40156 23.5984 0 21.875 0Z"
                  fill="#03293D"
                />
              </svg>
              <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.8535 0H8.47852C4.16445 0 0.666016 3.49844 0.666016 7.8125V17.1875C0.666016 21.5016 4.16445 25 8.47852 25H17.8535C22.1676 25 25.666 21.5016 25.666 17.1875V7.8125C25.666 3.49844 22.1676 0 17.8535 0ZM23.3223 17.1875C23.3223 20.2031 20.8691 22.6562 17.8535 22.6562H8.47852C5.46289 22.6562 3.00977 20.2031 3.00977 17.1875V7.8125C3.00977 4.79688 5.46289 2.34375 8.47852 2.34375H17.8535C20.8691 2.34375 23.3223 4.79688 23.3223 7.8125V17.1875Z"
                  fill="#03293D"
                />
                <path
                  d="M13.166 6.25C9.71445 6.25 6.91602 9.04844 6.91602 12.5C6.91602 15.9516 9.71445 18.75 13.166 18.75C16.6176 18.75 19.416 15.9516 19.416 12.5C19.416 9.04844 16.6176 6.25 13.166 6.25ZM13.166 16.4062C11.0129 16.4062 9.25977 14.6531 9.25977 12.5C9.25977 10.3453 11.0129 8.59375 13.166 8.59375C15.3191 8.59375 17.0723 10.3453 17.0723 12.5C17.0723 14.6531 15.3191 16.4062 13.166 16.4062Z"
                  fill="#03293D"
                />
                <path
                  d="M19.8847 6.6139C20.3447 6.6139 20.7175 6.24104 20.7175 5.7811C20.7175 5.32115 20.3447 4.94828 19.8847 4.94828C19.4248 4.94828 19.0519 5.32115 19.0519 5.7811C19.0519 6.24104 19.4248 6.6139 19.8847 6.6139Z"
                  fill="#03293D"
                />
              </svg>

              <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.334 2.74844C24.4043 3.15625 23.4137 3.42656 22.3809 3.55781C23.4434 2.92344 24.2543 1.92656 24.6355 0.725C23.6449 1.31562 22.5512 1.73281 21.3855 1.96563C20.4449 0.964063 19.1043 0.34375 17.6418 0.34375C14.8043 0.34375 12.5199 2.64688 12.5199 5.47031C12.5199 5.87656 12.5543 6.26719 12.6387 6.63906C8.37773 6.43125 4.60742 4.38906 2.07461 1.27813C1.63242 2.04531 1.37305 2.92344 1.37305 3.86875C1.37305 5.64375 2.28711 7.21719 3.64961 8.12812C2.82617 8.1125 2.01836 7.87344 1.33398 7.49688C1.33398 7.5125 1.33398 7.53281 1.33398 7.55312C1.33398 10.0437 3.11055 12.1125 5.44023 12.5891C5.02305 12.7031 4.56836 12.7578 4.09648 12.7578C3.76836 12.7578 3.43711 12.7391 3.12617 12.6703C3.79023 14.7 5.67461 16.1922 7.91523 16.2406C6.17148 17.6047 3.95742 18.4266 1.56055 18.4266C1.14023 18.4266 0.737109 18.4078 0.333984 18.3563C2.6043 19.8203 5.29492 20.6562 8.19648 20.6562C17.6277 20.6562 22.784 12.8438 22.784 6.07187C22.784 5.84531 22.7762 5.62656 22.7652 5.40938C23.7824 4.6875 24.6371 3.78594 25.334 2.74844Z"
                  fill="#03293D"
                />
              </svg>
            </div>
            <p className="extra">Stay Excited, Subscribe to our Newsletter</p>
            <div className="input-div">
              <input type="text" placeholder="Your Email" />
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="black" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9493 14.6737C23.0169 14.8833 23.0169 15.1197 22.9493 15.3302C22.9158 15.4346 22.8677 15.5286 22.8061 15.6071L18.8056 20.753C18.6751 20.9204 18.5051 21.0041 18.3344 21.0041C18.1638 21.0041 17.9931 20.9204 17.8626 20.753C17.6023 20.4183 17.6023 19.8748 17.8626 19.5401L20.7248 15.859H7.6672C7.29847 15.859 7 15.4751 7 15.0015C7 14.5279 7.29847 14.1448 7.6672 14.1448H20.7248L17.8626 10.4637C17.6023 10.129 17.6023 9.58552 17.8626 9.2508C18.123 8.91608 18.5452 8.91608 18.8056 9.2508L22.8061 14.3959C22.8677 14.4744 22.9158 14.5693 22.9493 14.6737Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <p className="footer-text">
          © 2020 Zeedas, Ltd. All rights reserved <br />
          <br /> © 2020 Zeedas, Ltd. All rights reserved All text, graphics, audio files, code, downloadable material, and other works on this web
          site are the copyrighted works of TeamApt, Inc. All Rights Reserved. Any unauthorized redistribution or reproduction of any copyrighted
          materials on this web site is strictly prohibited. Other product and company names are trademarks of their respective owners. This web site
          contains simulated images; actual appearance may vary.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
