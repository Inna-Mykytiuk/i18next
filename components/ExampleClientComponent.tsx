'use client'

import { useTranslation } from 'react-i18next';

export default function ExampleClientComponent() {
  const userName = "Tokio";

  const { t } = useTranslation("home");

  return (
    <h3>
      {t("subheader", { userName })}
    </h3>
  )
}

