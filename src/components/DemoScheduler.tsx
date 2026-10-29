import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { scheduleDemo } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const businessTypes = ["Shop", "Clinic", "Salon", "Coaching centre", "Service firm", "Distributor", "Other"];

const emptyForm = {
  name: "",
  businessName: "",
  phone: "",
  businessType: "",
  timeDrain: "",
};

const DemoScheduler = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("10:00");
  const [formData, setFormData] = useState(emptyForm);

  // Generate available time slots (9 AM to 5 PM, every 30 minutes)
  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast({
        title: "Error",
        description: "Please select a date for the call",
        variant: "destructive",
      });
      return;
    }
    if (!formData.businessType) {
      toast({
        title: "Error",
        description: "Please choose your business type",
        variant: "destructive",
      });
      return;
    }

    // Combine date and time
    const [hours, minutes] = selectedTime.split(":");
    const scheduledDate = new Date(date);
    scheduledDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    setIsLoading(true);
    try {
      await scheduleDemo({
        name: formData.name,
        business_name: formData.businessName,
        phone: formData.phone,
        business_type: formData.businessType,
        time_drain: formData.timeDrain,
        date: scheduledDate,
      });
      toast({
        title: "Booked",
        description: "Your 30-minute call is booked. We'll be in touch on WhatsApp.",
      });
      setFormData(emptyForm);
      setDate(new Date());
      setSelectedTime("10:00");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to book your call",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="schedule-demo" className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a free 30-minute call</h2>
          <p className="text-slate-600">
            Tell us a little about your business and pick a time. We'll talk through what takes up your team's time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Select Date & Time</h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={isLoading}
              fromDate={new Date()} // Disable past dates
            />
            <div className="mt-4 space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime} disabled={isLoading}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {date && (
              <p className="mt-4 text-sm text-slate-600">
                Selected: {format(date, "PPP")} at {selectedTime}
              </p>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName">Business name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, businessName: e.target.value }))}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (WhatsApp)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">Business type</Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, businessType: value }))}
                  disabled={isLoading}
                >
                  <SelectTrigger id="businessType" className="w-full">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeDrain">What takes up most of your time?</Label>
                <Textarea
                  id="timeDrain"
                  value={formData.timeDrain}
                  onChange={(e) => setFormData((prev) => ({ ...prev, timeDrain: e.target.value }))}
                  rows={4}
                  disabled={isLoading}
                />
              </div>

              <Button type="submit" className="w-full bg-gradient hover:opacity-90" disabled={isLoading}>
                {isLoading ? "Booking..." : "Book my call"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoScheduler;
