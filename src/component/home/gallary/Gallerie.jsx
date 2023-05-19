import { useState } from "react";
import "./image.css";
import { FaChevronCircleLeft, FaChevronCircleRight, FaRegWindowClose } from "react-icons/fa";

const Gallerie = ({ galleryImages }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [showAllImages, setShowAllImages] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    // Next Image
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

    const handleShowMore = () => {
        setShowAllImages(true);
    };

    const handleShowFirstSixImages = () => {
        setShowAllImages(false);
    };

    return (
        <div>
            <p className="text-2xl text-gray-700 text-center mb-6 font-semibold">
                Our Latest Products
            </p>
            {openModal && (
                <div className="sliderWrap">
                    <FaRegWindowClose
                        className="btnClose"
                        onClick={handleCloseModal}
                    />
                    <FaChevronCircleLeft
                        className="btnPrev"
                        onClick={prevSlide}
                    />
                    <FaChevronCircleRight
                        className="btnNext"
                        onClick={nextSlide}
                    />
                    <div className="fullScreenImage">
                        <img
                            src={galleryImages[slideNumber].img}
                            alt=""
                        />
                    </div>
                </div>
            )}

            <div className="galleryWrap">
                {galleryImages
                    .slice(0, showAllImages ? galleryImages.length : 6)
                    .map((slide, index) => {
                        return (
                            <div
                                className="single w-[100px] sm:w-[200px] cursor-pointer"
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img
                                    src={slide.img}
                                    alt=""
                                    className="sm:h-[300px] h-[200px] rounded-lg shadow-lg object-cover"
                                />
                            </div>
                        );
                    })}
                {!showAllImages && galleryImages.length > 6 && (
                    <button
                        className="btn btn-success rounded-sm text-white"
                        onClick={handleShowMore}
                    >
                        Show More
                    </button>
                )}
                {showAllImages && (
                    <button
                        className="btn btn-error rounded-sm text-white"
                        onClick={handleShowFirstSixImages}
                    >
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default Gallerie;
