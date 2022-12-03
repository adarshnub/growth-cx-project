import React ,{useState} from 'react';
import Logo from "../../images/logo.svg";
import iconTodo from "../../images/icon-todo.svg";
import iconCal from "../../images/icon-calendar.svg";
import iconRem from "../../images/icon-reminders.svg";
import iconPlan from "../../images/icon-planning.svg";



const Navbar = () => {
  

  const [isActive, setIsActive] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  return (
    <>
      {isActive && (<div className=" bg-opacity-50 bg-black/30 w-full h-full top-0 bottom-0 fixed"></div>)}
      <div className=" bg-transparent relative">
        <div className=" flex flex-col lg:flex-row py-4 px-6">
          <div className=" flex px-4 justify-between ">
            <div className="flex justify-start mt-4 lg:flex-1">
              <img src={Logo}
              className="h-8 w-auto "/>
            </div>
            <div className=" lg:hidden z-40">
              <button
                onClick={() => setIsActive(!isActive)}
                className="focus:outline-none block lg:hidden ">
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    className={!isActive ? " block" : " hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />

                  <path
                    className={isActive ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                  </svg> 
              </button>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <div
              className={`${
                isActive ? "block" : "hidden"
              } lg:flex flex-col z-20 lg:flex-row  rounded-xl bg-white   lg:relative absolute justify-between w-3/4 h-screen top-0 right-0 lg:h-auto lg:w-full py-4 lg:py-0`}
            >
              <div className=" pt-20 lg:pt-0 flex flex-col lg:flex-row">
                <button
                  onClick={() => setDropDown1(!dropDown1)}
                  className="px-4 py-2 flex flex-col"
                >
                  <div className=" flex items-center text-gray-600 hover:text-black font-semibold">
                    Features
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
                      >
                        <path
                          className={!dropDown1 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                        <path
                          className={dropDown1 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
            </div>
                  </div>

                  <div
                    className={`${
                      dropDown1 ? "block" : "hidden"
                    } flex text-left z-30 ml-6 lg:ml-0 space-y-2  flex-col text-gray-600 rounded-xl lg:absolute bg-white py-2 mt-6`}>
                    <a href="#" className=" px-1 flex items-center ">
                      <img src={iconTodo} alt="todo" className=" w-3 h-3 mr-2" />
                      Todo Llist
                    </a>
                    <a href="#" className=" px-1 flex items-center">
                      <img
                        src={iconCal}
                        alt="todo"
                        className=" w-3 h-3 mr-2"
                      />
                      Calendar
                    </a>
                    <a href="#" className=" px-1 flex items-center ">
                      <img
                        src={iconRem}
                        alt="todo"
                        className=" w-3 h-3 mr-2"
                      />
                      Reminders
                    </a>
                    <a href="#" className=" px-1 flex items-center ">
                      <img
                        src={iconPlan}
                        alt="todo"
                        className=" w-3 h-3 mr-2"
                      />
                      Planning
                    </a>
                  </div>
                </button>
                <button
                  onClick={() => setDropDown2(!dropDown2)}
                  className="px-4 py-2 flex flex-col"
                >
                  <div className=" flex items-center text-gray-600 hover:text-black font-semibold">
                    Company
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
                      >
                        <path
                          className={!dropDown2 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                        <path
                          className={dropDown2 ? " block" : " hidden"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                  </div> 
                  </div>

                  <div
                    className={`${
                      dropDown2 ? "block" : "hidden"
                    } flex text-left z-30 ml-6 lg:ml-0  flex-col rounded-xl  lg:absolute space-y-2 bg-white py-2 mt-6`}
                  >
                    <a href="#" className="px-2 text-gray-600">
                      History
                    </a>
                    <a href="#" className="px-2 text-gray-600">
                      Our Team
                    </a>
                    <a href="#" className="px-2 text-gray-600">
                      Blog
                    </a>
                  </div>
                </button>
                <a href="#" className="px-4 py-2 text-gray-600 hover:text-black font-semibold">
                  Careers
                </a>
                <a href="#" className="px-4 py-2 text-gray-600 hover:text-black font-semibold">
                  About
                </a>
              </div>
              <div className=" flex flex-col  lg:space-x-4 items-center text-center text-gray-600 hover:text-black lg:flex-row mx-4 font-semibold">
                <a href="#" className="px-4 py-2 ">
                  Login
                </a>
                <button className=" w-full outline rounded-xl px-4 py-2 text-gray-600 hover:text-black">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;