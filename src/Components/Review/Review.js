import React from 'react';
import bootstrap from 'bootstrap';

const Review = (props) => {
    const { username, comment, img, rating, date } = props.review;
    return (
        <>
            <div className="col-md-10 mx-auto d-flex flex-row align-items-center shadow">
                <div className="review-img">
                    <img src={img} alt="" />
                </div>
                <div className="review-detail">
                    <div className="user-details px-3 mt-2">
                        <p><strong>{username}</strong> <span className='text-muted ms-2'>{date}</span></p>
                        <p>{comment}</p>


                    </div>

                    <div className="ratings px-3 mb-3">
                        <h5>Rating: <small>{rating}</small></h5>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Review;