import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import AppsIcon from '@mui/icons-material/Apps';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export const Header = () => {
    return (
        <div className='flex shadow-sm border-b border-l-1 p-3.5 justify-between'>
            <div className="flex space-x-3">
                <DashboardIcon className="text-gray-300" />
                <p className='text-lg'>Welcome User</p>
                <CropLandscapeIcon className="text-gray-300" />
                <p className='text-lg'>Today's date</p>
            </div>
            <div className='flex space-x-4 text-gray-400 mr-3'>
                <ExitToAppIcon />
                <p className="text-lg text-gray-700 font-semibold">Log out</p>
            </div>
        </div>
    )
}
