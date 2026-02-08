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
                        <p className="text-muted-foreground">Mapa de Google Maps próximamente</p>
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
