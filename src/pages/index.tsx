import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgCalendarToday } from "react-icons/cg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import TodoPage from "../../component/TodoPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>To_Do</title>
      </Head>
      <main>
        <div className="bg-gradient-to-r from-[#F6D1FC] to-[#B9D5FF] h-screen flex justify-between items-center max-lg:flex-col">
          <div className="flex items-center justify-center gap-2 text-[#404040] text-6xl font-bold w-1/2 max-lg:mt-16">
            TaskMate <span className="text-[#9333EA]">UI</span>
          </div>
          <div className="flex-col items-center justify-center w-1/2 mx-20 my-4 max-lg:w-4/5 max-sm:w-full">
            <nav className="flex items-center h-12 gap-4 text-xl bg-white rounded-lg justify-evenly xl:gap-20">
              <button className="text-[#9333EA] font-bold">TaskMate</button>
              <ul className="flex items-center justify-center gap-8">
                <button className="text-[#9333EA]">Todo</button>
                <button>Project</button>
                <button>Team</button>
              </ul>
              <ul className="flex items-center justify-center gap-4">
                <button>
                  <BsFillMoonStarsFill />
                </button>
                <button className="text-[#9333EA] h-6 w-6">
                  <RiAccountCircleLine className="w-full h-full" />
                </button>
              </ul>
            </nav>
            <div className="flex mt-6">
              <div className="flex-col w-3/12 mx-4 text-xl text-gray-500 h-96">
                <div className="flex-col mt-4 h-80 ">
                  <div className="text-[#9333EA] gap-2 flex justify-start items-center">
                    <CgCalendarToday />
                    Today
                  </div>
                  <div className="flex items-center justify-start gap-2 my-4">
                    <TiWeatherPartlySunny />
                    My Day
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <MdOutlineNotificationImportant />
                    Important
                  </div>
                </div>
                <div className="flex items-center justify-start h-12 gap-2">
                  <RiSettings3Fill />
                  Settings
                </div>
              </div>
              <div className="flex items-end justify-start w-9/12 p-4 mx-2 bg-white rounded-lg h-96 ">
                <TodoPage />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
