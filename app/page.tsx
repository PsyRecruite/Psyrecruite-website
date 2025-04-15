import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1B3E] text-white">
      <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold">PsyRecruite</h1>
        <nav className="space-x-6 text-white text-sm">
          <a href="#">Home</a>
          <a href="#">Voor Werkgevers</a>
          <a href="#">Voor Professionals</a>
          <a href="#">Over Ons</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="text-center py-20 px-6 bg-[#0A1B3E]">
        <h2 className="text-4xl font-bold mb-4">Verbind psychologie met de juiste professional</h2>
        <p className="text-white/80 mb-6">PsyRecruite: waar zorg en talent samenkomen</p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-[#FCD34D] text-black hover:bg-[#facc15]">Vind een professional</Button>
          <Button className="bg-[#86EFAC] text-black hover:bg-[#4ade80]">Zoek een opdracht</Button>
        </div>
      </section>
      <section className="bg-white text-[#0A1B3E] py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Hoe het werkt</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardContent className="py-8">
              <h4 className="text-xl font-semibold mb-2">Aanmelden</h4>
              <p>Meld je eenvoudig aan als zorgprofessional of organisatie.</p>
            </CardContent>
          </Card>
          <Card className="text-center border-yellow-400 border-2">
            <CardContent className="py-8">
              <h4 className="text-xl font-semibold mb-2">Matchen</h4>
              <p>Wij koppelen jullie op basis van behoefte en expertise.</p>
            </CardContent>
          </Card>
          <Card className="text-center border-green-300 border-2">
            <CardContent className="py-8">
              <h4 className="text-xl font-semibold mb-2">Samenwerken</h4>
              <p>Start snel met een duurzame en effectieve samenwerking.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#F9FAFB] text-[#0A1B3E]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Over PsyRecruite</h3>
          <p className="mb-6">
            PsyRecruite is gespecialiseerd in het verbinden van zorgprofessionals met de juiste opdrachtgevers binnen de geestelijke gezondheidszorg. Wij geloven in kwaliteit, menselijkheid en groei.
          </p>
          <Button className="bg-[#FCD34D] text-black hover:bg-[#facc15]">Laat je gegevens achter</Button>
        </div>
      </section>
      <footer className="bg-[#0A1B3E] text-white py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 PsyRecruite. Alle rechten voorbehouden.</p>
          <div className="space-x-4 text-sm mt-4 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Algemene Voorwaarden</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}