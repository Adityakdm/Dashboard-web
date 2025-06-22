export function WelcomeSection() {
  return (
    <div className="text-center mb-8 hover:scale-105 transition-transform duration-300 cursor-default">
      <h1 className="text-4xl font-bold text-white mb-2 hover:text-gray-100 transition-colors duration-200">
        Welcome to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-300 hover:to-blue-300 transition-all duration-300">
          EaseLearn AI
        </span>
      </h1>
      <p className="text-gray-300 mb-2 hover:text-white transition-colors duration-200">
        Your personalized learning journey begins here
      </p>
      <p className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
        Want more features?{" "}
        <a
          href="#"
          className="text-purple-400 hover:text-purple-300 underline hover:no-underline hover:bg-purple-400/10 px-1 rounded transition-all duration-200"
        >
          Upgrade now
        </a>
      </p>
    </div>
  )
}
