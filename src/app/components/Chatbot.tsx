'use client';

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Hi! I'm GiggleBot 🤖. How can I assist you today?",
  ]);
  const [input, setInput] = useState("");
  const [hasMounted, setHasMounted] = useState(false); // NEW

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, input, "Thanks! I'll get that information for you."]);
    setInput("");
  };

  if (!hasMounted) return null; // Prevent server-side drag usage

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[100]"
      drag
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      dragConstraints={{ top: -500, bottom: 200, left: -300, right: 300 }}
    >
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="chatbox"
            className="w-80 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="flex justify-between items-center px-4 py-2 bg-blue-100 border-b border-gray-200">
              <span className="text-2xl">🤖</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="h-60 p-3 space-y-2 overflow-y-auto text-sm text-gray-700 bg-blue-50">
              {messages.map((msg, idx) => (
                <div key={idx} className="bg-white p-2 rounded-lg shadow">
                  {msg}
                </div>
              ))}
            </div>

            <div className="flex items-center border-t p-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-1 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-blue-600 text-white text-sm rounded-full px-3 py-1 hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="icon"
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-400 to-yellow-300 shadow-lg flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
