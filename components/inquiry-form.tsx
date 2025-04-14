'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, User, Phone, Calendar, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function InquiryForm({ property }: { property: any }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Request Information</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="name"
              placeholder="Your Name"
              className="pl-10"
              {...register('name', { required: 'Name is required' })}
            />
          </div>
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              className="pl-10"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
          </div>
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="pl-10"
              {...register('phone')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="timeframe" className="sr-only">Timeframe</label>
          <Select>
            <SelectTrigger className="w-full">
              <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
              <SelectValue placeholder="When are you looking to move?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediately">Immediately</SelectItem>
              <SelectItem value="1-3">1-3 Months</SelectItem>
              <SelectItem value="3-6">3-6 Months</SelectItem>
              <SelectItem value="6+">6+ Months</SelectItem>
              <SelectItem value="just-looking">Just Looking</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <textarea
              id="message"
              placeholder="Your Message"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
              rows={3}
              {...register('message')}
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Send Inquiry
        </Button>

        <p className="text-xs text-muted-foreground">
          By submitting this form, you agree to our Privacy Policy and consent to receiving communications from us.
        </p>
      </form>
    </div>
  );
}