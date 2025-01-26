'use client';

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import ExampleClientComponent from "@/components/ExampleClientComponent";
import LanguageChanger from "@/components/LanguageChanger";

export default function HomePage() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center justify-center mx-auto'>
        <h1>{t("header")}</h1>
        <ExampleClientComponent />
        <Link href="/about-us">{t("common:about_us")}</Link>
        <LanguageChanger />
      </div>
    </main>
  );
}