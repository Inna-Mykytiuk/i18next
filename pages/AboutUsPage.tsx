'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function AboutUsPage() {
  const { t } = useTranslation(["about-us", "common"]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center justify-center mx-auto'>
        <h1>{t("common:about_us")}</h1>
        <p>
          <b>{t("address")}</b>
          123 Example Street, Los Angeles, CA
        </p>
        <Link href="/">{t("back")}</Link>
      </div>
    </main>
  );
}