function Post() {
  return (
    <div className="mt-5 pt-5 border-2 border-blue-200">
      <div className="flex w-[95%] mx-auto">
        <img src="professor.jpg" alt="" className="rounded-full h-7 w-7" />
        <span className="text-blue-700 font-bold ">Craig Cooper</span>
        <span className=" text-grey bg-blue-100 rounded-t-lg rounded-b-lg text-sm h-5">
          Aug 17,2021 07:23am
        </span>
      </div>
      <div className="w-[95%] ml-11">
        <p className="text-sm text-blue-300 block">
          #The NFTS for a poem, an article, a short film, and novel
        </p>
      </div>

      <div className="w-[85%] mx-auto font-semibold text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit.
        Repellat molestiae minima optio fugit. Quaerat enim animi veniam eveniet
        Quibusdam, natus minus!Lorem ipsum,{" "}
        <span className="text-blue-800 font-semibold">
          dolor sit amet consectetur
        </span>
        adipisicing elit. Suscipit explicabo recusandae magni odio,
        necessitatibus harum ducimus commodi. Repellat molestiae minima optio
        fugit. Quaerat enim{" "}
        <span className="text-blue-800 font-semibold">
          animi veniam eveniet eius suscipit, eos aliquid
        </span>
        ducimus accusantium corporis modi quae at aut officia officiis natus
        odit, itaque unde tempore totam consectetur? Quibusdam, natus minus!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
        explicabo recusandae magni odio, necessitatibus harum ducimus commodi.
        <p>
          Repellat molestiae minima optio fugit. Quaerat enim animi veniam
          eveniet eius suscipit, eos aliquid ducimus{" "}
          <span className="text-blue-800 font-semibold">
            accusantium corporis modi
          </span>
          quae at aut officia officiis natus odit, itaque unde tempore totam
          consectetur? Quibusdam, natus minus!
        </p>
      </div>
      <div className="text-blue-800 text-sm pt-5 w-[85%] flex center pl-12 pb-5">
        <img src="eye.svg" alt="" className=" h-7 w-7" />
        12.5k
        <img src="meh-closed-eye.svg" alt="" className=" h-6 w-6" />
        3.2k
        <img src="smile-wink.svg" alt="" className=" h-6 w-6" />
        300
        <img src="bookmark.svg" alt="" className=" h-6 w-6" />
        1.5k
      </div>
      <img src="location-arrow.svg" alt="" className=" h-6 w-6" />
    </div>
  );
}

export default Post;
