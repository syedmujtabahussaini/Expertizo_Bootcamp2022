function LeftComponent() {
  return (
    <div className="border-1  border-black mx-4 rounded-xl absolute top-[140px] bg-white h-60">
      <img
        src="blockchainlogo.jpg"
        alt="logo"
        width={270}
        height={50}
        className="rounded-t-xl"
      />
      <span className="flex justify-center">
        <img
          src="professor.jpg"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </span>

      <p className="text-center font-extrabold	 text-blue-600">Professor</p>
      <p className="text-center text-sm text-blue-600">Istambul , Turkey</p>
    </div>
  );
}

export default LeftComponent;
