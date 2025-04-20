"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Mail, X } from "lucide-react";
import { useState } from "react";

export function ContactFab({ property }: { property: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {expanded ? (
        <div className="bg-background rounded-xl shadow-lg p-4 space-y-3 w-64">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Contact Agent</h3>
            <button
              onClick={() => setExpanded(false)}
              className="text-muted-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <a href="tel:+971564418632" className="w-full">
            <Button className="p-4 cursor-pointer hover:scale-101 w-full">
              <Phone className="w-4 h-4" />
              Call Agent
            </Button>
          </a>

          <a
           href="https://wa.me/+971559550372"
            className="w-full"
          >
            <Button className="p-4 cursor-pointer hover:scale-101 w-full">
              Contact Us <MessageSquare className="w-4 h-4" />
            </Button>
          </a>

          <a
            href="mailto:info@trm-realestatecom.org"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <Button variant="outline" className="w-full gap-2">
              <Mail className="flex-shrink-0 size-5" />
              Email TRM
            </Button>
          </a>
        </div>
      ) : (
        <Button
          size="icon"
          className="rounded-full w-14 h-14 shadow-lg"
          onClick={() => setExpanded(true)}
        >
          <Phone className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}
