export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about the DS‑160 and the U.S. visa process',
};

interface FAQ {
  question: string;
  answer: JSX.Element;
}

const faqs: FAQ[] = [
  {
    question: 'What is the DS‑160?',
    answer: (
      <p>
        The DS‑160 is the online non‑immigrant visa application form used by the U.S.
        Department of State. It collects your personal information, travel plans
        and security history, and must be completed by each applicant—including
        children—before you can schedule a visa interview【582395398831132†L80-L123】. The form is
        submitted through the Consular Electronic Application Center (CEAC).
      </p>
    ),
  },
  {
    question: 'Where do I file the DS‑160?',
    answer: (
      <p>
        You file the DS‑160 online through the CEAC website at{' '}
        <a href="https://ceac.state.gov" className="underline text-blue-700">ceac.state.gov</a>. After
        submitting the form, print the confirmation page with the barcode; you
        will need this to schedule your visa appointment and bring it to your
        interview【582395398831132†L237-L276】.
      </p>
    ),
  },
  {
    question: 'What are the steps to schedule a visa interview?',
    answer: (
      <p>
        Once you have your DS‑160 confirmation, pay the visa application fee
        (also called the MRV fee) and create an account on the Visa Appointment
        Service website (ais.usvisa-info.com). Enter your DS‑160 confirmation
        number and choose an available date at the U.S. embassy or consulate
        where you will interview【773686817609439†L288-L324】. Wait times vary by visa category and
        location; for example, in London the visitor (B1/B2) wait is around 90
        days, while student visas often have much shorter waits【399386585920852†L133-L170】. Plan
        ahead and schedule early.
      </p>
    ),
  },
  {
    question: 'How much is the visa application fee?',
    answer: (
      <p>
        As of mid‑2025 the U.S. Department of State charges different fees
        depending on the visa category. Non‑petition‑based visas such as
        B1/B2 tourist and F‑1 student visas cost $185. Petition‑based worker
        visas (H, L, O, P, Q and R) cost $205, and E treaty investor visas cost
        $315【339123271819074†L762-L766】. These fees are non‑refundable and may change, so
        always check the official fee schedule before paying.
      </p>
    ),
  },
  {
    question: 'What common mistakes should I avoid on the DS‑160?',
    answer: (
      <p>
        Double‑check spellings and dates, ensure your answers match supporting
        documents, disclose all previous U.S. travel and visa refusals, and
        provide a compliant photo【582395398831132†L211-L223】. Once submitted, the DS‑160 cannot be
        edited; if you discover an error you may need to complete a new form
        and bring both confirmation pages to your interview【582395398831132†L243-L276】.
      </p>
    ),
  },
  {
    question: 'How long does processing take after my interview?',
    answer: (
      <p>
        After a successful interview your passport is usually returned within
        3–5 working days, plus another few days for delivery【773686817609439†L284-L286】. In some
        cases additional administrative processing may add weeks of delay【399386585920852†L256-L263】.
        You should not make irreversible travel plans until you have received
        your passport with the visa.
      </p>
    ),
  },
];

// Build a structured data object for FAQPage.  Schema.org defines a
// FAQPage type with mainEntity entries consisting of Question and
// Answer objects.  This helps search engines present rich results.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the DS‑160?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The DS‑160 is the online non‑immigrant visa application form used by the U.S. Department of State. It collects personal information, travel plans and security history and must be completed by each applicant—including children—before scheduling a visa interview. The form is submitted through the Consular Electronic Application Center (CEAC).',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I file the DS‑160?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'You file the DS‑160 online through the CEAC website (ceac.state.gov). After submitting, print the confirmation page with the barcode; you will need this to schedule your visa appointment and bring it to your interview.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the steps to schedule a visa interview?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Once you have your DS‑160 confirmation, pay the visa application (MRV) fee and create an account on the Visa Appointment Service website (ais.usvisa-info.com). Enter your DS‑160 confirmation number and choose an available appointment at your chosen embassy or consulate. Wait times vary by visa category and location—for example, London has around 90 days for B1/B2 visitors while student visas often have shorter waits—so plan ahead.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is the visa application fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'As of mid‑2025 the U.S. Department of State charges different fees depending on the visa category. Non‑petition‑based visas such as B1/B2 tourist and F‑1 student visas cost $185, petition‑based worker visas (H, L, O, P, Q and R) cost $205, and E treaty investor visas cost $315. These fees are non‑refundable and may change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What common mistakes should I avoid on the DS‑160?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Double‑check spellings and dates, ensure your answers match supporting documents, disclose all previous U.S. travel and visa refusals, and provide a compliant photo. Once submitted, the DS‑160 cannot be edited; if you discover an error you may need to complete a new form and bring both confirmation pages to your interview.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does processing take after my interview?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'After a successful interview your passport is usually returned within 3–5 working days plus a few days for delivery. In some cases additional administrative processing may add weeks of delay. Do not make irreversible travel plans until you have received your passport with the visa.',
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
            <div className="text-sm text-gray-700">{faq.answer}</div>
          </div>
        ))}
      </div>
      {/* Inject structured data for FAQ rich snippets */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}