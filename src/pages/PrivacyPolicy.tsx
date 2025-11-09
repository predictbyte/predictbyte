import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
            >
              <div className="space-y-8 text-foreground">
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At PredictByte, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our services, including Web Development, App Development, Digital Marketing, AI Solutions, and Custom Software (CRM & ERP) Development. By using our website and services, you agree to the practices described in this policy.
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We collect various types of information to provide and improve our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact details you provide when filling out forms, requesting quotes, or subscribing to our newsletter.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and browsing behavior on our website.</li>
                    <li><strong>Cookies and Analytics:</strong> We use cookies and similar technologies to track user interactions, analyze website traffic, and enhance user experience.</li>
                    <li><strong>Project Information:</strong> Details about your business requirements, project specifications, and any data shared during consultations or service delivery.</li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    PredictByte uses your information for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Service Delivery:</strong> To communicate with you, understand your requirements, and deliver high-quality solutions tailored to your needs.</li>
                    <li><strong>Improving Our Services:</strong> To analyze user behavior, optimize website performance, and enhance our service offerings.</li>
                    <li><strong>Marketing and Communication:</strong> To send promotional materials, newsletters, updates about new services, and relevant content (you can opt out at any time).</li>
                    <li><strong>Customer Support:</strong> To respond to inquiries, resolve issues, and provide technical assistance.</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and contractual obligations.</li>
                  </ul>
                </div>

                {/* Data Sharing and Disclosure */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    PredictByte values your privacy and does not sell your personal information. However, we may share your data in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Trusted Service Providers:</strong> We work with third-party vendors (e.g., hosting providers, analytics tools, payment processors) who assist us in delivering our services. These partners are bound by confidentiality agreements.</li>
                    <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental authority, we may disclose your information to comply with legal obligations.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity, subject to the same privacy protections.</li>
                  </ul>
                </div>

                {/* Cookies and Tracking */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies to improve user experience, analyze traffic, and enable certain functionalities. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences. However, disabling cookies may affect your ability to use certain features on our website. We also use analytics tools like Google Analytics to track website performance and user interactions.
                  </p>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PredictByte implements industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, secure servers, access controls, and regular security audits. However, no method of data transmission over the internet is completely secure, and we cannot guarantee absolute security. We encourage you to use strong passwords and take precautions when sharing sensitive information online.
                  </p>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
                    <li><strong>Correction:</strong> You can update or correct inaccurate or incomplete information.</li>
                    <li><strong>Deletion:</strong> You can request the deletion of your personal data, subject to legal and contractual obligations.</li>
                    <li><strong>Opt-Out:</strong> You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails.</li>
                    <li><strong>Data Portability:</strong> You can request your data in a structured, machine-readable format.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    To exercise any of these rights, please contact us at <a href="mailto:privacy@predictbyte.com" className="text-primary hover:underline">privacy@predictbyte.com</a>.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites and services. PredictByte is not responsible for the privacy practices or content of these external sites. We recommend reviewing the privacy policies of any third-party websites you visit.
                  </p>
                </div>

                {/* Updates to This Policy */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PredictByte reserves the right to update this Privacy Policy at any time to reflect changes in our practices, legal requirements, or business operations. Any updates will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your data. Continued use of our services after any changes constitutes your acceptance of the updated policy.
                  </p>
                </div>

                {/* Contact Us */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at:
                  </p>
                  <div className="mt-4 p-6 bg-secondary/20 rounded-lg">
                    <p className="text-foreground"><strong>PredictByte</strong></p>
                    <p className="text-muted-foreground">Email: <a href="mailto:privacy@predictbyte.com" className="text-primary hover:underline">privacy@predictbyte.com</a></p>
                    <p className="text-muted-foreground">Phone: <a href="tel:+917302227370" className="text-primary hover:underline">+91 7302227370</a></p>
                    <p className="text-muted-foreground">Address: H-140 4 floor Office No-402, Sector 63, Noida, India-201305</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
