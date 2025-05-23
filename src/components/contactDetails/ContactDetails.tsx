import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect } from "react";

const ContactDetails = () => {
  // Initialize AOS
  useEffect(() => {
    const loadAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 600,
          easing: "ease-in-out",
          // once: true,
        });
      }
    };
    loadAOS();
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h2
        data-aos="fade-down"
        className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white"
      >
        Contact Information
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left Column - Primary Contact */}
        <div className="rounded-xl p-3 md:p-6 dark:bg-gray-900">
          <h3
            className="mb-4 text-xl font-semibold text-gray-800 dark:text-white"
            data-aos="fade-down"
          >
            Direct Contacts
          </h3>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 rounded-lg bg-blue-50 p-2 dark:bg-blue-900/30">
                <FiMail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email Address
                </p>
                <a
                  href="mailto:humayunkabir6267@gmail.com"
                  className="text-base font-medium break-all text-gray-800 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  humayunkabir6267@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="150">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 rounded-lg bg-green-50 p-2 dark:bg-green-900/30">
                <FiPhone className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Phone Number
                </p>
                <a
                  href="tel:+8801533026429"
                  className="text-base font-medium text-gray-800 transition-colors hover:text-green-600 dark:text-white dark:hover:text-green-400"
                >
                  +8801533026429
                </a>
              </div>
            </div>
          </div>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 rounded-lg bg-purple-50 p-2 dark:bg-purple-900/30">
                <FiMapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Chawkbazar
                </p>
                <p className="text-base font-medium text-gray-800 dark:text-white">
                  Chattogram, BD
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="250">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 rounded-lg bg-amber-50 p-2 dark:bg-amber-900/30">
                <FiClock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Availability
                </p>
                <p className="text-base font-medium text-gray-800 dark:text-white">
                  Mon-Sat: 9AM - 8PM GMT+6
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Social Links */}
        <div className="rounded-xl p-3 md:p-6 dark:bg-gray-900">
          <h3
            className="mb-4 text-xl font-semibold text-gray-800 dark:text-white"
            data-aos="fade-down"
          >
            Social & Messaging
          </h3>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <a
              href="https://wa.me/8801533026429"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-green-50 dark:hover:bg-green-900/10"
            >
              <div className="flex-shrink-0 rounded-lg bg-green-50 p-2 dark:bg-green-900/30">
                <FaWhatsapp className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  WhatsApp
                </p>
                <p className="text-base font-medium text-gray-800 dark:text-white">Chat with me</p>
              </div>
            </a>
          </div>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="150">
            <a
              href="https://t.me/humayunkabir533"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/10"
            >
              <div className="flex-shrink-0 rounded-lg bg-blue-50 p-2 dark:bg-blue-900/30">
                <FaTelegram className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Telegram
                </p>
                <p className="text-base font-medium text-gray-800 dark:text-white">Message me</p>
              </div>
            </a>
          </div>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
            <a
              href="https://www.facebook.com/HumayunKabir6267/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/10"
            >
              <div className="flex-shrink-0 rounded-lg bg-blue-50 p-2 dark:bg-blue-900/30">
                <FaFacebook className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Facebook
                </p>
                <p className="text-base font-medium text-gray-800 dark:text-white">
                  Connect with me
                </p>
              </div>
            </a>
          </div>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="250">
            <a
              href="https://www.linkedin.com/in/humayunkabir13/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/10"
            >
              <div className="flex-shrink-0 rounded-lg bg-blue-50 p-2 dark:bg-blue-900/30">
                <FaLinkedin className="h-5 w-5 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  LinkedIn
                </p>
                <p className="text-base font-medium text-gray-800 dark:text-white">
                  Professional profile
                </p>
              </div>
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <a
              href="https://github.com/Humayun1318"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex-shrink-0 rounded-lg bg-gray-50 p-2 dark:bg-gray-700">
                <FaGithub className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</p>
                <p className="text-base font-medium text-gray-800 dark:text-white">View my work</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
