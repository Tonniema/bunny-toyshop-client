import logo from '../../../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-rose-300 via-rose-200 to-rose-300'>
      <div className='flex flex-col md:flex-row px-9 pt-10 md:pt-20'>
        <div className='w-full md:w-[300px]'>
          <div className='flex items-center gap-x-2'>
          <img
            className="md:w-[4.7em] w-[3em] h-[3em] md:h-[4.7em] rounded-full"
            src={logo}
            alt=""
          />
          <p className='text-black font-bold text-lg'>Bunny Toyshop</p>
          </div>
          <p className='mt-5 font-normal text-base text-black'>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
          <img className='mt-5 pb-12' src="https://i.ibb.co/jZVR5PK/Group-9969.png" alt="" />
        </div>
        <div className='mt-5 md:ml-[100px] grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16'>
          <div className='w-full md:w-[100px]'>
            <h2 className='font-semibold text-3xl text-black'>Company</h2>
            <p className='font-normal text-base text-black'>About Us</p>
            <p className='font-normal text-base text-black'>Work</p>
            <p className='font-normal text-base text-black'>Latest News</p>
            <p className='font-normal text-base text-black'>Careers</p>
          </div>
          <div className='w-full md:w-auto'>
            <h2 className='font-semibold text-3xl text-black'>Product</h2>
            <p className='font-normal text-base text-black'>Prototype</p>
            <p className='font-normal text-base text-black'>Plans & Pricing</p>
            <p className='font-normal text-base text-black'>Customers</p>
            <p className='font-normal text-base text-black'>Integrations</p>
          </div>
          <div className='w-full md:w-auto'>
            <h2 className='font-semibold text-3xl text-black'>Support</h2>
            <p className='font-normal text-base text-black'>Help Desk</p>
            <p className='font-normal text-base text-black'>Sales</p>
            <p className='font-normal text-base text-black'>Become a Partner</p>
            <p className='font-normal text-base text-black'>Developers</p>
          </div>
          <div className='w-full md:w-auto'>
            <h2 className='font-semibold text-3xl text-black'>Contact</h2>
            <p className='font-normal text-base text-black'>524 Broadway, NYC</p>
            <p className='font-normal text-base text-black'>+1 777-978-5570</p>
          </div>

        </div>
      </div>
      <hr className='w-[94%] mx-auto'></hr>
      <div className='footerSection flex justify-between px-4'>
        <p className='pt-10 md:pt-[50px] pb-10 md:pb-[100px] font-semibold text-sm text-black text-center md:text-left'>@2023 BunnyToyshop. All Rights Reserved</p>
        <p className='pt-10 md:pt-[50px] pb-10 md:pb-[100px] font-semibold text-sm text-black text-center md:text-left'>Powered by <span className='font-bold'>Bunny Toyshop</span></p>
      </div>

    </div>
  );
};

export default Footer;
