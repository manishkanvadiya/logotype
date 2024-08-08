import React from 'react';
import ai_roboat_img from "../../assets/img/ai_roboat_img.svg";
import ai_img from "../../assets/img/ai_img.svg";
import { Link } from 'react-router-dom';
import next_icon from "../../assets/img/next_icon.svg";
import Centralized from "../../assets/img/Centralized.svg";
import Outlook from "../../assets/img/Outlook.svg";
import Gmail from "../../assets/img/Gmail.svg";
import google_drive from "../../assets/img/google_drive.svg";
import OneDrive from "../../assets/img/OneDrive.svg";
import Custom from "../../assets/img/Custom.svg";
import frame from "../../assets/img/frame.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import facebook_black from "../../assets/img/facebook_black.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
import linkedin from "../../assets/img/linkedin.svg";


function Home() {

    return (
        <>
            <div className="home_page">
                <div className='coustom_container'>
                    <header className="App-header">
                        <nav className="navbar">
                            <div className="logo">
                                <img src={ai_img} alt='ai_img' />
                                Logotype</div>
                            <div className="nav-links">
                                <Link to="#">News</Link>
                                <Link to="SignIn" className='start_btn'>Log In</Link>
                            </div>
                        </nav>
                    </header>

                    <main>
                        <section className="hero">
                            <div className="hero-content">
                                <p className='generate_faster'>Generate insights faster</p>
                                <h2>Ask questions about<br />your data</h2>
                                <p className='parag_style'>Stop digging through thousands of files, apps, and emails to track down info. Just ask Your AI to instantly find the latest documents, changes, conversations, and anything else you need to keep your project on track.</p>

                                <div className='btn_flex'>
                                    <button className="start_btn">Get started</button>
                                    <Link to="#">Read More <img src={next_icon} alt='next_icon' /></Link>
                                </div>
                            </div>

                            <div className="hero-image">
                                <img src={ai_roboat_img} alt="ai_roboat_img" />
                            </div>
                        </section>

                        <section className="hero secound_sec">
                            <div className="hero-content hero_content_sec">
                                <p className='generate_faster_sec'>Generate insights faster</p>
                                <h3>Ask questions about your data</h3>
                                <p className='documents'>Your Ai pulls together documents and communication from all the places you work, so you can answer questions quickly and accurately about your projects.
                                </p>
                            </div>
                        </section>

                        <section className="features">
                            <div className="feature">
                                <img src={Centralized} alt='Centralized' />
                                <h3>Centralized project data</h3>
                                <p>Search for answers across tens of thousands of documents simultaneously.</p>
                            </div>
                            <div className="feature">
                                <img src={Centralized} alt='Centralized' />
                                <h3>AI powered insights</h3>
                                <p>Ask the system questions about your data just like it was a co-worker.</p>
                            </div>
                            <div className="feature">
                                <img src={Centralized} alt='Centralized' />
                                <h3>Realtime data sync</h3>
                                <p>Continuously sync your data so you get the most current answers.</p>
                            </div>
                        </section>

                        <section className="hero secound_sec">
                            <div className="hero-content hero_content_sec">
                                <p className='generate_faster_sec'>Support your existing software</p>
                                <h3>Integrate everything</h3>
                                <p className='documents'>Your Ai talks to all of your existing software systems so that you can avoid time consuming and error prone migrations.</p>
                            </div>
                        </section>

                        <section className="integration">
                            <div className="intergration_img">
                                <div className="icons">
                                    <img src={Gmail} alt="Gmail" className="icon Gmail" />
                                    <img src={google_drive} alt="Google Drive" className="icon google_drive" />
                                    <img src={OneDrive} alt="OneDrive" className="icon OneDrive" />
                                    <img src={Outlook} alt="Outlook" className="icon Outlook" />
                                    <img src={Custom} alt="Custom" className="icon Custom" />
                                </div>
                                <div className="center-text">
                                    <img src={ai_img} alt='ai_img' />
                                    <span className='support_software'>Support your existing software</span>
                                    <span><b>and more</b></span>
                                </div>
                            </div>
                        </section>

                        <section className="testimonials">
                            <div className='slider_sec'>
                                <div className="hero secound_sec">
                                    <div className="hero-content hero_content_sec">
                                        <p className='generate_faster_sec'>Trusted by Thousands of</p>
                                        <h3> Happy Customer</h3>

                                    </div>
                                </div>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    freeMode={true}
                                    modules={[Navigation, Pagination, Autoplay, FreeMode]}
                                    breakpoints={{
                                        240: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        576: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='slider_card'>
                                            <div className='text_img_flex'>
                                                <div className='frame_img'>
                                                    <img src={frame} alt='frame' />
                                                </div>
                                                <div className='name_flex'>
                                                    <h5>Viezh Robert</h5>
                                                    <p>CEO</p>
                                                </div>
                                            </div>
                                            <p className='parag_completely'>I was completely impressed with their professionalism and customer service.</p>
                                            <p className='five_start'>5.0 <span>★ ★ ★ ★ ★</span></p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='slider_card'>
                                            <div className='text_img_flex'>
                                                <div className='frame_img'>
                                                    <img src={frame} alt='frame' />
                                                </div>
                                                <div className='name_flex'>
                                                    <h5>Viezh Robert</h5>
                                                    <p>CEO</p>
                                                </div>
                                            </div>
                                            <p className='parag_completely'>I was completely impressed with their professionalism and customer service.</p>
                                            <p className='five_start'>5.0 <span>★ ★ ★ ★ ★</span></p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='slider_card'>
                                            <div className='text_img_flex'>
                                                <div className='frame_img'>
                                                    <img src={frame} alt='frame' />
                                                </div>
                                                <div className='name_flex'>
                                                    <h5>Viezh Robert</h5>
                                                    <p>CEO</p>
                                                </div>
                                            </div>
                                            <p className='parag_completely'>I was completely impressed with their professionalism and customer service.</p>
                                            <p className='five_start'>5.0 <span>★ ★ ★ ★ ★</span></p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='slider_card'>
                                            <div className='text_img_flex'>
                                                <div className='frame_img'>
                                                    <img src={frame} alt='frame' />
                                                </div>
                                                <div className='name_flex'>
                                                    <h5>Viezh Robert</h5>
                                                    <p>CEO</p>
                                                </div>
                                            </div>
                                            <p className='parag_completely'>I was completely impressed with their professionalism and customer service.</p>
                                            <p className='five_start'>5.0 <span>★ ★ ★ ★ ★</span></p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='slider_card'>
                                            <div className='text_img_flex'>
                                                <div className='frame_img'>
                                                    <img src={frame} alt='frame' />
                                                </div>
                                                <div className='name_flex'>
                                                    <h5>Viezh Robert</h5>
                                                    <p>CEO</p>
                                                </div>
                                            </div>
                                            <p className='parag_completely'>I was completely impressed with their professionalism and customer service.</p>
                                            <p className='five_start'>5.0 <span>★ ★ ★ ★ ★</span></p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </section>
                    </main>
                </div >
            </div >
            <footer className="footer">
                <div className='coustom_container'>
                    <div className="footer-container">
                        <div className="footer-logo">
                            <h3>
                                <img src={ai_img} alt="Logotype" className="logo_footer" />Logotype</h3>
                            <p className="vision">
                                Our vision is to provide convenience and help increase your sales business.
                            </p>
                            <div className='images_flex'>
                                <img src={facebook_black} alt='facebook_black' />
                                <img src={instagram} alt='instagram' />
                                <img src={twitter} alt='twitter' />
                                <img src={linkedin} alt='linkedin' />
                            </div>
                        </div>
                        <div className="footer-links">
                            <div className="footer-column">
                                <h3>About</h3>
                                <ul>
                                    <li><Link to="#">How it works</Link></li>
                                    <li><Link to="#">Featured</Link></li>
                                    <li><Link to="#">Partnership</Link></li>
                                    <li><Link to="#">Business Relation</Link></li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h3>Community</h3>
                                <ul>
                                    <li><Link to="#">Events</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="#">Podcast</Link></li>
                                    <li><Link to="#">Invite a friend</Link></li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h3>Socials</h3>
                                <ul>
                                    <li><Link to="#">LinkedIn</Link></li>
                                    <li><Link to="#">Instagram</Link></li>
                                    <li><Link to="#">Twitter</Link></li>
                                    <li><Link to="#">Facebook</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p style={{ fontSize: 14, color: '#707070' }}>©2024 Company Name. All rights reserved</p>
                        <div className="footer-bottom-links">
                            <Link to="#" style={{ color: '#000' }}><b>Privacy & Policy</b></Link>
                            <Link to="#" style={{ color: '#000' }}><b>Terms & Conditions</b></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
