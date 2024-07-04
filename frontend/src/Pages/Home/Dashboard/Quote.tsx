import React from "react";
import { getRandom } from "@anilseervi/inspirational-quotes";
import { IoRefreshSharp } from "react-icons/io5";
type QuoteType = {
  quote: string;
  author: string;
};
const Quote: React.FC = () => {
  const [quote, setQuote] = React.useState<QuoteType>({} as QuoteType);
  React.useEffect(() => {
    setQuote(getRandom());
  }, []);
  return (
    <div className="flex h-[4rem] items-center gap-2 text-xl italic">
      <div className="max-h-[4rem] w-fit overflow-y-auto p-1 text-xl italic">
        <p>{quote.quote}</p>
        <p className="text-right text-lg italic">~{quote.author}</p>
      </div>
      <IoRefreshSharp
        className="size-15 cursor-pointer"
        onClick={() => setQuote(getRandom())}
      />
    </div>
  );
};
export default Quote;
