import type { Metadata } from "next"
import { LanHausLanding } from "@/components/landing/lan-haus-landing"

export const metadata: Metadata = {
  title: "LAN Haus mieten – Exklusiv für bis zu 12 Personen | Gaming LAN Haus",
  description: "LAN Haus mieten für euer nächstes Gaming-Wochenende. Exklusiv für bis zu 12 Personen. BYO-PC, High-End-Infrastruktur, schlüsselfertig. Einfach buchen.",
}

export default function Home() {
  return <LanHausLanding />
}
