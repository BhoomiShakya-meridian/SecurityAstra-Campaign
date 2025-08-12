import React, { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const valuesData = [
  {
    title: 'Comprehensive Security Assessment',
    description: 'Deep-dive analysis for both web and network layers.',
    full: `Security Astra performs a full-scope assessment of your digital assets — including websites, APIs, and network layers — to uncover vulnerabilities like OWASP Top 10 issues, SSL flaws, open ports, and misconfigurations.`,
  },
  {
    title: 'Proactive Threat Detection',
    description: 'AI-driven scanning to catch threats early.',
    full: `Stay ahead of attackers with continuous, AI-powered scans that proactively detect vulnerabilities and anomalies across web apps and networks — minimizing the risk of exploitation.`,
  },
  {
    title: 'Compliance & Regulatory Support',
    description: 'Align with global standards easily.',
    full: `Security Astra supports ISO 27001, SOC 2, GDPR and more with exportable audit-ready reports and tools to maintain ongoing compliance health.`,
  },
  {
    title: 'Customizable Dashboard & Real-Time Alerts',
    description: 'Live visibility into your security posture.',
    full: `Access a unified dashboard showing scanner health, scan history, risk status, and compliance tracking — with real-time alerts on vulnerabilities or performance issues.`,
  },
];

const valuesData2 = [
  {
    title: 'Scanner Health Monitoring',
    description: 'Ensure consistent vulnerability detection.',
    full: `Monitor the performance of all scanning engines continuously to ensure uninterrupted detection across every environment.`,
  },
  {
    title: 'Detailed Security Reports (HTML & PDF)',
    description: 'Tailored reports for both tech and management.',
    full: `Get actionable, easy-to-digest security reports in both online (HTML) and offline (PDF) formats — designed for developers and decision-makers alike.`,
  },
];

function Values() {
  const [selected, setSelected] = useState(valuesData[0]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      id="ourvalues"
      className="bg-black text-white py-16 px-4 md:px-12 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-center font-semibold text-3xl mb-5">Our Values</h2>
        <p className="text-center text-white mb-12 max-w-6xl mx-auto">
          At Security Astra, our values shape everything we build — from deep-dive vulnerability assessments to audit-ready compliance reporting. We’re committed to delivering intelligent, real-time security that protects your digital ecosystem end-to-end.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-4 py-10">
          {/* Left Column - Vertical List */}
          <div className="flex flex-col gap-8 lg:w-1/3">
            {valuesData.map((value, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(value)}
                className={`p-5 rounded-xl cursor-pointer transition-all border ${selected.title === value.title
                  ? 'bg-white border-[#00b3b3] shadow-md'
                  : 'bg-[#f9f9f9] border-transparent hover:bg-[#f0f0f0]'
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-[#00b3b3] p-2 rounded-full text-black">
                    <FaRegEye />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{value.title}</h4>
                    <p className="text-sm text-[#555]">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:w-2/3">
            {/* Animated Info Box */}
            <div className="rounded-2xl bg-gradient-to-br from-[#e0f7f7] to-[#ffffff] p-[2px] shadow-lg animated-border">
              <div className="bg-white text-black rounded-2xl p-6 h-[375px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center max-w-xl"
                  >
                    <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
                    <p className="text-[#404040] whitespace-pre-line leading-relaxed">
                      {selected.full}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom - Horizontal List */}
            <div className="flex flex-wrap justify-center gap-4 my-2">
              {valuesData2.map((value, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelected(value)}
                  className={`w-full sm:w-[48%] lg:w-[48%] p-4 rounded-xl cursor-pointer transition-all border ${selected.title === value.title
                    ? 'bg-white border-[#00b3b3] shadow-md'
                    : 'bg-[#f9f9f9] border-transparent hover:bg-[#f0f0f0]'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-[#00b3b3] p-2 rounded-full text-black">
                      <FaRegEye />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{value.title}</h4>
                      <p className="text-sm text-[#555]">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-8">
          <a href={`#talktous`}>
            <motion.button
           
              className="bg-cyan-400 px-[7rem] py-2 text-black font-semibold rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >

              Start your FREE trail Today

            </motion.button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Values;
