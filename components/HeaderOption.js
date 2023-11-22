function HeaderOption({ Icon, title }) {
    return (
      <div className="flex flex-col group cursor-pointer w-12 sm:w-20 hover:text-white"> 
          <Icon className='h-8 mb-1 group-hover:animate-bounce' />
          <p className="text-l font-medium tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
      </div>
    )
  }
  
  export default HeaderOption;