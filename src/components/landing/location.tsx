import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline mb-8">
              Visítanos y sorpréndete
            </h2>
            <div className="space-y-6">
              <InfoItem
                icon={<MapPin className="h-6 w-6 text-primary" />}
                title="Dirección"
                content="Avenida del Río #12-34, Pereira, Risaralda, Colombia"
              />
              <InfoItem
                icon={<Clock className="h-6 w-6 text-primary" />}
                title="Horarios de Atención"
                content={
                  <>
                    <p>Lunes a Sábado: 4:00 AM - 4:00 PM</p>
                    <p>Domingos y Festivos: 5:00 AM - 1:00 PM</p>
                  </>
                }
              />
              <InfoItem
                icon={<Phone className="h-6 w-6 text-primary" />}
                title="Contacto"
                content={<p> (606) 123-4567</p>}
              />
            </div>
          </div>
          <div>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Nuestra Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-muted rounded-md flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.742148688866!2d-75.71811480838022!3d4.814277428195402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38875794b38ce5%3A0x9d42070bd486dec4!2sImpala%20Plaza%20de%20Mercado%20Minorista!5e0!3m2!1ses!2sco!4v1771179492679!5m2!1ses!2sco" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-muted-foreground">{content}</div>
      </div>
    </div>
  )
}
