import { useState } from "react";
import {
    FaHome, FaBed, FaUsers, FaExchangeAlt, FaConciergeBell, FaClipboardList,
    FaChartBar, FaDoorClosed, FaChevronDown, FaChevronUp, FaMoneyBill, FaDatabase,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SidebarResepsionis() {
    const [openMaster, setOpenMaster] = useState(false);
    const [openTransaksi, setOpenTransaksi] = useState(false);
    const [openLaporan, setOpenLaporan] = useState(false);

    return (
        <div
            style={{
                width: "240px",
                height: "100vh",
                position: "fixed",
                top: "56px",
                left: 0,
                backgroundColor: "#343a40",
                color: "#ffffff",
                overflowY: "auto",
                paddingTop: "20px",
                zIndex: 1030,
            }}
        >
            <div className="px-3">
                <SidebarGroup title="MAIN" />
                <SidebarLink to="/dashboard" icon={<FaHome />} text="Dashboard" />

                <SidebarGroup title="MANAJEMEN" />
                <SidebarToggle
                    title="Master Data"
                    icon={<FaDatabase />}
                    isOpen={openMaster}
                    setIsOpen={setOpenMaster}
                />
                {openMaster && (
                    <div className="ms-3 d-flex flex-column gap-2 mt-2">
                        <SidebarLink to="/rooms" icon={<FaDoorClosed />} text="Data Kamar" />
                        <SidebarLink to="/guests" icon={<FaUsers />} text="Data Tamu" />
                    </div>
                )}

                <SidebarToggle
                    title="Transaksi"
                    icon={<FaExchangeAlt />}
                    isOpen={openTransaksi}
                    setIsOpen={setOpenTransaksi}
                />
                {openTransaksi && (
                    <div className="ms-3 d-flex flex-column gap-2 mt-2">
                        <SidebarLink to="/guest-form" icon={<FaUsers />} text="Tamu" />
                        <SidebarLink to="/reservation-form" icon={<FaClipboardList />} text="Reservasi" />
                        <SidebarLink to="/services" icon={<FaConciergeBell />} text="Layanan Kamar" />
                        <SidebarLink to="/payments" icon={<FaMoneyBill />} text="Pembayaran" />
                    </div>
                )}

                <SidebarGroup title="LAPORAN" />
                <SidebarToggle
                    title="Laporan"
                    icon={<FaChartBar />}
                    isOpen={openLaporan}
                    setIsOpen={setOpenLaporan}
                />
                {openLaporan && (
                    <div className="ms-3 d-flex flex-column gap-2 mt-2">
                        <SidebarLink to="/reports/reservations" icon={<FaClipboardList />} text="Laporan Reservasi" />
                        <SidebarLink to="/reports/rooms" icon={<FaDoorClosed />} text="Laporan Kamar" />
                    </div>
                )}
            </div>
        </div>
    );
}

const SidebarGroup = ({ title }) => (
    <p
        style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "#adb5bd",
            padding: "8px 0 4px 2px",
            marginBottom: "0",
            marginTop: "16px",
            textTransform: "uppercase",
        }}
    >
        {title}
    </p>
);

const SidebarToggle = ({ title, icon, isOpen, setIsOpen }) => (
    <div
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar-link"
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 16px",
            borderRadius: "6px",
            fontSize: "14px",
            color: "#ffffff",
            cursor: "pointer",
            backgroundColor: "#343a40",
            transition: "background-color 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#495057"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#343a40"}
    >
        <span className="d-flex align-items-center">
            {icon}
            <span className="ms-2">{title}</span>
        </span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </div>
);

const SidebarLink = ({ to, icon, text }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
        }
        style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            padding: "8px 16px",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "14px",
            backgroundColor: isActive ? "#495057" : "transparent",
        })}
    >
        {icon}
        <span className="ms-2">{text}</span>
    </NavLink>
);

export default SidebarResepsionis;
