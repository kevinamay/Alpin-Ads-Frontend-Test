import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import faqImage from '../../assets/Andergassen-Druck-1101 1.png';

export const Faq = () => {
  const faqs = [
    {
      question: "What is the check-in and check-out time?",
      answer: "Check-in is from 3:00 PM, and check-out is until 11:00 AM."
    },
    {
      question: "Is the hotel pet-friendly?",
      answer: "We love pets, but to ensure the comfort of all our guests, pets are not allowed on the premises."
    },
    {
      question: "Do you offer shuttle services?",
      answer: "Yes, we offer complimentary shuttle services to nearby attractions and the airport. Please contact the concierge to arrange."
    },
    {
      question: "Are lift passes included in the price?",
      answer: "Lift passes are not included in the standard room rate, but we offer comprehensive ski packages that include them."
    },
    {
      question: "Is there a vegan option in the restaurant?",
      answer: "Yes, our restaurant offers a variety of vegan and vegetarian options prepared with locally sourced ingredients."
    }
  ];

  return (
    <section id="faq" className="w-full bg-[#F5F5F0]">
      <div className="max-w-[1440px] mx-auto flex flex-row items-start justify-between py-[120px] px-[40px] gap-[64px]">
        {/* Left Column */}
        <div className="flex flex-col w-[648px] flex-none">
          <h2 className="font-['Manrope'] text-[40px] text-[#323232] font-normal leading-[1.4] mb-[12px]">
            Frequently Asked Questions
          </h2>
          <p className="font-['Manrope'] text-[16px] text-[#666666] leading-[1.5] mb-[40px]">
            Answers to the most common questions, so you can focus on enjoying your time with us.
          </p>
          <img src={faqImage} alt="Hotel Room Interior" className="w-full h-[330px] object-cover" />
        </div>

        {/* Right Column (Accordion) */}
        <div className="flex flex-col w-[648px] flex-none">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full flex flex-col gap-[16px]">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-sm border-none px-[24px]"
              >
                <AccordionTrigger className="hover:no-underline py-[20px] font-['Manrope'] font-normal text-[16px] text-[#323232]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-['Manrope'] text-[16px] text-[#666666] leading-[1.5] pb-[20px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
