export {};

declare global {
  interface Window {
    __lenis?: {
      scrollTo?: (target: Element, options?: { offset?: number }) => void;
    };
  }
}


