import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

  const [longUrl,setLongUrl] = useState();
  const navigate = useNavigate()
  const handleShorten = (e) => {
    e.preventDefault()
    if(longUrl)navigate(`/auth?createNew=${longUrl}`)
  }
  return (
    <div className=" flex flex-col items-center">
      <h2 className="text-center text-3xl my-10 sm:my-16 sm:text-6xl lg:text-7xl text-white font-extrabold">
        The only URL Shortner <br /> you&rsquo;ll ever need ! 👇
      </h2>

      <form onSubmit={handleShorten} className="flex flex-col items-center sm:h-14 sm:flex-row w-full md:w-2/4 gap-2">
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your long url"
          onChange={(e)=> setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4 "
        />
        <Button
          className="h-full hover:cursor-pointer"
          type="submit"
          variant="destructive"
        >
          Shorten
        </Button>
      </form>
      <img src="/banner.jpeg" alt="" className="w-full my-11 md:px-11" />

      {/* accordian  */}
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem  value="item-1">
          <AccordionTrigger className="text-lg" >How does the Trimrr URL shortener works?</AccordionTrigger>
          <AccordionContent>
          When you enter a long URL, our system generates a shorter version of that URL. This shortened URL redirects to the original long URL when accessed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">Do I need an account to use the app?</AccordionTrigger>
          <AccordionContent>
          Yes. Creating an account allows you to manage your URLs, view analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">What analytics are available for my shortened URLs?</AccordionTrigger>
          <AccordionContent>
          You can view the number of clicks, geolocation data of the clicks and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default LandingPage;
