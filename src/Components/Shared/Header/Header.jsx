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
    const useStyles = makeStyles({
        root: {
            flexGrow: 1
        },
    });
    const classes = useStyles();
    const { navItem, navIcon, navItems, navLogo, mobileNav } = useStyle();
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
                <ListItem button><ListItemText><Link className={mobileNav} to="/notich"> যোগাযোগ</Link>  </ListItemText></ListItem>
                <Divider />
            </List>
        </Box >
    );
    return (
        <>
            <Topbar />
            <Box sx={{ flexGrow: 1 }}>
                <div className={classes.root}>
                    <AppBar position="sticky">
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
                                        <img src="https://i.ibb.co/h7F4p9C/logo.png" style={{ width: "80px", height: "80px", marginRight: "10px" }} alt="" /> ধুনট সরকারি এন. ইউ পাইলট মডেল উচ্চ বিদ্যালয় <br /> ধুনট উপজেলা, বগুড়া - ৫৮৫০ EIIN - ১১৯৩৩২
                                    </Button>
                                    <br />
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
                </div>
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
