import React from 'react'



const Footer = () => {
  const linksCol1 = [
    { label: "Dribbble", url: "#" },
    { label: "Youtube", url: "#" },
    { label: "Linkedin", url: "#" },
  ];

  const linksCol2 = [
    { label: "Instagram", url: "#" },
    { label: "Facebook", url: "#" },
    { label: "Behance", url: "#" },
  ];

  return (
    <footer className="bg-black text-[#c8b191] py-12 px-8 flex justify-between items-start">
      {/* Left side social icons */}
      <div className="flex flex-col items-center space-y-6">
        {/* Replace with actual SVGs or icons */}
        <span className="w-6 h-6 bg-[#c8b191] rounded-full" />
        <span className="w-6 h-6 bg-[#c8b191] rounded" />
        <span className="w-6 h-6 bg-[#c8b191] rounded-full flex items-center justify-center text-black font-bold">
          ▶
        </span>
        <span className="w-6 h-6 bg-[#c8b191] rounded" />
      </div>

      {/* Center links */}
      <div className="flex space-x-20">
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-4">Connect</h3>
          <ul className="space-y-2">
            {linksCol1.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  className="flex items-center space-x-2 group relative"
                >
                  <span className="text-[#f14a2d]">▸</span>
                  <span className="transition-colors group-hover:text-black group-hover:bg-[#f14a2d] px-1">
                    {link.label}
                  </span>
                  {/* Hover background effect */}
                  <span className="absolute left-0 bottom-0 w-full h-full bg-[#f14a2d] z-[-1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-4 invisible">
            Connect
          </h3>
          <ul className="space-y-2">
            {linksCol2.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  className="flex items-center space-x-2 group relative"
                >
                  <span className="text-[#f14a2d]">▸</span>
                  <span className="transition-colors group-hover:text-black group-hover:bg-[#f14a2d] px-1">
                    {link.label}
                  </span>
                  {/* Hover background effect */}
                  <span className="absolute left-0 bottom-0 w-full h-full bg-[#f14a2d] z-[-1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right side contact */}
      <div className="space-y-4 text-right">
        <div>
          <p className="font-medium">Email</p>
          <p className="text-sm">minhpham.design@gmail.com</p>
        </div>
        <div>
          <p className="font-medium">Phone</p>
          <p className="text-sm">+84 366 138 837</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
