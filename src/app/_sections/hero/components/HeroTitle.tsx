import MemojiBadge from "~/components/MemojiBadge";

export default () => {
  return (
    <div
      className="col-start-1 col-end-5 row-start-2 row-end-3 lg:col-start-2 lg:col-end-4"
    >
      <div id="hero-title" className="flex h-full w-full justify-center">
        <div className="flex max-w-[100%] flex-col justify-center sm:max-w-[70%] lg:max-w-[100%]">
          <div className="flex items-center">
            <div className="title-upper-container">
              <h1 className="relative whitespace-nowrap perspective-400">
                <span className="title-upper block font-serif text-[clamp(4rem,6.89vw,6.5rem)] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11.5vw]">
                  Sculpting
                </span>
                <span className="title-short-bio absolute left-full top-1/3 block translate-x-8 font-sans text-sm opacity-90 max-[800px]:hidden">
                  Kenneth Topp Yankah is a front-end software
                  <br />
                  engineer who is passionate about designing
                  <br />
                  and developing digital experiences for web
                  <br />
                  and mobile.
                </span>
              </h1>
            </div>
          </div>
          <div className="relative">
            <h1 className="relative whitespace-nowrap perspective-400">
              <span className="title-middle block text-center font-serif text-[clamp(4rem,6.89vw,6.5rem)] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11.5vw]">
                Digital Dreams
              </span>
            </h1>
          </div>
          <div className="relative flex justify-end">
            <MemojiBadge className="title-badge absolute left-0 top-full w-[clamp(120px,50%,300px)] max-w-[35%] self-center sm:relative sm:top-0 sm:max-w-[30%]" />
            <div className="title-lower-container">
              <h1 className="title-lower relative whitespace-nowrap perspective-400">
                <span className="block font-serif text-[clamp(4rem,6.89vw,6.5rem)] max-[1050px]:text-[9vw] max-[800px]:text-[10vw] max-[500px]:text-[11.5vw]">
                  into Reality
                </span>
                <span className="title-short-note absolute -bottom-2 right-0 block font-sans text-sm">
                  Driven by passion of art
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
