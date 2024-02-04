import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Home() {
  const [user, setUser] = useState()
  const router = useRouter()


  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="text-4xl md:text-7xl font-bold mb-5 text-center text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 via-violet-500 to-teal-400">
          Search for a Github user
        </div>
        <div className="relative flex flex-col items-center rounded-[20px] md:w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500">
          <input
            type="search"
            className="border-2 border-gray-700 rounded-lg px-4 py-2 w-full"
            placeholder="Github Username..."
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <button
            className="py-3 px-5 bg-violet-500 text-white rounded-lg uppercase font-medium tracking-wider hover:bg-violet-600 mt-4"
            onClick={() => {
              router.push(`/${user}`);
            }}
          >
            Search
          </button>
        </div>
        <p className="font-normal text-navy-700 mt-20 mx-auto w-max bottom-4 absolute top-auto left-0 right-0">Github Profile Card by <a href="https://atultrp-v2.vercel.app/" target="_blank" className="text-brand-500 font-bold">Atul Tripathi</a></p>
      </div>
    </>
  );
}
