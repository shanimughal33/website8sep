import React from 'react';
import { FaBus } from 'react-icons/fa'; // This import is present but unused, so you can remove it if not needed
import img1 from "../../assets/images/chikencurry.webp"
function Whychooseus() {
  return ( // Added return statement
    <div className="p-4 font-[sans-serif]">
      <div className="max-w-6xl mx-auto max-lg:max-w-3xl max-sm:max-w-sm">
        <div className="max-w-md mx-auto">
          <h2 className="mb-12 text-3xl font-extrabold leading-10 text-center text-gray-800">
            Stay updated with the latest blog posts.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-sm:gap-8">
          <div className="overflow-hidden bg-white rounded">
            <img
              src="https://readymadeui.com/images/food.webp"
              alt="Blog Post 1"
              className="object-cover w-full h-52"
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-800">Lorem Ipsum Dolor</h3>
              <p className="text-sm text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded">
            <img
              src = {img1} 
              alt="Blog Post 2"
              className="object-cover w-full h-52"
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-800">Consectetur Adipiscing</h3>
              <p className="text-sm text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded">
            <img
              src="https://readymadeui.com/images/food22.webp"
              alt="Blog Post 3"
              className="object-cover w-full h-52"
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-800">Lorem Ipsum Sit Amet</h3>
              <p className="text-sm text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded">
            <img
              src="https://readymadeui.com/images/food33.webp"
              alt="Blog Post 4"
              className="object-cover w-full h-52"
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-800">Lorem Ipsum Sit Amet</h3>
              <p className="text-sm text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded">
            <img
              src="https://readymadeui.com/images/food44.webp"
              alt="Blog Post 5"
              className="object-cover w-full h-52"
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-800">Lorem Ipsum Sit Amet</h3>
              <p className="text-sm text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded">
            <img
              src="https://readymadeui.com/images/food55.webp"
              alt="Blog Post 6"
              className="object-cover w-full h-52"
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-800">Lorem Ipsum Sit Amet</h3>
              <p className="text-sm text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...
              </p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">08 April 2024</p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
