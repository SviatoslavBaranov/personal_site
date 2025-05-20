import max from '../assets/max.jpg'

const Hero: React.FC = () => {
    return (
    <section className="min-h-screen flex-col md:flex-row items-center justify-center px-6 md:px-0 py-12 flex bg-white">
    
    <div className="w-40 h-40 md:w-1/2 md:h-full flex items-center justify-center mb-6 md:mb-0 bg-gray-300">
      <img
        src={max}
        alt="Max photo"
        className="w-40 h-40 md:w-full md:h-full rounded-full md:rounded-none object-cover"
      />
    </div>

    <div className="md:w-1/2 flex flex-col justify-start items-center text-center md:items-start md:text-left md:pl-10 h-full md:h-[80vh] md:py-10 md:pt-24 space-y-6">
      <h1 className="text-4xl font-bold">Hello, I'm Max</h1>
      <p className="text-lg text-gray-700 mt-4">I am a web developer, working with React mainly. I like to build beautiful scalabel and creative pages that attract customers and achieve marketing and business goals</p>
    </div>
    </section>
    
    )
}

export default Hero