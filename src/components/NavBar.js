// components/NavBar.js
import { useContext, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, Drawer, ListItemButton } from '@mui/material';
import { Home, Login, Logout, VideogameAsset, VpnKey } from '@mui/icons-material';
import { UserContext } from '../context/user.context';

import ShowButton from './ShowButton';

function NavBar() {
    const [opened, setOpened] = useState(false)
    const handleKeyPress = (e) => {
        if (e.type === 'keydown' && e.key === 'Escape') setOpened(false);
    }

    // for user auth
    const { logOutUser } = useContext(UserContext);
    const logOut = async (event) => {
        event.preventDefault();
        try {
            // Calling the logOutUser function from the user context.
            const loggedOut = await logOutUser();
            // Now we will refresh the page, and the user will be logged out and
            // redirected to the login page because of the <PrivateRoute /> component.
            if (loggedOut) {
                window.location.reload(true);
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            {(!opened) ? <ShowButton onClick={() => setOpened(true)}></ShowButton> : null}
            <Drawer open={opened} onClick={() => setOpened(false)} onKeyDown={handleKeyPress}>
                <Box sx={{ width: '250px' }} >
                    <List aria-label="main page navigation">
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setOpened(false)} to="/">
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setOpened(false)} to="/games">
                                <ListItemIcon>
                                    <VideogameAsset />
                                </ListItemIcon>
                                <ListItemText primary="Games" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton onClick={(e) => setOpened(false)} to="/login">
                                <ListItemIcon>
                                    <Login />
                                </ListItemIcon>
                                <ListItemText primary="Login" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={(e) => setOpened(false)} to="/signup">
                                <ListItemIcon>
                                    <VpnKey />
                                </ListItemIcon>
                                <ListItemText primary="Signup" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={logOut} to="/">
                                <ListItemIcon>
                                    <Logout />
                                </ListItemIcon>
                                <ListItemText primary="Log out" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NavBar;