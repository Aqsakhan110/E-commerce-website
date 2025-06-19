'use client';

import { useState, useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Paper,
  IconButton,
  TextField,
  Fab,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [hasMounted, setHasMounted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHasMounted(true);
    const savedMessages = localStorage.getItem('gigglebot-messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setTimeout(() => {
        setMessages([
          "Hi! I'm GiggleBot 🌈✨. How can I brighten your day?",
        ]);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem('gigglebot-messages', JSON.stringify(messages));
    }
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, input]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        "Thanks for your message! 💡 I'm on it!",
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!hasMounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Paper
              elevation={8}
              sx={{
                width: 400,
                height: 550,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-orange-600 to-blue-600">
                <span className="text-lg font-bold text-white">GiggleBot 🤖</span>
                <IconButton onClick={() => setIsOpen(false)}>
                  <CloseIcon sx={{ color: 'white' }} />
                </IconButton>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 bg-gray-50 space-y-2">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-gray-800 p-3 rounded-lg shadow"
                  >
                    {msg}
                  </div>
                ))}
                {isTyping && (
                  <div className="text-sm italic text-gray-500">GiggleBot is typing...</div>
                )}
                <div ref={messagesEndRef}></div>
              </div>

              <Divider />

              {/* Input area */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white">
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  InputProps={{
                    style: {
                      borderRadius: 50,
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    },
                  }}
                />
                <IconButton
                  onClick={handleSend}
                  sx={{
                    bgcolor: '#FF5722',
                    color: '#fff',
                    '&:hover': { bgcolor: '#E64A19' },
                  }}
                >
                  <SendIcon />
                </IconButton>
              </div>
            </Paper>
          </motion.div>
        ) : (
          <motion.div
            key="bot-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileTap={{ scale: 0.9 }}
          >
            <Fab
              onClick={() => setIsOpen(true)}
              sx={{
                bgcolor: '#FF5722',
                color: 'white',
                '&:hover': { bgcolor: '#E64A19' },
                width: 72,
                height: 72,
              }}
            >
              <Bot />
            </Fab>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
