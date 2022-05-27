import React from 'react'
import Slider from "react-slick";
import FeedbackFirst from "../assets/FeedbackFirst.jpg"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}

export default function AutoPlay() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        cssEase: "linear",
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1

                }
            }
        ]
    };
    return (
        <div class="py-4 px-2">
            <Slider {...settings}>
                <div>
                    <div class="bg-yellow-300 min-h-40 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  ">
                        <div class="w-24  h-24 rounded-full object-cover mx-auto">
                            <img src={FeedbackFirst} alt="" class="rounded-full" />
                        </div>
                        <div class="xl:w-4/6 w-full	">
                            <div>
                                <h1 class="font-bold">Lorem ipsum</h1>
                            </div>
                            <div class="mt-2" >
                                <p class="xl:text-sm font-medium text-xs	">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo molestiae suscipit cupiditate quasi quod nostrum</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div class="bg-yellow-300 min-h-40 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  ">
                        <div class="w-24  h-24 rounded-full object-cover mx-auto">
                            <img src={FeedbackFirst} alt="" class="rounded-full" />
                        </div>
                        <div class="xl:w-4/6 w-full	">
                            <div>
                                <h1 class="font-bold">Lorem ipsum</h1>
                            </div>
                            <div class="mt-2" >
                                <p class="xl:text-sm font-medium text-xs	">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo molestiae suscipit cupiditate quasi quod nostrum</p>
                            </div>
                        </div>

                    </div>
                </div><div>
                    <div class="bg-yellow-300 min-h-40 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  ">
                        <div class="w-24  h-24 rounded-full object-cover mx-auto">
                            <img src={FeedbackFirst} alt="" class="rounded-full" />
                        </div>
                        <div class="xl:w-4/6 w-full	">
                            <div>
                                <h1 class="font-bold">Lorem ipsum</h1>
                            </div>
                            <div class="mt-2" >
                                <p class="xl:text-sm font-medium text-xs	">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo molestiae suscipit cupiditate quasi quod nostrum</p>
                            </div>
                        </div>

                    </div>
                </div><div>
                    <div class="bg-yellow-300 min-h-40 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  ">
                        <div class="w-24  h-24 rounded-full object-cover mx-auto">
                            <img src={FeedbackFirst} alt="" class="rounded-full" />
                        </div>
                        <div class="xl:w-4/6 w-full	">
                            <div>
                                <h1 class="font-bold">Lorem ipsum</h1>
                            </div>
                            <div class="mt-2" >
                                <p class="xl:text-sm font-medium text-xs	">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo molestiae suscipit cupiditate quasi quod nostrum</p>
                            </div>
                        </div>

                    </div>
                </div>




            </Slider>
        </div>
    )
}
