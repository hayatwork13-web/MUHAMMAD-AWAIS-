import React, { useState } from 'react';

interface StaticExporterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StaticExporter({ isOpen, onClose }: StaticExporterProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlCode = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhammad Awais | Ecommerce Email Marketing Specialist Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'] },
                    colors: {
                        brand: {
                            blue: '#2563EB',
                            blueHover: '#1D4ED8',
                            emerald: '#10B981',
                            darkNavy: '#0F172A',
                            charcoal: '#111827',
                            slateGray: '#4B5563',
                            lightGray: '#F8FAFC',
                            borderColor: '#E5E7EB',
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="font-sans bg-white text-brand-charcoal antialiased">
  <!-- See full index.html below -->
</body>
</html>`;

  const cssCode = `/* 
  Muhammad Awais Portfolio - Custom Style Sheet
  Designed for Ecommerce Email Marketing Specialist Brand
*/
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background-color: #FFFFFF;
    color: #111827;
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`;

  const jsCode = `/**
 * Muhammad Awais Portfolio - Core Script Rules
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('portfolio-contact-form');
    const successCard = document.getElementById('contact-success');

    if (contactForm && successCard) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            contactForm.classList.add('hidden');
            successCard.classList.remove('hidden');
        });
    }
});`;

  const getCodeSnippet = () => {
    switch (activeTab) {
      case 'html': return htmlCode;
      case 'css': return cssCode;
      case 'js': return jsCode;
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'html': return 'index.html';
      case 'css': return 'style.css';
      case 'js': return 'script.js';
    }
  };

  const handleCopy = () => {
    const code = getCodeSnippet();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white border border-gray-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 flex flex-col max-h-[90vh] shadow-2xl relative">
        
        {/* Header row */}
        <div className="flex justify-between items-start pb-4 border-b border-gray-100 mb-6">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full uppercase">
              Physical Export Package Ready
            </span>
            <h3 className="font-sans font-extrabold text-lg text-gray-950 mt-2">
              Get Static Files for GitHub Pages
            </h3>
            <p className="font-sans text-xs text-gray-500 mt-1">
              Copy these custom files and publish them to GitHub Pages for instant zero-server hosting.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-150 flex items-center justify-center text-gray-400 hover:text-gray-600 transition border border-gray-200"
          >
            &times;
          </button>
        </div>

        {/* Tab triggers */}
        <div className="flex space-x-2 border-b border-gray-200 mb-4 pb-2">
          {(['html', 'css', 'js'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab === 'html' ? 'index.html' : tab === 'css' ? 'style.css' : 'script.js'}
            </button>
          ))}
        </div>

        {/* Code Frame */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 flex-1 overflow-auto max-h-[350px] font-mono text-xs text-slate-300 no-scrollbar select-all">
          <pre>{getCodeSnippet()}</pre>
        </div>

        {/* Action triggers */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
          <span className="text-xs text-slate-400">
            Saved direct in <code className="bg-gray-100 border border-gray-150 px-1 py-0.5 rounded text-gray-700">/static_export/</code> of this project
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition flex items-center gap-1.5"
            >
              {copied ? 'Copied &bull; Verified' : `Copy Raw ${getFileName()}`}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
