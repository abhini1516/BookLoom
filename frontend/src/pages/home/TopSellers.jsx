import React, { useEffect, useState } from 'react';
import BookCard from '../books/BookCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error("Failed to fetch books:", error));
    }, []);

    const filteredBooks = selectedCategory === "Choose a genre"
        ? books
        : books.filter(book =>
            book.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

    return (
        <div className='py-10'>
            <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

            <div className='mb-8 flex items-center'>
                <select
                    name="Category"
                    id="Category"
                    value={selectedCategory}
                    className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {filteredBooks.map((book, index) => (
                    <SwiperSlide key={index}>
                        <BookCard book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopSellers;
