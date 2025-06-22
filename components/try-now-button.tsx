import { Button } from "@/components/ui/button"

export function TryNowButton() {
  return (
    <div className="flex justify-center mt-8">
      <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-teal-500/25 hover:scale-110 text-white px-8 py-3 text-lg transition-all duration-300">
        Try Now!
      </Button>
    </div>
  )
}
