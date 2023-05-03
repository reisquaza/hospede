import React from "react";
import { iPropertyGallery } from "../../interfaces/property.interface";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface iGalleryModalProps {
    galleryImage: iPropertyGallery[];
    onClose: () => void;
}

function GalleryModal({ galleryImage, onClose }: iGalleryModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const currentImage = galleryImage[currentImageIndex];

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentImageIndex < galleryImage.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className="gallery-modal" onClick={onClose}>
            <div
                className="gallery-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <span className="gallery-modal-close" onClick={onClose}>
                    &times;
                </span>
                {currentImageIndex > 0 && (
                    <button className="gallery-modal-prev" onClick={prevImage}>
                        <FontAwesomeIcon icon="arrow-left"/>
                    </button>
                )}

                {currentImageIndex < galleryImage.length - 1 && (
                    <button className="gallery-modal-next" onClick={nextImage}>
                        <FontAwesomeIcon icon="arrow-right"/>
                    </button>
                )}

                <img src={currentImage.galleryImage} alt="Gallery" />
            </div>
        </div>
    );
}

export default GalleryModal;
