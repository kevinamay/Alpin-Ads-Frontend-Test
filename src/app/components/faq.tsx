import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import faqImage from '../../assets/Andergassen-Druck-1101 1.png';

export const Faq = () => {
  const faqs = [
    { question: "What is the check-in and check-out time?", answer: "Check-in is from 3:00 PM, and check-out is until 11:00 AM." },
    { question: "Is the hotel pet-friendly?", answer: "We love pets, but to ensure the comfort of all our guests, pets are not allowed on the premises." },
    { question: "Do you offer shuttle services?", answer: "Yes, we offer complimentary shuttle services to nearby attractions and the airport. Please contact the concierge to arrange." },
    { question: "Are lift passes included in the price?", answer: "Lift passes are not included in the standard room rate, but we offer comprehensive ski packages that include them." },
    { question: "Is there a vegan option in the restaurant?", answer: "Yes, our restaurant offers a variety of vegan and vegetarian options prepared with locally sourced ingredients." },
  ];

  return (
    <section id="faq" className="w-full max-w-[1440px] mx-auto bg-[#F4F3F0]">
      <div className="w-full py-[60px] md:py-[80px] px-[20px] md:px-[32px] flex flex-col md:flex-row items-start gap-[40px] md:gap-[80px]">

        {/* Kolom Kiri */}
        <div className="flex flex-col flex-1 gap-[24px] w-full md:max-w-[648px]">
          <div className="flex flex-col gap-[12px] text-center md:text-left">
            <h2 className="font-['Manrope'] text-[28px] md:text-[40px] text-[#323232] font-normal leading-[1.4]">
              Frequently Asked Questions
            </h2>
            <p
              className="font-['Manrope'] text-[16px] font-normal text-[#323232] leading-[1.5]"
              style={{ opacity: 0.8, letterSpacing: "-0.01em" }}
            >
              Answers to the most common questions, so you can focus on enjoying your time with us.
            </p>
          </div>

          {/* Image */}
          <img
            src={faqImage}
            alt="Hotel Room Interior"
            className="w-full object-cover rounded-[4px]"
            style={{ height: "220px" }}
          />
        </div>

        {/* Kolom Kanan: Accordion */}
        <div className="flex flex-col flex-1 w-full">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full flex flex-col gap-[16px] md:gap-[20px]">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-[8px] border-none px-[16px] md:px-[24px]"
              >
                <AccordionTrigger className="hover:no-underline py-[20px] font-['Manrope'] font-normal text-[16px] text-[#323232] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-['Manrope'] text-[16px] text-[#666666] leading-[1.5] pb-[20px] pt-0 mt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};