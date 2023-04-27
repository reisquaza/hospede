import React from "react";
import { iPropertyReview } from "../../interfaces/property.interface";

interface iPropertyGradeProps {
    propertyReviews: iPropertyReview[];
}

function PropertyGrade({ propertyReviews }: iPropertyGradeProps) {
    const getReviewsAmount = () => {
        const reviews = propertyReviews?.length;

        if (reviews === 1) {
            return "1 Avaliação";
        }

        return reviews + " Avaliações";
    };

    const getAveragePropertyGrade = () => {
        const reviews = propertyReviews;

        if (reviews.length === 0) {
            return 0;
        }

        const sum = reviews.reduce((total, review) => {
            return total + review.reviewGrade;
        }, 0);

        const average = sum / reviews.length;
        return average;
    };

    const getGradeDivStyle = (propertyGrade: number) => {
        let gradeDiv = "flex items-center px-3 py-2 rounded-md ";

        if (propertyGrade >= 9) {
            return gradeDiv + "bg-review1";
        }

        if (propertyGrade >= 7) {
            return gradeDiv + "bg-review2";
        }

        if (propertyGrade >= 5) {
            return gradeDiv + "bg-review3";
        }

        if (propertyGrade >= 3) {
            return gradeDiv + "bg-review4";
        }

        if (propertyGrade >= 0) {
            return gradeDiv + "bg-review5";
        }
    };

    const averagePropertyGrade = getAveragePropertyGrade();

    return (
        <div className="flex items-center justify-between mb-10">
            <div className="flex flex-col items-end mr-2">
                <h3>
                    {averagePropertyGrade >= 10
                        ? "Muito Bom"
                        : averagePropertyGrade >= 7
                        ? "Bom"
                        : averagePropertyGrade >= 5
                        ? "Moderado"
                        : averagePropertyGrade >= 3
                        ? "Ruim"
                        : "Muito Ruim"}
                </h3>
                <p className="text-sm text-grey5">{getReviewsAmount()}</p>
            </div>
            <div className={getGradeDivStyle(averagePropertyGrade)}>
                <strong className="text-lg">{averagePropertyGrade}</strong>
            </div>
        </div>
    );
}

export default PropertyGrade;
