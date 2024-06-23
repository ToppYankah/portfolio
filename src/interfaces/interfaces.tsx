import { ReactNode } from "react";
import { CoverSheetState } from "~/context/cover-sheet-context";

export interface Project {
  name: string;
  tags?: string[];
  label?: string;
  linkUrl: string;
  imageUrl: string;
  description: string;
}

export interface Review {
  name: string;
  profession: string;
  company: string;
  rating: number;
  comment: string;
  profilePhoto: string;
}

export interface ModalData {
  label?: string;
  node: ReactNode;
  state: CoverSheetState;
}

export interface ModalInterface {
  closeModal: () => void;
  showModal: (modal: ReactNode, label?: string) => void;
}

export interface CoverSheetInterface {
  show: (callback?: () => void) => void;
  hide: (callback?: () => void) => void;
}
