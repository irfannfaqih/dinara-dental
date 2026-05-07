import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-dinara-dark text-white text-[0.8rem] py-1.5 px-4 text-center font-medium">
      <p>
        Grand Opening Promo: Diskon Spesial s/d 50%!{" "}
        <a href="#promo" className="underline font-bold ml-1 hover:text-dinara-accent transition-colors">
          Lihat Promo
        </a>
      </p>
    </div>
  );
}
