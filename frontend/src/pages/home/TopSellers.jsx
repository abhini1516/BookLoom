import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers = () => {
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch books from the public folder
    useEffect(() => {
        fetch('/books.json') // Fetch from the public folder
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    // Filter books based on selected category
    const filteredBooks = selectedCategory === "Choose a genre"
        ? books
        : books.filter(book => {
            const bookCategory = book.category ? book.category.trim().toLowerCase() : "";
            return bookCategory === selectedCategory.trim().toLowerCase();
        });

    return (
        <div className="py-16">
            <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

            {/* Category filtering */}
            <div className="mb-8 flex items-center">
                <select
                    name="Category"
                    id="Category"
                    className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Show loading or error message */}
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading books</p>
            ) : (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 40 },
                        1024: { slidesPerView: 2, spaceBetween: 50 },
                        1180: { slidesPerView: 3, spaceBetween: 50 },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* Render filtered books */}
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <SwiperSlide key={index}>
                                <BookCard book={book} />
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>No books found for the selected category</p> // Display message if no books match the selected category
                    )}
                </Swiper>
            )}
        </div>
    );
};

export default TopSellers;
