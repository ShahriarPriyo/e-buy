import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import bootstrap from 'bootstrap';

const Reviews = () => {

    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h3 className='text-center mt-5'>Total Reviews : {reviews.length}</h3>
            <div className="container my-5">
                <div className="row gy-4">

                    {
                        reviews.map((review) => {
                            return <Review key={review.id} review={review}></Review>
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default Reviews;