import React, { useState } from "react";
import MarketNavbar from "../components/Marketpagecomponents/MarketNavbar/MarketNavbar";
import ProductCard from "../components/Product/ProductCard";


const data = [
  {name:"Discover",category:""},
  {name:"Animation",category:""},
  {name:"Branding",category:""},
  {name:"Illustration",category:""},
  {name:"Mobile",category:""},
  {name:"Print",category:""},
  {name:"Product Design",category:""},
  {name:"Typography",category:""},
  {name:"Web Design",category:""},
]

const cardData = [
  {imgUrl:'https://cdn.dribbble.com/users/2173663/screenshots/16506804/media/a12f7bbc14c6d56934cd3748dc284933.jpg?resize=450x338&vertical=center'},
  {imgUrl:"https://cdn.dribbble.com/users/5976/screenshots/10750727/media/d9ced8775e6c33b75fee848934bc015e.png?resize=450x338&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12393824/file/original-f186e7d3d7ffe6e5a7063eca3db3541e.jpg?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12362583/file/still-80bcf46e0edc4e7cb23746b633bf286e.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12360159/file/original-78816d228edd83d2776c5285215b75dd.jpg?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12365532/file/original-372da3557993f661643f56ecc6b00a38.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12344477/file/original-58cf0efd122e16afca760078e1cf2fed.jpg?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12386210/file/original-f78019cb1da43ada4b7d7587a34da40e.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12394487/file/original-262462d7efbf3679a8a4f30014248778.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12386362/file/original-34341b358b7a38870f54d8dded7f2865.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/userupload/12384987/file/original-d8a7215c99f8e3bff5ba5189addec53b.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/users/9707868/screenshots/16803024/1_0000.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/users/9707868/screenshots/16803024/1_0000.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/users/9707868/screenshots/16803024/1_0000.png?resize=400x300&vertical=center"},
  {imgUrl:"https://cdn.dribbble.com/users/9707868/screenshots/16803024/1_0000.png?resize=400x300&vertical=center"},



]

const Market = () => {
 
  const[filterOpen,setFilterOpen] = useState(false);

  return (
    <div className="bg-white h-auto w-full">
      <MarketNavbar />

      {/* search bar section */}

      <section className="h-[200px] w-full  relative">

        <div className="w-full h-[100px]  bg-gradient-to-t from-violet-300 to-violet-400 relative py-14 md:px-0 px-7 bg-opacity-0">

          <div className="flex items-center gap-2 border md:shadow-lg shadow-sm justify-between px-6 max-w-2xl mx-auto h-[30px] bg-white rounded-lg py-10">
             <p className="text-xl mt-1">
             <ion-icon name="search-outline"className="text-xl"></ion-icon>
             </p>
             <input
             placeholder="search here"
             type="text" className="w-full h-full rounded  py-6 outline-none" />
          </div>

        </div>
      </section>

      {/* optional section */}
      <section className="flex z-10 text-black md:px-16 px-3 md:my- my-7 items-center gap-6">
        <div>
          <div class="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-default"
              type="button"
              class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              
            >
              Trending
              <svg
                class="hs-dropdown-open:rotate-180 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-default"
            >
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Popular
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Purchases
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Downloads
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Team Account
              </a>
            </div>
          </div>
        </div>
        {/* category section */}
        <div className="w-full md:mt-0 mt-5 flex md:gap-10 gap-7 overflow-x-scroll scrollbar-hide ">

          {
            data?.map((item) => {
              return(
                <div className="cursor-pointer hover:text-gray-400 ">
                  <div className="flex items-center text-sm font-semibold">
                    <p className="ml-2">{item.name}</p>
                  </div>
                </div>
              )
              
            })
          }
             
        </div>
      </section>

      {/* product section */}

      <section className="md:px-16 px-5 grid md:grid-cols-4 gap-16 z-10 grid-cols-1">
        {

          cardData?.map((item)=>(

             <ProductCard url={item.imgUrl} />
          ))
        }
      </section>
    </div>
  );
};

export default Market;
