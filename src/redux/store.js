import { configureStore } from "@reduxjs/toolkit";
import chatReducer from './slices/chatSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer
  }
});

const getLastChatID = (state) => {
  const lastChat = state.chat.data[state.chat.data.length - 1];
  return lastChat ? lastChat.id : null;
};

export { store, getLastChatID }