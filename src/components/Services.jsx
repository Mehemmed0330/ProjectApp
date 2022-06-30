import React from 'react'

export default function Contact() {
    return (
        <div className="bg-yellow-300">
            <div className='bg-yellow-300 md:grid md:grid-cols-4 gap-4 px-10 md:pt-24 pt-5 md:pb-44 pb-5'>
                <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:my-0 my-3" style={{ backgroundColor: "rgb(38,47,76)" }}>
                    {/* <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Saatlik Bi Şoför Hizmeti</h5>
                        <p className="mb-3 font-normal text-white dark:text-white">
                            Bulunduğunuz lokasyona hemen veya belirlediğiniz bir saate saatlik şoför çağırabilirsiniz.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:my-0 my-3" style={{ backgroundColor: "rgb(38,47,76)" }}>
                    {/* <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Günlük Bi Şoför Hizmeti</h5>
                        <p className="mb-3 font-normal text-white dark:text-white">
                            Aracınızı kullanamayacağınız veya kullanmak istemediğiniz durumlarda 7/24 özel Bi Şoför hizmetimizden yararlanabilirsiniz.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:my-0 my-3" style={{ backgroundColor: "rgb(38,47,76)" }}>
                    {/* <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Bi Şoför Jest</h5>
                        <p className="mb-3 font-normal text-white dark:text-white">
                            Yakınlarınıza, sevdiklerinize, bulundukları konuma kolaylıkla saatlik veya günlük Bi Şoför çağırabilirsiniz.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:my-0 my-3" style={{ backgroundColor: "rgb(38,47,76)" }}>
                    {/* <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Bi Şoför Şehirler Arası</h5>
                        <p className="mb-3 font-normal text-white dark:text-white">
                            Bulunduğunuz şehirden başka bir şehire yolculuklarınızda, şehirlerarası Bi Şoför hizmetimizden yararlanabilirsiniz.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}