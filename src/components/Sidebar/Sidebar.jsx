import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import SidebarProps from './SidebarProps';

import { BsTwitterX } from "react-icons/bs";
import { PiHouse } from "react-icons/pi";
import { PiHouseFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import { IoPeopleOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { RiFileListLine } from "react-icons/ri";
import { RiFileList2Fill } from "react-icons/ri";



function Sidebar() {
    const [activeSection, setActiveSection] = useState('Home');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <section className='sidebar-container'>

            <BsTwitterX className='X-icon' />
            <SidebarProps
                active={activeSection === 'Home'}
                onClick={() => handleSectionClick('Home')}
                Icon={activeSection === 'Home' ? PiHouseFill : PiHouse}
                text="Home"
                link="/"
            />
            <SidebarProps
                active={activeSection === 'Explore'}
                onClick={() => handleSectionClick('Explore')}
                Icon={activeSection === 'Explore' ? IoSearch : IoSearchSharp}
                text="Explore"
            /*  link="/explore" */
            />
            <SidebarProps
                active={activeSection === 'Notifications'}
                onClick={() => handleSectionClick('Notifications')}
                Icon={activeSection === 'Notifications' ? IoNotifications : IoNotificationsOutline}
                text="Notifications"
            /* link="/notifications" */
            />
            <SidebarProps
                active={activeSection === 'Messages'}
                onClick={() => handleSectionClick('Messages')}
                Icon={activeSection === 'Messages' ? HiEnvelope : HiOutlineEnvelope}
                text="Messages"
            /*  link="/messages" */
            />
            <SidebarProps
                active={activeSection === 'Lists'}
                onClick={() => handleSectionClick('Lists')}
                Icon={activeSection === 'Lists' ? RiFileList2Fill : RiFileListLine}
                text="Lists"
            /* link="/lists" */
            />
            <SidebarProps
                active={activeSection === 'Communities'}
                onClick={() => handleSectionClick('Communities')}
                Icon={activeSection === 'Communities' ? IoPeople : IoPeopleOutline}
                text="Communities"
            /* link="/communities" */
            />
            <SidebarProps
                active={activeSection === 'Premium'}
                onClick={() => handleSectionClick('Premium')}
                Icon={activeSection === 'Premium' ? BsTwitterX : BsTwitterX}
                text="Premium"
            /* link="/premium" */
            />
            <SidebarProps
                active={activeSection === 'Profile'}
                onClick={() => handleSectionClick('Profile')}
                Icon={activeSection === 'Profile' ? BsPersonFill : BsPerson}
                text="Profile"
                link="/profile"
            />
            <SidebarProps
                active={activeSection === 'More'}
                onClick={() => handleSectionClick('More')}
                Icon={activeSection === 'More' ? CgMoreO : CiCircleMore}
                text="More"
            /* link="/more" */
            />

            {/*  <div > */}
            <button className="sidebar-btn">
                Post
            </button>
            {/*  </div> */}
            <div className="current-user">
                {/* Logged In at the moment - avatar, full name, @username */}
            </div>
        </section>
    );
}

export default Sidebar

{/* <Router>
<Routes>
    <Route path="/users/:id" element={<Profile />} />
    <Route path="/users/edit/:id" element={<EditProfile />} />
    <Route path="/users/:id/followers/" element={<Followers />} />
    <Route path="/users/:id/following/" element={<Following />} />
</Routes>
</Router> */}

/*  <div className="sidebar-icons">
             <BsTwitterX className='X-icon' />
             <PiHouse className='home-icon' />
             <IoSearch className='explore-icon' />
             <IoNotificationsOutline className='notifications-icon' />
             <HiOutlineEnvelope className='messages-icon' />
             <BsPerson className='profile-icon' />
             <CiCircleMore className='more-icon' />
         </div> */