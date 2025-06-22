"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { WelcomeSection } from "@/components/welcome-section"
import { LearningStreak } from "@/components/learning-streak"
import { FeatureCards } from "@/components/feature-cards"
import { TryNowButton } from "@/components/try-now-button"
import { useSidebar } from "@/hooks/use-sidebar"

export default function Dashboard() {
  const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebar()

  return (
    <div className="min-h-screen bg-black">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300 ease-in-out">
        <Header onMenuClick={toggleSidebar} />

        <main className="p-6">
          <WelcomeSection />
          <LearningStreak />
          <FeatureCards />
          <TryNowButton />
        </main>
      </div>
    </div>
  )
}
