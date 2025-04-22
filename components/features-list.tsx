"use client";
import { Check } from "lucide-react";

export function FeaturesList({ features }: { features: string[] }) {
  console.log(features);

  return (
    <section className="bg-background rounded-lg p-6 shadow-sm border">
      <h2 className="text-xl font-semibold mb-4 text-foreground">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="bg-primary/5 p-1 border rounded-full">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
            </div>
            <span className="text-foreground">{feature.feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
