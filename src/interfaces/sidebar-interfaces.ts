import { Dispatch, ReactNode } from "react";

// --------------------------------------- Export Navbar Props ---------------------------------
export interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
