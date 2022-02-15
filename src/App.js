import LeftComponent from "./Leftcomponent";

function App() {
  return (
    <div class="grid grid-cols-4 gap-2 relative">
      <div class="bg-blue-600 flex-col col-span-1  relative  ">
        <div className="relative">
          <span className="flex justify-center py-3 ">
            <img className="" src="./logo.png" alt="" width={80} />
          </span>
          <span className="flex justify-center h-60 ">
            <h3 className="text-white font-bold ">my2Cents</h3>
          </span>
        </div>
        <LeftComponent />
        <div className="bg-blue-50 h-96 py-20 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          debitis illo voluptates adipisci blanditiis dolores magnam. Saepe
          error quis, earum, fuga fugit ipsa reiciendis nobis illo quae quam ex
          perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Porro debitis illo voluptates adipisci blanditiis dolores
          magnam. Saepe error quis, earum, fuga fugit ipsa reiciendis nobis illo
          quae quam ex perspiciatis.
        </div>
      </div>

      <div class="bg-red-100 col-span-2">
        2nd col 1st col Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Molestiae optio ab aut deserunt eos earum maiores rerum harum eum
        modi, saepe cum corrupti accusamus voluptas, minima incidunt pariatur
        temporibus numquam ut atque. Libero laudantium asperiores exercitationem
        qui ad, in, ducimus numquam ullam illo illum minus labore quasi ut sit
        alias?
      </div>
      <div class="bg-green-100 col-span-1">
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
