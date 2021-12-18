import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { useTheme } from "@mui/material";
import Topbar from './Topbar/Topbar';
import './Header.css';

function Header() {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: "#fff",
            textDecoration: "none"
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: "none !important"
            }
        },
        navItems: {
            [theme.breakpoints.down('sm')]: {
                display: "none"
            }
        },
        navText: {
            [theme.breakpoints.down('sm')]: {
                display: "none"
            }
        },
        logoText: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '12px'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: "right"
            }
        },
        mobileNav: {
            color: "#000",
            textDecoration: "none"
        }
    })
    const { navItem, navIcon, navItems, navLogo, mobileNav, navText, logoText } = useStyle();
    const [state, setState] = React.useState(false);
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <Divider />
                <ListItem button><ListItemText><Link className={mobileNav} to="/home"> হোম</Link> </ListItemText></ListItem>
                <Divider />
                <ListItem button><ListItemText><Link className={mobileNav} to="/notich"> নোটিশ বোর্ড</Link>  </ListItemText></ListItem>
                <Divider />
                <ListItem button><ListItemText><Link className={mobileNav} to="/contact"> যোগাযোগ</Link>  </ListItemText></ListItem>
                <Divider />
            </List>
        </Box >
    );
    const [stickyClass, setStickyClass] = React.useState(false);
    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setStickyClass(true)
        }
        else {
            setStickyClass(false)
        }
    };
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Topbar />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={`${!stickyClass && 'main'} ${setStickyClass && 'mainSticky'}`}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                                <Button color='inherit'>
                                    <img src="https://i.ibb.co/h7F4p9C/logo.png" style={{ width: "80px", height: "80px", marginRight: "10px" }} alt="" />
                                    <span sx={{ display: 'inline-block' }}>
                                        <Typography sx={{ fontWeight: 'bold' }} variant='h6' className={logoText}>
                                            ধুনট সরকারি এন. ইউ পাইলট মডেল উচ্চ বিদ্যালয়
                                        </Typography>  <Typography variant='p' component='div' className={navText} sx={{ textAlign: 'left' }}>
                                            ধুনট উপজেলা, বগুড়া - ৫৮৫০ EIIN - ১১৯৩৩২
                                        </Typography>
                                    </span>
                                </Button>
                            </Link>
                        </Typography>
                        <Box className={navItems}>
                            <Button color='inherit'>
                                <Link className={navItem} to="/home">হোম</Link>
                            </Button>
                            <Button color='inherit'>
                                <Link className={navItem} to="/notich">নোটিশ বোর্ড</Link>
                            </Button>
                            <Button color='inherit'>
                                <Link className={navItem} to="/contact">যোগাযোগ</Link>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </Box>
        </>
    );
}
export default Header;
