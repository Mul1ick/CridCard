import { benefits } from "../constants/details";

const Card = () => {
  return (
    <div className="container relative z-2">
      <div className="flex flex-wrap gap-10 mb-10">
        {benefits.map((item) => (
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] rounded-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
              border: "2px solid white", // Adding white outline
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.1)", // Adding 3D box shadow
              borderRadius: "15px", // Adding rounded borders
            }}
            key={item.id}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none rounded-lg" style={{ backgroundColor: "#001f3f" }}> {/* Navy blue background */}
              <img
                src={item.imageUrl}
                width={380}
                height={362}
                alt={item.title}
                className="w-full h-full object-cover mb-4 rounded-lg"
              />
              <div className="flex flex-col items-start">
                <h5 className="h5 mb-1 text-white">{item.nameSec}</h5> {/* White text for better contrast */}
                <p className="body-2 mb-4 text-n-3 text-white">{item.post}</p> {/* White text for better contrast */}
                <div className="flex items-center mt-auto">
                  <a href={item.link} className="mr-4">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.nameSec}
                      className="rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* {item.light && <GradientLight />} */}

            <div
              className="absolute inset-0.5 bg-n-8 rounded-lg"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 rounded-lg"></div>
            </div>

            {/* <ClipPath /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;