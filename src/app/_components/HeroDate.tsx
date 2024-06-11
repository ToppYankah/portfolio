export default function HeroDate() {
    return (
      <div className="col-start-1 col-end-2 row-start-3 row-end-4 font-serif">
            <h2 className="whitespace-nowrap text-5xl max-[800px]:text-4xl max-[640px]:text-3xl">
              {"Biography"
                .split("")
                .map((char, index) => (
                  <span key={`bio-span-first-${index}`}>
                    {char}
                  </span>
                ))}
            </h2>
            <h2 className="whitespace-nowrap text-5xl max-[800px]:text-4xl max-[640px]:text-3xl">
              {"2024"
                .split("")
                .map((char, index) => (
                  <span key={`bio-span-first-${index}`}>
                    {char}
                  </span>
                ))}
            </h2>
      </div>
    );
  }
  