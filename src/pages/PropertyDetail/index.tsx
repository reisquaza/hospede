import React from "react";
import NavBarComponent from "../../components/NavBar";
import FooterComponent from "../../components/Footer";
import { PropertyContext } from "../../context/PropertyContext";
import ButtonComponent from "../../components/Button";
import PropertyGrade from "../../components/PropertyGrade/PropertyGrade";

function PropertyDetail() {
    const { property } = React.useContext(PropertyContext);

    const gallerySize = property.propertyGallery.length;



    return (
        <div>
            <NavBarComponent />

            <div className="container mx-auto my-20">
                <div className="border-2 border-brand1 rounded-md p-3 flex justify-evenly">
                    <div className="border-2 border-brand1 rounded-md w-120">
                        <img
                            src={property.propertyImage}
                            alt={property.propertyName}
                            className="w-120 h-80"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2 w-1/2">
                        <div className="border-2 border-brand1 rounded-md">
                            <img
                                src={property.propertyGallery[0].galleryImage}
                                alt=""
                                className="max-h-40 h-full rounded-md w-full"
                            />
                        </div>

                        <div className="border-2 border-brand1 rounded-md">
                            <img
                                src={property.propertyGallery[1].galleryImage}
                                alt=""
                                className="max-h-40 h-full rounded-md w-full"
                            />
                        </div>

                        <div className="border-2 border-brand1 rounded-md">
                            <img
                                src={property.propertyGallery[2].galleryImage}
                                alt=""
                                className="max-h-40 h-full rounded-md w-full"
                            />
                        </div>

                        <div className="border-2 border-brand1 rounded-md">
                            <img
                                src={property.propertyGallery[3].galleryImage}
                                alt=""
                                className="max-h-40 h-full rounded-md w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-end mt-2">
                    {gallerySize > 0 && (
                        <ButtonComponent>{"+" + gallerySize}</ButtonComponent>
                    )}
                </div>

                <div className="border-2 border-brand1 rounded-md my-10 p-2 flex justify-items-center">
                    aaa
                </div>

                <div className="border-2 border-brand1 rounded-md my-10 p-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3>{property.propertyName}</h3>
                            <p className="text-sm text-grey5">
                                {property.propertyAddress.addressStreet}
                            </p>
                        </div>

                        <PropertyGrade
                            propertyReviews={property.propertyReviews}
                        />
                    </div>

                    <div className="mt-7">
                        <p>{property.propertyDescription}</p>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}

export default PropertyDetail;
