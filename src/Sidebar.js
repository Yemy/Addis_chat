import { EmojiFlags, ExpandMoreOutlined, LocalHospital, Storefront } from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import LocalHospitalspitalIcon from "@material-ui/icons/LocalHospital"
import StorefrontIcon from "@material-ui/icons/Storefront"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"
// import yemi from './images/yemi.jpg'
import { useStateValue } from "./StateProvider"

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalspitalIcon} title='COVID-19 Information' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Market' />

        </div>
    )
}

export default Sidebar
