function LeftPanelButtons() {
  return (
    <div className=" w-[85%]">
      <button className=" drop-shadow-2xl		 hover:bg-blue-700 text-blue-500 py-1 flex justify-start align-middle bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-white  my-3">
        <img
          src="Home.svg"
          alt=""
          width={20}
          className=" mx-4 inline my-auto "
        />
        <span className="py-2 flex align-middle text-sm font-bold text-black">
          Home
        </span>
      </button>
      <button className=" drop-shadow-xl hover:bg-blue-700 py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-black  my-2">
        <img src="book.svg" alt="" width={20} className="mx-4 inline my-auto" />
        <span className="py-2 flex align-middle text-sm font-bold">myBook</span>
      </button>

      <button className="drop-shadow-xl hover:bg-blue-700 py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-black  my-2">
        <img src="video.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-2 flex align-middle text-sm font-bold">myVid</span>
      </button>

      <button className="drop-shadow-xl hover:bg-blue-700 py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-black  my-2">
        <img src="idea.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-2 flex align-middle text-sm font-bold">myIdea</span>
      </button>
      <button className=" drop-shadow-xl hover:bg-blue-700 py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-black  my-2">
        <img src="job.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-2 flex align-middle text-sm font-bold">myjob</span>
      </button>
      <button className="drop-shadow-xl hover:bg-blue-700 py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-black  my-2">
        <img src="podcast.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-2 flex align-middle text-sm font-bold">
          myPodcast
        </span>
      </button>
      <button className=" drop-shadow-xl hover:bg-blue-700 py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-black  my-2">
        <img src="reuse.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-2 flex align-middle text-sm font-bold">
          myReuse
        </span>
      </button>
      <button className="drop-shadow-xl hover:bg-blue-700 py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-black  my-2">
        <img src="food.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-2 flex align-middle text-sm font-bold">
          mySlowfood
        </span>
      </button>
      <button className=" drop-shadow-xl hover:bg-blue-700 py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-11 text-black  my-2">
        <img src="food.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-2 flex align-middle text-sm font-bold">myCM</span>
      </button>
    </div>
  );
}

export default LeftPanelButtons;
