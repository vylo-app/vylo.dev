import { Button } from "@/components/ui/button";

export const HeroSection = () => (
  <div className="mt-44">
    <h1
      className={
        "w-[830px] m-auto text-[#090909] text-7xl text-center whitespace-break-spaces leading-tight font-text font-light"
      }
    >
      {`Your CV, Redesigned\nfor Success.`}
    </h1>

    <p className="w-[830px] m-auto mt-6 text-center whitespace-break-spaces font-text font-extralight text-lg leading-8">
      {`Transform your achievements into a professional, eye-catching CV\nthat highlights your strengths and gets you noticed`}
    </p>

    <div className="m-auto mt-8 w-fit flex items-center gap-4">
      <Button>Join For Free</Button>
      <Button variant={"outline"}>Log In</Button>
    </div>

    <div className="bg-hero-section-background-gradient mt-8">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
            className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
            alt=""
          />
          <img
            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
            className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
      </div>
    </div>
  </div>
);
