import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";

const LegalResources: React.FC = () => {
  /* ---------- modal state & expert list ---------- */
  const [isExpertModalOpen, setIsExpertModalOpen] = React.useState(false);

  const legalExperts = [
    {
      name: "Adv. Shalini Kapoor",
      specialization: "Family & Matrimonial Law",
      experience: 12,
      phone: "+91 98765 43210",
      email: "shalini.kapoor@lawfirm.com",
      address: "Chamber 23, Patiala House Courts, New Delhi",
      workplace: "Delhi District Courts",
    },
    {
      name: "Adv. Ramesh Iyer",
      specialization: "Property & Succession",
      experience: 15,
      phone: "+91 91234 56789",
      email: "r.iyer@heritagelaw.in",
      address: "401, Lotus Towers, Nariman Point, Mumbai",
      workplace: "Bombay High Court",
    },
    {
      name: "Adv. Ananya Sen",
      specialization: "Workplace Harassment (POSH)",
      experience: 8,
      phone: "+91 96543 21098",
      email: "ananya.sen@poshhelp.org",
      address: "D-12, Salt Lake Sector V, Kolkata",
      workplace: "Calcutta High Court",
    },
    {
      name: "Adv. Priya Nair",
      specialization: "Criminal Law – Women’s Safety",
      experience: 10,
      phone: "+91 99887 76655",
      email: "priya.nair@defenselaw.in",
      address: "Bench No. 7, Ernakulam Court Complex, Kochi",
      workplace: "Kerala High Court",
    },
    {
      name: "Adv. Kavitha Reddy",
      specialization: "Dowry & Domestic Violence",
      experience: 14,
      phone: "+91 95555 33445",
      email: "kavitha.reddy@justice4women.in",
      address: "Flat 2B, Indiranagar, Bengaluru",
      workplace: "Karnataka High Court",
    },
  ];

  /* ---------- UI ---------- */
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Legal Resources for Women
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Access comprehensive information about your legal rights, protections,
            and resources available in India.
          </p>
        </div>
      </section>

           {/* Main Content */}
      <section className="page-container">
        <Tabs defaultValue="family" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="family">Family Laws</TabsTrigger>
            <TabsTrigger value="property">Property Rights</TabsTrigger>
            <TabsTrigger value="workplace">Workplace Rights</TabsTrigger>
            <TabsTrigger value="criminal">Criminal Laws</TabsTrigger>
          </TabsList>
          
          <TabsContent value="family" className="mt-6">
            <h2 className="section-title">Family Laws</h2>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Marriage and Divorce Laws</CardTitle>
                  <CardDescription>Legal provisions regarding marriage, divorce, and maintenance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Hindu Marriage Act, 1955</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">The Hindu Marriage Act governs marriages between Hindus, Buddhists, Jains, and Sikhs.</p>
                        <p className="mb-2"><strong>Key provisions:</strong></p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Legal age for marriage: 18 years for women and 21 years for men</li>
                          <li>Registration of marriages</li>
                          <li>Grounds for divorce including cruelty, desertion, conversion, etc.</li>
                          <li>Provisions for maintenance and alimony</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Special Marriage Act, 1954</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">The Special Marriage Act allows for civil marriages regardless of religion.</p>
                        <p className="mb-2"><strong>Key provisions:</strong></p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Marriage registration without religious ceremonies</li>
                          <li>Applicable to any citizen of India regardless of faith</li>
                          <li>Similar grounds for divorce as the Hindu Marriage Act</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Protection of Women from Domestic Violence Act, 2005</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">This act provides protection against domestic violence in any domestic relationship.</p>
                        <p className="mb-2"><strong>Key provisions:</strong></p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Broad definition of domestic violence including physical, sexual, verbal, emotional, and economic abuse</li>
                          <li>Protection orders against the abuser</li>
                          <li>Right to reside in the shared household</li>
                          <li>Monetary relief and compensation</li>
                          <li>Custody orders for children</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Download Family Law Guide</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Maintenance Rights</CardTitle>
                  <CardDescription>Understanding rights to financial support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Under Section 125 of the Code of Criminal Procedure, women have the right to claim maintenance from their husband if they are unable to maintain themselves. Additionally, different personal laws provide for maintenance rights.</p>
                  
                  <h4 className="font-semibold mb-2">Key Provisions:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Right to claim maintenance during and after marriage</li>
                    <li>Interim maintenance during pending legal proceedings</li>
                    <li>Maintenance for children</li>
                    <li>Factors considered for determining maintenance amount (income, standard of living, etc.)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="property" className="mt-6">
            <h2 className="section-title">Property Rights</h2>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hindu Succession (Amendment) Act, 2005</CardTitle>
                  <CardDescription>Equal inheritance rights for daughters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Hindu Succession (Amendment) Act, 2005 was a landmark reform that gave daughters equal inheritance rights in ancestral property. Prior to this amendment, only sons had a right to ancestral property.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Points:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Daughters have the same rights as sons in ancestral property</li>
                    <li>Rights apply to daughters born before or after the amendment</li>
                    <li>Daughter becomes a coparcener by birth</li>
                    <li>Right exists regardless of marital status</li>
                  </ul>
                  
                  <div className="bg-brand-purple bg-opacity-10 p-4 rounded-md mt-4">
                    <h5 className="font-semibold text-brand-purple-dark">Case Reference:</h5>
                    <p>
                      In <span className="italic">Vineeta Sharma vs. Rakesh Sharma (2020)</span>, the Supreme Court clarified that the daughters' right to ancestral property does not depend on whether the father was alive when the 2005 amendment came into force.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Streedhan and Matrimonial Property</CardTitle>
                  <CardDescription>Rights to property given during marriage</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Streedhan:</h4>
                  <p className="mb-4">
                    Streedhan refers to gifts, jewelry, and property that a woman receives during her marriage - before, during, or after the wedding ceremony. It includes gifts from relatives, friends, and in-laws.
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>A woman has absolute ownership over her streedhan</li>
                    <li>She has the right to alienate this property without her husband's consent</li>
                    <li>Husband or in-laws holding streedhan are considered trustees</li>
                    <li>Legal remedies available if streedhan is denied or misappropriated</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2">Matrimonial Property:</h4>
                  <p>
                    India does not have a comprehensive regime for division of matrimonial property upon divorce. The concept of community property or marital property is not recognized under most personal laws in India. However, courts may consider various factors while deciding maintenance and settlement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="workplace" className="mt-6">
            <h2 className="section-title">Workplace Rights</h2>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sexual Harassment of Women at Workplace Act, 2013</CardTitle>
                  <CardDescription>Prevention, prohibition, and redressal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 provides protection against sexual harassment at the workplace and for the prevention and redressal of complaints.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Provisions:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Comprehensive definition of sexual harassment</li>
                    <li>Covers all women regardless of age or employment status</li>
                    <li>Mandatory formation of Internal Complaints Committee (ICC) in organizations with 10 or more employees</li>
                    <li>Local Complaints Committee (LCC) at the district level</li>
                    <li>Time-bound investigation process (90 days)</li>
                    <li>Confidentiality of complainant's identity</li>
                    <li>Protection against victimization</li>
                    <li>Penalties for false or malicious complaints</li>
                  </ul>
                  
                  <div className="bg-brand-purple bg-opacity-10 p-4 rounded-md mt-4">
                    <h5 className="font-semibold text-brand-purple-dark">Filing a Complaint:</h5>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Submit written complaint to ICC/LCC within 3 months of incident</li>
                      <li>ICC/LCC will investigate the complaint</li>
                      <li>Conciliation if requested by complainant</li>
                      <li>Inquiry process and findings</li>
                      <li>Recommendations for action to employer/district officer</li>
                    </ol>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark">Download POSH Guidelines</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Maternity Benefit Act, 1961 (Amended in 2017)</CardTitle>
                  <CardDescription>Rights during pregnancy and after childbirth</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Maternity Benefit Act provides for maternity leave and benefits to women employees during pregnancy and after childbirth.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Provisions:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>26 weeks of paid maternity leave for first two children (12 weeks for third child onwards)</li>
                    <li>12 weeks of maternity leave for adoptive and commissioning mothers</li>
                    <li>Work from home option (if nature of work permits)</li>
                    <li>Creche facility in establishments with 50 or more employees</li>
                    <li>Protection from dismissal during pregnancy</li>
                    <li>No reduction in wages during maternity leave</li>
                    <li>Medical bonus and nursing breaks</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Equal Remuneration Act, 1976</CardTitle>
                  <CardDescription>Equal pay for equal work</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Equal Remuneration Act mandates equal pay for men and women for performing the same or similar work, preventing gender-based discrimination in recruitment and service conditions.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Provisions:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Equal pay for equal work or work of similar nature</li>
                    <li>No discrimination in recruitment, training, transfers, or promotions</li>
                    <li>Employers must maintain registers and documents</li>
                    <li>Penalties for violations including fines and imprisonment</li>
                  </ul>
                  
                  <p className="mt-4">
                    <strong>Note:</strong> The Equal Remuneration Act is likely to be subsumed under the Code on Wages, 2019, which consolidates four labor laws related to wages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="criminal" className="mt-6">
            <h2 className="section-title">Criminal Laws</h2>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Laws Against Sexual Offenses</CardTitle>
                  <CardDescription>Provisions in the Indian Penal Code</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Indian Penal Code has several provisions that criminalize various forms of sexual offenses against women.
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Section 375 & 376 - Rape</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Section 375 defines rape and Section 376 prescribes punishment for it.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Comprehensive definition covering various forms of non-consensual penetration</li>
                          <li>Recognition that consent means an unequivocal voluntary agreement</li>
                          <li>Punishment: Rigorous imprisonment not less than 10 years, extendable to life imprisonment and fine</li>
                          <li>Enhanced punishment for aggravated forms of rape (by police officer, public servant, etc.)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Section 354 - Sexual Harassment</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Assault or criminal force to woman with intent to outrage her modesty.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Punishment: Imprisonment up to 3 years and fine</li>
                          <li>Section 354A specifically addresses sexual harassment</li>
                          <li>Section 354B addresses disrobing a woman</li>
                          <li>Section 354C addresses voyeurism</li>
                          <li>Section 354D addresses stalking</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Section 498A - Cruelty by Husband or Relatives</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-2">Cruelty by husband or relatives of husband.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Covers physical and mental cruelty</li>
                          <li>Includes harassment for dowry</li>
                          <li>Punishment: Imprisonment up to 3 years and fine</li>
                          <li>Cognizable and non-bailable offense</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Dowry Prohibition Act, 1961</CardTitle>
                  <CardDescription>Laws against dowry</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Dowry Prohibition Act prohibits the giving, taking, or demanding of dowry.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Provisions:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Definition of dowry: Property or valuable security given in connection with marriage</li>
                    <li>Prohibition of dowry demand</li>
                    <li>Punishment: Imprisonment not less than 5 years and fine not less than ₹15,000 or the amount of dowry, whichever is higher</li>
                    <li>Burden of proof on the person who takes or demands dowry</li>
                    <li>Prohibition on advertisement relating to dowry</li>
                  </ul>
                  
                  <div className="bg-brand-purple bg-opacity-10 p-4 rounded-md mt-4">
                    <h5 className="font-semibold text-brand-purple-dark">Related Provisions in IPC:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Section 304B: Dowry death</li>
                      <li>Section 498A: Cruelty by husband or his relatives</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Protection of Children from Sexual Offences Act, 2012 (POCSO)</CardTitle>
                  <CardDescription>Protection for children under 18 years</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    POCSO provides protection to children (below 18 years) from sexual offenses.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Key Provisions:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Gender-neutral law protecting all children</li>
                    <li>Different types of sexual offenses defined</li>
                    <li>Special courts for trial of offenses</li>
                    <li>Child-friendly procedures during investigation and trial</li>
                    <li>Stringent punishment including death penalty for aggravated penetrative sexual assault</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            Connect directly with experienced legal professionals for personalised advice.
          </p>
          <Button
            size="lg"
            className="bg-brand-purple hover:bg-brand-purple-dark"
            onClick={() => setIsExpertModalOpen(true)}
          >
            Book Legal Consultation
          </Button>
        </div>
      </section>

      {/* Experts Modal */}
      {isExpertModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setIsExpertModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-3xl overflow-y-auto max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setIsExpertModalOpen(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              Available Legal Experts
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalExperts.map((ex) => (
                <div
                  key={ex.email}
                  className="border rounded-md p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold mb-1">{ex.name}</h4>
                  <p className="text-brand-purple-dark font-medium mb-2">
                    {ex.specialization} &bull; {ex.experience} yrs
                  </p>

                  <p className="flex items-center gap-2 text-gray-700 mb-1">
                    <Phone className="w-4 h-4" />
                    {ex.phone}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 mb-1">
                    <Mail className="w-4 h-4" />
                    {ex.email}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 mb-1">
                    <MapPin className="w-4 h-4" />
                    {ex.address}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Briefcase className="w-4 h-4" />
                    {ex.workplace}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ChatBot />
    </div>
  );
};

export default LegalResources;
