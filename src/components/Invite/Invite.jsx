import React from 'react'
import img1 from "../../assets/images/invitebg.png"
function Invite() {
  return (
    <div>
        <div class="bg-[#182b50] px-8 py-16 font-[sans-serif]">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12">
        <div class="text-center md:text-left">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]">Join Our Community of Food Lovers!</h2>
          <p class="text-lg lg:text-xl text-white">Partner with us or become a delivery hero—bring fresh, delicious meals to happy customers while earning great rewards!</p>
          <a href="jacascrip:void(0);" class="mt-12 bg-[#a91079] hover:bg-opacity-80 text-white py-3 px-6 rounded-full text-lg lg:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block">
            Sign Up
          </a>
        </div>
        <div class="text-center">
          <img src={img1} alt="Premium Benefits" class="w-full mx-auto" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Invite