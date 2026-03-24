import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | move-ment",
  description: "Privacy notice for Move-ment Company Ltd.",
};

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-mono text-xs tracking-[0.2em] text-accent-warm">{num}</span>
        <h2 className="text-lg font-black text-neutral-900 uppercase tracking-wide">{title}</h2>
      </div>
      <div className="border-l-2 border-neutral-100 pl-6 space-y-4 text-neutral-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Short({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-mono text-neutral-400 italic">
      <span className="text-accent-warm not-italic font-bold">In Short:</span> {children}
    </p>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 leading-none">
            Privacy Notice<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-white/40 mt-4 text-sm font-mono">Last updated October 20, 2022</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-neutral-600 leading-relaxed mb-4">
            This privacy notice for <strong className="text-neutral-900">Move-ment Company Ltd</strong> (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;), describes how and why we might collect, store, use, and/or share (&apos;process&apos;) your information when you use our services (&apos;Services&apos;), such as when you:
          </p>
          <ul className="list-disc list-inside space-y-1 text-neutral-600 mb-6 pl-2">
            <li>Visit our website at <a href="https://www.move-ment.co" className="underline hover:text-accent-warm transition-colors">https://www.move-ment.co</a>, or any website of ours that links to this privacy notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
            <a href="mailto:we-are@move-ment.co" className="text-accent-warm underline">we-are@move-ment.co</a>.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 px-4 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Overview</span>
          <h2 className="text-xl font-black text-neutral-900 mt-2 mb-6">Summary of Key Points</h2>
          <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
            {[
              { q: "What personal information do we process?", a: "When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Move-ment Company Ltd and the Services, the choices you make, and the products and features you use." },
              { q: "Do we process any sensitive personal information?", a: "We do not process sensitive personal information." },
              { q: "Do we receive any information from third parties?", a: "We do not receive any information from third parties." },
              { q: "How do we process your information?", a: "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent." },
              { q: "In what situations and with which parties do we share personal information?", a: "We may share information in specific situations and with specific third parties." },
              { q: "How do we keep your information safe?", a: "We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure." },
              { q: "What are your rights?", a: "Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information." },
              { q: "How do you exercise your rights?", a: "The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws." },
            ].map((item) => (
              <div key={item.q} className="border-l-4 border-accent-warm/20 pl-4">
                <p className="font-semibold text-neutral-800 mb-1">{item.q}</p>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-4 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Contents</span>
          <h2 className="text-xl font-black text-neutral-900 mt-2 mb-6">Table of Contents</h2>
          <ol className="space-y-2 text-sm text-neutral-600">
            {[
              "WHAT INFORMATION DO WE COLLECT?",
              "HOW DO WE PROCESS YOUR INFORMATION?",
              "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
              "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
              "HOW LONG DO WE KEEP YOUR INFORMATION?",
              "HOW DO WE KEEP YOUR INFORMATION SAFE?",
              "DO WE COLLECT INFORMATION FROM MINORS?",
              "WHAT ARE YOUR PRIVACY RIGHTS?",
              "CONTROLS FOR DO-NOT-TRACK FEATURES",
              "DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
              "DO WE MAKE UPDATES TO THIS NOTICE?",
              "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
              "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-accent-warm text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Full sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">

          <Section num="01." title="What Information Do We Collect?">
            <Short>We collect personal information that you provide to us.</Short>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            <p><strong className="text-neutral-800">Personal Information Provided by You.</strong> The personal information we collect may include the following:</p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>names</li>
              <li>email addresses</li>
            </ul>
            <p><strong className="text-neutral-800">Sensitive Information.</strong> We do not process sensitive information.</p>
            <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
            <Short>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</Short>
            <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and other technical information.</p>
            <p><strong className="text-neutral-800">Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services, which may include your IP address, device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</p>
            <p><strong className="text-neutral-800">Location Data.</strong> We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. You can opt out of allowing us to collect this information by disabling your Location setting on your device.</p>
          </Section>

          <Section num="02." title="How Do We Process Your Information?">
            <Short>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</Short>
            <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
            <p><strong className="text-neutral-800">To save or protect an individual&apos;s vital interest.</strong> We may process your information when necessary to save or protect an individual&apos;s vital interest, such as to prevent harm.</p>
          </Section>

          <Section num="03." title="What Legal Bases Do We Rely On to Process Your Information?">
            <Short>We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.</Short>
            <p>If you are located in the EU or UK, the GDPR and UK GDPR require us to explain the valid legal bases we rely on. We may rely on the following:</p>
            <p><strong className="text-neutral-800">Consent.</strong> We may process your information if you have given us permission to use your personal information for a specific purpose. You can withdraw your consent at any time.</p>
            <p><strong className="text-neutral-800">Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</p>
            <p><strong className="text-neutral-800">Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</p>
          </Section>

          <Section num="04." title="When and With Whom Do We Share Your Personal Information?">
            <Short>We may share information in specific situations described in this section and/or with the following third parties.</Short>
            <p><strong className="text-neutral-800">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
          </Section>

          <Section num="05." title="How Long Do We Keep Your Information?">
            <Short>We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</Short>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.</p>
            <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or securely store your personal information and isolate it from any further processing until deletion is possible.</p>
          </Section>

          <Section num="06." title="How Do We Keep Your Information Safe?">
            <Short>We aim to protect your personal information through a system of organisational and technical security measures.</Short>
            <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
            <p>Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
          </Section>

          <Section num="07." title="Do We Collect Information from Minors?">
            <Short>We do not knowingly collect data from or market to children under 18 years of age.</Short>
            <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services.</p>
            <p>If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:chris@move-ment.co" className="text-accent-warm underline">chris@move-ment.co</a>.</p>
          </Section>

          <Section num="08." title="What Are Your Privacy Rights?">
            <Short>In some regions, such as the EEA and UK, you have rights that allow you greater access to and control over your personal information.</Short>
            <p>In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.</p>
            <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority.</p>
            <p><strong className="text-neutral-800">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us using the contact details below.</p>
            <p>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:we-are@move-ment.co" className="text-accent-warm underline">we-are@move-ment.co</a>.</p>
          </Section>

          <Section num="09." title="Controls for Do-Not-Track Features">
            <p>Most web browsers and some mobile operating systems include a Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>
          </Section>

          <Section num="10." title="Do California Residents Have Specific Privacy Rights?">
            <Short>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</Short>
            <p>California Civil Code Section 1798.83, also known as the &apos;Shine The Light&apos; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes.</p>
            <p><strong className="text-neutral-800">CCPA Privacy Notice</strong></p>
            <p>Move-ment Company Ltd has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Move-ment Company Ltd will not sell personal information in the future belonging to website visitors, users, and other consumers.</p>
            <p><strong className="text-neutral-800">Your rights with respect to your personal data:</strong></p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Right to request deletion of the data</li>
              <li>Right to be informed — Request to know</li>
              <li>Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy Rights</li>
              <li>You may object to the processing of your personal information</li>
              <li>You may request correction of your personal data if it is incorrect or no longer relevant</li>
              <li>You may request to opt out from future selling of your personal information to third parties</li>
            </ul>
            <p>To exercise these rights, you can contact us by email at <a href="mailto:we-are@move-ment.co" className="text-accent-warm underline">we-are@move-ment.co</a>.</p>
          </Section>

          <Section num="11." title="Do We Make Updates to This Notice?">
            <Short>Yes, we will update this notice as necessary to stay compliant with relevant laws.</Short>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated &apos;Revised&apos; date and will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
          </Section>

          <Section num="12." title="How Can You Contact Us About This Notice?">
            <p>If you have questions or comments about this notice, you may email us at <a href="mailto:chris@move-ment.co" className="text-accent-warm underline">chris@move-ment.co</a> or by post to:</p>
            <div className="bg-neutral-50 border border-neutral-200 p-4 font-mono text-xs text-neutral-600 not-italic">
              Move-ment Company Ltd<br />
              1-18-5-503<br />
              Higashi Gotanda<br />
              Shinagawa, Tokyo 141-0022<br />
              Japan
            </div>
          </Section>

          <Section num="13." title="How Can You Review, Update, or Delete the Data We Collect from You?">
            <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please contact us using the details in section 12 above.</p>
          </Section>

        </div>
      </section>
    </div>
  );
}
