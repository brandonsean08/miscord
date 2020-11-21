import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import "./ChatHeader.css";
import Tooltip from "@material-ui/core/Tooltip";

/**
 *
 * @param {The channel name to be displayed in the chat header} channelName
 */
function ChatHeader({ channelName }) {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <h3>
          <span className="chat-header-hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chat-header-right">
        <Tooltip title="Mute channel">
          <NotificationsIcon className="material-icon" />
        </Tooltip>
        <EditLocationRoundedIcon className="material-icon" />
        <Tooltip title="Member List">
          <PeopleAltRoundedIcon className="material-icon" />
        </Tooltip>
        <div className="chat-header-search">
          <input placeholder="Search" />
          <SearchRoundedIcon />
          <SendRoundedIcon />
        </div>
        <Tooltip title="Help">
          <HelpRoundedIcon />
        </Tooltip>
      </div>
    </div>
  );
}

export default ChatHeader;
