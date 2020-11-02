import React from 'react';
import './SidebarChannel.css';
import { useDispatch } from 'react-redux';
import { setActiveChannelInfo } from '../../features/appSlice';

function SidebarChannel({id, channel}) {
    const dispatch = useDispatch();
        return (
            <div className="sidebar-channel" onClick={() => dispatch(setActiveChannelInfo({
                channelId: id,
                channelName: channel.channelName
            }))}>
                <h4><span className="sidebar-channel-hash">#</span>{channel.channelName}</h4>
            </div>
        );
}

export default SidebarChannel;