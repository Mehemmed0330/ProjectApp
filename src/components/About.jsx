import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from 'react'
import Slider from "react-slick";
import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"
import Footer from "./Footer"

class CustomSlide extends Component {
    render() {
        const { index, ...props } = this.props;
        return (
            <div {...props}>
                <h3>{index}</h3>
            </div>
        );
    }
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
function SampleNextArrow(props) {
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
        speed: 900,
        // autoplaySpeed: 4000,
        // autoplay: true,


        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <div>
            <div className="bg-yellow-300 xl:flex xl:flex-col xl:justify-center" style={{ minHeight: 'calc(100vh - 36px)' }} >
                <Slider {...settings} className="mb-10">
                    <div className="" >
                        <div className="bg-homeImage mt-5 bg-cover bg-center bg-no-repeat mx-2 xl:h-60vh h-96	 xl:p-0 p-2" >
                            <div className="xl:flex xl:flex-col xl:justify-center xl:h-96 flex flex-col justify-center h-96 text-white leading-10	tracking-wide">
                                <p className="text-center xl:text-5xl text-2xl font-bold mb-5">Bi Şoför Nedir?</p>
                                <p className="text-center text-xl mb-5">Bi Şoför kendi aracınıza özel şoför hizmeti sunan akıllı bir uygulamadır.</p>
                                <p className="text-center text-base xl:px-96 md:px-0">
                                    Bi Şoför uygulaması, araç sahibi kişilere saatlik, günlük özel şoför hizmeti sunar.Uygulamayı telefonunuza indirerek 7/24 deneyimli şoförlerimizi, olduğunuz yere ya da belirlediğiniz bir konuma hemen veya istediğiniz bir saat için saatlik veya günlük çağırabilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="">
                        <div className="bg-sliderSecond mt-5 bg-cover bg-center bg-no-repeat mx-2  xl:h-60vh h-96	  xl:p-0 p-2 " >
                            <div className="xl:flex xl:flex-col xl:justify-center xl:h-96 md:flex md:flex-col md:justify-center md:h-96 text-white leading-10	tracking-wide">
                                <p className="text-center xl:text-5xl text-2xl font-bold mb-5">Bi Şoför Nedir?</p>
                                <p className="text-center text-xl mb-5">Bi Şoför kendi aracınıza özel şoför hizmeti sunan akıllı bir uygulamadır.</p>
                                <p className="text-center text-base xl:px-96 md:px-0">
                                    Sistem size otomatik olarak en yakın şoförü yönlendirir ve tahmini varış süresini gösterir. Gelen şoförün bilgilerini görür, gelişini haritadan izleyebilirsiniz. Sipariş detaylarını girdikten sonra sipariş bilgilerini ve tahmini ödemeli olduğunuz tutarı ekranda görebilir daha sonra onaylarsınız.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-sliderFourth mt-5 bg-cover bg-center bg-no-repeat mx-2 xl:h-60vh h-96	 xl:p-0 p-2" >
                            <div className="xl:flex xl:flex-col xl:justify-center xl:h-96 md:flex md:flex-col md:justify-center md:h-96 text-white leading-10	tracking-wide">
                                <p className="text-center xl:text-5xl text-2xl font-bold mb-5">Bi Şoför Nedir?</p>
                                <p className="text-center text-xl mb-5">Bi Şoför kendi aracınıza özel şoför hizmeti sunan akıllı bir uygulamadır.</p>
                                <p className="text-center text-base xl:px-96 md:px-0">
                                    Onayladıktan sonra ödemenizi nakit veya kredi kartı ile yapabilirsiniz. Yolculuğunuz tamamlandıktan sonra şoförümüze puan verip değerli görüşlerinizi bizimle paylaşabilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-sliderFourth mt-5 bg-cover bg-center bg-no-repeat mx-2 xl:h-60vh h-96	 xl:p-0 p-2" >
                            <div className="xl:flex xl:flex-col xl:justify-center xl:h-96 md:flex md:flex-col md:justify-center md:h-96 text-white leading-10	tracking-wide">
                                <p className="text-center xl:text-5xl text-2xl font-bold mb-5">Bi Şoför Nedir?</p>
                                <p className="text-center text-xl mb-5">Bi Şoför kendi aracınıza özel şoför hizmeti sunan akıllı bir uygulamadır.</p>
                                <p className="text-center text-base xl:px-96 md:px-0">
                                    Bi Şoför uygulaması, araç sahibi kişilere saatlik, günlük özel şoför hizmeti sunar.Uygulamayı telefonunuza indirerek 7/24 deneyimli şoförlerimizi, olduğunuz yere ya da belirlediğiniz bir konuma hemen veya istediğiniz bir saat için saatlik veya günlük çağırabilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="px-10" index={6}>
                    <div className="bg-red-400  mx-2 h-10">

                    </div>
                </div> */}
                </Slider>

                <div className="container text-center pt-5">
                    <span className="text-[24px] font-medium">Haydi! Aracı kim kullanacak diye düşünmeyin! Bi Şoför uygulamasını indirerek hayatınızı kolaylaştırın!</span>
                </div>

                <div className="flex py-4 justify-center pt-5 pb-16">
                    <button className="flex items-center border-2 rounded-lg mx-2 border-black px-3.5 py-4 text-black"><FaGooglePlay className="xl:text-2xl text-base " /> <span className="pl-2 font-semibold xl:text-2xl text-base ">Google Play</span></button>
                    <button className="flex items-center border-2 rounded-lg mx-2 border-black px-3.5 py-4 text-black"><BsApple className="xl:text-2xl text-base " /> <span className="pl-2 font-semibold xl:text-2xl text-base ">App Store</span></button>
                </div>
            </div>
        </div>
    )
}
