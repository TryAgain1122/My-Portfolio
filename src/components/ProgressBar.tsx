
interface ProgressBarProps {
  scrollProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ scrollProgress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300" 
      style={{ width: `${scrollProgress}%`}}
      /> 
    </div>
  )
}

export default ProgressBar