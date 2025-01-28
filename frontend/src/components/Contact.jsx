import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import data from "../data.json";
import { motion } from "framer-motion";

const Contact = () => {
  const restaurantInfo = data.restaurantInfo;
  const footer = data.footer;

  return (
    <footer className="bg-secondary text-white py-20" id="contact">
      <div className="w-[90%] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-white"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {restaurantInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>{restaurantInfo.openingHours}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl font-serif">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a
                href={footer.socialMediaLinks.facebook}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={footer.socialMediaLinks.twitter}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={footer.socialMediaLinks.instagram}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif text-right">Quick Links</h3>
            <ul className="space-y-4 text-right">
              <li>
                <a
                  href={footer.additionalLinks.privacyPolicy}
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={footer.additionalLinks.termsOfService}
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <p className="text-white/60">{footer.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
