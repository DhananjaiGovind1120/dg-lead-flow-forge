import {
  BarChart3,
  Calendar,
  Database,
  FileSearch,
  FileText,
  Mail,
  MessageSquare,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface WorkflowStep {
  title: string;
  detail: string;
}

export interface Workflow {
  id: string;
  title: string;
  icon: LucideIcon;
  steps: WorkflowStep[];
}

// One four-step automation per solution listed in Features.tsx
export const workflows: Workflow[] = [
  {
    id: "marketing",
    title: "Marketing Automation",
    icon: Mail,
    steps: [
      { title: "Audience segmented", detail: "Ideal customer profiles matched" },
      { title: "Campaign created", detail: "Emails and posts written by AI" },
      { title: "Campaign launched", detail: "Scheduled across channels" },
      { title: "Performance tracked", detail: "Results feed back into targeting" },
    ],
  },
  {
    id: "sales",
    title: "Sales Process Automation",
    icon: ShoppingCart,
    steps: [
      { title: "New prospect detected", detail: "Inbound lead or outbound list" },
      { title: "High-value leads scored", detail: "Ranked by fit and intent" },
      { title: "Personalised follow-up sent", detail: "A tailored message for each prospect" },
      { title: "Deal logged in CRM", detail: "Next step scheduled automatically" },
    ],
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    icon: Users,
    steps: [
      { title: "Application received", detail: "From job boards and your careers page" },
      { title: "Candidates screened", detail: "Skills matched to the role" },
      { title: "Interview scheduled", detail: "Calendars checked automatically" },
      { title: "Shortlist sent to hiring team", detail: "Best matches ranked for review" },
    ],
  },
  {
    id: "documents",
    title: "Document Processing",
    icon: FileText,
    steps: [
      { title: "Document uploaded", detail: "Invoices, contracts or forms" },
      { title: "Data extracted", detail: "Key fields read with AI" },
      { title: "Records validated", detail: "Errors flagged for review" },
      { title: "Saved to your systems", detail: "Synced to your database" },
    ],
  },
  {
    id: "admin",
    title: "Administrative Tasks",
    icon: Calendar,
    steps: [
      { title: "Request received", detail: "From email, chat or a form" },
      { title: "Task understood", detail: "AI classifies the request" },
      { title: "Calendar and tasks updated", detail: "Scheduling handled automatically" },
      { title: "Notes and summary shared", detail: "Meeting notes sent to attendees" },
    ],
  },
  {
    id: "data",
    title: "Data Analysis",
    icon: Database,
    steps: [
      { title: "Data sources connected", detail: "Databases, spreadsheets and apps" },
      { title: "Data cleaned", detail: "Duplicates and gaps fixed" },
      { title: "Patterns analysed", detail: "AI finds trends and anomalies" },
      { title: "Insights delivered", detail: "Dashboards and reports updated" },
    ],
  },
  {
    id: "support",
    title: "Customer Support",
    icon: MessageSquare,
    steps: [
      { title: "Customer query received", detail: "Chat, email or phone" },
      { title: "Intent understood", detail: "AI reads the question and context" },
      { title: "Answer or ticket created", detail: "Resolved instantly or routed on" },
      { title: "Feedback recorded", detail: "Quality checked and improved" },
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Reporting",
    icon: FileSearch,
    steps: [
      { title: "Activity monitored", detail: "Systems watched continuously" },
      { title: "Rules checked", detail: "Against your regulatory requirements" },
      { title: "Exceptions flagged", detail: "Issues raised before they escalate" },
      { title: "Report generated", detail: "Audit-ready documentation created" },
    ],
  },
  {
    id: "finance",
    title: "Financial Operations",
    icon: BarChart3,
    steps: [
      { title: "Invoice issued", detail: "Sent automatically on schedule" },
      { title: "Payment matched", detail: "Bank transactions reconciled" },
      { title: "Overdue items chased", detail: "Reminders sent at the right time" },
      { title: "Forecast updated", detail: "Cash flow projected with AI" },
    ],
  },
];
