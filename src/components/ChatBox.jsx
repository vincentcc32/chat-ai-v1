import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';
const ChatBox = ({ title, handleRemoveChat }) => {
  return (
    <div className='my-4 cursor-pointer'>
      <div className='flex justify-center items-center p-3 rounded-2xl text-primary bg-chat'>
        <ChatIcon />
        <span className='flex-1 ml-3'>{title}</span>
        <DeleteIcon onClick={(e) => {
          e.preventDefault();
          handleRemoveChat();
        }} />
      </div>
    </div>
  )
}

export default ChatBox