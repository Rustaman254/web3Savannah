import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryCTALink?: string; // New prop for primary CTA link
  secondaryCTALink?: string; // New prop for secondary CTA link
}

export function ServiceCTA({
  title,
  description,
  primaryCTA = "Get Started",
  secondaryCTA = "Learn More",
  primaryCTALink = "/#", // Default to anchor to avoid broken links
  secondaryCTALink = "/#", // Default to anchor to avoid broken links
}: ServiceCTAProps) {
  return (
    <section className="py-16 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex items-center justify-center gap-6">
          <Button
            asChild
            className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2"
          >
            <Link href={primaryCTALink} className="flex items-center">
              {primaryCTA}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-700 text-white hover:bg-gray-800"
          >
            <Link href={secondaryCTALink}>{secondaryCTA}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
