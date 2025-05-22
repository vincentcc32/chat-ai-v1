import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ChatBox from '../components/ChatBox';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, removeChat } from '../redux/slices/chatSlice';
import { Link, useNavigate } from 'react-router-dom';
const Sidebar = ({ openSideBar }) => {

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.chat);
  const navigate = useNavigate();
  const handleNewChat = () => {
    dispatch(addChat());
  }

  const handleRemoveChat = (id) => {
    dispatch(removeChat(id));
    navigate('/');
  }

  return (
    <div className={`${openSideBar ? '' : 'hidden'} fixed h-full bg-primary w-[300px] lg:block lg:relative lg:h-fit px-5 text-primary `}>
      <div className='py-5 mb-10'>
        <button className='p-2 bg-chat w-full rounded-2xl flex items-center gap-2 cursor-pointer'
          onClick={handleNewChat}>
          <AddIcon style={{ fontSize: '30px' }} />
          <span>Cuộc trò chuyện mới</span>
        </button>
      </div>
      <div className='mt-5'>
        <h1 className='text-xl'>Gần đây</h1>
        {data.length > 0 && data.map((item) => (
          <Link
            key={item?.id}
            to={`/chat/${item.id}`}>
            <ChatBox title={item?.title}
              handleRemoveChat={() => handleRemoveChat(item.id)} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar