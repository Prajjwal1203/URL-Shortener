import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only URL Shortener<br></br> you&rsquo;ll ever need!👇
      </h2>
      <form className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input
          type="url"
          placeholder="Enter your long url"
          className="h-full flex-1 py-4 px-4"
        ></Input>
        <Button className="h-full" type="submit" variant="destructive">
          Shorten!
        </Button>
      </form>

      <img
        src="/banner.jpeg"
        alt="banner"
        className="w-full my-11 md:px-11"
      ></img>

      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
           When you enter a long URL , our system generatees a shorter version of that url.This shortenedURL redirects to the orginal long URL when accessed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
