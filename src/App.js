import LeftComponent from "./Leftcomponent";
import LeftPanelButtons from "./LeftPanelButtons";
import Post from "./Post";
function App() {
  return (
    <div class="grid grid-cols-4 gap-0 relative">
      <div class="bg-blue-600 flex-col col-span-1 relative">
        <div className="relative">
          <span className="flex justify-center py-3 ">
            <img className="" src="./logo.png" alt="" width={80} />
          </span>
          <span className="flex justify-center h-60 ">
            <h3 className="text-white font-bold ">my2Cents</h3>
          </span>
        </div>
        <LeftComponent />
        <div className=" border-2  border-bg-blue-200 flex justify-center bg-blue-50  pt-20  ">
          <LeftPanelButtons />
        </div>

        <div className="    bg-blue-50 py-10 ">
          <img
            src="./dark.png"
            alt=""
            srcset=""
            className="w-[50%]  pb-3 mx-auto"
          />
          <img
            src="./doctor.png"
            alt=""
            srcset=""
            className="w-[80%] rounded-t-xl rounded-b-xl mx-auto"
          />
        </div>

        <div className="flex justify-center  bg-blue-50  py-5">
          <img
            src="./pepsi.png"
            alt=""
            srcset=""
            className="w-[80%] rounded-t-xl rounded-b-xl"
          />
        </div>
      </div>

      <div className="bg-white-100 col-span-2">
        <div className=" flex bg-white h-20 border-2 border-black-200 align-middle pl-5 ">
          <input
            placeholder="search topic, book,videos,idea,talent,podcast"
            className="border-2 border-black-500 rounded-r-2xl  rounded-l-2xl my-auto w-[120%] align-middle  text-sm h-10 text-clip"
          />
        </div>
        <img
          src="travellogo.png"
          alt=""
          className="w-[95%] mx-auto pt-5  rounded-b-xl rounded-t-xl"
        />
        <div className="bg-blue-700 rounded-b-xl rounded-t-xl w-[95%] mx-auto h-[5%] pt-10 mt-5 text-white  text-lg">
          Crypto Winners
        </div>
        <div className="bg-blue-200 rounded-b-xl rounded-t-xl w-[95%] mx-auto h-[3%] pt-10 mt-5 text-white  text-lg"></div>
        <Post />
        <Post />
        <Post />

        <div className="flex justify-center pt-5 pb-5 text-blue-900 font-bold">
          1 &emsp;2&emsp; 3&emsp; <span className="bg-blue-200">4</span>&emsp;
          5&emsp; ...&emsp; 22
        </div>
        <div className="w-[85%] bg-blue-700 flex justify-center mx-auto h-20 rounded-t-xl rounded-b-xl pt-10">
          <input
            placeholder="Monitize a topic"
            className="rounded-t-xl rounded-b-xl  w-[90%] "
          />
        </div>
      </div>
      <div class="bg-green-100 col-span-1 mt-20">
        3rd col 1st col Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Molestiae optio ab aut deserunt eos earum maiores rerum harum eum
        modi, saepe cum corrupti accusamus voluptas, minima incidunt pariatur
        temporibus numquam ut atque. Libero laudantium asperiores exercitationem
        qui ad, in, ducimus numquam ullam illo illum minus labore quasi ut sit
        alias?
      </div>
    </div>
  );
}

export default App;
