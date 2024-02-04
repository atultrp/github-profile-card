import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { PiMaskSadFill } from "react-icons/pi";

const user = () => {
  const router = useRouter()
  const { user } = router.query;
  const [userData, setUserData] = useState()

  useEffect(() => {
    if (!user) return;
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [user]);

  const skeletonCard = () => {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500">
          <div className="animate-pulse relative flex h-32 w-full justify-center rounded-xl bg-cover" >
            <div className='absolute flex h-32 w-full justify-center rounded-xl bg-cover bg-gray-300 animate-pulse'></div>
            <div className="animate-pulse absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full bg-gray-300">
            </div>
          </div>
          <div className="animate-pulse mt-16 flex flex-col items-center">
            <div className="animate-pulse h-8 w-40 bg-gray-300 rounded-full"></div>
            <div className="animate-pulse h-8 w-40 bg-gray-300 rounded-full mt-2"></div>
          </div>
          <div className="animate-pulse mt-6 mb-3 flex gap-14 md:!gap-14 justify-center">
            <div className="animate-pulse h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="animate-pulse h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="animate-pulse h-12 w-12 bg-gray-300 rounded-full"></div>
          </div>
          <div className='mx-8 animate-pulse text-center'>
            <div className="animate-pulse h-8 w-40 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        {userData ? <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500">
          <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
            <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-violet-400">
              <img className="h-full w-full rounded-full" src={userData?.avatar_url} />
            </div>
          </div>
          {userData?.message ?
            <div className='mt-16 text-center text-xl font-medium text-navy-700 flex items-center space-x-2'>
              <PiMaskSadFill className='text-xl' />
              <span>
                Not Found
              </span>
            </div>
            :
            <div>
              <div className="mt-16 flex flex-col items-center">
                <h4 className="text-xl font-bold text-navy-700">
                  <span>
                    {userData?.name}
                  </span>
                </h4>
                {userData?.company && <p className="text-base font-normal text-gray-500 flex items-center space-x-1">
                  <HiMiniBuildingOffice2 />
                  <span>
                    {userData?.company}
                  </span>
                </p>}
                {userData?.location && <p className="text-base font-normal text-gray-500 flex items-center space-x-1">
                  <MdLocationOn />
                  <span>
                    {userData?.location}
                  </span>
                </p>}
              </div>
              <div className='flex space-x-5 items-center mt-3 justify-center'>
                <a href={userData?.html_url}>
                  <FaGithub className='text-gray-500 text-2xl' />
                </a>
                {userData?.twitter_username && <a href={`twitter.com/${userData?.twitter_username}`}>
                  <FaTwitter className='text-gray-500 text-2xl' />
                </a>}
                {userData?.blog && <a href={userData?.blog}>
                  <RiGlobalLine className='text-gray-500 text-2xl' />
                </a>}
              </div>
              <div className="mt-6 mb-3 flex gap-14 md:!gap-14 justify-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-navy-700">{userData?.public_repos}</p>
                  <p className="text-sm font-normal text-gray-500">Repo</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-navy-700">
                    {userData?.followers}
                  </p>
                  <p className="text-sm font-normal text-gray-500">Followers</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-navy-700">
                    {userData?.following}
                  </p>
                  <p className="text-sm font-normal text-gray-500">Following</p>
                </div>
              </div>
              <div className='mx-8 text-center'>
                {userData?.bio}
              </div>
            </div>}
        </div> : skeletonCard()}
        <p className="font-normal text-navy-700 mt-20 mx-auto w-max mb-4">Github Profile Card by <a href="https://atultrp-v2.vercel.app/" target="_blank" className="text-brand-500 font-bold">Atul Tripathi</a></p>
      </div>
    </>
  )
}

export default user