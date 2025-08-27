import './chatbot.css';
import { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);
    const userInput = input;
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post( 'http://localhost:4000/chat/send' , userInput)

   
      const aiText = response.data || "No response";

      setMessages(prev => [...prev, { text: aiText, sender: 'ai' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: "Error: Could not get response.", sender: 'ai' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='chat-whole-container'>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'user' ? 'user' : 'ai'}`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="message ai">AI is typing...</div>
          )}
        </div>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
          />
          <button className="button" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
