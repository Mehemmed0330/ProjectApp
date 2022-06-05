import React from 'react'

export default function Contact() {
    return (
        <div className='md:grid md:grid-cols-4 gap-4 px-10 md:mt-24 mt-5 md:mb-44 mb-5'>
            <div class="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:my-0 my-3" style={{ backgroundColor: "rgb(38,47,76)" }}>
                {/* <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Saatlik Bi Şoför Hizmeti</h5>
                    <p class="mb-3 font-normal text-white dark:text-white">
                        Bulunduğunuz lokasyona hemen veya belirlediğiniz bir saate saatlik şoför çağırabilirsiniz.
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:my-0 my-3" style={{ backgroundColor: "rgb(38,47,76)" }}>
                {/* <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Günlük Bi Şoför Hizmeti</h5>
                    <p class="mb-3 font-normal text-white dark:text-white">
                        Aracınızı kullanamayacağınız veya kullanmak istemediğiniz durumlarda 7/24 özel Bi Şoför hizmetimizden yararlanabilirsiniz.
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:my-0 my-3" style={{ backgroundColor: "rgb(38,47,76)" }}>
                {/* <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Bi Şoför Jest</h5>
                    <p class="mb-3 font-normal text-white dark:text-white">
                        Yakınlarınıza, sevdiklerinize, bulundukları konuma kolaylıkla saatlik veya günlük Bi Şoför çağırabilirsiniz.
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:my-0 my-3" style={{ backgroundColor: "rgb(38,47,76)" }}>
                {/* <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Bi Şoför Şehirler Arası</h5>
                    <p class="mb-3 font-normal text-white dark:text-white">
                        Bulunduğunuz şehirden başka bir şehire yolculuklarınızda, şehirlerarası Bi Şoför hizmetimizden yararlanabilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    )
}