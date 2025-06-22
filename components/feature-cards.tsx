import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { featureCards } from "@/lib/data"
import type { FeatureCard } from "@/lib/types"

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featureCards.map((card, index) => (
        <FeatureCardItem key={index} card={card} />
      ))}
    </div>
  )
}

function FeatureCardItem({ card }: { card: FeatureCard }) {
  return (
    <Card className="bg-gray-900/70 border-gray-700 hover:bg-gray-800/80 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 group cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.gradient} flex items-center justify-center group-hover:scale-125 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-300`}
          >
            <card.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
          </div>
          {card.isNew && (
            <Badge className="bg-pink-500 hover:bg-pink-600 text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-200">
              New!
            </Badge>
          )}
        </div>
        <CardTitle className="text-white text-lg group-hover:text-purple-300 transition-colors duration-200">
          {card.title}
        </CardTitle>
        <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
          {card.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 text-white transition-all duration-200">
          Start Talking
        </Button>
      </CardContent>
    </Card>
  )
}
