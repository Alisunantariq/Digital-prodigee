import React from "react";
import "./App.css";

import MyButton from "./Components/MyButton";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Fifth from "./Components/Fifth";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="p-container">
          <div className="left_container">
            <div className="text_container">
              <div className="div1_text">
                Do You Have An Idea or Need a Solution?
              </div>

              <div className="div2_text">
                <span>Trust the experts!</span>
              </div>
              <div className="div3_text">
                <span>
                  It's simple, we have built apps for the last 10 years and with
                  over 100 Mobile Application projects under our belt, we want
                  to share our knowledge with you!
                </span>
              </div>
              
                <MyButton buttonText="Let's Chat!"/>
              

              <div className="div5_text">
                <span>
                  <li>
                    <a href="link-address">
                      See how it works{" "}
                      <i
                        style={{ height: "14px", width: "14px" }}
                        className="bi bi-arrow-right-short"
                      ></i>
                    </a>
                  </li>{" "}
                </span>
              </div>
              
            </div>
          </div>
          <div className="right_container">
            <div className="img-container">
              <img
                className="img1"
                src="https://static.wixstatic.com/media/25f9e8_13d3450992e04fe1b17684b22d00df28~mv2.png/v1/crop/x_0,y_3,w_1366,h_1197/fill/w_634,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FC7DD0FE-7172-4EA7-B009-F38D8ABCCD6B.png"
                alt="/"
              />
            </div>
          </div>
          <div className="brands-logos">
            <img
              className="logos-imgs"
              src="https://static.wixstatic.com/media/25f9e8_05b09700898b4e3cb80316fae4df0cba~mv2.png/v1/fill/w_127,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/paypal%402x.png"
              alt="#"
            />
            <img
              className="logos-imgs"
              src="https://static.wixstatic.com/media/25f9e8_045dc91c369d43bd902d2f49e9f977a8~mv2.png/v1/fill/w_138,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/praxair%402x.png"
              alt="#"
            />
            <img
              className="logos-imgs"
              src="https://static.wixstatic.com/media/25f9e8_4aeb2b971e7343e988cecc8e736ecfe6~mv2.png/v1/fill/w_115,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cisco%402x.png"
              alt="#"
            />
            <img
              className="logos-imgs"
              src="data:image/webp;base64,UklGRkYDAABXRUJQVlA4WAoAAAAYAAAAXgAAPwAAVlA4TGUCAAAvXsAPEDVIbuRGkCT5b1s8GmtF+TFdc4fuwz0XWRGSYG079uaaZ57U+P8/tRGztm3btr3syljbxrLTpW3bthW8k3sC+l3jYtm/CZvT7QXewf7GubxCnZuTMjKG4sWeAn7OF9+zcwYlDuqy4aIsVWVY1LJBHR/IuoENqliv3LB4wvJM8MYND9QZln0gU2wOG0Uc8cATu2U44YmjegxsyHY5Ih/Ls4YSxAZD/PBH5CmWUGlxs0gVElQYLjZeUG4NavhBmTMoZDt5dbNs0Eog6wcdKC8eYwHJSbObH88MyoKBb9yhXMBgDClIGW0ob0SGH1++qNTSSbdBD8qbB8nblAuUG8NWEQ8oF4akyBFIP00ob5QZKpyUsN+bQZe3uERCWg2XfSfBH4GM0ITyQRFuiFHKDGngC7kz6PYOnikkJ+sH/g0b9CEhtbQqT7TzhPJBxmAO5d5bSsQXygeR4WLnynA8oKwZdKO8kWCQH/LI4cGUFyklAbaTnEwY+M4ZNRwT3DBjSBfKO5HBCsqV11w2XJ4hLngjRzjkxICdC6pIEGMD//BGucE8yoXX8FOlgQsklDrDZbuh4nfKDBZRLr1CTpoNSAlNBpRTJCfLBv4FLuqyjQUbd54mjzQbmBHemTTwkxRBAXmiyPDF57I/cm/Q5UmWkJAWhnlAfig1IJ6DJGTAwO9cu1n+4YMKg0WUK4NplAeDHpQPyjyjlFFHRiJaaCJDjeFWTB0Z6qg0VJAkSx0JN6WUOkcKH5RRJwnDUUeWpEEpdWRJ4cP/4WJZDcvq3J1ldW7Oss5uWQ2dZZ2hZZ2hZfWYXwsCAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAAAvGQEA6AMAAC8ZAQDoAwAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAF8AAAADoAQAAQAAAEAAAAAAAAAA"
              alt="#"
            />
            <img
              className="logos-imgs"
              src="data:image/webp;base64,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"
              alt="#"
            />
            <img
              className="logos-imgs"
              src="https://static.wixstatic.com/media/25f9e8_6a747065766c493daad0f3e852d54092~mv2.png/v1/fill/w_140,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aon%402x.png"
              alt="#"
            />
            <img
              className="logos-imgs"
              src="https://static.wixstatic.com/media/25f9e8_52dad459c46e45b6bb66ce7955028b45~mv2.png/v1/fill/w_127,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/travelers%402x.png"
              alt="#"
            />
          </div>
        </div>
      </div>
      <div className="All-Around">
        <div className="text">
          <span id="text">
            Mobile App Development Tailored For Your Unique Business Goals
          </span>
        </div>
        <div id="parent-card">
          <div className="cards">
            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_1035ce6b940f4bcaa687b5b9bd4ebcf4~mv2.png/v1/crop/x_0,y_18,w_3200,h_2363/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/35B9781A-01C4-4FC3-801C-43650FC0919D.png"
                />
                <div className="fully-custom"> Fully Custom Mobile Apps</div>
                <div className="para">
                  
                    Full cycle product development <br /> bringing innovative
                    ideas to life.
                  
                </div>
              </div>
            </div>
            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_c69939e83644429bb13ab6b2a10ea498~mv2.png/v1/crop/x_0,y_14,w_2400,h_1773/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/E406B448-76A6-4A9A-9163-4153BEFD461B.png"
                />
                <div className="fully-custom"> Business Workflow Apps</div>
                <div className="para">
                  
                    Automate business processes and <br /> make your team more
                    efficient.
                  
                </div>
              </div>
            </div>
            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_91d7c5cb87404280b59c66e6886e2355~mv2.png/v1/crop/x_0,y_18,w_3200,h_2363/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/550A169A-062D-44AD-A91C-BA99C5910BCD.png"
                />
                <div className="fully-custom">Influencer Marketing Apps</div>
                <div className="para">
                  
                    Immediately improve engagement <br /> on social media with
                    capabilities <br />
                    only available in a mobile app.
                  
                </div>
              </div>
            </div>
            {/* 2nd row  */}

            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_dd1c0f93f871438d9a36ed9644d37831~mv2.png/v1/crop/x_0,y_5,w_800,h_591/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CA3C461E-105E-4EEE-A89C-D4679EFA2C9F.png"
                />
                <div className="fully-custom"> Ecommerce Apps</div>
                <div className="para">
                  
                    Ecommerce Apps increases revenue per customer and customer
                    engagement for your Shopify store.
                  
                </div>
              </div>
            </div>

            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_13d3450992e04fe1b17684b22d00df28~mv2.png/v1/crop/x_0,y_9,w_1600,h_1182/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FC7DD0FE-7172-4EA7-B009-F38D8ABCCD6B.png"
                />
                <div className="fully-custom"> Fitness Apps</div>
                <div className="para">
                  

                    Deliver a mobile training experience.Track progress,create
                    training programs , charge for premium content and much
                    more!
                  
                </div>
              </div>
            </div>

            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_febea0cb942f493599bf82bb0cc773ca~mv2.png/v1/crop/x_0,y_14,w_2400,h_1773/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8D8B4F2B-588F-4410-B3D5-19065545A8B1.png"
                />
                <div className="fully-custom">Educational Apps</div>
                <div className="para">
                  
                    Ecucational Apps improve communication and engagement with
                    your students and customers.
                  
                </div>
              </div>
            </div>
            {/* 3RD ROW  */}

            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_862424469b324e51ac3964650eb0e0c8~mv2.png/v1/crop/x_0,y_14,w_2400,h_1773/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5219CBC9-FB2B-48B9-8E09-DAA8DEB4E01B.png"
                />
                <div className="fully-custom">Religious Organization Apps</div>
                <div className="para">
                  
                    Engage your congregation in a mobile-first world.
                  
                </div>
              </div>
            </div>

            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_e69701a428674a94a53790f309a0940d~mv2.jpeg/v1/crop/x_0,y_1,w_259,h_191/fill/w_362,h_267,al_c,lg_1,q_80,enc_auto/1D54F44E-4A28-460A-AF42-42F5ACDA287C.jpeg"
                />
                <div className="fully-custom">Content Creater Apps </div>
                <div className="para">
                  
                    Distribute content,engage your audience,and built your
                    community.
                  
                </div>
              </div>
            </div>

            <div className="card-1">
              <div className="img">
                <img
                  id="image"
                  src="https://static.wixstatic.com/media/25f9e8_91d7c5cb87404280b59c66e6886e2355~mv2.png/v1/crop/x_0,y_18,w_3200,h_2363/fill/w_383,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/550A169A-062D-44AD-A91C-BA99C5910BCD.png"
                />
                <div className="fully-custom">Event Apps</div>
                <div className="para">
                  
                    Set your event apart and delight your attendees with a
                    mobile app for you event.
                  
                </div>
              </div>
            </div>
            <Second buttonText= "GET STARTED"/>
          </div>
          
        </div>
      </div>
      <div className="main-2">
        <div className="text-1">
          <span id="AD">
            TURNKEY APP DEVELOPMENT FOR THOSE WHO DEMAND THE BEST
          </span>
        </div>
        <div className="text-2">
          <span id="IE">Bring Your App Idea To Life With Industry Experts</span>
        </div>
        <div className="container">
          <div className="box-1">
            <div className="first">
              <span id="AST">
                Work With A Top Notch App Success Team To Bring Your Idea To
                Life
              </span>
            </div>
            <div className="second">
              <p>
                Our team of talented developers and designers will work
                one-on-one with you to take your app from idea to reality. We’ve
                helped businesses from Fortune 500 companies to small local
                businesses build powerful mobile apps and we’re ready to help
                you too!
              </p>
            </div>
          </div>
          <div className="box-2">
            <img
              src="https://static.wixstatic.com/media/25f9e8_24d43b4f46434d66b488826954edb86c~mv2.gif"
              alt=""
              id="img-3"
            />
          </div>
        </div>
        
        <Third buttonText= "Schedule a Consulation"/>
          
      </div>
      <div className="p3-container">
        <div className="div6-text">
          <span>See Why Businesses Choose Digital Prodigee</span>
        </div>
        <div className="div7-text">
          <span>
            "Every struggle is resistant forming new strength in you. Embrace
            pain and challenges because it is the universe birthing a new
            version of yourself."
            <br /> CEO of Digital Prodigee <br />
            Dinah Redhouse
          </span>
        </div>
        <div className="lower-cards">
          <div className="lower-card">
            <img
              id="hover-cards"
              src="https://static.wixstatic.com/media/25f9e8_b517ee9da190446a9982cbd38c19390d~mv2.jpg/v1/crop/x_0,y_123,w_300,h_402/fill/w_296,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/300x0w.jpg"
              alt=""
            />
            <div class="overlay">
              {" "}
              <div style={{ margin: "10px" }}>
                <h2
                  style={{
                    fontSize: "20px",
                    color: "white",
                    // position: "relative",
                    // top: "20px",
                    // padding: "20px",
                  }}
                >
                  Nicole Boyd
                </h2>

                {/* <br />
            <br /> */}
                <span
                  style={{
                    fontSize: "15px",
                    color: "white",
                    letterSpacing: "normal",
                    lineHeight: "normal",
                    // border: "0",

                    outline: "0",
                    padding: "0",
                    // padding: "20px",
                  }}
                >
                  CEO of Prept Concierge
                  <br />
                  <br /> When we joined up with Digital Prodigee it was fast and
                  effecient.
                </span>
              </div>
            </div>
          </div>
          <div className="lower-card">
            <img
              id="hover-cards"
              src="https://static.wixstatic.com/media/25f9e8_787d991806c243ad868475ca63b131f5~mv2.png/v1/crop/x_0,y_164,w_750,h_1006/fill/w_296,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9%202.png"
              alt=""
            />
            <div class="overlay">
              <div style={{ margin: "10px" }}>
                <h2
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Kim Evans
                </h2>
                {/* <br /> */}

                <span
                  style={{
                    fontSize: "15px",
                    color: "white",
                    letterSpacing: "normal",
                    lineHeight: "normal",
                  }}
                >
                  CEO of Just Her RideShare
                  <br />
                  <br /> Digital Prodigee created a great product for us.
                </span>
              </div>
            </div>
          </div>
          <div class="lower-card">
            <img
              id="hover-cards"
              src="https://static.wixstatic.com/media/25f9e8_a01363b1a12a406aa0741bc08cdca54c~mv2.jpg/v1/crop/x_0,y_141,w_640,h_858/fill/w_296,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/01Splash%20(1).jpg"
              alt=""
            />
            <div class="overlay">
              <div style={{ margin: "10px" }}>
                {" "}
                <h2
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Michael Lewis
                </h2>
                {/* <br />
            <br /> */}
                <span
                  style={{
                    fontSize: "15px",
                    color: "white",
                    letterSpacing: "normal",
                    lineHeight: "normal",
                    // padding: "20px",
                  }}
                >
                  Michael Lewis CEO of Buddi App
                  <br />
                  <br /> Not only do they have great service, but they have
                  exceptional customer support.
                </span>
              </div>
            </div>
          </div>
        </div>
        
          <Fourth buttonText= "GET STARTED"/>
      </div>
      <div className="container-main">
        <div className="container-1">
          <span id="text">Are You An Agency Looking To Build Mobile Apps?</span>
        </div>
        <div className="container-2">
          <div className="left-container">
            <img
              src="https://static.wixstatic.com/media/25f9e8_b88a433772dd44dd8d05197ace2ea2a2~mv2.png/v1/fill/w_685,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/wlr-img%403x-compressor.png"
              alt=""
              id="imge"
            />
          </div>
          <div className="right-container">
            <div className="first1">
              <span id="text-2">Referral Credit Cash $500</span>
            </div>
            <div className="second2">
              <span id="text-3">
                When you send us clients we appreciate and reward your advocacy!
                Find out how you can receive cash back today!
              </span>
            </div>
              
            <Fifth buttonText= "LEARN MORE"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;