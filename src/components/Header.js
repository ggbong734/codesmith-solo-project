import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate } from 'react-router-dom';


export const Header = ({ username }) => {
    let navigate = useNavigate();
    const today = new Date().toDateString();
    return (
        <div className='flex shadow-sm border-b border-l-1 p-3.5 justify-between'>
            <div className="flex space-x-3">
                <DashboardIcon className="text-emerald-500" />
                <p className='text-lg'>Welcome <span className='text-orange-700 font-bold'>{username}</span></p>
                <p>  </p>
                <CalendarMonthIcon className="text-blue-500" />
                <p className='text-lg'>{today}</p>
            </div>
            <div className='flex space-x-3 text-gray-400 mr-3'>
                <ExitToAppIcon />
                <button
                    onClick={() => { navigate('/login') }}
                    className="text-lg text-gray-700 font-semibold">
                    Log out</button>
            </div>
        </div>
    )
}
