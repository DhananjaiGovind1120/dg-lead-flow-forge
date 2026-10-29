export interface Automation {
  title: string;
  example: string;
}

export interface AutomationCategory {
  id: string;
  label: string;
  automations: Automation[];
}

export const automationCategories: AutomationCategory[] = [
  {
    id: "enquiries",
    label: "Enquiries",
    automations: [
      {
        title: "Save every enquiry from your website, Instagram, Facebook, Google and calls into one sheet",
        example: "A lead from your Instagram page lands in the same sheet as one from a phone call.",
      },
      {
        title: "Send an instant WhatsApp reply to each new enquiry",
        example: "Someone asks about your opening hours and gets a reply straight away.",
      },
      {
        title: "Flag hot leads to the owner the same day",
        example: "A customer asking for a quote for next week is flagged to you before lunch.",
      },
      {
        title: "Follow up with leads who haven't replied after 1, 3 and 7 days",
        example: "A customer who went quiet after a quote gets a friendly nudge on day 3.",
      },
      {
        title: "Send the price list or services menu when a customer asks for it",
        example: "A customer asks what you charge and receives the menu straight away.",
      },
      {
        title: "Answer common questions (prices, hours, location) on WhatsApp, with a handover to a person",
        example: "A customer asks where you are, and when they ask something unusual, a person takes over.",
      },
    ],
  },
  {
    id: "bookings",
    label: "Bookings",
    automations: [
      {
        title: "Send booking confirmations to customers",
        example: "A customer books a 4pm slot and gets the date and address in a message.",
      },
      {
        title: "Send reminders 24 hours and 2 hours before each appointment",
        example: "A customer gets a reminder the day before and another two hours before their visit.",
      },
      {
        title: "Give customers a link to reschedule or cancel",
        example: "A customer who can't make it moves their appointment without calling you.",
      },
      {
        title: "Follow up after a missed appointment",
        example: "A customer who didn't show up gets a message offering a new time.",
      },
      {
        title: "Send the owner a morning schedule each day",
        example: "Every morning you get the day's bookings in one message.",
      },
      {
        title: "Assign tasks to staff with deadlines, and remind them when overdue",
        example: "A stylist is reminded that the stock check was due yesterday.",
      },
    ],
  },
  {
    id: "invoices",
    label: "Invoices and payments",
    automations: [
      {
        title: "Create and send an invoice when a job is marked done",
        example: "When a job is marked done, the invoice goes to the customer that same day.",
      },
      {
        title: "Include a payment link on every invoice",
        example: "The customer pays from their phone with one tap on the invoice link.",
      },
      {
        title: "Send payment reminders for unpaid invoices on days 3, 7 and 15",
        example: "An invoice still unpaid after a week gets a polite reminder on day 7.",
      },
      {
        title: "Mark invoices paid and send a thank-you when payment arrives",
        example: "When payment lands, the invoice is marked paid and the customer gets a thank-you.",
      },
      {
        title: "Capture expense receipts sent as WhatsApp photos into a sheet",
        example: "A photo of a fuel receipt sent on WhatsApp is saved to your expenses sheet.",
      },
      {
        title: "Send the owner a weekly sales and collections total",
        example: "Every Monday you see what came in and what is still owed.",
      },
    ],
  },
  {
    id: "whatsapp",
    label: "WhatsApp follow-up",
    automations: [
      {
        title: "Send a thank-you message after each service or sale",
        example: "A customer gets a thank-you message after leaving the clinic.",
      },
      {
        title: "Send a review request two days after a visit",
        example: "Two days after a visit, the customer gets a short link to leave a review.",
      },
      {
        title: "Send repeat-service reminders",
        example: "A customer who has a facial every six weeks gets a reminder when it's due.",
      },
      {
        title: "Send birthday or festival greetings to customers who opted in",
        example: "Customers who said yes get a birthday message with a small offer.",
      },
      {
        title: "Send a win-back message to customers who haven't visited in 90 days",
        example: "A customer who hasn't been in since the summer gets a 'we miss you' message.",
      },
      {
        title: "Send customers a short feedback question after each visit, and alert the owner to complaints the same day",
        example: "A customer who rates the visit two out of five is flagged to you immediately.",
      },
    ],
  },
  {
    id: "admin",
    label: "Admin and compliance",
    automations: [
      {
        title: "Alert the owner when stock falls below a set level",
        example: "When hair dye drops below five bottles, you get an alert.",
      },
      {
        title: "Send a reorder reminder to suppliers when stock is low",
        example: "The supplier gets a reorder message as soon as stock reaches the set level.",
      },
      {
        title: "Remind staff about shift starts and missing documents",
        example: "A staff member gets a reminder that their ID is still missing from the file.",
      },
      {
        title: "Send deadline reminders for GST, TDS, licences and renewals",
        example: "You get a reminder a week before the GST return is due.",
      },
      {
        title: "Track key documents (licences, insurance, contracts) and warn before they expire",
        example: "You're warned 30 days before the insurance certificate expires.",
      },
      {
        title: "Email a monthly summary report to the owner on the 1st",
        example: "On the 1st of each month, your summary arrives in your inbox.",
      },
    ],
  },
];
