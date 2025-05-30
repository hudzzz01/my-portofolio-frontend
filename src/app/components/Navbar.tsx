
import React from 'react'
import { CiDark } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../redux/slice/themeSlice';
import { IoSunnyOutline } from 'react-icons/io5';

export default function Navbar() {
    type RootState = {
        theme: {
          theme: {
            isDark: boolean;
          };
        };
      };
      
    const themeLight = useSelector((state: RootState) => state.theme.theme.isDark);
    const dispatch = useDispatch();



    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickNavbarButton = (item: any) => {
        if(item == "Explorer"){
            window.location.href = ""
        }
       
    }

    const handleChangeTheme = () => {
        dispatch(setDarkMode(!themeLight))
        // alert(theme)
     
    }

    const ToggleTheme = () => {
        return (
            <div className='rounded-full w-10 h-10 items-center justify-center' onClick={handleChangeTheme} >
                {themeLight ?
                    <IoSunnyOutline size={30} />
                    :
                    <CiDark size={30} />
                }
            </div>
        )
    }
    const menu = [
        // "Service",
        // "Explorer",
        // "Contacts",
        ToggleTheme()

    ]

    return (
        <div className={`w-full h-15 md:h-27 border-b border-black flex justify-between items-center shadow-lg fixed z-50 ${themeLight ? "bg-gray-800 text-white" : "bg-white text-black"} transition-colors duration-500 ease-in-out`}>
            <div className=' items-center text-center jus'>
                {/* <Image src="/logo_company_example(1).png" alt="logo" width={200} height={500} /> */}
                {themeLight &&     <div className='font-bold text-2xl ms-40 text-red-500 italic' >Work in progress</div>}
            </div>
            <div className='gap-10 me-20 hidden md:flex'>
                {menu.map((item, index) => {
                    return (
                        <div onClick={() => handleClickNavbarButton(item)} key={index} className={` ${index == menu.length - 1 ? "rounded-full ps-2" : "rounded-md px-2"} pt-2 text-lg hover:text-white hover:bg-blue-500 text-center items-center cursor-pointer ${themeLight ? "bg-gray-800 text-white" : "bg-white text-black"} transition-colors duration-500 ease-in-out`}>
                            {item}
                        </div>
                    )
                })}
            </div>
            


            <div className=' me-10 md:hidden flex gap-2' >
                <div onClick={handleChangeTheme}>
                    {themeLight ?
                        <IoSunnyOutline size={30} />
                        :
                        <CiDark size={30} />
                    }
                </div>
                {/* <div className='cursor-pointer' onClick={handleSmallMenu}>
                    <CiMenuKebab />

                </div> */}
            </div>
            {/* {isSmallMenu &&

                <div className={`absolute right-0 top-15 w-50 p-5 ${themeLight ? "bg-gray-800 text-slate-200" : "bg-white  text-black"} transition-colors duration-500 ease-in-out`}>
                    {menu.map((item, index) => {
                        return (
                            <div onClick={() => handleClickNavbarButton(item)} key={index} className={` ${index == menu.length - 1 ? "rounded-full ps-2" : "rounded-md px-2"} pt-2 text-lg hover:text-white hover:bg-orange-500 text-center items-center cursor-pointer transition duration-500 ease-in-out`}>
                                {index == menu.length - 1 ? "" : item}
                            </div>
                        )
                    })}
                </div>

            } */}

        </div>

    )
}
