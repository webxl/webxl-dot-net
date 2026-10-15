import { useEffect } from "react";
import { SITE } from "./site";

export const DEFAULT_TITLE = `${SITE.name} – Product engineering & advisory`;

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}
