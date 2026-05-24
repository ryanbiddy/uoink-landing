import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "uoink-mark": React.HTMLAttributes<HTMLElement>;
    }
  }
}

export {};
