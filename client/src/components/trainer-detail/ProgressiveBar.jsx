import React from "react";

const ProgressiveBar = () => {
  return (
    <div className=" flex justify-center mt-8">
      <div className="max-w-xl mx-auto w-full">
        <h4 className="text-3xl md:text-2xl font-bold ">Skills</h4>

        {/* Web Design Progress */}
        <div className="mb-4">
          <div className="flex justify-between py-1">
            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
              Yoga
            </span>
            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
              80%
            </span>
          </div>
          <svg
            className="rc-progress-line"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path
              className="rc-progress-line-trail"
              d="M 0.5,0.5 L 99.5,0.5"
              strokeLinecap="round"
              stroke="#D9D9D9"
              strokeWidth="1"
              fillOpacity="0"
            ></path>
            <path
              className="rc-progress-line-path"
              d="M 0.5,0.5 L 99.5,0.5"
              strokeLinecap="round"
              stroke="#FF6464"
              strokeWidth="1"
              fillOpacity="0"
              style={{
                strokeDasharray: "79.2px, 100px",
                strokeDashoffset: "0px",
                transition:
                  "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
              }}
            ></path>
          </svg>
        </div>

        {/* Mobile App Progress */}
        <div className="mb-7">
          <div className="flex justify-between py-1">
            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
              Boxing
            </span>
            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
              95%
            </span>
          </div>
          <svg
            className="rc-progress-line"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path
              className="rc-progress-line-trail"
              d="M 0.5,0.5 L 99.5,0.5"
              strokeLinecap="round"
              stroke="#D9D9D9"
              strokeWidth="1"
              fillOpacity="0"
            ></path>
            <path
              className="rc-progress-line-path"
              d="M 0.5,0.5 L 99.5,0.5"
              strokeLinecap="round"
              stroke="#9272D4"
              strokeWidth="1"
              fillOpacity="0"
              style={{
                strokeDasharray: "94.05px, 100px",
                strokeDashoffset: "0px",
                transition:
                  "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
              }}
            ></path>
          </svg>
        </div>

        {/* Illustrator Progress */}
        <div className="mb-7">
          <div className="flex justify-between py-1">
            <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
              GYM
            </span>
            <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
              65%
            </span>
          </div>
          <svg
            className="rc-progress-line"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path
              className="rc-progress-line-trail"
              d="M 0.5,0.5 L 99.5,0.5"
              strokeLinecap="round"
              stroke="#D9D9D9"
              strokeWidth="1"
              fillOpacity="0"
            ></path>
            <path
              className="rc-progress-line-path"
              d="M 0.5,0.5 L 99.5,0.5"
              strokeLinecap="round"
              stroke="#5185D4"
              strokeWidth="1"
              fillOpacity="0"
              style={{
                strokeDasharray: "64.35px, 100px",
                strokeDashoffset: "0px",
                transition:
                  "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
              }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProgressiveBar;
