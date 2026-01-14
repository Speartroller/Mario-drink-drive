import { Smartphone, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
export function AppDownload() {
  return <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          
        </div>
      </div>
    </section>;
}