import React from 'react'
import { Button } from '@material-tailwind/react'
import { UserAuth } from '../context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import ExtensionSharpIcon from '@mui/icons-material/ExtensionSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {
    Drawer,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const {user, logOut} = UserAuth();
    console.log(user)
  return (
    <div className='pl-2 pr-5 py-1 md:pl-3 md:pr-5 md:py-2 flex items-center justify-between'>
        <div className='flex items-center justify-center space-x-1'>
      <IconButton variant='text' color='white' size='lg' className=' p-3 rounded-full' onClick={openDrawer}>
        <MenuIcon color='white'/>
      </IconButton>
      <h1 className='text-xl font-thin'>Bard</h1>
      <div className='text-xs  px-1 py-0.5 border border-blue-200 rounded-md text-blue-200 ml-1'>
        Experiment
      </div>
        </div>
        <div className='flex items-center justify-center space-x-3'>
            <div className=' items-center justify-center space-x-2.5 hidden md:flex'>
            <Button variant='text' className='text-gray-200 hover:bg-gray-900 p-2 rounded-full'>
                <HistoryIcon color='white'/>
            </Button>
            <Button variant='text' className='text-gray-200 hover:bg-gray-900 p-2 rounded-full'>
                <ExtensionSharpIcon color='white'/>
            </Button>
            <Button variant='text' className='text-gray-200 hover:bg-gray-900 p-2 rounded-full'>
                <HelpOutlineSharpIcon color='white'/>
            </Button>
            <Button variant='text' className='text-gray-200 hover:bg-gray-900 p-2 rounded-full'>
                <SettingsSharpIcon color='white'/>
            </Button>
            <Button variant='text' className='text-gray-200 hover:bg-gray-900 p-2 rounded-full'>
                <AppsSharpIcon color='white'/>
            </Button>
            </div>
            <img src={user.photoURL} onClick={logOut} alt="" width={35} height={35} className='rounded-full cursor-pointer'/>
        </div>


        {/* sidebar */}
        <React.Fragment>
      <Drawer open={open} onClose={closeDrawer} className='bg-gray-900 text-gray-200'>
        <div className="flex items-center justify-between pl-5 pb-2 border-b vorder-gray-200 p-4">
          <div className='text-gray-200 text-lg flex items-center justify-center'>
            <AutoAwesomeIcon className='mr-2'/>
           <p>Bard</p> 
            <div className='text-xs  px-1 py-0.5 border border-blue-200 rounded-md text-blue-200 ml-1'>
        Experiment
      </div>
          </div>
          <IconButton variant="text" color="white" onClick={closeDrawer} className='rounded-full'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <ListItem className='bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white'>
            <ListItemPrefix>
              <HistoryIcon/>
            </ListItemPrefix>
            Bard Activity
          </ListItem>
          <ListItem className='bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white'>
            <ListItemPrefix>
              <ExtensionSharpIcon/>
            </ListItemPrefix>
            Extensions
          </ListItem>
          <ListItem className='bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white'>
            <ListItemPrefix>
              <HelpOutlineSharpIcon/>
            </ListItemPrefix>
            Help
          </ListItem>
          <ListItem className='bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white'>
            <ListItemPrefix>
              <SettingsSharpIcon/>
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className='bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white'>
            <ListItemPrefix>
              <AppsSharpIcon/>
            </ListItemPrefix>
            Apps
          </ListItem>
          
        </List>

        <div className='fixed bottom-0 p-4 pl-5 text-xs text-gray-500'>
            Copyright &copy; Dipen Kalsi, 2023
        </div>
      </Drawer>
    </React.Fragment>
    </div>
  )
}

export default Navbar
