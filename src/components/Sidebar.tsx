import { defaultTheme, Drawer, List, ListItem, ListItemText} from "@agauravdev/matcha-ui";
import {Link} from "react-router-dom";
import {MdHistory, MdHome, MdSubscriptions, MdThumbUp, MdWatchLater} from "react-icons/all";
import React from "react";

const Sidebar : React.FC = () => {

    return (
        <aside
            style={{
                height: "100vh"
            }}
        >
            <Drawer
                open
                persistent
                style={{position: "relative"}}
            >
                <List style={{color: defaultTheme.text.primary, paddingLeft: "0.5rem"}}>
                    <Link to={"/abcd"}>
                        <ListItem icon={<MdHome/>}>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </Link>
                    <ListItem icon={<MdSubscriptions/>}>
                        <ListItemText primary="Playlists"/>
                    </ListItem>
                    <ListItem icon={<MdThumbUp/>}>
                        <ListItemText primary="Route"/>
                    </ListItem>
                    <ListItem icon={<MdWatchLater/>}>
                        <ListItemText primary="Watch Later"/>
                    </ListItem>
                    <ListItem icon={<MdHistory/>}>
                        <ListItemText primary="History"/>
                    </ListItem>
                </List>
            </Drawer>
        </aside>
    )
}

export default Sidebar;