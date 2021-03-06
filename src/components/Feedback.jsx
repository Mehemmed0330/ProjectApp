import React from 'react'
import Slider from "react-slick";
import FeedbackFirst from "../assets/FeedbackFirst.jpg"
import { CgProfile } from "react-icons/cg"

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
        <div className="py-4 px-2 bg-yellow-300">
            <Slider {...settings}>
                <div>
                    <div className="bg-black text-yellow-300 h-80 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  " >
                        <div className="w-24 h-24 rounded-full object-cover mx-auto">
                            <CgProfile className="rounded-full h-full w-full	" />
                        </div>
                        <div className="xl:w-4/6 w-full	">
                            <div>
                                <h1 className="font-bold">Mehmet </h1>
                            </div>
                            <div className="mt-2" >
                                <p className="xl:text-sm font-medium text-xs	">Misafirlerim vard?? uygulamadan bi ??of??r ??a????rd??m ve i?? yerinden ????kmama gerek kalmadan ??of??r geldi arac??m?? ald?? misafirlerimi gidecekleri yere b??rakt?? ve arac??m?? tekrar ald?????? yere teslim etti.Sorunsuzdu te??ekk??r ederim.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="bg-black text-yellow-300 h-80 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  " >
                        <div className="w-24  h-24 rounded-full object-cover mx-auto">
                            <CgProfile className="rounded-full h-full w-full	" />
                        </div>
                        <div className="xl:w-4/6 w-full	">
                            <div>
                                <h1 className="font-bold">Ahmet</h1>
                            </div>
                            <div className="mt-2" >
                                <p className="xl:text-sm font-medium text-xs	">Uygulama ger??ekten ??ok kolay ve kullan????l??. 15 dkka i??inde ??of??r??m geldi. Hele ??of??r??m??z inan??lmazd??. ??ok kibar profesyonel, ger??ekten kendimi vip m????teri gibi hissettim :)</p>
                            </div>
                        </div>

                    </div>
                </div><div>
                    <div className="bg-black text-yellow-300 h-80 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  " >
                        <div className="w-24  h-24 rounded-full object-cover mx-auto">
                            <CgProfile className="rounded-full h-full w-full	" />
                        </div>
                        <div className="xl:w-4/6 w-full	">
                            <div>
                                <h1 className="font-bold">Yunus Emre</h1>
                            </div>
                            <div className="mt-2" >
                                <p className="xl:text-sm font-medium text-xs	">Karde??imi havaliman??ndan almak i??in kulland??m.Avrupa Yakas??nda oturuyorum uygulama ile ??of??r geldi arac?? ald?? Sabiha dan karde??imi ald?? getirdi, helal olsun harika bir uygulama.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="bg-black text-yellow-300 h-80 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  " >
                        <div className="w-24  h-24 rounded-full object-cover mx-auto">
                            <CgProfile className="rounded-full h-full w-full	" />
                        </div>
                        <div className="xl:w-4/6 w-full	">
                            <div>
                                <h1 className="font-bold">Mustafa</h1>
                            </div>
                            <div className="mt-2" >
                                <p className="xl:text-sm font-medium text-xs	">??lgili bir kurum ve kibar, d??zg??n, kaliteli ????f??r hizmeti.Hem de kendi arac??n ile iste??in yere seni g??t??r??yor. Ara?? kullanamayacak durumdalarda imdad??m??za yeti??ti.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="bg-black text-yellow-300 h-80 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  " >
                        <div className="w-24  h-24 rounded-full object-cover mx-auto">
                            <CgProfile className="rounded-full h-full w-full	" />
                        </div>
                        <div className="xl:w-4/6 w-full	">
                            <div>
                                <h1 className="font-bold">Adem </h1>
                            </div>
                            <div className="mt-2" >
                                <p className="xl:text-sm font-medium text-xs	">??nce fiyatlardan biraz ??ekindim ama kulland??????n kadar ??deme olay?? ??ok iyi. ??cretler gayet makul in??allah b??yle devam eder.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="bg-black text-yellow-300 h-80 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  " >
                        <div className="w-24  h-24 rounded-full object-cover mx-auto">
                            <CgProfile className="rounded-full h-full w-full	" />
                        </div>
                        <div className="xl:w-4/6 w-full	">
                            <div>
                                <h1 className="font-bold">??zkan </h1>
                            </div>
                            <div className="mt-2" >
                                <p className="xl:text-sm font-medium text-xs	">??imdiye kadar neredeydin Bi ??of??r. Art??k evlere b??rakma servis ??of??rl??????mden istifa ettim yerimi bi ??of??r ald??. ??ok mutluyum ????.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="bg-black text-yellow-300 h-80 md:mx-5  xl:w-96  xl:flex xl:items-center justify-between xl:px-2 px-5 py-4 text-center  " >
                        <div className="w-24  h-24 rounded-full object-cover mx-auto">
                            <CgProfile className="rounded-full h-full w-full	" />
                        </div>
                        <div className="xl:w-4/6 w-full	">
                            <div>
                                <h1 className="font-bold">??etin </h1>
                            </div>
                            <div className="mt-2" >
                                <p className="xl:text-sm font-medium text-xs	">Uygulamay?? indirdi??inden beri neredeyse herg??n kullan??yorum, hayat??m?? kolayla??t??rd??. Kendi arac??m ile istedi??im yere ??zel ??of??r hizmeti ??ok uygun fiyatlarla..</p>
                            </div>
                        </div>

                    </div>
                </div>




            </Slider>
        </div>
    )
}
