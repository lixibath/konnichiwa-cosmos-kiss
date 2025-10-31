import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "services", title: "Services Provided" },
    { id: "scheduling", title: "Scheduling and Access" },
    { id: "pricing", title: "Pricing and Payment" },
    { id: "cancellation", title: "Cancellation Policy" },
    { id: "client-responsibilities", title: "Client Responsibilities" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "insurance", title: "Insurance and Damages" },
    { id: "confidentiality", title: "Confidentiality" },
    { id: "termination", title: "Termination" },
    { id: "warranties", title: "Warranties and Disclaimers" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Please read these terms carefully before using our cleaning services.
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
            
            {/* Acceptance of Terms */}
            <Card id="acceptance" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and MJ Davison Professional Cleaning Services ("Company," "we," "us," or "our"). By scheduling, booking, or using our cleaning services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, please do not use our services. We reserve the right to refuse service to anyone for any reason at any time.
                </p>
              </div>
            </Card>

            {/* Services Provided */}
            <Card id="services" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">2. Services Provided</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MJ Davison Professional Cleaning Services provides residential and commercial cleaning services in Queens, NY, and surrounding areas. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Regular residential cleaning (weekly, bi-weekly, monthly)</li>
                  <li>Deep cleaning services</li>
                  <li>Commercial and office cleaning</li>
                  <li>Move-in and move-out cleaning</li>
                  <li>Post-construction cleaning</li>
                  <li>Specialized cleaning services as agreed upon</li>
                </ul>
                <p className="mt-4">
                  The specific scope of services will be determined during the initial consultation and confirmed in your service agreement. Any additional services beyond the agreed scope may be subject to additional charges.
                </p>
              </div>
            </Card>

            {/* Scheduling and Access */}
            <Card id="scheduling" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">3. Scheduling and Property Access</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Scheduling</h3>
                <p>
                  Service appointments are scheduled by mutual agreement. We will make every effort to accommodate your preferred date and time. For recurring services, a regular schedule will be established based on your needs.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-4">Property Access</h3>
                <p>
                  You are responsible for providing our team with access to your property at the scheduled time. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Being present to let our team in</li>
                  <li>Providing a key, access code, or lockbox</li>
                  <li>Arranging for a building superintendent or doorman to grant access</li>
                </ul>
                <p className="mt-4">
                  If our team cannot access the property at the scheduled time due to Client-related issues, a missed appointment fee of $50-100 (depending on service type) may be charged.
                </p>
              </div>
            </Card>

            {/* Pricing and Payment */}
            <Card id="pricing" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">4. Pricing and Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Pricing</h3>
                <p>
                  Service prices are provided in your initial quote and may vary based on:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Size and condition of the property</li>
                  <li>Type and frequency of service</li>
                  <li>Specific services requested</li>
                  <li>Special circumstances (extreme clutter, pet hair, etc.)</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-4">Payment</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due upon completion of service unless otherwise arranged</li>
                  <li>We accept credit cards, debit cards, checks, and cash</li>
                  <li>Recurring clients may set up automatic billing</li>
                  <li>A 5% convenience fee may apply to credit card transactions</li>
                  <li>Late payments (over 15 days) may incur a $25 late fee and 1.5% monthly interest</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-4">Price Adjustments</h3>
                <p>
                  If the condition of the property significantly differs from the initial assessment, we reserve the right to adjust pricing. You will be notified of any additional charges before they are incurred.
                </p>
              </div>
            </Card>

            {/* Cancellation Policy */}
            <Card id="cancellation" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">5. Cancellation and Rescheduling Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Cancellations by Client</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>48+ hours notice:</strong> No cancellation fee</li>
                  <li><strong>24-48 hours notice:</strong> 50% of service fee charged</li>
                  <li><strong>Less than 24 hours:</strong> Full service fee charged</li>
                  <li><strong>No-show:</strong> Full service fee charged plus $50 administrative fee</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-4">Rescheduling</h3>
                <p>
                  Appointments may be rescheduled without penalty if notice is provided at least 48 hours in advance. We will make every effort to accommodate your new preferred date and time.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-4">Cancellations by Company</h3>
                <p>
                  We reserve the right to cancel or reschedule services due to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Severe weather conditions</li>
                  <li>Emergency situations</li>
                  <li>Staff illness or unavailability</li>
                  <li>Unsafe working conditions</li>
                </ul>
                <p className="mt-2">
                  In such cases, we will notify you as soon as possible and reschedule at no additional charge.
                </p>
              </div>
            </Card>

            {/* Client Responsibilities */}
            <Card id="client-responsibilities" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">6. Client Responsibilities</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To ensure efficient and effective service, clients are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Preparation:</strong> Removing clutter, personal items, and valuables from surfaces to be cleaned</li>
                  <li><strong>Safety:</strong> Securing pets in a safe area away from the cleaning team</li>
                  <li><strong>Utilities:</strong> Ensuring water, electricity, and heat are available and functional</li>
                  <li><strong>Special Instructions:</strong> Communicating any special requirements or areas of concern before service</li>
                  <li><strong>Damage Reporting:</strong> Reporting any damage or concerns within 24 hours of service</li>
                  <li><strong>Safe Environment:</strong> Providing a safe working environment free from hazardous conditions</li>
                  <li><strong>Supplies:</strong> Providing basic cleaning supplies if you prefer we use your products</li>
                </ul>
                <p className="mt-4">
                  Failure to meet these responsibilities may result in additional charges, incomplete service, or service refusal.
                </p>
              </div>
            </Card>

            {/* Limitation of Liability */}
            <Card id="liability" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">7. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, MJ Davison Professional Cleaning Services shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Damage to items not properly secured or removed prior to cleaning</li>
                  <li>Pre-existing damage to property, surfaces, or items</li>
                  <li>Damage caused by defective or worn surfaces, fixtures, or items</li>
                  <li>Fading or discoloration of surfaces due to previous damage or age</li>
                  <li>Loss of or damage to cash, jewelry, art, collectibles, or other valuables left unsecured</li>
                  <li>Damage caused by pets during service</li>
                  <li>Consequential, indirect, incidental, or punitive damages</li>
                </ul>
                <p className="mt-4">
                  <strong>Maximum Liability:</strong> Our total liability for any claim arising from our services shall not exceed the amount paid for the specific service in question.
                </p>
              </div>
            </Card>

            {/* Insurance and Damages */}
            <Card id="insurance" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">8. Insurance and Damage Claims</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MJ Davison Professional Cleaning Services carries comprehensive general liability insurance and workers' compensation coverage.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-4">Reporting Damage</h3>
                <p>
                  If you believe damage has occurred during our service:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Notify us within 24 hours of service completion</li>
                  <li>Provide photos and detailed description of the damage</li>
                  <li>Allow us to inspect the damage</li>
                  <li>Cooperate with our insurance claim process if applicable</li>
                </ul>
                <p className="mt-4">
                  Claims reported more than 24 hours after service may not be honored. We will investigate all claims promptly and work with you to resolve the issue fairly.
                </p>
              </div>
            </Card>

            {/* Confidentiality */}
            <Card id="confidentiality" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">9. Confidentiality and Privacy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We respect your privacy and maintain strict confidentiality regarding:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access codes, keys, and entry information</li>
                  <li>Property layouts and security systems</li>
                  <li>Personal information and belongings</li>
                  <li>Business information for commercial clients</li>
                </ul>
                <p className="mt-4">
                  All employees undergo background checks and sign confidentiality agreements. For more information about how we handle your data, please review our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </Card>

            {/* Termination */}
            <Card id="termination" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">10. Termination of Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Termination by Client</h3>
                <p>
                  You may terminate recurring services at any time by providing 7 days' written notice. One-time services cannot be terminated within 24 hours of the scheduled appointment without incurring cancellation fees.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-4">Termination by Company</h3>
                <p>
                  We reserve the right to terminate services immediately if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment terms are not met</li>
                  <li>Property conditions are unsafe for our team</li>
                  <li>Client behavior is abusive, threatening, or inappropriate</li>
                  <li>Property contains illegal substances or activities</li>
                  <li>Client repeatedly fails to provide access</li>
                </ul>
              </div>
            </Card>

            {/* Warranties and Disclaimers */}
            <Card id="warranties" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">11. Warranties and Disclaimers</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Service Guarantee</h3>
                <p>
                  We guarantee satisfaction with our cleaning services. If you are not completely satisfied, notify us within 24 hours and we will return to re-clean the areas of concern at no additional charge.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-4">Disclaimers</h3>
                <p>
                  EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT GUARANTEE THAT ALL STAINS, ODORS, OR CONDITIONS CAN BE REMOVED OR THAT SURFACES WILL BE RESTORED TO ORIGINAL CONDITION.
                </p>
              </div>
            </Card>

            {/* Governing Law */}
            <Card id="governing-law" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">12. Governing Law and Dispute Resolution</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-4">Dispute Resolution</h3>
                <p>
                  Any disputes arising from these Terms or our services shall be resolved through:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Good faith negotiation between the parties</li>
                  <li>Mediation, if negotiation fails</li>
                  <li>Binding arbitration in Queens County, New York, if mediation fails</li>
                </ol>
                <p className="mt-4">
                  <strong>Jurisdiction:</strong> Any legal action must be brought in the state or federal courts located in Queens County, New York, and you consent to the exclusive jurisdiction of such courts.
                </p>
              </div>
            </Card>

            {/* Changes to Terms */}
            <Card id="changes" className="p-8 scroll-mt-32">
              <h2 className="text-2xl font-heading font-bold mb-4">13. Changes to These Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
                </p>
                <p>
                  For significant changes, we will attempt to provide notice via email or through our website. We encourage you to review these Terms periodically.
                </p>
              </div>
            </Card>

            {/* Contact Information */}
            <Card id="contact" className="p-8 scroll-mt-32 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-heading font-bold mb-4">14. Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions about these Terms of Service, please contact us:
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
                  <p className="text-sm mt-4">
                    <strong className="text-foreground">Business Hours:</strong><br />
                    Monday - Friday: 7:00 AM - 7:00 PM<br />
                    Saturday: 8:00 AM - 5:00 PM<br />
                    Sunday: Closed
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
            Ready to schedule your cleaning service?
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Terms;
