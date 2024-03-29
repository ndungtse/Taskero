import React, { useEffect, useState } from 'react'
import { useApp } from '../../contexts/AppContext'
import { BiAnalyse, BiCalendar, BiChevronDown, BiGridAlt, BiGroup, BiInfoCircle, BiLogOut, BiMenu, BiTag, BiTask, BiUser } from 'react-icons/bi'
import SideRow from './SideRow'
import { FaTag } from 'react-icons/fa'

type SProps = {
  active: string
}

const SideBar = ({active}: SProps) => {
    const { theme, show, setShow } = useApp()

    // if(typeof window !== undefined){
    //   // window.onscroll(()=> {
    //   window.addEventListener('resize', ()=> {
    //     const width = window.innerWidth
    //     if(width < 960) setShow(false)
    //   })
    //   // })
    // }

    useEffect(()=> {
      if(typeof window !== undefined){
        const width = window.innerWidth
        if(width < 960) setShow(false);
      }
    },[])
    
  return (
    <div className={`${theme.t1} py-3 ${theme.bg1} pl-1 border-r-[1px] border-slate-100 z-10 durat00 tab:w-[220px]  ${show ? 'w-[170px] h-screen tab:h-full absolute tab:static py-3 tab:py-0 top-0 left-0':'tab:w-auto'} text-sm justify-between flex flex-col`} >
        <div className="flex w-full flex-col h-full">
            <div className={`flex px-3 items-center`}>
              <BiMenu onClick={()=> setShow(!show)} className={`mx-2 ml-0 text-2xl cursor-pointer tab:hiden ${!show && 'mr-0'}`} />
              <img className={`w-[100px] tab:flex hidden ${show ? 'flex':'tab:hidden'}`} src="logoq.png" alt="" />
            </div>
            <div className={`flex tab:mt-5 mt-7 ${show && 'mt-5'} w-full flex-col h-full`}>
              <div className="flex w-full flex-col">
                <SideRow show={show} shade={active=== 'activity'} icon={<BiAnalyse className='text-lg' />} name="Activity" />
                <SideRow show={show} shade={active=== 'profile'} icon={<BiUser className='text-lg' />} name="My Profile" />
              </div>
              <div className="flex mt-5 w-full flex-col">
                <div className={`tab:flex items-center justify-between ${theme.text} hidden ${show ? 'flex':'tab:hidden'} px-3 w-full font-bold`}>
                  <p>Pages</p>
                  <BiChevronDown />
                </div>
                <SideRow show={show} shade={active=== 'dashboard'} icon={<BiGridAlt className='text-lg' />} name="Dashboard" />
                <SideRow show={show} shade={active=== 'tasks'} icon={<BiTask className='text-lg' />} name="Tasks" />
                <SideRow show={show} shade={active=== 'teams'} icon={<BiGroup className='text-lg' />} name="Teams" />
                <SideRow show={show} shade={active=== 'calendar'} icon={<BiCalendar className='text-lg' />} name="Calendar" />
              </div>
              <div className="flex w-full mt-5 flex-col">
                <div className={`tab:flex items-center justify-between ${theme.text} hidden ${show ? 'flex':'tab:hidden'} px-3 w-full font-bold `}>
                  <p>Labels</p>
                  <BiChevronDown />
                </div>
                <SideRow show={show} shade={null} icon={<FaTag className=' fill  rotate-[135deg] text-red-600' />} name="High Priority" />
                <SideRow show={show} shade={null} icon={<FaTag className=' fill  rotate-[135deg] text-yellow-500' />} name="Medium Priority" />
                <SideRow show={show} shade={null} icon={<FaTag className=' fill  rotate-[135deg] text-yellow-300' />} name="Low Priority" />
                <SideRow show={show} shade={null} icon={<FaTag className=' fill  rotate-[135deg] text-green-500' />} name="On Standby" />
              </div>
            </div>
        </div>
        <div className="flex mt-5 flex-col">
            <SideRow show={show} shade={active=== 'help'} icon={<BiInfoCircle className='text-lg' />} name="Help Center" />
            <SideRow show={show} icon={<BiLogOut className='text-lg' />} name="Logout" />
        </div>
    </div>
  )
}

export default SideBar