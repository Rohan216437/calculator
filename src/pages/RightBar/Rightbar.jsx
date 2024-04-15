import About from "./About"

const Rightbar = () => {
  return (
    <div className="flex-1 text-white/75 overflow-y-scroll overflow-x-hidden h-90vh scrollbar-none md:h-47vh md:mb-8 lg:h-70vh lg:mb-8">
      <About />
    </div>
  )
}

export default Rightbar
