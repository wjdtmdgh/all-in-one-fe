import React, {useEffect} from "react";
import {Avatar, Comment, List} from "antd";
import ChatEditor from "./ChatEditor";
import {getProfileImage} from "../../../utils/Gravatar";

export default function ChatList({msgList, roomId, ws}) {
  return <>
    {msgList.length > 0 &&
      <List
        dataSource={msgList}
        header={`${msgList.length}개의 메시지`}
        itemLayout="horizontal"
        renderItem={(item) =>
          <Comment
            // author={item.writerName}
            // content={<p>{item.content}</p>}
            // avatar={<Avatar src={getProfileImage(item.writerEmail)}/>}
            // datetime={item.createdDate}
            author="임시테스트"
            content={<p>{item.msg}</p>}
            avatar={<Avatar src={getProfileImage(item.msg)}/>}
            datetime={Date.now()}
          />}
      />}
    <ChatEditor ws={ws}></ChatEditor>
  </>
}