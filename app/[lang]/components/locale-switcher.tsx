"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex">
      {i18n.locales.map(locale => {
        return (
          <div className="uppercase mr-1 pr-1 border-r-2 border-solid border-gray-400 last:border-r-0" key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </div>
        );
      })}
    </div>
  );
}
