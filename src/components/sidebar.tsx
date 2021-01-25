import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MailIcon from '@material-ui/icons/Mail';


import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Face } from '@material-ui/icons';
const sidebar = () => {
    return (
        <div
            style = {{backgroundColor: "#181818"}}
            className="flex flex-col left-0 top-0 w-16 h-screen justify-between bg-gray-800"
        >
            <div className="m-3 ">
                
            </div>

            <div className="m-3 text-white hover:text-blue-200">
                <HomeIcon fontSize="large" />
                <PersonIcon fontSize="large" />
                <WorkIcon fontSize="large" />
                <VisibilityIcon fontSize="large" />
                <MailIcon fontSize="large" />
            </div>

            <div className="m-3 text-white ">
                <FacebookIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
                <GitHubIcon fontSize="large" />
            </div>



        </div>
    )
}

export default sidebar
