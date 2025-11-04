"use client";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#003f7f] to-[#00BFFF] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        SLT MOBITEL E-channeling Platform
      </h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="p-1 rounded-full hover:bg-blue-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
            </svg>
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-green-500"></span>
          </button>
        </div>

        <select className="bg-blue-800 text-white border border-blue-700 rounded px-2 py-1">
          <option value="platformAdmin">Platform Admin</option>
          <option value="hospitalAdmin">Hospital Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>

        <div className="w-8 h-8 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold">
          U
        </div>
      </div>
    </div>
  );
}
