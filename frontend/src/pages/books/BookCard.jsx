import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getimgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const BookCard = ({ book }) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
    };

    return (
        <div className="rounded-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
                <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <Link to={`/books/${book._id}`} aria-label={`View details of ${book.title}`}>
                        <img
                            src={getImgUrl(book.coverImage) || 'fallback-image.jpg'}
                            alt={book.title || 'Book Cover'}
                            className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                            onError={(e) => e.target.src = 'fallback-image.jpg'} // Handle missing images
                        />
                    </Link>
                </div>

                <div>
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                            {book?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mb-5">
                        {isDescriptionExpanded ? book.description : `${book.description.slice(0, 80)}...`}
                        <button
                            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                            className="text-blue-600"
                        >
                            {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </p>
                    <p className="font-medium mb-5">
                        ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
                    </p>
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="btn-primary px-6 space-x-1 flex items-center gap-1"
                        disabled={isAdded} // Disable button after adding to cart
                    >
                        <FiShoppingCart />
                        <span>{isAdded ? 'Added' : 'Add to Cart'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
