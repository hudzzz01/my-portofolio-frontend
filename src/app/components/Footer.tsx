'use client'

import { FaGithub } from 'react-icons/fa'
import json from "@/app/data/mine.json"
import { useSelector } from 'react-redux';

export default function Footer() {
  type RootState = {
    theme: {
      theme: {
        isDark: boolean;
      };
    };
  };
  const themeLight = useSelector((state: RootState) => state.theme.theme.isDark);


    const {usernameGithub} = json
    return (
    <footer className={`w-full min-h-20 py-4 px-6 flex flex-col md:flex-row justify-between items-center ${themeLight ? "bg-gray-800 -sm text-gray-400" : "bg-gray-100 -sm text-gray-600"} shadow-inner`}>
      <p className="text text-center md:text-left">
        &copy; 2025 Muhamad Hudzaifah Assyahid. All rights reserved.
      </p>
      <button
        onClick={() => window.open('https://github.com/' + usernameGithub, '_blank')}
        className="mt-2 md:mt-0 flex items-center gap-2 text-gray-700 hover:text-black transition"
      >
        <FaGithub className="text-xl" />
        <span className="text-sm">GitHub</span>
      </button>
    </footer>
  )
}
