const Header = () => {
  return (
    <div className="flex header-container pt-16">
    <div className="flex flex-col items-center p-16 w-full">
      <img src="https://i.redd.it/35j9y5v43ro71.png" alt="homepage" 
      className="homepage-image rounded-full w-64"/>
    </div>
    <div className="w-full">
      <div className="text-container flex flex-col mt-32">
        <img src="love-always-wins.png" width="50"></img>
        <h1 className="text-4xl text-white my-4" data-aos="fade-up">Hello. I'm <span className="font-bold">Celesca. </span> </h1>
        <h2 className="text-lg text-white my-4">I love to do some researching about programming and others</h2>
      </div>
    </div>
  </div>
  )
}

export default Header