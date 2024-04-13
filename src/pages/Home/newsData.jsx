import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsData = ({ news }) => {
    const { _id, title, image_url, details } = news;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link className="text-pink-600 font-bold" to={`/news/${_id}`}>Read More ...</Link></p>
                        : <p>{details}</p>
                }
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

NewsData.propTypes = {
    news: PropTypes.object.isRequired
};

export default NewsData;