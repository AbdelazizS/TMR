import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutFaqs = () => {
  return (
    <section aria-labelledby="faq-section" className="pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4 lg:mb-6">
          <h2
            id="faq-section-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-2"
          >
            Your questions, answered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Answers to the most frequently asked questions.
          </p>
        </div>
      <Accordion  defaultValue="0" type="single" collapsible className="max-w-lg">
        {[
          {
            question: "How long have you served in dubai ?",
            answer: "We’ve helped 500+ clients in dubai since 2022 with hyperlocal expertise",
          },
          {
            question:"What makes you different from other agencies ?",
            answer:"Our tech-powered approach (3D tours + AI pricing) + 24/7 availability cuts average sale time by 30%"
          },
          {
            question:"Do you work with first-time buyers ?",
            answer:"Yes! Our free First-Time Buyer Toolkit explains mortgages, grants, and hidden costs in plain English."
          },
          {
            question:"Can you help me buy/sell remotely ?",
            answer:"Absolutely! Video tours, e-signing, and virtual staging make relocation seamless."
          },
        ].map((item, i) => (
          <AccordionItem className="cursor-pointer"  key={item.question} value={`${i}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>

    </section>
  );
};

export default AboutFaqs;
