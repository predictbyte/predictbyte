import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
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
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Terms of Service
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
                    Welcome to PredictByte. These Terms of Service ("Terms") govern your access to and use of our website, services, and products, including Web Development, App Development, Digital Marketing, AI Solutions, and Custom Software (CRM & ERP) Development. By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please discontinue use of our services immediately.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using PredictByte's website or engaging with our services, you acknowledge that you have read, understood, and agree to comply with these Terms of Service. These Terms constitute a legally binding agreement between you and PredictByte. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                  </p>
                </div>

                {/* Use of Services */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You agree to use our website and services in a lawful and responsible manner. Specifically, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate, complete, and current information when requested.</li>
                    <li>Use our services only for legitimate business purposes.</li>
                    <li>Comply with all applicable laws, regulations, and third-party rights.</li>
                    <li>Not engage in any activity that disrupts or interferes with our services or servers.</li>
                  </ul>
                </div>

                {/* Intellectual Property Rights */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, materials, logos, trademarks, designs, graphics, text, and software available on the PredictByte website are the exclusive property of PredictByte or its licensors and are protected by intellectual property laws. You may not copy, reproduce, distribute, modify, or create derivative works from any content on our website without our prior written consent. Any unauthorized use of our intellectual property may result in legal action.
                  </p>
                </div>

                {/* User Obligations */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">User Obligations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    As a user of PredictByte's services, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Engage in hacking, data scraping, or any form of unauthorized access to our systems.</li>
                    <li>Upload or transmit malicious software, viruses, or harmful code.</li>
                    <li>Use our services for illegal activities, fraud, or any purpose that violates these Terms.</li>
                    <li>Impersonate PredictByte, its employees, or any other individual or entity.</li>
                    <li>Attempt to reverse-engineer, decompile, or extract source code from our software or applications.</li>
                    <li>Use automated tools (bots, scrapers, etc.) to access or extract data from our website without permission.</li>
                  </ul>
                </div>

                {/* Payments and Billing */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Payments and Billing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you engage PredictByte for paid services, you agree to the pricing, payment terms, and billing arrangements outlined in your service agreement or invoice. Payments must be made in accordance with the agreed schedule. Late payments may result in service suspension or termination. All fees are non-refundable unless otherwise stated in a separate agreement. PredictByte reserves the right to modify pricing for future services with prior notice.
                  </p>
                </div>

                {/* Disclaimer of Warranties */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PredictByte's website and services are provided on an "as is" and "as available" basis. While we strive to deliver high-quality solutions, we do not guarantee that our services will be error-free, uninterrupted, or completely secure. We make no warranties, express or implied, regarding the accuracy, reliability, or completeness of any content or services. You use our services at your own risk.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the fullest extent permitted by law, PredictByte, its directors, employees, partners, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services. This includes, but is not limited to, loss of data, revenue, profits, or business opportunities. In no event shall PredictByte's total liability exceed the amount paid by you for the specific service in question.
                  </p>
                </div>

                {/* Termination */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PredictByte reserves the right to suspend or terminate your access to our services at any time, with or without notice, for any reason, including but not limited to violations of these Terms, fraudulent activity, or non-payment. Upon termination, all licenses and rights granted to you under these Terms will immediately cease. You may also terminate your use of our services at any time by discontinuing access to our website and notifying us in writing.
                  </p>
                </div>

                {/* Changes to Terms */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PredictByte reserves the right to update, modify, or revise these Terms of Service at any time. Any changes will be posted on this page with a revised "Last Updated" date. Your continued use of our services after any changes constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed of any modifications.
                  </p>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from or related to these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh, India. You agree to submit to the personal jurisdiction of such courts for the purpose of resolving any such disputes.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions, concerns, or legal inquiries regarding these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-4 p-6 bg-secondary/20 rounded-lg">
                    <p className="text-foreground"><strong>PredictByte</strong></p>
                    <p className="text-muted-foreground">Email: <a href="mailto:legal@predictbyte.com" className="text-primary hover:underline">legal@predictbyte.com</a></p>
                    <p className="text-muted-foreground">Phone: <a href="tel:+917302227370" className="text-primary hover:underline">+91 7302227370</a></p>
                    <p className="text-muted-foreground">Address: H-140 4 floor Office No-402, Sector 63, Noida, India-201305</p>
                  </div>
                </div>

                {/* Final Note */}
                <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    By using PredictByte's services, you acknowledge that you have read, understood, and agreed to these Terms of Service. We appreciate your trust in PredictByte and look forward to delivering exceptional technology solutions for your business.
                  </p>
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

export default TermsOfService;
