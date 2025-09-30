export {};

declare global {
  interface Window {
    __lenis?: {
      scrollTo?: (target: Element | number, options?: { offset?: number }) => void;
    };
  }
}


