import React from 'react';

import viteLogo from '/vite.svg';
import daisyLogo from '/daisyui-logomark.svg';
import reactLogo from '@/assets/react.svg';

export const Page: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="mb-4">
            <a href="https://daisyui.com/" target="_blank">
              <img src={daisyLogo} className="h-[6em] inline-block" alt="Daisy logo" />
            </a>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="h-[6em] inline-block" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="h-[6em] inline-block" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold">Vite + React + DaisyUI</h1>
          <p className="py-6">
            Vite, Typescript, React, and DaisyUI template project
          </p>

          <button className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
