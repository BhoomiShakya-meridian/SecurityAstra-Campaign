import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Use icons instead of images

const faqs = [
 {
    question: 'Can I use this tool without prior cybersecurity knowledge?',
    answer: 'Yes, our tool is designed with a user-friendly interface, making it easy for both beginners and security professionals to conduct VAPT assessments.',
  },
  {
    question: 'How frequently should I conduct a VAPT scan?',
    answer: 'It depends on your business needs, but we recommend running scans at least quarterly or after any major system updates.',
  },
  {
    question: 'Why do I need VAPT for my business?',
    answer: 'VAPT helps protect your business from cyber threats, ensures compliance with security standards, and prevents data breaches.',
  },
  {
    question: 'What types of vulnerabilities does your tool detect?',
    answer: 'Our tool identifies security issues related to misconfigurations, outdated software, open ports, weak authentication, insecure headers, OWASP top 10.',
  },
  {
    question: 'Does your tool support automated testing?',
    answer: 'Yes, our tool automates vulnerability scanning and provides detailed reports on security risks.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className=" roboto text-white pt-[5rem] pb-[5rem] mb-[5rem] px-6">
      {/* Heading */}
      <div className="text-center mb-10">
<p className="inline-block text-xs uppercase text-[#2A59FF] bg-[#2A59FF0D] py-1 px-3 rounded-full font-semibold tracking-widest mb-2">
  FAQ
</p>
        <h2 className="text-2xl md:text-4xl font-semibold">Common Questions About Interlock</h2>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-[#161520] rounded-md px-6 py-5 transition-all duration-300"
            >
              {/* Question Row */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="text-base md:text-base font-medium">{faq.question}</p>
                {isOpen ? (
                  <FaChevronUp className="w-4 h-4 text-white" />
                ) : (
                  <FaChevronDown className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Answer */}
              <div
                className={`text-sm text-gray-400 mt-3 transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-40 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
