'use client';

import Link from "next/link";
import ExampleClientComponent from "@/components/ExampleClientComponent";
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation('home');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center justify-center mx-auto'>
        <h1>{t("header")}</h1>
        <ExampleClientComponent />
        <Link href="/about-us">{t("about_us")}</Link>
      </div>
    </main>
  );
}