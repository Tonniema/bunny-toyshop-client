
import { Typewriter } from 'react-simple-typewriter'
const AboutUs = () => {
  return (
    <div >
      <div className="hero  bg-base-200 py-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-[750px] shadow-xl shadow-pink-300" src="https://i.pinimg.com/originals/8d/8e/7d/8d8e7d1fe3ee279c39f14829053f367b.jpg" />
          <div>
            <h2 className="md:text-3xl text-xl text-[#d52c81] pb-6">KNOW EVERYTHING ABOUT US</h2>
            <h2 className="md:text-4xl text-xl font-bold">We design <span style={{ color: '#ac1646', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' toys', 'not just for kids', 'but', ' with kids!']}
            loop={5}
            cursor
            cursorStyle='🌸'
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={500}
            
          />
        </span></h2>
            <p className="py-6 text-gray-500">At our toy shop, we are dedicated to providing parents with an extensive range of cheap toys, as well as fancy dress costumes that will spark the imagination of any child. With our commitment to quality and affordability, we have become a go-to destination for parents seeking the best toys and costumes for their kids.
            </p>
            <div className='flex justify-center md:justify-start'>
            <button className="px-5 py-3 rounded-md  transition ease-in-out delay-150 bg-[#d52c81] hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 text-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
