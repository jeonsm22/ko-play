import React from "react";
import OpenViduVideo from "./OpenViduVideo";
import styles from "./UserVideo.module.scss";

const UserVideo = ({ streamManager }) => {
  return (
    <div>
      {streamManager ? <OpenViduVideo streamManager={streamManager} avatarPath="/jamini-mask.jpg" /> : null}
    </div>
  );
};

export default UserVideo;
