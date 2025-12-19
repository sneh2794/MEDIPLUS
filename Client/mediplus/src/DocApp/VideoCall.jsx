import React, { useState, useEffect } from "react";
import { JitsiMeeting } from '@jitsi/react-sdk';
function VideoCall()
{
    return(
        <div>
     <JitsiMeeting
    roomName = { 'Doctor Online Appointment' }
    getIFrameRef = { node => node.style.height = '800px' }/>
    </div>
    )
}
export default VideoCall;
