

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient">
              {" "}
              Tech Blaze
            </span>
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi asperiores cumque veritatis quas voluptate accusantium a ipsam nihil assumenda.
          </p>
          <div className='flex gap-2 justify-center'>
            <button className="btn btn-primary">Read Blogs</button>
            <button className="btn btn-primary">Bookmarks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
