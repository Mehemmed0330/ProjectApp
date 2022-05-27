import React from 'react'
import CompanyFirst from "../assets/CompanyPicture.JPG"
import CompanySecond from "../assets/CompanyPictureSecond.jpg"
import CompanyThird from "../assets/CompanyPictureThird.jpg"

export default function Companies() {
    return (
        <div>
            <div className="px-4 pb-5 flex  flex-wrap justify-center	">
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                    <div>
                        <img src={CompanyFirst} className="rounded-t-lg" alt="" />
                    </div>
                    <div className="p-5">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alkollü Araç Kullanımı</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Kaza riskleri nedeniyle trafik polisi için, sürücülerin alkol kontrolünün özel bir önemi vardır. Sürücü, alkolmetre ile yapılan test sonucunda alkollü çıkarsa; 2918 Sayılı Karayolları Trafik Kanunu'nun 48/5 maddesi gereğince para cezası ile cezalandırılır, aracı trafikten men edilir ve sürücü belgesi (6) ay süreyle Trafik Polisince geri alınır.

                            Aynı sürücü aynı suçu işlerse;yine Kanun'un ilgili maddesi gereğince para cezası ile cezalandırılır, aracı trafikten men edilir ve sürücü belgesi (2) yıl süreyle Trafik Polisi'nce geri alınır. Aynı sürücü üçüncü kez alkollü olarak araç kullanırken tespit edilirse, kanunun ilgili maddesinde belirtildiği şekilde para cezası ile cezalandırılır, aracı trafikten men edilir ve sürücü belgesi (5) yıl süreyle Trafik Polisi'nce geri alınır. Ayrıca (6) aydan az olmamak üzere hafif hapis cezası uygulanılır. (5) yıl süreyle geri alınan sürücü belgesi sahipleri, 5. yılın sonunda, psiko-teknik değerlendirme ve psikiyatri muayenesi sonrasında durumu uygun olanlara belgeleri iade edilir.
                            Alkollü araç kullanmaktan dolayı sürücü belgeleri geri alınan sürücüler, Sürücü belgesine el koyan trafik birimine veya en yakın trafik Denetleme Şube Müdürlüğü'ne alıkoyma süresinin bitiminde dilekçe ile başvurarak sürücü belgelerini geri alabilirler.

                            Meydana gelen trafik kazaları incelendiğinde sürücülerin bir anlık dikkatsizlikleri sonucu meydana geldiği görülmektedir. Bu nedenle, alkol almış kişinin de dikkati dağılmaktadır.
                            Güvenli alkol limiti yoktur en doğrusu, hiç alkol almadan araç kullanmaktır.
                            Bilgi; Emniyet Genel Müdürlüğü resmi sayfasından alınmıştır.</p>

                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                    <div>
                        <img src={CompanySecond} className="rounded-t-lg" alt="" />
                    </div>
                    <div className="p-5">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Alkollü Araç Kullanma Cezası
                                Karayolları Trafik Kanunu Md. 48/5‘e göre 2022 yılı Cezaları;

                            </h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">İlk kez alkollü araç kullanan kişi 1823 TL,
                            İkinci kez alkollü araç kullanan kişi 2287 TL,
                            Üçüncü kez alkollü araç kullanan kişi 3675 TL dir.
                            Kesilen para cezaları 15 gün içerisinde ödendiği takdirde %25 indirimli şekilde ödenebilmektedir. 30 gün içerisinde ödenmediği takdirde faiz işleyip, Amme Alacaklarının Tahsili Usulü Hakkında Kanun hükümlerine göre icra yoluyla tahsil edilecektir. Para Cezasının taksitlendirilmesi mümkün olup Vergi Dairesine müracaat ederek 4 taksit yapılabilecektir.

                            Karayolları Trafik Kanunu Madde 48-“Yapılan tespit sonucunda, 1.00 promilin üzerinde alkollü olduğu tespit edilen sürücüler hakkında ayrıca Türk Ceza Kanununun 179 uncu maddesinin üçüncü fıkrası hükümleri uygulanır.
                            Hususi otomobil sürücüleri bakımından 0.50 promilin, diğer araç sürücüleri bakımından 0.20 promilin üzerinde alkollü olan sürücülerin trafik kazasına sebebiyet vermesi hâlinde, ayrıca Türk Ceza Kanununun ilgili hükümleri uygulanır.”
                            Türk Ceza Kanunu Madde 179-“Kara, deniz, hava veya demiryolu ulaşım araçlarını kişilerin hayat, sağlık veya malvarlığı açısından tehlikeli olabilecek şekilde sevk ve idare eden kişi, üç aydan iki yıla kadar hapis cezası ile cezalandırılır.
                            Alkol veya uyuşturucu madde etkisiyle ya da başka bir nedenle emniyetli bir şekilde araç sevk ve idare edemeyecek halde olmasına rağmen araç kullanan kişi yukarıdaki fıkra hükmüne göre cezalandırılır.”
                            0,5 promil alkol sınırını aşan sürücü için idari para cezası ve ehliyete el koyma cezaları uygulanacak olup 1.00 promil alkol sınırını aşan sürücü için ise üç aydan iki yıla kadar hapis cezası süreci başlayacaktır.
                            2 metin
                            Emniyet Şeridi İhlali

                            Trafikte seyir halinde oluşabilecek acil durumlarda ulaşımın aksamadan devam edebilmesi için ayrılmış olan emniyet şeridinin zorunlu haller haricinde kullanılmaması, can ve mal güvenliğini sağlayabilmek için büyük önem taşımaktadır. Bu nedenle, Emniyet Şeridi kuralını ihlal etmeyelim.

                            Trafikte emniyet şeridi ihlali yapmak birçok kazaya sebebiyet verebildiğinden trafik ekipleri tespit ettiklerine emniyet şeridi cezası keser. Emniyet şeridine girme cezası trafik kazalarının önüne geçmede caydırıcı rol oynuyor.
                        </p>

                    </div>
                </div> <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
                    <div>
                        <img src={CompanyThird} className="rounded-t-lg" alt="" />
                    </div>
                    <div className="p-5">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Emniyet Şeridi Cezası 2022 Ücretleri</h5>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Trafik ekiplerinin denetimleri sonucunda emniyet şeridi ihlali yapan sürücülere ceza kesme işlemi uygulanıyor. Aynı zamanda elektronik denetleme sistemleri ile şerit ihlallerini plaka üzerinden takip ederek trafik cezasına dönüştürülüyor. Emniyet şeridini uygunsuz kullanma cezası 2022 itibarıyla 1.823 TL tutarında. Ceza kesildikten itibaren 15 gün içinde ödeme yaparsanız indirimli ödüyorsunuz. Böylece diğer cezalardaki gibi %25 indirimli ödeyebilirsiniz.

                            Emniyet şeridi cezası ücreti	1.823 TL
                            15 gün içinde ödenirse	1367.25 TL
                            2022 trafik cezaları rehberi
                            Trafik Cezası Türü	2021 Ücret	2022 Ücret
                            Kırmızı ışıkta geçmek	314 TL	427 TL
                            Hız sınırını %10 - %30'a kadar aşmak	314 TL	427 TL
                            Hız sınırını %30 - %50'ye kadar aşmak	652 TL	888 TL
                            Hız Sınırını %50'den fazla aşmak	1339 TL	1823 TL
                            Alkollu araç kullanmak (İlk yakalanma)	1339 TL	1823 TL
                            Alkollu araç kullanmak (İkinci yakalanma)	1678 TL	2286 TL
                            Engelliler için ayrılan yere park etmek	288 TL	392 TL
                            Emniyet kemeri kullanmamak	144 TL	196 TL
                            Seyir halinde cep telefonu kullanmak	314 TL	4</p>

                    </div>
                </div>




            </div>
        </div>
    )
}
