import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { getStyleAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStyleConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: 'welcome', 
      role: 'model', 
      text: 'Greetings. I am Aura, your personal style consultant at Sparkle in Style. How may I assist you with your beauty transformation today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getStyleAdvice(input);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <section id="consultant" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500 blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-purple-900 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-200">Powered by Gemini 2.5</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Meet <span className="text-gold-400 italic">Aura</span>,<br />Your Digital Stylist
          </h2>
          <p className="text-neutral-400 mb-8 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            Unsure about your next look? Describe your features, occasion, or mood, and let Aura craft a personalized recommendation just for you.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto bg-neutral-800/50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-neutral-800 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm font-medium text-white tracking-wide">Aura • Live</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'model' ? 'bg-gold-600' : 'bg-neutral-600'
                }`}>
                  {msg.role === 'model' ? <Sparkles className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                  msg.role === 'user' 
                    ? 'bg-white text-neutral-900 rounded-tr-none' 
                    : 'bg-neutral-700/50 text-neutral-100 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-neutral-500 text-xs ml-12">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce delay-150"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-neutral-800 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about cuts, colors, or trends..."
                className="w-full bg-neutral-900 border border-neutral-700 rounded-full py-3 px-6 pr-12 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gold-500 rounded-full text-white hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIStyleConsultant;