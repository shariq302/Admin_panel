"use client"

import Image from "next/image";
import { useState } from "react";
import readyicon from "../../../../public/ready-icon.png";
import { BsChevronDown } from "react-icons/bs";
import {
  TbAlignJustified,
  TbNotification,
  TbBrandBlogger,
  TbMessage2,
  TbUserSquareRounded,
  TbUsersGroup,
  TbLayoutGrid,
  TbClipboardList,
  TbFileReport,
  TbArchive,
  TbScanEye,
  TbChevronRight
} from "react-icons/tb";
import { usePathname, useRouter } from 'next/navigation'

import { IconName } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { Tooltip } from "@nextui-org/react";

function page() {

  const [state_Open, setState_Opne] = useState(false);
  const [state_OpenSubmenu, setState_OpenSubmenu] = useState(true);
  const router = useRouter()
  const currentRoute = usePathname();
  console.log('Current page ----- ', currentRoute)

  const Menus = [
    { id: 1, title: "Dashboard", icon: <TbLayoutGrid />,link:'/dashboard' },
    { id: 2, title: "Drivers", icon: <TbUsersGroup /> ,link:'/driver'},
    { id: 3, title: "Recruiters", icon: <TbUserSquareRounded />,link:'/recruiter' },
    { id: 4, title: "Content", icon: <TbMessage2 />,link:'/static_content' },
    { id: 5, title: "Blogs", icon: <TbBrandBlogger /> ,link:'/blogs'},
    { id: 6, title: "Notifications", icon: <TbNotification />,link:'/notification' },
    {
        id: 7,
      title: "Posts",
      icon: <TbAlignJustified />,
      link:'',
      submenuitem: [
        { id: 1, title: "Post List", icon: <TbClipboardList />,link:'/postList' },
        { id: 2, title: "Reported Posts", icon: <TbFileReport /> ,link:'/reportedPost'},
        { id: 3, title: "Archive Posts", icon: <TbArchive /> ,link:'/archivePost'},
        { id: 4, title: "Hidden Posts", icon: <TbScanEye /> ,link:'/hiddenPost'},
      ],
    },
  ];
  const HandleSidebar = () => {
    setState_Opne(!state_Open);
  };

  const HandleSubMenu = () => {
    setState_OpenSubmenu(!state_OpenSubmenu);
  };

  const HandleNavigate = (data) => {
    router.push(data)
  }
  

  return (
    <div>
      <div
        className={`bg-[#212529] h-screen p-5 pt-8 ${
          state_Open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <IoMenu
          className={`color-[#212529] text-3xl absolute -right-10 top-5
            cursor-pointer duration-0`}
          onClick={HandleSidebar}
        />
        <div className="inline-flex">
          <Image
            src={readyicon}
            alt="Ready App Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "35px", height: "35px" }}
            className="cursor-pointer block float-left mr-2"
          />
          <h1
            style={{ width: "250px" }}
            className={`text-white text-2xl origin-left font-medium ${
              !state_Open && "hidden"
            }`}
          >
            Ready App
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((item, index) => (
            <div key={index}>
             <Tooltip
                key={item.link}
                placement='right'
                content={item.title}
                color="default"
              >
              <li
                key={item.id}
                onClick={()=>HandleNavigate(item.link)}
                className={` ${currentRoute === item.link ? "text-sm text-[#8b8b8d] flex items-center gap-x-4 p-2 mt-4 cursor-pointer bg-white rounded-md duration-100": "text-sm text-[#8b8b8d] flex items-center gap-x-4 p-2 mt-4 cursor-pointer hover:bg-white rounded-md duration-100"} `}
              >
                {/* <span style={{width:"200px"}} className={`text-sm font-medium flex-1 ${!state_Open && "hidden"}`}>{item.title}</span> */}
                {item.submenuitem ? (
                  <>
                    {/* <div className="flex items-center" onClick={HandleSubMenu}> */}
                    <span
                      onClick={HandleSubMenu}
                      className="text-2xl block float-left"
                    >
                      {item.icon}
                    </span>
                    <span
                      onClick={HandleSubMenu}
                    //   style={{ width: "200px" }}
                      className={`text-sm font-medium flex-1 ${
                        !state_Open && "hidden"
                      }`}
                    >
                      {item.title}
                    </span>
                    <TbChevronRight
                      onClick={HandleSubMenu}
                      className={` ${state_OpenSubmenu && "rotate-90"}`}
                    />
                    {/* </div> */}
                  </>
                ) : (
                  <>
                    <span className="text-2xl block float-left">
                      {item.icon}
                    </span>
                    <span
                    //   style={{ width: "200px" }}
                      className={`text-sm font-medium flex-1 ${
                        !state_Open && "hidden"
                      }`}
                    >
                      {item.title}
                    </span>
                  </>
                )}
              </li>
              </Tooltip>
              {item.submenuitem && state_OpenSubmenu && (
                <ul>
                  {item.submenuitem.map((submenu, index) => (
                     <Tooltip
                     key={submenu.title}
                     placement='right'
                     content={submenu.title}
                     color="default"
                   >
                      <li
                        key={submenu.id}
                        onClick={() => router.push(submenu.link)}
                        // href={item.link}
                        className={` ${currentRoute === submenu.link ? `text-sm text-[#8b8b8d] flex items-center gap-x-4 p-3 px-4 mt-2 ${!state_Open && "-ml-1"} cursor-pointer bg-white rounded-md` : `text-sm text-[#8b8b8d] flex items-center gap-x-4 p-3 px-4 mt-2 ${!state_Open && "-ml-1"} cursor-pointer hover:bg-white rounded-md`} `}
                        // className={`text-sm text-[#8b8b8d] flex items-center gap-x-4 p-3 px-4 mt-2 ${!state_Open && "-ml-1"} cursor-pointer hover:bg-white rounded-md`}
                      >
                        <span className="text-1xl block float-left">
                          {submenu.icon}
                        </span>
                        <span className={`text-1xl font-normal block float-left ${!state_Open && "hidden"}`}>
                          {submenu.title}
                        </span>
                      </li>
                    </Tooltip>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default page;
