import React from 'react';
import bootstrap from 'bootstrap';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';


const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate = useNavigate();

    function goReview() {
        navigate('/reviews')
    }
    return (
        <div>
            <section className="feature">
                <div className="container mt-3">
                    <div className="row mt-3">
                        <div className="col-md-7 mx-auto p-3 d-flex align-items-center">
                            <div className="details">
                                <h1>GET YOUR PRODUCT <br /> <span className='title-class'>WITHOUT ANY HASSLE</span></h1>
                                <p className='description'>e-BUY is a place where you can find your desired product very comfortably. As the importance and business of e-commerce websites are growing gradually,e-BUY can contribute this industry very eagerly.

                                </p>
                                <button className='explore-btn'>Explore Now</button>
                            </div>

                        </div>
                        <div className="col-md-3 mx-auto p-3">
                            <img className='feature-img' src="main-camera.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="review-section my-5">
                <div className="container">
                    <h3 className='text-center mt-5'>Customer Reviews</h3>
                    <div className="row gy-4 my-3">
                        {reviews.slice(0, 3).map((review) => {
                            return <Review key={review.id} review={review}></Review>
                        })}
                    </div>
                    <div className="text-center">
                        {/* <NavLink to='/review' className='feature-btn'>Review</NavLink> */}
                        <button onClick={goReview} className='explore-btn'>See All Reviews</button>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Home;