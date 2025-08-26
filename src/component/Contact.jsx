import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import SyncLoader from "react-spinners/SyncLoader";
import toast from 'react-hot-toast';
import { postAPI } from '../callers/axiosUrls';

const Contact = () => {
    const [sender, setSender] = useState(false);
    const [selectedService, setSelectedService] = useState('Please select an option');
    const [captchaValue, setCaptchaValue] = useState(null);
    const [fullName, setFullName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [domainName, setDomainName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const recaptchaRef = useRef(null);

    const handleRecaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    function isValidMobileNumber(number) {
        const mobileRegex = /^\+?[1-9]\d{0,2}[-\s]?\d{6,14}$/;
        return mobileRegex.test(number);
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async () => {
        if (
            !fullName ||
            !email ||
            !selectedService ||
            !phoneNumber ||
            !companyName||
            selectedService === "Please select an option"
        ) {
            toast("All required fields are not filled!", { icon: '⚠️' });
            return;
        }

        if (!isValidEmail(email)) {
            toast("Please provide a valid email address!", { icon: '⚠️' });
            return;
        }

        if (!isValidMobileNumber(phoneNumber)) {
            toast("Please provide a valid phone number!", { icon: '⚠️' });
            return;
        }

        if (!captchaValue) {
            toast("Please verify the reCAPTCHA before submitting!", { icon: '⚠️' });
            return;
        }

        if (sender) return;
        else setSender(true);


        try {
            await postAPI('/send-astra-email', {
                full_name: fullName,
                company_email: email,
                company_name: companyName,
                mobile_number: phoneNumber,
                service_request: selectedService,
                captcha_token: captchaValue,
            });

            toast.success("Request submitted successfully!");
            setFullName('');
            setEmail('');
            setPhoneNumber('');
            setDomainName('')
            setCompanyName('');
            setSelectedService('Please select an option');
            setCaptchaValue(null);
            setIsSubmitted(true);

        } catch (error) {
            console.error(error);
            toast.error(error.message || "Something went wrong.");

        } finally {
            setSender(false);
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
                setCaptchaValue(null);
            }
        }
    };

    const handleDownloadClick = () => {
        // Fire the GA4 event
        if (typeof gtag !== "undefined") {
            gtag('event', 'download_click', {
                event_category: 'engagement',
                event_label: 'SecurityAstra-V2.zip',
                campaign: 'Security_Astra_Campaign',
            });
        }

        // Trigger the download in a new tab
        window.open(
            "https://edutech.blob.core.windows.net/securityastra-windows-exe/SecurityAstra-V2-trial.zip?utm_source=google&utm_medium=social&utm_campaign=Security_Astra_Campaign",
            "_blank"
        );
    };

    useEffect(() => {
        if (isSubmitted) {
            handleDownloadClick();
        }
    }, [isSubmitted]);



    return (
        <>
            <div
                id="hero"
                className="w-full max-w-6xl mt-10 border border-[#FFFFFF36] bg-[#161520]/40 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-10"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-[#FFFFFF] mb-1 text-left">Name</label>
                        <input
                            disabled={sender}
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="px-4 py-2 border border-[#FFFFFF36] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-[#FFFFFF] text-left mb-1">Company email ID</label>
                        <input
                            disabled={sender}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 border border-[#FFFFFF36] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-[#FFFFFF] text-left mb-1">Company Name</label>
                        <input
                            disabled={sender}
                            type="company_name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="px-4 py-2 border border-[#FFFFFF36] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                     <div className="flex flex-col">
                        <label className="text-sm font-medium text-[#FFFFFF] text-left mb-1">Domain Name</label>
                        <input
                            disabled={sender}
                            type="domain_name"
                            value={domainName}
                            onChange={(e) => setDomainName(e.target.value)}
                            className="px-4 py-2 border border-[#FFFFFF36] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-[#FFFFFF] text-left mb-1">Phone Number</label>
                        <input
                            disabled={sender}
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="px-4 py-2 border border-[#FFFFFF36] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* <div className='flex-1'> */}

                    <div className="flex flex-col">
                        <p className="text-sm font-medium text-[#FFFFFF] text-left mb-1">Request for services</p>
                        <select
                            disabled={sender}
                            value={selectedService}
                            id="dropdown-contact"
                            onChange={(e) => setSelectedService(e.target.value)}
                            className={`${selectedService === 'Please select an option' ? 'text-[#707070]' : 'text-white'
                                } 
      bg-transparent text-[12px] md:text-[13px] font-medium border border-[#FFFFFF36] rounded-[10px]  
      px-4 py-[10px] focus:outline-none w-full max-w-full truncate`}
                        >
                            <option className="text-black" value="Please select an option" disabled>

                            </option>
                            <option className="text-black" value="Security Astra SaaS Subscription">Security Astra Premium</option>
                            <option className="text-black" value="Website Vulnerability Assessment">Website Vulnerability Assessment</option>
                            <option className="text-black" value="Network Penetration Testing">Network Penetration Testing</option>
                            <option className="text-black" value="Endpoint Security Assessment">Endpoint Security Assessment</option>
                            <option className="text-black" value="Cloud Security Review">Cloud Security Review</option>
                            <option className="text-black" value="Compliance & Risk Management (ISO, GDPR, NIST)">
                                Compliance & Risk Management (ISO, GDPR, NIST)
                            </option>
                            <option className="text-black" value="Others">Others</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 flex flex-col lg:flex-row items-start justify-center mt-2 gap-4 relative z-[10000]">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={handleRecaptchaChange}
                        />
                    </div>

                    <div className="md:col-span-2 w-full flex justify-center items-center">
                        <button
                            onClick={handleSubmit}
                            className="text-base mt-1 lg:text-lg px-16 py-2 font-medium cursor-pointer bg-[#1657BB] text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            {sender ? (
                                <SyncLoader color="white" size={10} />
                            ) : (
                                'Download'
                            )}
                        </button>
                    </div>



                </div>
                <p className="text-[1rem] text-[#667085] text-center mb-4 mt-4">
                    You can reach us anytime via <a href="mailto:hi@onmeridian.com" className="text-blue-600 font-medium">marketing@onmeridian.com</a>
                </p>
            </div>
        </>
    )
}

export default Contact;