function LeftComponent() {
  return (
    <div className="border-1  border-black mx-4 rounded-xl top-[140px] bg-white h-60 w-[85%] absolute">
      <img
        src="blockchainlogo.jpg"
        alt="logo"
        width={270}
        className="rounded-t-xl"
      />
      <span className="flex justify-center h-10">
        <img
          src="professor.jpg"
          alt="logo"
          className="rounded-full h-10 w-10 relative bottom-5"
        />
      </span>
      <p className="text-center font-extrabold	 text-blue-600">Professor</p>
      <p className="text-center text-sm text-blue-600">Istambul , Turkey</p>
    </div>
  );
}

export default LeftComponent;
