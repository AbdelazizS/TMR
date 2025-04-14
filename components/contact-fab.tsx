'use client';

import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Mail, X } from 'lucide-react';
import { useState } from 'react';

export function ContactFab({ property }: { property: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {expanded ? (
        <div className="bg-background rounded-xl shadow-lg p-4 space-y-3 w-64">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Contact Agent</h3>
            <button onClick={() => setExpanded(false)} className="text-muted-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>
          <Button variant="outline" className="w-full gap-2">
            <Phone className="w-4 h-4" />
            Call Agent
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <Mail className="w-4 h-4" />
            Email Agent
          </Button>
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