import React from 'react';
import blogImg from '../../assets/img1.jpg'; // Replace with actual image
import img3 from '../../assets/img3.jpg';

function DetailedBlog({ onClose }) {
  return (
    <div className="bg-white text-black p-6 md:p-10 rounded-xl w-full max-w-6xl mx-auto relative max-h-[95vh] overflow-y-auto shadow-lg hide-scrollbar">

      {/* Close Button */}
      <button
        className="absolute cursor-pointer top-4 right-4 text-[#4d4d4d] hover:text-black text-2xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Image */}
      <div className="w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
        <img src={blogImg} alt="Blog" className="w-full h-full object-cover" />
      </div>

      {/* Tag & Date */}
      <div className="text-sm text-gray-400 mb-2 flex flex-wrap gap-4 justify-between">
        <span className="bg-[#a6a6a6] text-xs px-3 py-1 text-black font-semibold rounded-full w-fit">Cybersecurity</span>
        <span className="text-[#4d4d4d]">April 15, 2025 · by <span className="text-black font-semibold">Security Astra</span></span>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
        Top 10 Vulnerabilities in 2025: Stay Safe with Security Astra
      </h2>

      {/* Content */}
      <div className="text-[#4d4d4d] leading-7 space-y-6 text-base md:text-lg">

        <section>
          <h3 className="text-xl font-semibold py-2">1. Introduction: Why 2025 Is a Critical Year for Cybersecurity</h3>
          <p className='py-3'>Cyberattacks are growing smarter in 2025, and no one is safe—not small businesses, not big companies, not even you. Hackers are finding new ways to break into websites and networks, stealing data and causing chaos. At Security Astra, we’ve been tracking the latest cybersecurity threats, and we’re here to share the top 10 vulnerabilities hackers are exploiting this year. Knowing these risks is the first step to staying safe.

          </p>
          <p className='py-3'>
            This blog is your guide to understanding these dangers and how our <b>VAPT solutions</b> (Vulnerability Assessment and Penetration Testing) can protect your website and network. Whether you’re a business owner or just want to keep your online world secure, we’ve got you covered with simple tips and our free 1.0 VAPT tool.
            Let’s dive into the <b>top vulnerabilities 2025</b> and see how Security Astra can help!
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold py-2">2. Top 10 Vulnerabilities in 2025</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li><a href='https://owasp.org/Top10/A01_2021-Broken_Access_Control/'><span className="text-blue-600 underline">Broken Access Control</span></a></li>
            <li> <a href='https://owasp.org/Top10/A01_2021-Broken_Access_Control/'><span className="text-blue-600 underline">SQL Injection</span></a></li>
            <li> <a href='https://owasp.org/www-community/attacks/xss/'><span className="text-blue-600 underline">Cross Site Scripting (XSS)</span></a></li>
            <li> <a href='https://owasp.org/www-project-api-security/'><span className="text-blue-600 underline">Insecure APIs</span></a></li>
            <li><a href='https://owasp.org/Top10/A05_2021-Security_Misconfiguration/'><span className="text-blue-600 underline">Security Misconfigurations</span></a></li>
            <li><a href='https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/'><span className="text-blue-600 underline">Vulnerable and Outdated Components</span></a></li>
            <li><a href='https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/'><span className="text-blue-600 underline">Authentication Failures</span></a></li>
            <li><a href='https://owasp.org/www-community/attacks/Server_Side_Request_Forgery'><span className="text-blue-600 underline">SSRF (Server-Side Request Forgery)</span></a></li>
            <li><a href='https://owasp.org/www-community/vulnerabilities/Insecure_Deserialization'><span className="text-blue-600 underline">Insecure Deserialization</span></a></li>
            <li><a href='https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/'><span className="text-blue-600 underline">Inefficient Logging and Monitoring</span></a></li>
          </ol>
          <br />
          <p className='text-left py-3'>These vulnerabilities are based on trends reported by experts like OWASP and our own findings at Security Astra. Hackers love these weaknesses because they’re common and easy to exploit. But don’t worry—our <b>VAPT solutions</b> can find and fix them before it’s too late.</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold py-2">3. Why choose Security Astra as Your Best Defense Against 2025 Threats
          </h3>
          <p className='py-3'>At Security Astra, we’re a new but passionate cybersecurity firm here to protect you from these
            <b> top vulnerabilities 2025</b> . Our free 1.0 version focuses <b>on network and website VAPT</b>, helping you spot and fix security holes in your systems. While we’re just starting (with more features coming soon!), our tool is already powerful enough to keep hackers at bay.</p>
          {/* <br /> */}
          <p className='py-3'>
            Why choose us? We’re simple, affordable, and focused on results. Our mission is to make cybersecurity easy for everyone, from small businesses to solo entrepreneurs. Ready to secure your website and network? <b>Try Security Astra’s free VAPT tool today</b> and see how we can save you from cyberattacks.</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold py-2">4. How Security Astra’s Features Keep You Safe</h3>
          <p className='text-left py-3'>Our <b> VAPT solutions</b> are built to tackle the <b>top cybersecurity vulnerabilities</b> in 2025. Here’s what makes Security Astra special and why it’s the best choice for your website and network security:
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 bg-[#f9f9f9] p-6 rounded-2xl shadow-md">
            {/* Left Column - Key Features */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Key Features</h3>
              <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold text-black">Pentest Capabilities:</span> Website and Networks
                </li>
                <li>
                  <span className="font-semibold text-black">Manual Pentest:</span> Yes (As a Service)
                </li>
                <li>
                  <span className="font-semibold text-black">Accuracy:</span> Vetted scans for zero false positives
                </li>
                <li>
                  <span className="font-semibold text-black">Scan Behind Logins:</span> Yes
                </li>
                <li>
                  <span className="font-semibold text-black">Compliance:</span> SOC2 and ISO 27001
                </li>
                <li>
                  <span className="font-semibold text-black">Best For:</span> Vulnerability assessments, penetration tests (manual & automated), and compliance scans for multiple digital assets.
                </li>
              </ol>
            </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={img3} alt="Key Feature Visual" className="rounded-xl max-w-full h-auto" />
            </div>
          </div>

          {/* <br /> */}
          <h3 className="text-xl font-semibold pt-3">Real-World Impact</h3>
          <p className='py-3'>Imagine a small online store hit by a hacker exploiting a security misconfiguration. Customer data is stolen, and the business loses trust and money. With Security Astra’s VAPT, we’d catch that misconfiguration early, saving the day. In 2025, 46% of businesses faced a data breach, and many could’ve been prevented with tools like ours. Don’t be a statistic—use Security Astra to stay safe.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold py-2">Website Vulnerabilities: Your Online Front Door Under Attack</h3>
          <p className='py-3'>Your website is your business’s face to the world, but it’s also a prime target for hackers. In 2025, attacks like SQL injection or cross-site scripting (XSS) are spiking, tricking websites into leaking customer info or spreading malware. A hacked website can ruin your reputation and scare customers away. Security Astra’s website VAPT checks your site for these dangers, ensuring your online front door stays locked tight.
          </p>
          <p className='py-3'>
            This blog lists the top 10 vulnerabilities affecting networks and websites and shows how Security Astra’s VAPT solutions keep you safe. Ready to protect your business? Let’s dive in!
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Comparison Table</h3>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
                <tr>
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold text-green-700">Our Service</th>
                  <th className="p-4 font-semibold text-red-600">Others Usually</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-medium text-gray-700">Industrial-Grade Website Scanner</td>
                  <td className="p-4 text-green-700">Trusted tools for deep vulnerability detection</td>
                  <td className="p-4 text-red-600">Shallow scanning</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Zero Downtime</td>
                  <td className="p-4 text-green-700">Your website runs smoothly during scans</td>
                  <td className="p-4 text-red-600">Risk of disruption</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Plug & Play</td>
                  <td className="p-4 text-green-700">No training — just run it</td>
                  <td className="p-4 text-red-600">Requires onboarding</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Interactive Dashboard</td>
                  <td className="p-4 text-green-700">See loopholes visually and interactively</td>
                  <td className="p-4 text-red-600">No visuals, just data</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Business-Friendly Reports</td>
                  <td className="p-4 text-green-700">Clear summaries + fix guides in PDF & HTML</td>
                  <td className="p-4 text-red-600">Only raw outputs</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Tool Access (Free for Now)</td>
                  <td className="p-4 text-green-700">Use the tool yourself</td>
                  <td className="p-4 text-red-600">Usually paid or restricted</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Free Re-Scan After Fixes</td>
                  <td className="p-4 text-green-700">Confirms your website is safe post-patching</td>
                  <td className="p-4 text-red-600">Charged again</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold py-2">Network Vulnerabilities: Your Business’s Backbone at Risk</h3>
          <p className='py-3'>Your network is like the highways connecting your business—computers, servers, and devices all rely on it. In 2025, hackers are exploiting network weaknesses to steal sensitive data or shut down operations. For example, a single unpatched server can let attackers slip in, costing businesses thousands. Our <b>network VAPT</b> scans your systems to catch risks like misconfigurations or outdated software, keeping your digital highways secure.
          </p>

          <table className="w-full text-left border-collapse mt-8 text-sm lg:text-base rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <thead className="bg-gradient-to-r from-green-100 to-green-200 text-gray-800">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Our Service</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ['Enterprise-Level Network Analysis', 'In-depth scans covering known exploits & CVEs'],
                ['No Disruption to Systems', 'Safe, passive scans that don’t interrupt devices'],
                ['Plug & Play Simplicity', 'Quick start with no configuration hassles'],
                ['Interactive Dashboard', 'Understand your network risks at a glance'],
                ['Tool Access (Free for Now)', 'Scan anytime — you’re in control'],
                ['Executive-Friendly Reports', 'Designed for both business and tech teams'],
                ['Free Follow-Up Scan After Fixes', 'Ensures you\'re fully patched'],
              ].map(([feature, detail], index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100 transition'}>
                  <td className="p-4 font-medium text-gray-900">{feature}</td>
                  <td className="p-4">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </section>


        <section>
          <h3 className="text-xl font-semibold py-2">Why VAPT Matters in 2025</h3>
          <p className='py-3'><b>Vulnerability Assessment and Penetration Testing (VAPT)</b> is like a health check for your website and network. The assessment finds weak spots, and the penetration test tries to “hack” them safely to see how bad they are. This proactive approach stops hackers before they can do damage. With cyberattacks up 30% in 2024, VAPT is a must for 2025.
          </p>
          <p>
            <span className='font-semibold py-2'>Why Choose Security Astra?</span><br />
            <p className='py-2'>We’re your trusted partner for <b>network VAPT</b> and <b>website VAPT</b> because we make cybersecurity simple and effective. Our free 1.0 tool delivers accurate scans with clear, actionable reports, perfect for small businesses and startups. Backed by a passionate team and continuous updates, we’re growing fast with more features on the way. Choose Security Astra for affordable, user-friendly protection that keeps hackers out.</p>

          </p>
          <p className='py-2'>Ready to lock down your network and website? <b>Try Security Astra’s free VAPT tool today</b> and stop cyberattacks in their tracks.</p>

          <div className="overflow-x-auto mt-10 rounded-2xl border border-gray-200 shadow-md">
            <table className="w-full text-sm lg:text-base text-left border-collapse">
              <thead className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
                <tr>
                  <th className="p-5 font-semibold">Feature</th>
                  <th className="p-5 font-semibold text-green-700">Security Astra</th>
                  <th className="p-5 font-semibold text-red-600">Competitors</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                {[
                  [
                    'Assessment Capabilities',
                    '✅ Website and Network Security Assessments',
                    '❌ Focuses on either website or network security, rarely both',
                  ],
                  [
                    'Manual Pentest',
                    '✅ Professional manual pentesting service offered',
                    '❌ Relies mostly on automated scans without expert validation',
                  ],
                  [
                    'Compliance Standards',
                    '✅ Aligns with ISO 27001 and SOC 2',
                    '❌ Rarely aligns with both ISO 27001 and SOC 2 compliance standards',
                  ],
                  [
                    'Best For',
                    '✅ Vulnerability Assessments, Penetration Tests, and Compliance Audits',
                    '❌ Focuses mostly on basic vulnerability scanning',
                  ],
                  [
                    'Plug n Play',
                    '✅ Just a setup file, ready to use instantly',
                    '❌ Often requires complex configurations or integrations',
                  ],
                  [
                    'Interactive Dashboard',
                    '✅ Visual and interactive loophole tracking',
                    '❌ Static, text-heavy dashboards',
                  ],
                  [
                    'Business-Friendly Reports',
                    '✅ Clear summaries with actionable fix guides in PDF & HTML formats',
                    '❌ Technical reports with less actionable information for management',
                  ],
                  [
                    'Free Re-Scan After Fixes',
                    '✅ Free re-scan to confirm security post-patching',
                    '❌ Re-scanning is often a paid premium feature',
                  ],
                  [
                    'Tool Access',
                    '✅ Free access to use the tool before purchasing',
                    '❌ Most tools do not provide free access',
                  ],
                ].map(([feature, astra, competitor], index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition duration-200 ease-in-out"
                  >
                    <td className="p-5 font-medium text-gray-900">{feature}</td>
                    <td className="p-5 text-green-700">{astra}</td>
                    <td className="p-5 text-red-600">{competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>

        <div className="mt-10 bg-[#f9f9f9] p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Secure Your Future Now</h2>
          <p className="text-gray-700 mb-4">
            The top 10 vulnerabilities in 2025 are real threats, but you don’t have to face them alone.
            <span className="font-semibold text-blue-600">Security Astra’s free 1.0 VAPT tool</span> is your first step to a safer online world.
            Scan your website and network, fix weaknesses, and sleep easy knowing hackers can’t get in.
          </p>
          <p className="text-gray-700 mb-6">
            Don’t wait for a cyberattack to ruin your day.
            <span className="font-semibold text-blue-600">Try Security Astra today for free</span> and join thousands of users staying ahead of 2025’s biggest threats.
          </p>
          <a href="/get-started" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Start Free Scan
          </a>

        </div>

        <footer className="mt-10 border-t pt-4 text-center text-sm text-gray-400">
          Got questions? Contact us at <a href="#" className="underline">info@securityastra.com</a>
        </footer>
      </div>
    </div>
  );
}

export default DetailedBlog;
