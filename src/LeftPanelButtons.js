function LeftPanelButtons() {
  return (
    <div className=" w-[85%]">
      <button className=" py-1 flex justify-start align-middle bg-blue-700 w-full rounded-t-lg rounded-b-lg h-10 text-white  my-3">
        <img src="Home.svg" alt="" width={30} className=" mx-4 inline " />
        <span className="py-2 flex align-middle text-sm">Home</span>
      </button>
      <button className=" py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="book.svg" alt="" width={30} className="mx-4 inline " />
        <span className="py-2 flex align-middle text-sm">myBook</span>
      </button>

      <button className="py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="video.svg" alt="" width={30} className="mx-4" />
        <span className="py-1 flex align-middle text-sm">myVid</span>
      </button>

      <button className=" py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="idea.svg" alt="" width={30} className="mx-4" />
        <span className="py-1 flex align-middle text-sm">myIdea</span>
      </button>
      <button className="py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="job.svg" alt="" width={30} className="mx-4" />
        <span className="py-1 flex align-middle text-sm">myjob</span>
      </button>
      <button className="py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="podcast.svg" alt="" width={30} className="mx-4" />
        <span className="py-1 flex align-middle text-sm">myPodcast</span>
      </button>
      <button className="py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="reuse.svg" alt="" width={30} className="mx-4" />
        <span className="py-1 flex align-middle text-sm">myReuse</span>
      </button>
      <button className="py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="food.svg" alt="" width={30} className="mx-4" />
        <span className="py-1 flex align-middle text-sm">mySlowfood</span>
      </button>
      <button className="py-1 flex justify-start bg-blue-200 w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="food.svg" alt="" width={30} className="mx-4" />
        <span className="py-1 flex align-middle text-sm">myCM</span>
      </button>
    </div>
  );
}

export default LeftPanelButtons;
