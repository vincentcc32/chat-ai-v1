import { Button } from '@mui/material'

const ChatInput = ({ setInputChat, handleInputChat, inputChat }) => {
  return (
    <div className='rounded-3xl bg-input flex w-full'>
      <textarea
        onChange={(e) => setInputChat(e.target.value)}
        rows={1}
        value={inputChat}
        className="w-full px-3 py-4 text-primary border border-transparent caret-gray-300 text-md focus:outline-none focus:ring-0 focus:border-transparent bg-input rounded-2xl resize-none"
        placeholder="Nhập nội dung..."
      />

      <Button variant='contained' color='primary' size='small'
        sx={{
          borderRadius: "15px",
          padding: "0 30px !important", // Sử dụng !important để ghi đè
        }}
        onClick={handleInputChat}
      >Gửi</Button>
    </div>
  )
}

export default ChatInput