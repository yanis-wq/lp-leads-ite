import LeadPageLayout, { LeadPageConfig } from "@/components/LeadPageLayout";
import { Shield, Target, Phone, Zap } from "lucide-react";

const config: LeadPageConfig = {
  badge: "Leads ITE/ITI exclusifs",
  title: "Des leads ITE/ITI 100% qualifiés",
  subtitle:
    "KRNO identifie les propriétaires avec des murs mal isolés grâce à l'IA, et vous envoie en exclusivité des leads avec un projet d'isolation thermique par l'extérieur ou par l'intérieur.",
  features: [
    {
      icon: Shield,
      title: "Exclusif",
      desc: "Chaque lead vous est transmis en exclusivité — jamais mis en concurrence.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Target,
      title: "Intentionniste",
      desc: "Propriétaires avec un projet ITE identifié, pas de simples curieux.",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      icon: Phone,
      title: "Vérifié",
      desc: "Joignabilité optimale : moins d'appels perdus, plus de RDV.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      title: "Temps réel",
      desc: "Transmis instantanément par email, Google Sheet ou webhook.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ],
  statsTitle: "Tous types de projets ITE/ITI couverts",
  statsSubtitle:
    "De l'isolation par l'extérieur à l'isolation par l'intérieur, nos leads couvrent l'ensemble de vos chantiers.",
  stats: [
    { title: "ITE enduit", desc: "Isolation par l'extérieur avec finition enduit minéral ou organique." },
    { title: "ITE bardage", desc: "Pose de bardage bois, composite ou métal avec isolant." },
    { title: "ITI / Doublage intérieur", desc: "Isolation des murs par l'intérieur pour les cas où l'ITE n'est pas possible." },
  ],
  productLabel: "Leads ITE/ITI — Isolation des Murs",
  productDesc:
    "Propriétaires souhaitant isoler leurs murs par l'extérieur ou par l'intérieur. Projet identifié, éligibilité aux aides vérifiée, contact qualifié.",
  pricingBannerText: "LEADS ITE/ITI · OFFRE LIMITÉE AVRIL",
  plans: [
    {
      name: "DÉCOUVERTE",
      tagline: "Je remplis mon agenda",
      subtitle: "Testez sans bloquer votre tréso",
      ideal: "Artisan RGE indépendant",
      leads: "10",
      freeLeads: "2",
      price: "449€",
      discount: "-6%",
      perLead: "37,4€/lead effectif",
      catalogPrice: "480€",
      features: [
        "Leads 100% exclusifs",
        "Livraison en temps réel",
        "Selon vos critères (zone géo...)",
        "Sans engagement",
      ],
      cta: "Choisir Découverte →",
      highlighted: false,
      accentColor: false,
    },
    {
      name: "CROISSANCE",
      tagline: "Je sécurise mon flux",
      subtitle: "Un flux régulier de nouveaux clients",
      ideal: "Entreprise RGE établie",
      leads: "35",
      freeLeads: "5",
      price: "1 280€",
      discount: "-20%",
      perLead: "32€/lead effectif",
      catalogPrice: "1 600€",
      features: [
        "Tout Découverte, plus :",
        "Account manager dédié",
        "Rapport de performance mensuel",
        "Fiche partenaire dédiée",
        "Partenariat backlink SEO",
      ],
      cta: "Choisir Croissance →",
      highlighted: true,
      accentColor: true,
    },
    {
      name: "ACCÉLÉRATEUR",
      tagline: "Je domine ma zone",
      subtitle: "Volume maximal, coût minimal",
      ideal: "Réseau d'entreprises",
      leads: "85",
      freeLeads: "15",
      price: "2 699€",
      discount: "-33%",
      perLead: "27€/lead effectif",
      catalogPrice: "4 000€",
      features: [
        "Tout Croissance, plus :",
        "Onboarding personnalisé",
        "Intégration CRM sur mesure",
      ],
      cta: "Choisir Accélérateur →",
      highlighted: false,
      accentColor: false,
    },
  ],
};

const Ite = () => <LeadPageLayout config={config} />;

export default Ite;
