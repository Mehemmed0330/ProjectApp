import axios from "axios";
import { useState } from "react"
// import Footer from "./Footer"
// import { BsClock } from "react-icons/bs"
// import { AiOutlineCalendar } from "react-icons/ai"
import FileBase64 from 'react-file-base64';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Privay from "./Privacy"
export default function BeDriver() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [passport, setPassport] = useState('');
    const [narcology, setNarcology] = useState('');
    const [photo, setPhoto] = useState('');

    const [sms, setSms] = useState('');
    const [smsShow, setSmsShow] = useState(false);

    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const handleSubmit = (e) => {
        setLoadingSubmit(true);

        e.preventDefault();

        const data = {
            "phoneNumber": phoneNumber,
            "email": email,
            "password": null,
            "firstname": firstName,
            "lastname": lastName,
            "driverLicenseBase64": passport,
            "narcalogyDispensaryLicenseBase64": narcology,
            "driverPhoto": photo,
            "confirmationCode": null,
        }

        if (password === passwordConfirm) {
            data.password = password;
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'parolalar uyusmuyor',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            setLoadingSubmit(false);
            return;
        }

        if (smsShow) {
            data.confirmationCode = sms;

            axios.post('http://144.91.97.115:9090/api/v1/driver/Account/Register', data)
                .then(res => {
                    Swal.fire({
                        title: 'Success',
                        text: 'kaydolma basarili',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    console.log(res.data)
                })
                .catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
                .finally(() => {
                    setLoadingSubmit(false);
                })
        } else {
            axios.post('http://144.91.97.115:9090/api/v1/driver/Account/RegisterConfirm', data)
                .then(res => {
                    setSmsShow(true);
                })
                .catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.result,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                })
                .finally(() => {
                    setLoadingSubmit(false);
                })
        }
    }

    return (

        <div>
            <div className="md:px-32 px-2 bg-yellow-300 ">
                <div className='mb-10 bg-yellow-300'>
                    <div className="text-center py-5">
                        <span className="text-2xl font-medium">Neden Bizimle Çalışmalısınız?</span>
                        {/* <p className="text-base ">Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
                    </div>
                    {/* <div className="flex justify-between mb-5">
                        <div className="my-10  w-1/4 leading-10	">
                            <BsClock className="text-3xl mt-2	" />
                            <span className="text-lg font-bold	">Lorem ipsum dolor sit.</span>
                            <p className="text-base	">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <div className="my-10  w-1/4 leading-10	">
                            <BsClock className="text-3xl mt-2	" />
                            <span className="text-lg font-bold	">Lorem ipsum dolor sit.</span>
                            <p className="text-base	">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div><div className="my-10 w-1/4  leading-10	">
                            <AiOutlineCalendar className="text-3xl mt-2	" />
                            <span className="text-lg font-bold	">Lorem ipsum dolor sit.</span>
                            <p className="text-base	">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                    </div> */}
                    <div className='w-4/5 mx-auto'>
                        <p className="tracking-normal text-center ">Bi Şoför ailesi olarak, deneyimli, yol bilgisine sahip, prezantabl, şoför arkadaşlarımızı bünyemizde görmekten mutluluk duyarız. Uygulamamız, şoförlerimize ister tam zamanlı ister yarı zamanlı çalışma seçenekleri ile esnek çalışma saatleri sunmaktadır. Sistem tarafından müşterilerimizin, Bi Şoför talebi işlemleri tamamlandıktan sonra, belirledikleri konuma en yakın Bi Şoför yönlendirilir. Şöförlerimiz, müşterilerimizi  gideceği konuma bıraktıktan sonra görevli Bi Şoför, servis araçlarımız ile belirlenen toplama alanlarından alınarak evlerine bırakılır. Mesai saatlerine göre Bi Şoför olarak çalışanımızın sigortası yapılır.
                            Siz de  Bi Şoför olarak ailemize katılmak isterseniz, uygulamadaki başvuru formunu eksiksiz doldurarak başvurunuzu yapabilirsiniz. Başvurunuz tarafımızdan değerlendirilerek en kısa sürede size dönüş yapılacaktır.
                            Tüm Bi Şoförlerimizi ailemizin birer üyesi olarak görmekten ve birlikte büyümekten keyif alırız.</p>
                    </div>
                </div>
                <div className="text-center bg-black text-yellow-300 px-24 py-2 font-bold text-lg">
                    Bi Şoför ol
                </div>
            </div>
            <div className="md:px-32 px-2 py-10 bg-yellow-300">
                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email address
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Şifre
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Şifreyi onayla
                        </label>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Ad
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Soyad
                            </label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Numara (+90)
                            </label>
                        </div>
                    </div>

                    <div className="" >
                        <div className="">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="" className="block font-semibold	">Profil Resmi</label>
                                <div className="file-input">
                                    <FileBase64
                                        multiple={false}
                                        onDone={({ base64 }) => setPhoto(base64)} />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="" className="block font-semibold	">Kimlik</label>
                            <div className="file-input">
                                <FileBase64
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) => setPassport(base64)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="" className="block font-semibold	">Sabıka Kaydı</label>
                            <div className="file-input">
                                <FileBase64
                                    multiple={false}
                                    onDone={({ base64 }) => setNarcology(base64)} />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="" className="block font-semibold	">İkametgah</label>
                            <div className="file-input">
                                <FileBase64
                                    multiple={false}
                                    onDone={({ base64 }) => setPhoto(base64)} />
                            </div>
                        </div>
                    </div>

                    {
                        smsShow && (
                            <div className="mb-6 w-1/6">
                                <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sms Code</label>
                                <input value={sms} onChange={(e) => setSms(e.target.value)} type="number" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required />
                            </div>
                        )
                    }


                    <button disabled={loadingSubmit} type="submit" className="text-yellow-300 bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {loadingSubmit ? 'Bekleyin...' : 'Gönder'}
                    </button>

                </form>
                <div className="mt-5">
                    <Link to="/apiPrivacyPolicy" className="mt-5 text-yellow-300 bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Policy and Privacy</Link>

                </div>
            </div>
        </div>

    )
}