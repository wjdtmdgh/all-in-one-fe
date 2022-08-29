import React, {useEffect, useState} from "react";
import {Avatar, Comment, List} from "antd";
import ChatEditor from "./ChatEditor";

export default function ChatList({roomId}) {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    console.log("chatList", chatList)
  }, [chatList])

  return <>
    {chatList.length > 0 &&
      <List
        dataSource={chatList}
        header={`${chatList.length}개의 메시지`}
        itemLayout="horizontal"
        renderItem={(item) =>
          <Comment
            author={item.writerName}
            content={<p>{item.content}</p>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            datetime={item.createdDate}
          />}
      />}
    <ChatEditor chatList={chatList} setChatList={setChatList}></ChatEditor>
  </>
}