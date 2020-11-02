import React, { Component, useState, useEffect } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar } from "@material-ui/core";
import SidebarChannel from "../SidebarChannel/SidebarChannel";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import database, { auth } from "../../database_context/firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    database.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name');

    if(channelName) {
      database.collection('channels').add({
        channelName: channelName
      })
    }
  }
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h2>Miscord</h2>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar-channels">
        <div className="sidebar-channels-header">
          <div className="sidebar-header">
            <ExpandMoreIcon />
            <h4>Channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar-channel-add"/>
        </div>

        <div className="sidebar-channel-list">
          {channels.map(({id, channel}) => (
            <SidebarChannel id={id} channel={channel}/>
          ))}
        </div>
      </div>
      <div className="sidebar-voice">
        <SignalCellularAltIcon
          className="sidebar-voice-icon"
          fontSize="large"
        />
        <div className="sidebar-voice-info">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar-voice-icons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar-profile">
        <Avatar src={user.photo} onClick={() => auth.signOut()} />
        <div className="sidebar-profile-info">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar-profile-icons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
