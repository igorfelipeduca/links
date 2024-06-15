import React from "react";
import { Links } from "./constants/links";

function App() {
  return (
    <div className="h-screen w-screen py-16">
      <div className="w-full h-32 flex items-center justify-center">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-white font-semibold text-4xl">Igor Duca</h1>
          <h3 className="text-zinc-300 text-center">Software Engineer</h3>
        </div>
      </div>

      <div className="mt-8 h-fit w-full flex items-center justify-center">
        <div className="flex flex-col space-y-4">
          {Links.map((link, index) => (
            <a
              key={index}
              className="text-zinc-300 text-left text-md py-2 px-4 rounded-lg border border-zinc-700 flex justify-between w-60 group hover:text-white hover:underline"
              href={link.url}
              target="_blank"
            >
              {link.name}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
