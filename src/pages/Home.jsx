import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import counterImg from "../assets/images/02.JPG";

import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/UI/ProductsList.jsx";
import "../styles/home.css";
import { Swiper, SwiperSlide } from "swiper/react";

import heroImg1 from "../assets/images/01.JPG";
import heroImg2 from "../assets/images/02.JPG";
import heroImg3 from "../assets/images/03.JPG";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import useGetData from "../custom-hooks/useGetData.js"

const Home = () => {


    const { data: products, loading } = useGetData('products')


    const [categories, setCategories] = useState([]);
    const [doi, setDoi] = useState([]);
    const [rosomalai, setRosomalai] = useState([]);
    const [misti, setMisti] = useState([]);
    const [sondesh, setPopularProducts] = useState([]);

    const year = new Date().getFullYear();

    useEffect(() => {
        if (products) {
            const filteredTopCategories = products.filter(
                (item) => item.category === "top_category" // Match the string directly
            );

            const filteredDoi = products
                .filter((item) => item.category === "doi")
                .slice(0, 8);

            const filteredRosomalai = products.filter(
                (item) => item.category === "rosomalai"
            );
            const filteredMisti = products.filter((item) => item.category === "misti");
            const filteredSondesh = products.filter(
                (item) => item.category === "sondesh_borfi"
            );

            setCategories(filteredTopCategories);
            setDoi(filteredDoi);
            setRosomalai(filteredRosomalai);
            setMisti(filteredMisti);
            setPopularProducts(filteredSondesh);
        }
    }, [products]);





    return (
        <Helmet title={"Home"}>
            <section className="">
                <Swiper
                    navigation={true}
                    autoplay={{ delay: 5000 }} // Add this line for autoplay
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Container>
                            <Row className="align-items-center">
                                <Col lg="6" md="6">
                                    <div className="hero_content">
                                        <h2>
                                            বগুড়ার স্পেশাল দই : <br /> সেরা দামে, সেরা দই
                                        </h2>
                                        <p>
                                            আমাদের সেরা দইয়ের স্বাদ উপভোগ করুন সেরা দামে। সতেজ উপকরণ
                                            দিয়ে তৈরি, আমাদের দইটি মজাদার এবং ক্রিমি। প্রতিদিনের
                                            খাবারের জন্য আদর্শ, আমাদের দই নিশ্চিত করবে আপনার খুশি।{" "}
                                            <br /> ইন শা আল্লাহ
                                        </p>
                                        <motion.button
                                            whileTap={{ scale: 1.2 }}
                                            className="buy_btn"
                                        >
                                            <Link to="/shop">এখন ই কিনুন</Link>
                                        </motion.button>
                                    </div>
                                </Col>

                                <Col lg="6" md="6">
                                    <div className="hero_img">
                                        <img src={heroImg1} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Container>
                            <Row className="align-items-center">
                                <Col lg="6" md="6">
                                    <div className="hero_content">
                                        <h2>
                                            বগুড়ার স্পেশাল দই : <br /> প্রাকৃতিক উপাদানে, সেরা মজার
                                            স্বাদ
                                        </h2>
                                        <p>
                                            আমাদের সেরা দইয়ের স্বাদ উপভোগ করুন সেরা দামে। সতেজ উপকরণ
                                            দিয়ে তৈরি, আমাদের দইটি মজাদার এবং ক্রিমি। প্রতিদিনের
                                            খাবারের জন্য আদর্শ, আমাদের দই নিশ্চিত করবে আপনার খুশি।{" "}
                                            <br /> ইন শা আল্লাহ
                                        </p>
                                        <motion.button
                                            whileTap={{ scale: 1.2 }}
                                            className="buy_btn"
                                        >
                                            <Link to="/shop">এখন ই কিনুন</Link>
                                        </motion.button>
                                    </div>
                                </Col>

                                <Col lg="6" md="6">
                                    <div className="hero_img">
                                        <img src={heroImg2} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Container>
                            <Row className="align-items-center">
                                <Col lg="6" md="6">
                                    <div className="hero_content">
                                        <h2>
                                            বগুড়ার স্পেশাল দই : <br /> মিষ্টি স্বাদে, অনবদ্য গুণে
                                        </h2>
                                        <p>
                                            আমাদের সেরা দইয়ের স্বাদ উপভোগ করুন সেরা দামে। সতেজ উপকরণ
                                            দিয়ে তৈরি, আমাদের দইটি মজাদার এবং ক্রিমি। প্রতিদিনের
                                            খাবারের জন্য আদর্শ, আমাদের দই নিশ্চিত করবে আপনার খুশি।{" "}
                                            <br /> ইন শা আল্লাহ
                                        </p>
                                        <motion.button
                                            whileTap={{ scale: 1.2 }}
                                            className="buy_btn"
                                        >
                                            <Link to="/shop">এখন ই কিনুন</Link>
                                        </motion.button>
                                    </div>
                                </Col>

                                <Col lg="6" md="6">
                                    <div className="hero_img">
                                        <img src={heroImg3} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* <Services></Services> */}

            <section className="trending_products">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="text-center section_title">শীর্ষ বিভাগ / Top Categories</h2>
                        </Col>
                        {categories.length > 0 ? (
                            <ProductList data={categories} />
                        ) : (
                            <div className="center-text my-5">
                                <span class="loader"></span>

                            </div>
                        )}
                    </Row>
                </Container>
            </section>




            <section className="best_sales">
                <Container>
                    <Row>
                        <Col lg="12" className="">
                            <h2 className="text-center section_title">আরও স্পেশাল </h2>
                        </Col>
                        {
                            loading ? <div className="center-text my-5">
                                <span class="loader"></span>

                            </div> : <>
                                <ProductList data={doi}></ProductList>
                                <ProductList data={rosomalai}></ProductList>
                                <ProductList data={misti}></ProductList>
                                <ProductList data={sondesh}></ProductList>
                            </>
                        }


                    </Row>
                    <motion.button whileTap={{ scale: 1.2 }} className="buy_btn view_all_button">
                        <Link to="/shop">আমাদের সব প্রোডাক্ট দেখুন</Link>
                    </motion.button>
                </Container>
            </section>


            <section className="timer_count">
                <Container>
                    <Row>
                        <Col lg="6" md="12" className="count_down-col">
                            <div className="clock_top-content">
                                <h4 className="mb-3 text-white fs-6">বগুড়ার স্পেশাল দই</h4>
                                <h1 className=" text-white mt-2">
                                    দই অর্ডার করতে এখনই ভিসিট করুন <br /> আমাদের ফেসবুক পেজ
                                </h1>
                            </div>
                            {/* <Clock></Clock> */}

                            <motion.button
                                whileTap={{ scale: 1.2 }}
                                className="buy_btn store_btn"
                            >
                                <a
                                    href="https://www.facebook.com/bogurarsherpurerdoi"
                                    target="_blank"
                                >
                                    ফেসবুক পেজ এ যান
                                </a>
                            </motion.button>
                        </Col>

                        <Col lg="6" md="12" className="text-end counter_img">
                            <img className="" src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>



            <section>
                <h2 className="text-center section_title">Gallery</h2>
                <Container>
                    <div>
                        <ul className="grid">
                            {/* FIRST BUNCH OF SPECIFIC IMAGES */}
                            {[
                                { src: 'https://i.ibb.co.com/ZdtkbN8/23.jpg', height: 1138 },
                                { src: 'https://i.ibb.co.com/f2x0Y3D/13.jpg', height: 427 },
                                { src: 'https://i.ibb.co.com/DYF5DBV/24.jpg', height: 427 },
                                { src: 'https://i.ibb.co.com/LCd6V8n/4.jpg', height: 418 },
                                { src: 'https://i.ibb.co.com/QmNWsnk/16.jpg', height: 427 },

                                { src: 'https://i.ibb.co.com/f2x0Y3D/13.jpg', height: 314 },
                                { src: 'https://i.ibb.co.com/yyhjrSL/19.jpg', height: 314 },
                                { src: 'https://i.ibb.co.com/Y3tC1Ld/22.jpg', height: 314 },

                                { src: 'https://i.ibb.co.com/MZ4D7wC/30.jpg', height: 314 },
                                { src: 'https://i.ibb.co.com/NZFrQW8/29.jpg', height: 314 },
                                { src: 'https://i.ibb.co.com/0m36K23/21.jpg', height: 314 },




                            ].map((image, i) => (
                                <li key={i} style={{ '--n': 0 }}>
                                    <figure>
                                        <img
                                            width="640"
                                            height={image.height}
                                            src={image.src}
                                            alt=""
                                        />
                                    </figure>
                                </li>
                            ))}


                        </ul>
                    </div>
                </Container>
            </section>


        </Helmet>
    );
};

export default Home;
