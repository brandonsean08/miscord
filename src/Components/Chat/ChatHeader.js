import React, { Component } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import './ChatHeader.css';

function ChatHeader({channelName}) {
        return (
            <div className="chat-header">
                <div className="chat-header-left">
                    <h3><span className="chat-header">#</span>{channelName}</h3>
                </div>
                <div className="chat-header-right">
                    <NotificationsIcon />
                    <EditLocationRoundedIcon />
                    <PeopleAltRoundedIcon />
                    <div className="chat-header-search">
                    <input placeholder="Search"/>
                    <SearchRoundedIcon />
                    <SendRoundedIcon />
                    <HelpRoundedIcon />
                    </div>
                </div>
                
            </div>
        );
}

export default ChatHeader;