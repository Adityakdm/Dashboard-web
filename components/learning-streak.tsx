import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LearningStreak() {
  return (
    <Card className="bg-gray-900/70 border-gray-700 mb-8 max-w-sm hover:bg-gray-800/80 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 transition-all duration-300 cursor-pointer">
      <CardHeader className="pb-3">
        <CardTitle className="text-white flex items-center space-x-2 hover:text-purple-300 transition-colors duration-200">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span>Learning Streak</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-200">
          1 days
        </p>
      </CardContent>
    </Card>
  )
}
