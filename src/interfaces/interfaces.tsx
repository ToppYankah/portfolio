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
  // node: ReactNode;
  state: CoverSheetState;
}

export interface ModalInterface {
  data: ModalData;
  closeModal: (callback?: () => void) => void;
  showModal: (callback?: () => void, label?: string) => void;
}

export interface CoverSheetInterface {
  show: (callback?: () => void) => void;
  hide: (callback?: () => void) => void;
}

export type ReviewFormData = {
  name: string;
  profession?: string;
  company?: string;
  comment: string;
  shouldPost?: boolean;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  budget: string;
  interest: { name: string }[];
  attachments?:
    | { name: string }[]
    | { name: string; url: string; size: number; type: string }[];
};
