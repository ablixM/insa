import { RiDashboard3Fill, RiImage2Line } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { PiNotebookFill } from "react-icons/pi";
import { IoCart, IoBag } from "react-icons/io5";
import { BsFillPinAngleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    filledIcon: RiDashboard3Fill,
    label: "Dashboard",
    isActive: false,
    page: "Dashboard",
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: 2,
    filledIcon: FaUser,
    label: "Users",
    isActive: false,
    page: "Users",
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: 3,
    filledIcon: BsFillPinAngleFill,
    label: "Posts",
    page: "Posts",
    isActive: false,
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: 4,
    filledIcon: BiSolidDashboard,
    label: "Templates",
    isActive: false,
    page: "Templates",
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: 5,
    filledIcon: PiNotebookFill,
    label: "Analytics",
    isActive: false,
    page: "Analytics",
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: 6,
    filledIcon: IoCart,
    label: "E-commerce",
    isActive: false,
    page: "ECommerce",
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: 7,
    filledIcon: IoBag,
    label: "Security",
    isActive: false,
    page: "Security",
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: 8,
    filledIcon: RiImage2Line,
    label: "Media",
    isActive: false,
    page: "Media",
    onClick: function (): void {
      throw new Error("Function not implemented.");
    },
  },
];
