import React from 'react'

import HomeIcon from '@material-ui/icons/HomeOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';


import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Link } from 'react-router-dom';


const sidebar = () => {
    return (
        <div className="fixed flex flex-col left-0 top-0 w-min h-screen justify-between bg-sidebarbg">

            <div className="m-3 ">

            </div>

            <div className="m-3 text-white ">

                <Link to="/Home"> <HomeIcon className="my-3 hover:text-hoverb" /> </Link>
                <Link to="/About"> <PersonIcon className="my-3 hover:text-hoverb" /> </Link>
                <Link to="/Skills"> <ListIcon className="my-3 hover:text-hoverb" /> </Link>
                <Link to="/Work"> <VisibilityIcon className="my-3 hover:text-hoverb" /> </Link>
                <Link to="/Contact"> <MailIcon className="my-3 hover:text-hoverb" /> </Link>
            </div>

            <div className="m-3 text-white ">
                <FacebookIcon className="my-1 hover:text-hoverb" />
                <LinkedInIcon className="my-1 hover:text-hoverb" />
                <GitHubIcon className="my-1 hover:text-hoverb" />
            </div>



        </div>
    )
}

export default sidebar
