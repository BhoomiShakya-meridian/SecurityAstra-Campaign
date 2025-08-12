import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img2.png';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { FaArrowRight } from "react-icons/fa6";
import DetailedBlog from './DetailedBlog';


const getVisitorId = async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  return result.visitorId;
};

const incrementView = async (blogId) => {
  const visitorId = await getVisitorId();
  const viewedKey = `blog_${blogId}_viewed_${visitorId}`;

  if (!localStorage.getItem(viewedKey)) {
    const viewsKey = `blog_${blogId}_views`;
    const currentViews = parseInt(localStorage.getItem(viewsKey)) || 0;
    localStorage.setItem(viewsKey, currentViews + 1);
    localStorage.setItem(viewedKey, 'true');
  }

  return parseInt(localStorage.getItem(`blog_${blogId}_views`)) || 0;
};

const blogs = [
  {
    id: 1,
    category: 'Cybersecurity',
    title: 'Top 10 Vulnerabilities in 2025: Stay Safe with Security Astra',
    description: 'Why 2025 Is a Critical Year for Cybersecurity',
    image: img1,
    // author: 'Alex Cyber',
    date: 'Apr 21',
  },
  
];

function BlogsContent() {
  const [views, setViews] = useState({});
  const [visibleCards, setVisibleCards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // lock scroll
    } else {
      document.body.style.overflow = 'auto'; // unlock scroll
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);


  useEffect(() => {
    blogs.forEach(async (blog) => {
      const viewsCount = await incrementView(blog.id);
      setViews((prev) => ({ ...prev, [blog.id]: viewsCount }));
    });

    // Animate cards in a wave
    blogs.forEach((blog, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, blog.id]);
      }, 200 + index * 300); // 300ms stagger
    });
  }, []);

  return (
    <div className="px-4 md:px-12 lg:px-24 py-10 bg-black text-white">
      <h1 id="recentblogs" className="text-center font-semibold text-3xl mb-8 animate__animated animate__bounceInUp">
        Recent Blogs
      </h1>
      {/* className={`grid gap-6 ${
    blogs.length === 1
      ? 'place-items-center md:grid-cols-2 lg:grid-cols-3' // Center single item
      : 'md:grid-cols-2 lg:grid-cols-3'
  }`} */}
      <div className={`grid gap-6 ${
    blogs.length === 1
      ? 'place-items-center md:grid-cols-2 lg:grid-cols-3' // Center single item
      : 'md:grid-cols-2 lg:grid-cols-3'
  }`}>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`transform bg-white text-black transition duration-500 ease-out opacity-0 translate-y-6 ${visibleCards.includes(blog.id) ? 'opacity-100 translate-y-0' : ''
              } rounded-xl shadow-md overflow-hidden hover:shadow-lg flex flex-col h-full `}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#a6a6a6] text-xs px-3 py-1 font-semibold rounded-full w-fit">
                  {blog.category}
                </span>
                <span className="text-xs text-[#4d4d4d] whitespace-nowrap">
                  {`${views[blog.id] || 0} views | ${blog.date}`}
                </span>
              </div>

              <h2 className="text-lg py-2 font-semibold min-h-[3rem]">
                {blog.title}
              </h2>
              <div className="flex-grow"></div>
              <p className="text-sm text-[#4d4d4d]">{blog.description}</p>
              <span
                onClick={() => setShowModal(true)}
                className='text-xs py-3 rounded-full w-fit text-[#00b3b3] flex items-center cursor-pointer gap-2'>Read Details <FaArrowRight />              </span>
            </div>
          </div>
        ))}
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4 animate__animated animate__fadeIn">
            <DetailedBlog onClose={() => setShowModal(false)} />
          </div>
        )}

      </div>
    </div>
  );
}

export default BlogsContent;
