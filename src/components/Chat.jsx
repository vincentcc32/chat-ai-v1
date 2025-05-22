
import { useEffect, useState } from 'react'
import ChatInput from './ChatInput'
import { useNavigate, useParams } from 'react-router-dom';
import run from '../gemini';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, addMessage, setNameChat } from '../redux/slices/chatSlice';

const Chat = () => {

  const [dataDetail, setDataDetail] = useState([]);
  const [inputChat, setInputChat] = useState('');
  const { id } = useParams();
  const { data } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (data.length > 0) {
      const chat = data.find((chat) => chat.id === id);
      if (chat) {
        setDataDetail(chat.message);
        setInputChat('');
      }
    }
  }, [data, id]);

  const handleInputChat = async () => {
    let currentId = id;
    console.log(id);

    if (!currentId) {
      currentId = crypto.randomUUID();
      dispatch(addChat({ id: currentId }));
      navigate(`/chat/${currentId}`);
    }

    const chatText = await run(inputChat, dataDetail);
    if (chatText) {
      const dataMessage = {
        id: currentId,
        userMessage: inputChat,
        botMessage: chatText,
      };
      dispatch(addMessage(dataMessage));
    }

    // const currentChat = data.find((chat) => chat.id === currentId);
    const currentChat = data.find((chat) => chat.id === currentId) || { title: 'chat' };



    if (currentChat && currentChat.title === 'chat') {
      const promptName = `The user has initiated a new chat about "${inputChat}". Do not provide any response or comment. Only provide a name for this chat, with a maximum length of 10 characters.`;
      const newTitle = await run(promptName);

      dispatch(setNameChat({ newTitle, id: currentId }));
    }
  };

  return (
    <div className='bg-chat h-full rounded-3xl px-4 clear-end w-full'>
      <div className='border-b py-5 border-gray-500'>
        <h2 className='text-xl text-primary font-medium'>Chat Prompt</h2>
      </div>

      <div className={`h-full ${id ? 'hidden' : ''}`}>
        <div className='text-center mt-50 mb-5'>
          <h1 className='text-4xl bg-gradient-to-r from-blue-200 to-blue-800 inline-block text-transparent bg-clip-text'>Welcome to AI Studio</h1>
        </div>
        <br />
        <ChatInput setInputChat={setInputChat}
          handleInputChat={handleInputChat}
          inputChat={inputChat} />
      </div>

      <div className={`flex flex-col flex-wrap gap-7 ${id ? '' : 'hidden'} h-full`}>
        <div className="md:px-20 h-[calc(100vh-280px)] overflow-y-auto w-full ">
          {dataDetail.length > 0 && dataDetail.map((item) => (
            <div key={item.id}>
              {!item.isBot
                ?
                <div className='ml-auto py-10 w-2/3 text-end'>
                  <p className='text-xl text-primary p-4 rounded-3xl bg-main text-left inline-block'>{item.text}</p>
                </div>
                :
                <div className='inline-block w-full'>
                  <div className='text-xl text-primary p-4'
                    dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              }
            </div>
          ))}

        </div>
        <ChatInput setInputChat={setInputChat}
          handleInputChat={handleInputChat}
          inputChat={inputChat} />
      </div>

    </div>
  )
}

export default Chat