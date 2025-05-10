import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const globalStyles = `
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`

export default function App() {
  const [mounted, setMounted] = useState(false)
  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    setMounted(true)
    
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 100)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{globalStyles}</style>
      
      <div className="h-screen w-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden fixed inset-0">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-white/10 blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', left: '20%' }}
        />
        
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-white/10 blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '15%', right: '15%' }}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: mounted ? 1 : 0, 
            scale: mounted ? 1 : 0.8,
            y: mounted ? 0 : 20
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl overflow-hidden p-8 md:p-12 max-w-xl w-full relative"
        >
          <motion.div 
            className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-400/30 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-400/30 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: mounted ? 1 : 0, 
                y: mounted ? 0 : 20
              }}
              transition={{
                delay: 0.3,
                duration: 0.6
              }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Hello
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300"
                >
                  World
                </motion.span>
              </h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="space-y-3 mt-6"
              >
                <p className="text-white/90 text-center text-lg font-light">
                  Template projet avec
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm">
                  {["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 border border-white/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div className="w-full max-w-xs bg-white/10 rounded-full h-2 mb-3 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full"
                  style={{ width: `${counter}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="text-white/60 text-sm font-mono">
                {counter.toString().padStart(2, '0')} / 100
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30"
            initial={{
              opacity: 0,
              scale: 0,
              x: `${Math.random() * 80 + 10}%`,
              y: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, Math.random() * 0.5 + 0.5, 0],
              x: `${Math.random() * 80 + 10}%`,
              y: `${Math.random() * 80 + 10}%`,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
            }}
          />
        ))}
      </div>
    </>
  )
}