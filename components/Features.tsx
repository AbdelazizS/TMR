import { Award, Clock4Icon, Handshake, MessagesSquare } from "lucide-react";

const AboutFeatures = () => {
  return (
    // <!-- Icon Blocks -->
    <div className="max-w-7xl px-4 py-16 md:py-20 lg:py-24
     mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        {/* <!-- Icon Block --> */}
          {[
            {
              title: "24/7 Support",
              desc: " Contact us 24 hours a day, 7 days a week",
              icon: <Clock4Icon className="text-primary" />,
            },
            {
              title: "Community Builders",
              desc: "Sponsoring local schools + green spaces since 2015",
              icon: <Award className="text-primary"  />,
            },
            {
              title: "Negotiation Ninjas",
              desc: "Avg. 6% above asking price for sellers",
              icon: <Handshake className="text-primary"  />,
            },
            {
              title: "Proven Results",
              desc: "95% client satisfaction rate",
              icon: <MessagesSquare className="text-primary"  />,
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="flex justify-center items-center size-12 bg-muted/80 border rounded-full mx-auto hover:bg-muted">
                {item.icon}
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        {/* <!-- End Icon Block --> */}
      </div>
    </div>
    // <!-- End Icon Blocks -->
  );
};

export default AboutFeatures;
