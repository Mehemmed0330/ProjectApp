import React from 'react'
import Footer from "./Footer"

export default function Cash() {
    return (
        // <div>
        //     <div className="px-2 pb-7 flex flex-wrap justify-center">

        //         <div className=" py-4 m-4 max-w-sm bg-white rounded-lg border shadow-md px-4 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
        //             <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Saatlik Bi Şoför Hizmeti</h5>
        //             <div className="flex items-baseline text-gray-900 dark:text-white">
        //                 <span className="text-3xl font-semibold">$</span>
        //                 <span className="text-5xl font-extrabold tracking-tight">49</span>
        //                 <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        //             </div>

        //             <ul role="list" className="my-7 space-y-5">
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum dolor.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum.Lorem ipsum lorem ipsum</span>
        //                 </li>

        //             </ul>
        //             {/* <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button> */}
        //         </div>
        //         <div className=" py-4 m-4 max-w-sm bg-white rounded-lg border shadow-md px-4 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
        //             <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
        //             <div className="flex items-baseline text-gray-900 dark:text-white">
        //                 <span className="text-3xl font-semibold">$</span>
        //                 <span className="text-5xl font-extrabold tracking-tight">49</span>
        //                 <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        //             </div>

        //             <ul role="list" className="my-7 space-y-5">
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum dolor.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum.Lorem ipsum lorem ipsum</span>
        //                 </li>
        //             </ul>
        //             {/* <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button> */}
        //         </div> <div className=" py-4 m-4 max-w-sm bg-white rounded-lg border shadow-md px-4 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
        //             <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
        //             <div className="flex items-baseline text-gray-900 dark:text-white">
        //                 <span className="text-3xl font-semibold">$</span>
        //                 <span className="text-5xl font-extrabold tracking-tight">49</span>
        //                 <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        //             </div>

        //             <ul role="list" className="my-7 space-y-5">
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum dolor.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum.Lorem ipsum lorem ipsum</span>
        //                 </li>
        //             </ul>
        //             {/* <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button> */}
        //         </div> <div className=" py-4 m-4 max-w-sm bg-white rounded-lg border shadow-md px-4 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
        //             <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
        //             <div className="flex items-baseline text-gray-900 dark:text-white">
        //                 <span className="text-3xl font-semibold">$</span>
        //                 <span className="text-5xl font-extrabold tracking-tight">49</span>
        //                 <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        //             </div>

        //             <ul role="list" className="my-7 space-y-5">
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum dolor.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</span>
        //                 </li>
        //                 <li className="flex space-x-3">

        //                     <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        //                     <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Lorem, ipsum.Lorem ipsum lorem ipsum</span>
        //                 </li>
        //             </ul>
        //             <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        //         </div>
        //     </div>
        // </div >
        <div class="h-96 text-center flex align-center justify-center flex-col text-2xl py-5 bg-yellow-300">
            Ücretlendirme politikamız, siz değerli müşterilerimize daha faydalı olabilmek için, ücret hesablama:km ve zaman dikkate alınarak yapılmaktadır.

        </div>
    )
}
