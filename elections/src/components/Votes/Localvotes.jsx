

import React, { useState, useEffect  }  from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import logo from "./assets/logo.png"
import Header from "../Header/Header"
import Footer from '../Footer/Footer';



function VotingApp() {

  const navigate = useNavigate();  // Initialize navigate

  function handleClick() {
    navigate("/ListVotes");  // Use navigate to go to the new page
  }

  function handleClickParty() {
    navigate("/party-lists");  // Use navigate to go to the new page
  }

  return (
    <>
    <Header/>

    {/* hero  */}

    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden" 
  style={{ backgroundImage: "url('src/components/Votes/assets/bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

  {/* Overlay with gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/30"></div>

  {/* Content Container */}
  <div className="relative z-10 max-w-4xl w-full text-center space-y-8">

    {/* Logo at the top */}
    <img
      src={logo}
      alt="Logo"
      className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto"
    />

    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">
      انتخابات مجلس النواب ٢٠٢٤
    </h1>
    <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up">
      نضمن لك تجربة انتخابية آمنة وعادلة
    </p>
    
    <button className="bg-[#12231b] text-white text-lg px-8 py-3 rounded-full hover:bg-[#1a3429] transition duration-300 transform hover:scale-105 animate-pulse">
      انتخب الآن
    </button>
    
    <div className="mt-12 bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-2xl">
      <p className="text-black text-xl md:text-2xl leading-relaxed">
        صوتك هو قوة التغيير في انتخابات النواب. اطلع، استفسر، شارك وحقق مستقبل
        أفضل لوطنك. لا تدع الفرصة تفوتك، وكن جزءاً من صناعة القرار!
      </p>
    </div>
  </div>
</div>


    <div className="content-center">
   



{/* الخطوات
<div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto my-12 p-8 b ">
  <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
    <img 
      src="https://cdn.studenti.stbm.it/images/2021/06/11/sistema-elettorale-orig.jpeg" 
      alt="نظام التصويت" 
      className="w-full h-auto rounded-lg shadow-lg border-4 border-gray-700"
    />
  </div>
  <div className="md:w-1/2 text-center flex flex-col justify-center items-center">
    <button className="bg-[#12231b] text-white text-lg px-8 py-4 rounded-md hover:bg-[#1a3429] transition-transform duration-300 transform hover:scale-105 flex items-center justify-center">
      <img
        src={logo}
        alt="Logo"
        className="w-16 h-16 object-contain mr-3"
      />
      كيفية التصويت في الانتخابات النيابية
    </button>
  </div>
</div>


<section class="relative overflow-hidden dark:bg-gray-900 rounded-lg shadow-xl ">
    <div class="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div class="relative mt-12 lg:mt-20">
                <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48" fill="none">
                        <path
                            d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                            stroke="#D4D4D8" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12" />
                    </svg>
                </div>
                <div class="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-lg">
                            <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">1</span>
                        </div>
                        <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            تسجيل الدخول 
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                           سجل الدخول من خلال الرقم الوطني والإيميل لتصلك رسالة تأكيد على الإيميل الخاص بك.
                        </p>
                    </div>
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-lg">
                            <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">2</span>
                        </div>
                        <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            قراءة معلومات قانون التصويت
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                            يمكنك قراءة القانون الأردني من خلال تحميل <a href="path-to-your-pdf.pdf" target="_blank" class="text-blue-500 hover:underline">الملف PDF</a>.
                        </p>
                    </div>
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-lg">
                            <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">3</span>
                        </div>
                        <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                            صوت الآن 
                        </h3>
                        <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                           يمكنك اختيار القائمة المحلية أو الحزبية.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}

<section className="bg-white dark:bg-gray-900 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
        <div className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 mx-40">
  <div className="flex flex-col">
    <div className="mb-10">
      <div className="relative flex items-center ">
        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
        </span>
        <h3 className="font-semibold text-lg text-black dark:text-white mx-10 ">الخطوة 1: اختيار المرشح</h3>
      </div>
      <p className="text-sm mt-2 mx-10">تأكد من أن المرشح ينتمي إلى دائرتك الانتخابية.</p>
    </div>

    <div className="mb-10">
      <div className="relative flex items-center">
        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-yellow-900">
          <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
          </svg>
        </span>
        <h3 className="font-semibold text-lg text-black dark:text-white mx-10">الخطوة 2: مراجعة اختياراتك</h3>
      </div>
      <p className="text-sm mt-2 mx-10">راجع مرشحك وتأكد من صحة الاختيارات قبل المتابعة.</p>
    </div>

    <div className="mb-10">
      <div className="relative flex items-center">
        <span className="absolute flex items-center justify-center w-10 h-10  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
        </span>
        <h3 className="font-semibold text-lg text-black dark:text-white mx-10">الخطوة 3: تأكيد التصويت</h3>
      </div>
      <p className="text-sm mt-2 mx-10">أكد التصويت الخاص بك وراجع جميع المعلومات قبل تقديمه.</p>
    </div>

    <div className="mb-10">
      <div className="relative flex items-center">
        <span className="absolute flex items-center justify-center w-10 h-10  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-red-900">
          <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
          </svg>
        </span>
        <h3 className="font-semibold text-lg text-black dark:text-white mx-10">الخطوة 4: تقديم البطاقة</h3>
      </div>
      <p className="text-sm mt-2 ">قدم بطاقتك وتأكد من تسجيل تصويتك بنجاح.</p>
    </div>
  </div>
</div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://th.bing.com/th/id/OIP.A61nUH_nDRDDYt8n1E8eBAHaEK?rs=1&pid=ImgDetMain"
            alt="mockup"
            className='rounded-md'
          />
        </div>
      </div>
    </section>











    <div className="container mx-auto p-4">
  <div className="flex justify-center mt-20 mb-20">
    <button
      onClick={handleClick}
      className="text-black text-2xl underline hover:text-green-600 transition-colors duration-300"
    >
      يمكنك التصويت من خلال الضغط على القوائم التالية
    </button>
  </div>

  
</div>

        

<div className="grid gap-10 lg:grid-cols-2 mb-40 mx-12">
  {/* Party List Option */}
  <div className="group relative cursor-pointer overflow-hidden bg-gradient-to-r  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-lg">
    <span className="absolute top-6 left-6 z-0 h-24 w-24 rounded-full  opacity-50 transition-all duration-300 group-hover:opacity-70 group-hover:scale-125"></span>
    <div className="relative z-10 mx-auto max-w-md">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Party Logo" className="w-16 h-16" />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900">قوائم حزبية</h3>
        <p className="mt-4 text-sm text-gray-700">
          القوائم الحزبية هي مجموعات من الأحزاب التي تتنافس في الانتخابات لتحقيق أهداف سياسية محددة.
        </p>
      </div>
      <button
        onClick={handleClickParty}
        className="mt-4  mx-auto bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition-colors duration-300 flex items-center justify-center"
      >
        تصويت الآن
      </button>
    </div>
  </div>

  {/* Local List Option */}
  <div className="group relative cursor-pointer overflow-hidden bg-gradient-to-r  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-lg">
    <span className="absolute top-6 left-6 z-0 h-24 w-24 rounded-full  opacity-50 transition-all duration-300 group-hover:opacity-70 group-hover:scale-125"></span>
    <div className="relative z-10 mx-auto max-w-md">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Local Logo" className="w-16 h-16" />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900">قوائم محلية</h3>
        <p className="mt-4 text-sm text-gray-700">
          القوائم المحلية تمثل المرشحين المحليين الذين يعملون من أجل تلبية احتياجات مناطقهم.
        </p>
      </div>
      <button
        onClick={handleClick}
        className="mt-4  mx-auto bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-800 transition-colors duration-300 flex items-center justify-center"
      >
        تصويت الآن
      </button>
    </div>
  </div>
</div>


    <Footer className="mt-20"/>  

    </div>




   
    </>
  );
}

export default VotingApp;
