module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "homeImage": "linear-gradient(to right bottom, rgba(3, 18, 16, 0.7), rgba(3, 18, 16, 0.7)), url('./assets/Country.png')",
                "sliderFirst": "linear-gradient(to right bottom, rgba(3, 18, 16, 0.6), rgba(3, 18, 16, 0.6)), url('./assets/SliderImageFirst.png')",
                "sliderSecond": "linear-gradient(to right bottom, rgba(3, 18, 16, 0.6), rgba(3, 18, 16, 0.6)), url('./assets/SliderImageSecond.jpg')",
                // "sliderThred": "linear-gradient(to right bottom, rgba(3, 18, 16, 0.6), rgba(3, 18, 16, 0.6)), url('./assets/SliderImageThrid.jpg')",
                "sliderFourth": "linear-gradient(to right bottom, rgba(3, 18, 16, 0.6), rgba(3, 18, 16, 0.6)), url('./assets/SliderImageFourth.jpg')",
                "companyImageFirst": "url('./assets/CompanyPicture.jpg')",
                "ServicesA": "url('./assets/ServicesA.png')",

            },
            fontFamily: {
                custom1: ["Custom-1", "roboto"],
            },
        },
    },
    plugins: [],
}