import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import data from '../data.json';

const Contact = () => {
    const restaurantInfo = data.restaurantInfo;
    const footer = data.footer;

  return (
    <footer className="bg-gray-900 text-white py-8 px-5" id="contact">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <ul>
            <li className="mb-1">{restaurantInfo.address}</li>
            <li className="mb-1">
              <a href={`tel:${restaurantInfo.phone}`} className="hover:underline">
                {restaurantInfo.phone}
              </a>
            </li>
            <li className="mb-1">
              <a href={`mailto:${restaurantInfo.email}`} className="hover:underline">
                {restaurantInfo.email}
              </a>
            </li>
            <li>{restaurantInfo.openingHours}</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
          <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href={footer.socialMediaLinks.facebook} className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href={footer.socialMediaLinks.twitter} className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href={footer.socialMediaLinks.instagram} className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 text-right">
          <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
          <ul>
            <li className="mb-1">
              <a href={footer.additionalLinks.privacyPolicy} className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href={footer.additionalLinks.termsOfService} className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Contact;
