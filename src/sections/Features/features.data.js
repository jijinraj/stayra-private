// src/sections/Features/features.data.js

/** @typedef {{ subheading: string, body: string | string[] }} BlurbSection */
/** @typedef {{ title: string, href: string, id: string, lottie?: string, blurb: string | string[] | BlurbSection[] }} FeatureItem */

/** @type {FeatureItem[]} */
export const FEATURES = [
  {
    title: "Designed To Flow",
    href: "#",
    id: "purpose",
    lottie: "https://lottie.host/d6ef5640-8ea3-4a2e-95b5-1e701d3162a5/7R5hI2a7EV.lottie",
    blurb: [
      {
        subheading: "What it means",
        body:
          "Designed To Flow is our product principle: remove friction from renting and management by automating repetitive work and surfacing the right info at the right moment."
      },
      {
        subheading: "Why it matters",
        body: [
          "Today renting is fragmented across emails, chats, spreadsheets, and banking apps.",
          "Manual follow-ups, missed due dates, and version confusion waste time and cause stress.",
          "Automation and clear status reduce errors, save time, and build trust for everyone."
        ]
      },
      {
        subheading: "How it shows up in Stayra",
        body: [
          "Unified timeline that threads messages, payments, and document events per tenancy.",
          "Automated rent schedules with pre-due reminders, instant receipts, and late nudges.",
          "Smart documents with e-signing, versioned storage, expiry alerts, and audit trails.",
          "Contextual notifications in-app and email so you only see what matters now.",
          "Self-serve actions to raise issues, share files, update card/bank, and download statements.",
          "Zero-friction onboarding with CSV imports and guided checklists."
        ]
      },
      {
        subheading: "Signals that it’s working",
        body: [
          "Fewer manual reminders and back-and-forth per month.",
          "On-time payment rate trending up and fewer disputes.",
          "Issue resolution time trending down.",
          "Fewer “where is X?” messages thanks to a single source of truth."
        ]
      },
      {
        subheading: "Built-in guardrails",
        body: [
          "Roles and permissions keep data scoped to the right people.",
          "Full audit logs on tenancy, payment, and document actions.",
          "Status checks prevent duplicate reminders on already-paid invoices."
        ]
      },
      {
        subheading: "What’s next",
        body: [
          "Bank transfer auto-reconciliation via Open Banking.",
          "Late-fee rules, partial payments, and payment plans.",
          "Proactive insights: renewals due, rent review windows, and expiring compliance docs."
        ]
      }
    ]
  },
  {
    title: "Everything In Sight",
    href: "#",
    id: "sight",
    lottie: "https://lottie.host/1e1e285d-c21d-4d51-9284-16f9e0e1e574/35HiCH5nBj.lottie",
    blurb: [
      {
        subheading: "What it means",
        body:
          "Everything In Sight is a single, clear view of your rentals where payments, messages, documents, and tasks live together with real-time status."
      },
      {
        subheading: "Why it matters",
        body: [
          "Information is scattered across email, chat, spreadsheets, and drives.",
          "Context switching creates delays, missed steps, and duplicate work.",
          "A single source of truth reduces effort and confusion for tenants, landlords, and agencies."
        ]
      },
      {
        subheading: "How it shows up in Stayra",
        body: [
          "Unified dashboard per property and tenancy with status chips for Due, Paid, Late, and Action Needed.",
          "Chronological timeline that threads payments, messages, documents, inspections, and notes.",
          "Global search across people, properties, invoices, and documents with fuzzy matching.",
          "Filters and saved views for Late payments, Expiring documents, Upcoming renewals, and Open issues.",
          "Inline quick actions: record payment, send reminder, request signature, share document, add note.",
          "Document drawer with versions, linked payments, signature status, and expiry alerts.",
          "Focused inbox that shows only relevant events with @mentions, read states, and snooze.",
          "Reports and exports including statements, rent roll, payout summaries, and audit-ready logs."
        ]
      },
      {
        subheading: "Signals that it's working",
        body: [
          "Less time spent hunting for information and fewer status pings.",
          "Higher first-contact resolution because context is visible.",
          "Fewer duplicate reminders and conflicting updates.",
          "More on-time actions because next steps are obvious."
        ]
      },
      {
        subheading: "Built-in guardrails",
        body: [
          "Role-based visibility so sensitive data is scoped to the right people.",
          "Field validation and state locks to prevent inconsistent records.",
          "Per-record activity log showing who did what and when."
        ]
      },
      {
        subheading: "What's next",
        body: [
          "Custom dashboards with drag-and-drop widgets and saved layouts.",
          "Cross-portfolio views for agencies and multi-landlords.",
          "Mobile push summaries for daily priorities and deadlines.",
          "Map and calendar views for inspections, viewings, and renewals."
        ]
      }
    ]
  },
  {
    title: "Beyond The Walls",
    href: "#",
    id: "wall",
    lottie: "https://lottie.host/f6b703ac-216e-4cfc-850c-5137438cc0e6/iniEJDTlQ5.lottie",
    blurb: [
      {
        subheading: "What it means",
        body:
          "Beyond The Walls is Stayra's discoverability layer: optional public listings and profiles that help the right people find you."
      },
      {
        subheading: "Why it matters",
        body: [
          "Vacancy is expensive; more qualified eyes mean faster, better matches.",
          "Tenants want transparent, up-to-date listings with clear status and verified profiles.",
          "Agencies and landlords need reach without juggling multiple portals and ad spend."
        ]
      },
      {
        subheading: "How it shows up in Stayra",
        body: [
          "One-click toggle to publish a property to a public, SEO-friendly page.",
          "Structured data and sitemap entries to improve search visibility.",
          "Shareable short links and QR codes for viewings and social posts.",
          "Inquiry forms with pre-screening questions and application intake.",
          "Verification badges for landlords and properties where enabled.",
          "Live listing status: Available, Under Offer, Let Agreed, or Let.",
          "Spam-protected contact flow with in-app relay and email pass-through."
        ]
      },
      {
        subheading: "Signals that it's working",
        body: [
          "Days on market trending down across listings.",
          "Higher ratio of qualified inquiries to total leads.",
          "Reduced ad spend per let and fewer no-shows.",
          "Faster time to let from first publish to contract signed."
        ]
      },
      {
        subheading: "Built-in guardrails",
        body: [
          "Privacy controls to hide exact address until a viewing is confirmed.",
          "Contact details protected behind a communications relay.",
          "Consent-based publishing with per-field visibility options.",
          "Moderation, takedown tools, and automatic expiry for stale listings.",
          "CAPTCHA and rate limits to block bots and spam."
        ]
      },
      {
        subheading: "What's next",
        body: [
          "Syndication to partner portals and social channels.",
          "Recommendations and similar property suggestions for tenants.",
          "Boosted listings and featured placements for time-sensitive lets.",
          "Geo-targeted alerts and saved search notifications.",
          "Open API and webhooks for agencies to push inventory at scale."
        ]
      }
    ]
  }
];
