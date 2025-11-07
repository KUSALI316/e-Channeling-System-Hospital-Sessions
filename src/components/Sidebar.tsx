"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Icon Components
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4"></path>
    <path d="M16 2v4"></path>
    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
    <path d="M3 10h18"></path>
  </svg>
);

const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 6v4"></path>
    <path d="M14 14h-4"></path>
    <path d="M14 18h-4"></path>
    <path d="M14 8h-4"></path>
    <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
    <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <circle cx="9" cy="7" r="4"></circle>
  </svg>
);

const WalletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: "/", label: "My Dashboard", icon: <HomeIcon /> },
    { href: "/sessions", label: "My Sessions", icon: <CalendarIcon /> },
    { href: "/hospitals", label: "My Hospitals", icon: <BuildingIcon /> },
    { href: "/staff", label: "My Appointments", icon: <UsersIcon /> },
    { href: "/settlements", label: "My Settlements", icon: <WalletIcon /> },
    { href: "/profile", label: "My Profile", icon: <UserIcon /> },
  ];

  return (
    <aside className="w-71 bg-blue-900 text-white min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="bg-[#002c5c] px-6 py-8 flex items-center justify-center">
        <img
          src="https://www.mobitel.lk/sites/all/themes/mobitel/logo.png"
          alt="SLT Mobitel Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200 ease-in-out
                    ${
                      isActive
                        ? "bg-cyan-400 text-blue-900 font-semibold shadow-md"
                        : "text-white hover:bg-blue-800 hover:translate-x-1"
                    }
                  `}
                >
                  <span className="flex-shrink-0">{link.icon}</span>
                  <span className="text-sm">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
