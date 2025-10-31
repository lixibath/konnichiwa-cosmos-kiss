import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "cookies", title: "Cookies and Tracking" },
    { id: "data-sharing", title: "Data Sharing and Disclosure" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Privacy Rights" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> October 20, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 border-b bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-3">Quick Navigation:</p>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <Card id="introduction" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">1. Introduction</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MJ Davison Professional Cleaning Services ("we," "us," "our," or "Company") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our cleaning services.
                </p>
                <p>
                  By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>
            </Card>

            {/* Information We Collect */}
            <Card id="information-we-collect" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                  <li><strong>Service Information:</strong> Property address, service preferences, cleaning schedule, special instructions</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through third-party payment processors)</li>
                  <li><strong>Account Information:</strong> Username, password, and other registration details if you create an account</li>
                  <li><strong>Communication Records:</strong> Records of your communications with us, including emails, phone calls, and text messages</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, time spent on pages</li>
                  <li><strong>Location Data:</strong> Approximate location based on IP address or precise location if you grant permission</li>
                  <li><strong>Cookies and Similar Technologies:</strong> Data collected through cookies, web beacons, and similar tracking technologies</li>
                </ul>
              </div>
            </Card>

            {/* How We Use Your Information */}
            <Card id="how-we-use" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Delivery:</strong> To schedule, perform, and manage cleaning services at your property</li>
                  <li><strong>Communication:</strong> To contact you about your service, respond to inquiries, and send important notices</li>
                  <li><strong>Payment Processing:</strong> To process payments and manage billing</li>
                  <li><strong>Service Improvement:</strong> To understand how you use our services and improve our offerings</li>
                  <li><strong>Marketing:</strong> To send you promotional materials about our services (you can opt-out at any time)</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                  <li><strong>Safety and Security:</strong> To protect against fraud, unauthorized access, and other security issues</li>
                </ul>
              </div>
            </Card>

            {/* Cookies and Tracking */}
            <Card id="cookies" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">4. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground">Types of Cookies We Use:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and choices</li>
                  <li><strong>Marketing Cookies:</strong> Track your visits across websites to deliver relevant advertisements</li>
                </ul>

                <p className="mt-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>
            </Card>

            {/* Data Sharing */}
            <Card id="data-sharing" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">5. Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processors, scheduling software, marketing platforms)</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of company assets</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, or that of our customers or others</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </Card>

            {/* Data Security */}
            <Card id="data-security" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">6. Data Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data during transmission (SSL/TLS)</li>
                  <li>Secure storage of personal information on protected servers</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information by authorized personnel only</li>
                  <li>Employee training on data protection and privacy practices</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </Card>

            {/* Your Rights */}
            <Card id="your-rights" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">7. Your Privacy Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Under applicable privacy laws, including GDPR and CCPA, you have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Right to Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                  <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications at any time</li>
                  <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your information</li>
                  <li><strong>Right to Object:</strong> Object to our processing of your personal information</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request within 30 days.
                </p>
              </div>
            </Card>

            {/* Children's Privacy */}
            <Card id="children" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">8. Children's Privacy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information from our records.
                </p>
              </div>
            </Card>

            {/* Changes to Policy */}
            <Card id="changes" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">9. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically. Your continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.
                </p>
              </div>
            </Card>

            {/* Contact Us */}
            <Card id="contact" className="p-8 scroll-mt-32 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-heading font-bold mb-4">10. Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-background p-6 rounded-lg space-y-3">
                  <p><strong className="text-foreground">MJ Davison Professional Cleaning Services</strong></p>
                  <p>45-12 Queens Boulevard<br />Long Island City, NY 11101</p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:contact@cleaningmj.com" className="text-primary hover:underline">
                      contact@cleaningmj.com
                    </a>
                  </p>
                  <p>Phone: <a href="tel:+19294624627" className="text-primary hover:underline">(929) 462-4627</a></p>
                  <p className="text-sm">
                    For privacy-related inquiries, please include "Privacy Request" in the subject line.
                  </p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-primary/5 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Have questions about our services?
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
