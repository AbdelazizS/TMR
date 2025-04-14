import Image from 'next/image';
import { Button } from './ui/button';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export function AgentCard({ agent }: { agent: any }) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={agent.photo}
            alt={agent.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{agent.name}</h3>
          <p className="text-sm text-muted-foreground">{agent.title}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <Button variant="outline" className="w-full gap-2">
          <Phone className="w-4 h-4" />
          {agent.phone}
        </Button>
        <Button variant="outline" className="w-full gap-2">
          <Mail className="w-4 h-4" />
          Email Agent
        </Button>
        <Button variant="outline" className="w-full gap-2">
          <MessageSquare className="w-4 h-4" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
}