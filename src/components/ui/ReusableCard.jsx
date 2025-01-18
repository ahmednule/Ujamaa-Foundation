"use client";

import PropTypes from "prop-types";
import Image from "next/image";

export default function ReusableCard({ heading, content, image }) {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h2 className="text-green-600 font-bold text-xl md:text-2xl">
              {heading}
            </h2>
          </div>

          <div className="prose prose-lg">
            <p className="text-gray-800 leading-relaxed">
              {content}
            </p>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src={image}
            alt="Ujamaa Foundation"
            width={600} 
            height={400} 
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

ReusableCard.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
