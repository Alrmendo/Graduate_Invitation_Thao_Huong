/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, GraduationCap, Heart, ChevronRight, Sparkles, Flower2, Stars, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

// --- Decorative Components ---

const FloatingDecor = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 10, 0]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[5%] text-pink-300/30"
    >
      <Flower2 size={40} />
    </motion.div>
    <motion.div
      animate={{ 
        y: [0, 20, 0],
        rotate: [0, -15, 0]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[15%] right-[10%] text-pink-300/30"
    >
      <Sparkles size={32} />
    </motion.div>
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[20%] right-[15%] text-pink-200/20"
    >
      <Stars size={60} />
    </motion.div>
  </div>
);

// --- Components for each section ---

const LandingPage = ({ onNext }: { onNext: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF0F5] via-[#FFB6C1] to-[#FF69B4] text-white p-6 text-center relative overflow-hidden"
    >
      <FloatingDecor />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 bg-white/20 backdrop-blur-md p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/30 shadow-2xl max-w-[90vw] md:max-w-none"
        >
          <div className="inline-block p-3 md:p-5 rounded-full bg-white/30 mb-4 md:mb-8 backdrop-blur-sm border border-white/40 shadow-inner">
            <GraduationCap size={40} className="text-white md:w-16 md:h-16" />
          </div>
          <h1 className="text-3xl md:text-7xl font-serif font-bold mb-4 tracking-tight leading-[1.1] drop-shadow-md">
            Graduation <br className="md:hidden" /> Invitation
          </h1>
          <div className="h-1 w-20 md:h-1.5 md:w-24 bg-white mx-auto mb-6 rounded-full shadow-sm" />
          <p className="text-white text-xl md:text-4xl font-medium mb-2 drop-shadow-sm tracking-wide">
            Nguyễn <span className="inline-block">Thảo Hương</span>
          </p>
          <p className="text-pink-100 text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold">Class of 2026</p>
        </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-white/90 max-w-xs md:max-w-md mt-10 mb-12 text-lg italic leading-relaxed z-10 font-medium"
      >
        "Breaking news: Sau 4 năm làm cổ đông UEL, Thảo Hương đã hoàn thành xong nhiệm vụ hệ thống và chuẩn bị tốt nghiệp. Bạn có muốn đến xem tin này có real hong?"
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-white text-[#FF69B4] px-12 py-4 rounded-full font-bold text-xl shadow-2xl transition-all flex items-center gap-3 z-10 active:scale-95 border-2 border-transparent hover:border-[#FFB6C1]"
      >
        Mở Thiệp <ChevronRight size={24} />
      </motion.button>
    </motion.div>
  );
};

const DetailsPage = ({ onNext }: { onNext: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen bg-[#FFF5F7] text-[#DB7093] p-2 md:p-12 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-[-5%] right-[-5%] w-64 h-64 bg-[#FFB6C1] opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 bg-[#FF69B4] opacity-10 rounded-full blur-3xl" />
      
      <div className="max-w-2xl w-full text-center z-10 px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-center gap-2 mb-2 md:mb-4">
            <Sparkles className="text-[#FF69B4]" size={16} />
            <span className="text-[#FF69B4] font-bold tracking-widest uppercase text-xs md:text-sm block">Save The Date</span>
            <Sparkles className="text-[#FF69B4]" size={16} />
          </div>
          <h2 className="text-xl md:text-5xl font-serif font-bold mb-4 md:mb-10 text-[#DB7093] leading-[1.3] px-2 tracking-tight">
            Trân trọng mời bạn đến dự <br className="hidden md:block" />
            <span className="text-[#FF69B4] italic underline decoration-pink-200 underline-offset-8 inline-block mt-2 md:mt-0">
              Lễ Tốt Nghiệp của <span className="inline-block">Thảo Hương</span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-5 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-pink-200/50 border-2 md:border-4 border-[#FFF0F5] mb-6 md:mb-12 relative overflow-hidden"
        >
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#FF69B4_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          
          <p className="text-gray-600 mb-6 md:mb-12 leading-[1.6] text-sm md:text-xl relative z-10 font-medium tracking-normal md:tracking-wide">
            Mong là trong giây phút quý giá này, Hương sẽ được ở cạnh những người bạn đã cùng mình trải qua nhiều chuyện buồn vui… từ những ngày còn bỡ ngỡ đến khi mọi thứ dần trở nên thân quen. Có lẽ điều đẹp nhất không chỉ là điểm kết thúc, mà là được nhìn thấy những gương mặt quen thuộc vẫn ở đó, cùng nhau khép lại một chặng đường thanh xuân thật trọn vẹn!
          </p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 relative z-10">
            <div className="bg-[#FFF5F7] p-3 md:p-5 rounded-2xl md:rounded-3xl border border-pink-50 flex items-center md:flex-col gap-3 md:gap-2 group hover:bg-white transition-colors">
              <div className="p-2 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-md text-[#FF69B4] group-hover:scale-110 transition-transform">
                <Clock size={20} />
              </div>
              <div className="text-left md:text-center">
                <p className="font-bold text-base md:text-lg text-[#DB7093]">10:00</p>
                <p className="text-[9px] md:text-[10px] text-pink-400 uppercase tracking-wider font-bold">Thứ Hai, 11/05/2026</p>
              </div>
            </div>

            <div className="bg-[#FFF5F7] p-3 md:p-5 rounded-2xl md:rounded-3xl border border-pink-50 flex items-center md:flex-col gap-3 md:gap-2 group hover:bg-white transition-colors">
              <div className="p-2 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-md text-[#FF69B4] group-hover:scale-110 transition-transform">
                <GraduationCap size={20} />
              </div>
              <div className="text-left md:text-center">
                <p className="font-bold text-base md:text-lg text-[#DB7093]">Địa điểm</p>
                <p className="text-[9px] md:text-[10px] text-pink-400 uppercase tracking-wider font-bold">ĐH Kinh tế – Luật (UEL)</p>
              </div>
            </div>

            <div className="bg-[#FFF5F7] p-3 md:p-5 rounded-2xl md:rounded-3xl border border-pink-50 flex items-center md:flex-col gap-3 md:gap-2 group hover:bg-white transition-colors">
              <div className="p-2 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-md text-[#FF69B4] group-hover:scale-110 transition-transform">
                <MapPin size={20} />
              </div>
              <div className="text-left md:text-center">
                <p className="font-bold text-base md:text-lg text-[#DB7093]">Địa chỉ</p>
                <p className="text-[9px] md:text-[10px] text-pink-400 uppercase tracking-tighter font-bold leading-none">669 QL1, Linh Xuân, Thủ Đức</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#DB7093" }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-[#FF69B4] text-white px-10 md:px-14 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-pink-300/50 transition-all active:scale-95"
        >
          Tiếp tục
        </motion.button>
      </div>
    </motion.div>
  );
};

const ClosingPage = () => {
  const [userName, setUserName] = useState('');
  const [userNote, setUserNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const end = Date.now() + 4 * 1000;
    const colors = ['#FF69B4', '#FFB6C1', '#DB7093', '#ffffff', '#FFD700'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.6 },
        colors: colors,
        shapes: ['circle', 'square'],
        scalar: 1.2
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.6 },
        colors: colors,
        shapes: ['circle', 'square'],
        scalar: 1.2
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || isLoading) return;

    setIsLoading(true);
    setSubmitError('');
    
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        throw new Error('Thiếu VITE_GOOGLE_SCRIPT_URL trong file .env.local');
      }

      const payload = JSON.stringify({
        name: userName,
        note: userNote,
      });

      try {
        const response = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
        });

        const rawText = await response.text();
        let parsedBody: { ok?: boolean; error?: string } | null = null;
        try {
          parsedBody = rawText ? JSON.parse(rawText) : null;
        } catch {
          // Ignore non-JSON body, we only rely on HTTP status when JSON is unavailable.
        }

        if (!response.ok) {
          throw new Error('Không gửi được xác nhận. Vui lòng thử lại.');
        }

        if (parsedBody && parsedBody.ok === false) {
          throw new Error(parsedBody.error || 'Máy chủ từ chối dữ liệu gửi lên.');
        }
      } catch (error) {
        // Google Apps Script often blocks CORS for browser reads.
        // Fallback to no-cors so submission can still be delivered to the sheet.
        const isCorsError = error instanceof TypeError;
        if (!isCorsError) {
          throw error;
        }

        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: payload,
        });
      }
      
      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF69B4', '#FFD700']
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Gửi xác nhận thất bại. Bạn kiểm tra lại mạng hoặc cấu hình Apps Script rồi thử lại nhé.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#FFF0F5] to-[#FFB6C1] flex flex-col items-center justify-center p-2 md:p-4 text-center relative overflow-hidden"
    >
      <FloatingDecor />
      
      {/* Floating Hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", x: Math.random() * 100 - 50 + "%", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.5, 0] }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute text-pink-400/20"
        >
          <Heart size={Math.random() * 30 + 20} fill="currentColor" />
        </motion.div>
      ))}

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-white p-6 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-2xl border-t-[12px] md:border-t-[16px] border-[#FF69B4] max-w-lg w-full relative z-10 border-x-2 border-pink-50"
      >
        <div className="mb-4 md:mb-6 relative inline-block">
          <Heart size={50} md:size={70} className="text-[#FF69B4] animate-pulse fill-[#FF69B4]/10" />
          <div className="absolute inset-0 bg-[#FF69B4] blur-3xl opacity-30 animate-pulse" />
        </div>
        
        {!isSubmitted ? (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4 mb-8 text-left bg-[#FFF5F7] p-6 rounded-3xl border border-pink-100"
          >
            <p className="text-[#DB7093] font-bold text-sm mb-2 text-center uppercase tracking-widest">Xác nhận tham gia</p>
            <div className="space-y-1">
              <label className="text-xs font-bold text-pink-400 ml-1">Tên của bạn</label>
              <input 
                required
                type="text" 
                placeholder="Nhập tên của bạn..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-white border-2 border-pink-50 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#FF69B4] transition-all placeholder:text-gray-300 shadow-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-pink-400 ml-1">Lời nhắn / Ghi chú</label>
              <textarea 
                placeholder="Bạn có đến tham gia cùng mình không nè?"
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                rows={2}
                className="w-full bg-white border-2 border-pink-50 rounded-2xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#FF69B4] transition-all placeholder:text-gray-300 shadow-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full ${isLoading ? 'bg-pink-300' : 'bg-[#FF69B4]'} text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-pink-200 transition-all active:scale-95`}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={18} />
                </motion.div>
              ) : (
                <>Gửi xác nhận <Send size={18} /></>
              )}
            </button>
            {submitError && (
              <p className="text-sm text-red-500 text-center font-medium">{submitError}</p>
            )}
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-50 p-6 rounded-3xl border border-green-100 mb-8 flex flex-col items-center gap-3"
          >
            <CheckCircle2 size={40} className="text-green-500" />
            <p className="text-green-700 font-bold">Cảm ơn {userName} nhé!</p>
            <p className="text-green-600 text-sm">Thông tin của bạn đã được gửi đến mình ❤️</p>
          </motion.div>
        )}
        
        <div className="space-y-4 md:space-y-6">
          <p className="text-lg md:text-3xl text-[#FF69B4] font-serif italic font-bold tracking-tight leading-relaxed">
            Hẹn gặp bạn tại <span className="inline-block">UEL nhé!</span>
          </p>
          <div className="flex justify-center gap-3">
            <Heart size={18} md:size={24} className="text-[#FF69B4] fill-[#FF69B4]" />
            <Heart size={18} md:size={24} className="text-[#FFB6C1] fill-[#FFB6C1]" />
            <Heart size={18} md:size={24} className="text-[#FF69B4] fill-[#FF69B4]" />
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t-2 border-pink-50">
          <div className="flex justify-center gap-4 mb-4">
            <Flower2 size={16} className="text-pink-200" />
            <Sparkles size={16} className="text-pink-200" />
            <Flower2 size={16} className="text-pink-200" />
          </div>
          <p className="text-pink-300 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">Class of 2026 • UEL</p>
          <p className="text-pink-200 text-[8px] md:text-[10px] mt-2 md:mt-3 italic font-medium">Designed with ❤️ by Thảo Hương</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main App Component ---

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="font-sans antialiased bg-[#FFF5F7] min-h-screen overflow-x-hidden selection:bg-[#FF69B4] selection:text-white scrollbar-hide">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <div key="landing" className="w-full h-full">
            <LandingPage onNext={() => setStep(2)} />
          </div>
        )}
        {step === 2 && (
          <div key="details" className="w-full h-full">
            <DetailsPage onNext={() => setStep(3)} />
          </div>
        )}
        {step === 3 && (
          <div key="closing" className="w-full h-full">
            <ClosingPage />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
