import { ShoppingCart } from 'lucide-react';

export function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex items-center justify-center gap-2" {...props}>
      <ShoppingCart className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Impala Abastos
      </span>
    </div>
  );
}
