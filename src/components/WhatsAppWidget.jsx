"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

export default function WhatsAppWidget() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);
  const [hasTimeElapsed, setHasTimeElapsed] = useState(false);

  const WHATSAPP_NUMBER = "+447518755555"; // Placeholder, can be updated by user
  const PREFILLED_MESSAGE = "Hi ScaleUp Accounting, I would like to learn more about your services.";

  useEffect(() => {
    setIsMounted(true);
    
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("whatsapp_widget_dismissed") === "true";
    setIsDismissed(dismissed);

    // Business hours logic (Europe/London 09:00 - 17:30 Mon-Fri)
    const checkBusinessHours = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: false
      });
      
      const parts = formatter.formatToParts(now);
      const partsMap = {};
      parts.forEach(p => { partsMap[p.type] = p.value });
      
      const weekday = partsMap.weekday;
      const hour = parseInt(partsMap.hour, 10);
      const minute = parseInt(partsMap.minute, 10);
      
      const isWeekend = weekday === "Saturday" || weekday === "Sunday";
      const timeInMinutes = hour * 60 + minute;
      const startMinutes = 9 * 60; // 09:00
      const endMinutes = 17 * 60 + 30; // 17:30
      
      setIsOnline(!isWeekend && timeInMinutes >= startMinutes && timeInMinutes <= endMinutes);
    };
    
    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMounted || isDismissed) return;

    const timeTimeout = setTimeout(() => {
      setHasTimeElapsed(true);
    }, 5000);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setHasScrolledEnough(true);
        return;
      }
      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      if (scrollPercent >= 25) {
        setHasScrolledEnough(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timeTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted, isDismissed]);

  useEffect(() => {
    if (hasTimeElapsed && hasScrolledEnough && !isVisible && !isDismissed) {
      setIsVisible(true);
      setIsExpanded(true);

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "widget_shown", { event_category: "whatsapp_widget" });
      }

      const minimizeTimeout = setTimeout(() => {
        setIsExpanded(false);
      }, 8000);

      return () => clearTimeout(minimizeTimeout);
    }
  }, [hasTimeElapsed, hasScrolledEnough, isVisible, isDismissed]);

  const handleDismiss = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem("whatsapp_widget_dismissed", "true");
    
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "widget_closed", { event_category: "whatsapp_widget" });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isExpanded) {
      setIsExpanded(true);
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "widget_expanded", { event_category: "whatsapp_widget" });
      }
    }
  }, [isExpanded]);

  const handleMouseLeave = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const handleClick = useCallback(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_clicked", { event_category: "whatsapp_widget" });
    }
    const encodedMessage = encodeURIComponent(PREFILLED_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  }, []);

  if (!isMounted || isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(4px)" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-[9999] md:bottom-8 md:right-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
        >
          <div className="relative group flex items-center justify-end">
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  onClick={handleDismiss}
                  aria-label="Close WhatsApp widget"
                  className="absolute -top-2 -left-2 z-10 p-1.5 bg-white border border-gray-100 text-gray-500 hover:text-gray-800 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  <X className="w-3.5 h-3.5" />
                </motion.button>
              )}
            </AnimatePresence>

            <button
              onClick={handleClick}
              aria-label="Chat with us on WhatsApp"
              className="flex items-center bg-white/80 hover:bg-white/95 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full p-1.5 pr-1.5 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/30 overflow-hidden"
            >
              <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-b from-[#25D366] to-[#128C7E] rounded-full text-white shadow-inner flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <FaWhatsapp className="w-7 h-7" />
                <div 
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white transition-colors duration-300 ${
                    isOnline ? "bg-green-500" : "bg-amber-500"
                  }`} 
                  title={isOnline ? "Online" : "Offline"}
                />
              </div>

              <motion.div
                initial={false}
                animate={{ width: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col items-start overflow-hidden whitespace-nowrap"
              >
                <div className="pl-3 pr-4 flex flex-col justify-center text-left">
                  <span className="text-sm font-semibold text-gray-900 font-poppins">
                    Chat with us
                  </span>
                  <span className="text-[11px] text-gray-600 font-inter">
                    {isOnline ? "We typically reply in minutes" : "We are currently offline"}
                  </span>
                </div>
              </motion.div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
