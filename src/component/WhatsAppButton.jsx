import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9098197363" // ✅ Replace with your number (without + or spaces)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;
