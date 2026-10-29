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
    id: "follow-ups",
    label: "Follow-ups and chasing",
    automations: [
      {
        title: "Chase unanswered enquiries and quotes at set intervals",
        example: "A quote goes three days without a reply and gets a polite nudge without anyone remembering to send it.",
      },
      {
        title: "Remind customers about upcoming appointments and deadlines",
        example: "A customer gets a reminder the day before their renewal date is due.",
      },
      {
        title: "Chase unpaid invoices at set intervals",
        example: "An invoice still unpaid after a week gets a polite reminder, with the payment link attached.",
      },
      {
        title: "Nudge staff about overdue tasks",
        example: "A team member gets a reminder that the stock count was due yesterday.",
      },
      {
        title: "Send renewal or repeat-service reminders",
        example: "A customer who has a service every six weeks gets a reminder when it's due.",
      },
      {
        title: "Win back customers who've gone quiet",
        example: "A customer who hasn't visited in 90 days gets a friendly 'we miss you' message.",
      },
    ],
  },
  {
    id: "data-entry",
    label: "Data entry and records",
    automations: [
      {
        title: "Save enquiries from your website, social media, forms and calls into one list",
        example: "A lead from your Instagram page lands in the same list as one from a phone call.",
      },
      {
        title: "Copy form submissions into the right sheet or CRM automatically",
        example: "A form filled in on your website appears as a new row in your customer sheet.",
      },
      {
        title: "Keep the customer list clean: remove duplicates, tag repeat and VIP customers",
        example: "Two entries for the same customer are merged, and regulars are tagged as VIPs.",
      },
      {
        title: "File invoices, receipts and contracts in the right folder with consistent names",
        example: "A signed contract is saved as 'ClientName_Contract_2026-10' in the right folder.",
      },
      {
        title: "Update price lists across quotes and the website when prices change",
        example: "A price change is made once and shows up on new quotes and on the website.",
      },
      {
        title: "Log supplier bills from email attachments into one place",
        example: "A supplier's invoice sent by email is saved to your bills list with its due date.",
      },
    ],
  },
  {
    id: "money-admin",
    label: "Money admin",
    automations: [
      {
        title: "Create and send an invoice when a job is marked done",
        example: "When a job is marked done, the invoice goes to the customer that same day.",
      },
      {
        title: "Attach a payment link to every invoice",
        example: "The customer pays from their phone with one tap on the invoice.",
      },
      {
        title: "Mark invoices paid when payment arrives",
        example: "When payment lands, the invoice is marked paid and the customer gets a thank-you.",
      },
      {
        title: "Log expense receipts (photo or email) into a sheet by category",
        example: "A fuel receipt photographed and sent by email is filed under travel.",
      },
      {
        title: "Sort bank and UPI transactions into categories for the accountant",
        example: "Each payment is tagged as rent, supplies or sales, ready for the accountant.",
      },
      {
        title: "Send a weekly sales and collections summary",
        example: "Every Monday you see what came in last week and what is still owed.",
      },
    ],
  },
  {
    id: "customer-messages",
    label: "Customer messages",
    automations: [
      {
        title: "Send booking confirmations",
        example: "A customer books a 4pm slot and gets the date and address straight away.",
      },
      {
        title: "Send appointment reminders 24 hours and 2 hours before",
        example: "A customer gets a reminder the day before and another two hours before their visit.",
      },
      {
        title: "Send a thank-you after each service or sale",
        example: "A customer gets a thank-you message after leaving the clinic.",
      },
      {
        title: "Ask for a review two days after a visit",
        example: "Two days after a visit, the customer gets a short link to leave a review.",
      },
      {
        title: "Answer routine questions (prices, hours, location) with the right information",
        example: "A customer asks for your opening hours and gets the answer straight away.",
      },
      {
        title: "Send a feedback question after each visit, and flag complaints to the owner the same day",
        example: "A customer who rates the visit two out of five is flagged to you immediately.",
      },
    ],
  },
  {
    id: "reporting",
    label: "Reporting, stock and deadlines",
    automations: [
      {
        title: "Send the owner a morning schedule",
        example: "Every morning you get the day's bookings and tasks in one message.",
      },
      {
        title: "Send the owner a daily or weekly summary",
        example: "Each week you get a short summary of sales, bookings and open invoices.",
      },
      {
        title: "Alert when stock falls below a set level",
        example: "When hair dye drops below five bottles, you get an alert.",
      },
      {
        title: "Draft a reorder to the supplier when stock is low",
        example: "A reorder to your supplier is drafted as soon as stock hits the set level, ready for you to send.",
      },
      {
        title: "Remind the owner of GST, TDS, licence and renewal deadlines",
        example: "You get a reminder a week before the GST return is due.",
      },
      {
        title: "Track document expiry (licences, insurance, contracts) and warn in advance",
        example: "You're warned 30 days before the insurance certificate expires.",
      },
    ],
  },
];
