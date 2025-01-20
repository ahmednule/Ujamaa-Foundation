"use client"

import {HowtoSupportData} from "@components/lib/HowtoSupportData"

export default function HowtoSupport() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-green-600 text-4xl font-bold mb-6">
        How You Can Support
      </h2>
      
      <p className="text-gray-700 mb-8">
        Ujamaa Foundation relies on the support of individuals, institutions, and partners 
        to continue its mission. Here's how you can get involved:
      </p>

      <div className="space-y-6">
        {HowtoSupportData.map((item, index) => (
          <div 
            key={index}
            className="border border-green-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-3 bg-blue-400 rounded-full text-white">
              {item.icon}
            </div>
            
            <div>
              <h3 className="text-blue-500 text-2xl font-semibold mb-2">
                {item.value}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-gray-700 text-center">
        Together, We can uplift Communities and create long lasting change for the future.
      </p>
    </div>
  );
}