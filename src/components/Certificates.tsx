import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ExternalLink, Eye, X } from "lucide-react";
import { SiCisco } from "react-icons/si";
import { certificates, type Certificate } from "../data/certificates";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const categoryStyles: Record<Certificate["category"], string> = {
  Networking: "border-sky-200 bg-sky-50 text-sky-700",
  Programming: "border-indigo-200 bg-indigo-50 text-indigo-700",
  Cybersecurity: "border-emerald-200 bg-emerald-50 text-emerald-700",
  DevOps: "border-purple-200 bg-purple-50 text-purple-700",
  Award: "border-amber-200 bg-amber-50 text-amber-700",
};

const CertificateModal = ({
  cert,
  onClose,
}: {
  cert: Certificate;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-3.5">
          <div className="flex min-w-0 items-center gap-3">
            <SiCisco size={22} color="#1BA0D7" className="shrink-0" />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-slate-900">{cert.title}</p>
              <p className="text-xs text-slate-500">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              aria-label="Open in new tab"
            >
              <ExternalLink size={17} />
            </a>
            <button
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-100">
          <object
            data={`${cert.file}#toolbar=0&navpanes=0&view=FitH`}
            type="application/pdf"
            className="h-full w-full"
          >
            {/* Fallback for browsers that can't embed PDFs (most mobile) */}
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <Award size={36} className="text-slate-400" />
              <p className="max-w-sm text-sm text-slate-600">
                This browser can&apos;t preview PDFs inline — open the
                certificate in a new tab instead.
              </p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} />
                Open certificate
              </a>
            </div>
          </object>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="px-6 py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certificates & recognition"
          description="Cisco Networking Academy certifications across networking, programming, cybersecurity and automation — click any card to view the original certificate."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.file} delay={(i % 3) * 0.07} className="min-w-0">
              <button
                onClick={() => setActive(cert)}
                className={`card card-hover group flex h-full w-full flex-col p-6 text-left ${
                  cert.featured ? "ring-1 ring-indigo-200/80" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white">
                    {cert.category === "Award" ? (
                      <Award size={20} className="text-amber-500" />
                    ) : (
                      <SiCisco size={22} color="#1BA0D7" />
                    )}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${categoryStyles[cert.category]}`}
                  >
                    {cert.category}
                  </span>
                </div>

                <h3 className="mt-4 text-[15px] leading-snug font-bold tracking-tight text-slate-900">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-slate-500">
                  {cert.issuer} · {cert.date}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-indigo-600 transition-colors group-hover:text-indigo-800">
                  <Eye size={15} />
                  View certificate
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CertificateModal cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
