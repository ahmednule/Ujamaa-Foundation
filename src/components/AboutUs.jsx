"use client"
export default function AboutUs () {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h2 className="text-green-600 font-bold text-xl md:text-2xl">
              Ujamaa Foundation, Sowing The Future
            </h2>
            
            <h1 className="text-[#ADD8E6] font-bold text-3xl md:text-4xl">
              ABOUT US
            </h1>
          </div>

          <div className="prose prose-lg">
            <p className="text-gray-800 leading-relaxed">
              Ujamaa Foundation is a non-profit, community-based, and youth-led organization 
              registered in 2022 under the Department of Social Protection in Wajir County, 
              Kenya. The organization is committed to empowering communities, particularly in 
              North Eastern Kenya, through sustainable development initiatives.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="/image6.jpeg"
            alt="Community Support"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

