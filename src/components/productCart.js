import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

// Star rating component
const StarRating = ({ rating = 0 }) => {
    const totalStars = 5;
    const safeRating = Math.min(Math.max(rating, 0), totalStars);

    const filledStars = Math.floor(safeRating); 
    const hasHalfStar = safeRating % 1 >= 0.5; 

    return (
        <div className="flex">
            {Array.from({ length: filledStars }).map((_, index) => (
                <span className='text-yellow-500 text-2xl' key={index}>&#9733;</span>  
            ))}
            {hasHalfStar && <span className='text-yellow-500 text-2xl'>&#189;</span>}  
            {Array.from({ length: totalStars - filledStars - (hasHalfStar ? 1 : 0) }).map((_, index) => (
                <span className='text-gray-300 text-2xl' key={index + filledStars}>&#9734;</span>  
            ))}
        </div>
    );
};

const ProductCart = (props) => {
    const { id, name, price, originalPrice, rating, category, image, slug } = props.data;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    };

    // Calculate percentage off
    const percentOff = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    return (
        <div className='relative w-56 p-4 transition-shadow duration-300 bg-white border border-gray-200 shadow-lg  hover:shadow-2xl group hover:bg-black/5 '>
            <Link to={slug} className='block'>
                <div className='relative overflow-hidden rounded-md'>
                    <img src={image} alt={name} className='object-cover w-full h-32 transition-transform duration-300 transform  hover:scale-125' />
                </div>
            </Link>
            <h3 className='py-3 text-xl font-semibold text-center text-gray-800'>{name}</h3>
            
            {/* Star Rating */}
            <div className="flex justify-center py-2">
                <StarRating rating={rating} />
            </div>

            <div className='flex items-center justify-center'>
                <p className='text-xl font-semibold'>
                    $<span>{price}</span>
                    {originalPrice && (
                        <span className='ml-2 text-sm text-red-500 line-through'>
                            ${originalPrice}
                        </span>
                    )}
                </p>

                {/* Display percent off */}
                {percentOff > 0 && (
                    <span className='absolute px-2 py-1 text-white bg-red-500 rounded-sm top-4 right-4'>
                        {percentOff}% OFF
                    </span>
                )}
                
                <button
                    className="absolute flex items-center justify-center gap-2 px-3 py-2 mb-24 text-black transition-opacity duration-300 shadow-md opacity-0  group-hover:opacity-100 hover:scale-105 mr-7 group-hover:bg-opacity-100 hover:text-white btn-grad bottom-28 right-5"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCart;
