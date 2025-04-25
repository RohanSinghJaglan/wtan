'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaClipboardList, 
  FaFileUpload, 
  FaBuilding, 
  FaLaptopCode, 
  FaBullseye, 
  FaChartBar, 
  FaCog, 
  FaQuestionCircle, 
  FaSignOutAlt 
} from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <div className="sidebar">
      <div style={{ padding: "15px" }}>
        <img src="/logo.png" alt="Logo" width={74} height={30} />
      </div>
      
      <ul className="sidebar-nav">
        <li>
          <Link href="/" className={`sidebar-link ${isActive('/') ? 'active' : ''}`}>
            <FaHome className="sidebar-icon" /> Home
          </Link>
        </li>
        <li>
          <Link href="/stages" className={`sidebar-link ${isActive('/stages') ? 'active' : ''}`}>
            <FaClipboardList className="sidebar-icon" /> Stages & Checklist
          </Link>
        </li>
        <li>
          <Link href="/upload" className={`sidebar-link ${isActive('/upload') ? 'active' : ''}`}>
            <FaFileUpload className="sidebar-icon" /> Upload Docs
          </Link>
        </li>
        <li>
          <Link href="/vendors" className={`sidebar-link ${isActive('/vendors') ? 'active' : ''}`}>
            <FaBuilding className="sidebar-icon" /> Preferred Vendors
          </Link>
        </li>
        <li>
          <Link href="/tech" className={`sidebar-link ${isActive('/tech') ? 'active' : ''}`}>
            <FaLaptopCode className="sidebar-icon" /> Tech Stack
          </Link>
        </li>
        <li>
          <Link href="/targets" className={`sidebar-link ${isActive('/targets') ? 'active' : ''}`}>
            <FaBullseye className="sidebar-icon" /> Targets
          </Link>
        </li>
        <li>
          <Link href="/sales-targets" className={`sidebar-link ${isActive('/sales-targets') ? 'active' : ''}`}>
            <FaChartBar className="sidebar-icon" /> Zee Sales Targets
          </Link>
        </li>
        <li>
          <Link href="/settings" className={`sidebar-link ${isActive('/settings') ? 'active' : ''}`}>
            <FaCog className="sidebar-icon" /> MAI Settings
          </Link>
        </li>
        <li>
          <Link href="/questions" className={`sidebar-link ${isActive('/questions') ? 'active' : ''}`}>
            <FaQuestionCircle className="sidebar-icon" /> Pending Questions
            <span className="sidebar-badge">3</span>
          </Link>
        </li>
      </ul>
      
      <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
        <Link href="/logout" className="sidebar-link">
          <FaSignOutAlt className="sidebar-icon" /> Logout
        </Link>
      </div>
    </div>
  );
} 