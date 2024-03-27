type UtmTypes = "source" | "medium" | "campaign" | "content";

export const setCookie = (name: string, value: string, seconds?: number) => {
  if (typeof document === "undefined") { return ""; }
  let expires = "";
  if (seconds) {
    const date = new Date();
    date.setTime(date.getTime() + (seconds * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/" + `; domain=${window.location.hostname.replace("www.", ".")}`;
};

export const readCookie = (name: string) => {
  if (typeof document === "undefined") { return ""; }
  const b = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};

export const lastUtm = (list: string) => {
  if (!list) { return ""; }
  const a = list.split("|");
  return a[a.length - 1].replace("]", "").replace("[", "");
};

export const isSafari = (): boolean => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const sendAnalyticEvent = (name: string): void => {
  if (window) {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "welab.cta",
      name,
      version: "v3",
    });
  }
};

export const splitString = (str: string, digit: number, replace: string): string => {
  if (typeof str !== "string") { return; }
  return str.split("").map((s, i) => {
    return ((i + 1) % digit === 0 && (i + 1) !== str.length) ? (s + replace) : s;
  }).join("");
};

export const getCurrentPageFromUrl = (): {
  locale?: string;
  currentPage?: string;
} => {
  if (typeof window === "undefined") { return {}; }
  const currentPath = window.location.pathname;
  const match = currentPath.match(/^\/(?:(en|tc)((?:[\/].+?)?))\/?$/i);
  return {
    locale: match ? match[1] : "tc",
    currentPage: match ? match[2] : currentPath,
  };
};

export const scrollTop = () => {
  if (typeof window !== "undefined" && typeof window.scroll !== "undefined") {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // do nothing
    }
  }
};

export const queryString = (url: string, name: string): string => {
  // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  if (!url) {
    return "";
  }
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results || !results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const serialize = (obj) => {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }
  return str.join("&");
};

export const getLastUtm = (type: UtmTypes) => {
  let utm = null;
  switch (type) {
    case "source":
      utm = readCookie("utm_source_list");
      break;
    case "medium":
      utm = readCookie("utm_medium_list");
      break;
    case "campaign":
      utm = readCookie("utm_campaign_list");
      break;
    case "content":
      utm = readCookie("utm_content_list");
      break;
    default:
      return null;
  }
  if (!utm) {
    return null;
  }
  const utms = utm.split("|");
  return utms[utms.length - 1].match(/\[(.*)\]/)[1];
};
