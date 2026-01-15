import React from 'react';
import { footerContent } from '../../constants/doorContent';

/**
 * Footer component – Minimal, centered messaging without navigation
 * Compact design with strategic spacing
 * Links section only renders if links exist in content
 */
const Footer = ({ isDark = false }) => {
  return (
    <footer
      className={`border-t ${
        isDark
          ? 'border-gray-700 bg-[#231F20]'
          : 'border-gray-200 bg-[#F5F7FA]'
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 py-8 text-center">
        <p
          className={`text-sm mb-3 leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {footerContent.message}
        </p>

        <p
          className={`text-xs leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {footerContent.grounding}
        </p>

        {/* Only render links section if links exist */}
        {footerContent.links && footerContent.links.length > 0 && (
          <div
            className={`flex justify-center gap-6 text-xs border-t pt-6 mt-6 ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            {footerContent.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
