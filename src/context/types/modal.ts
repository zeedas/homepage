/* eslint-disable @typescript-eslint/no-explicit-any */
export type ModalTypes = 'share-news' | 'mobile-menu';

export interface IModalContext {
  data: any;
  modal: string;
  isOpen: boolean;
  closeModal(): void;
  getActiveModal(): JSX.Element | null;
  openModal(item: ModalTypes, data?: unknown): void;
}
