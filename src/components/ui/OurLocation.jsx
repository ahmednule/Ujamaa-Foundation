"use client"
import { Card } from "./card"

export default function OurLocation() {
  return (
    <Card className="w-full max-w-2xl mx-auto p-4">
      <div className="aspect-video w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127613.61886180681!2d39.994007320123565!3d1.7649104635376702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17f2b215f5ca051d%3A0x565e111e591f90ec!2sWajir!5e0!3m2!1sen!2ske!4v1737121676445!5m2!1sen!2ske"
          className="absolute inset-0 w-full h-full rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Card>
  );
};

