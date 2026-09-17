import React, { useEffect, useRef, useState } from 'react';
import { STEERING_COMMITTEE } from '../data/steeringCommittee';

// High-quality 4:5 portraits: src/assets/images/committee/<slug>.jpg
const PORTRAITS = import.meta.glob('../assets/images/committee/*.jpg', { eager: true, import: 'default' });

const portraitFor = (slug) => {
  if (!slug) return null;
  const entry = Object.entries(PORTRAITS).find(([path]) => path.endsWith(`/${slug}.jpg`));
  return entry ? entry[1] : null;
};

const initials = (name) =>
  name
    .replace(/^([A-Z]\.)+\s*/, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

function Portrait({ member, className = '' }) {
  const src = portraitFor(member.photo);
  if (src) {
    return <img src={src} alt={`Portrait of ${member.name}`} loading="lazy" decoding="async" className={`${className} object-cover object-top`} />;
  }
  return (
    <span className={`${className} bg-gradient-to-br from-deep-navy to-primary text-safety-yellow flex items-center justify-center font-headline-md font-bold`} aria-hidden="true">
      {initials(member.name)}
    </span>
  );
}

function EmailLink({ email, className = '' }) {
  return (
    <a
      href={`mailto:${email}`}
      className={`inline-flex items-center gap-2 min-w-0 text-[0.88rem] font-semibold text-primary hover:text-deep-navy hover:underline underline-offset-4 ${className}`}
    >
      <span className="material-symbols-outlined text-[18px] shrink-0" aria-hidden="true">mail</span>
      <span className="truncate">{email}</span>
    </a>
  );
}

function BioDialog({ member, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (member && dialog && !dialog.open) dialog.showModal();
    if (!member && dialog?.open) dialog.close();
  }, [member]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => { if (event.target === ref.current) onClose(); }}
      aria-labelledby="committee-dialog-name"
      className="m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[88vh] rounded-3xl p-0 bg-white shadow-2xl backdrop:bg-deep-navy/70 backdrop:backdrop-blur-sm"
    >
      {member && (
        <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
          <div className="relative h-72 sm:h-full bg-sky-tint">
            <Portrait member={member} className="absolute inset-0 w-full h-full text-[3.5rem]" />
          </div>
          <div className="relative p-6 sm:p-8">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-low hover:bg-deep-navy hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <p className="text-[12px] font-bold uppercase tracking-wider text-primary pr-10">{member.role}</p>
            <h3 id="committee-dialog-name" className="font-headline-md text-[1.5rem] font-bold text-deep-navy mt-1 pr-10">{member.name}</h3>
            <span className="block w-12 h-1 bg-safety-yellow rounded-full my-4" aria-hidden="true" />
            <p className="text-[0.95rem] leading-relaxed text-on-surface-variant">{member.bio}</p>
            {member.email && <EmailLink email={member.email} className="mt-5" />}
          </div>
        </div>
      )}
    </dialog>
  );
}

function MemberCard({ member, onOpen }) {
  return (
    <article className="group h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/5] bg-sky-tint overflow-hidden">
        <Portrait member={member} className="absolute inset-0 w-full h-full text-[3rem] group-hover:scale-[1.03] transition-transform duration-700" />
        <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep-navy/70 to-transparent" aria-hidden="true" />
        <span className="absolute left-4 bottom-4 right-4 truncate text-white text-[12px] font-bold uppercase tracking-wider">
          {member.role.split(',')[0]}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-headline-md text-[1.1rem] font-bold text-deep-navy leading-snug line-clamp-1" title={member.name}>{member.name}</h4>
        <p className="text-caption font-semibold text-primary mt-0.5 line-clamp-1">{member.role}</p>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-on-surface-variant line-clamp-4 min-h-[6.3em]">{member.bio}</p>

        <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-col gap-2.5">
          {member.email && <EmailLink email={member.email} />}
          <button
            type="button"
            onClick={() => onOpen(member)}
            className="self-start inline-flex items-center gap-1 text-[0.88rem] font-bold text-deep-navy hover:text-primary"
          >
            Read full bio
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </div>
    </article>
  );
}

/** About page: IFDC Steering Committee - identical cards, office bearers first. */
export default function ChildSafetyAdvocates() {
  const [selected, setSelected] = useState(null);
  const leads = STEERING_COMMITTEE.filter((member) => member.lead);
  const members = STEERING_COMMITTEE.filter((member) => !member.lead);

  const group = (title, list) => (
    <>
      <h3 className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-widest text-deep-navy mb-5">
        <span className="w-8 h-0.5 bg-safety-yellow" aria-hidden="true" />
        {title}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr list-none p-0 m-0">
        {list.map((member) => (
          <li key={member.name} className="h-full">
            <MemberCard member={member} onOpen={setSelected} />
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <section id="child-safety-advocates" aria-labelledby="advocates-heading" className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface scroll-mt-24">
      <div className="max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-stack-md">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-tint text-primary rounded-full text-caption font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">verified</span>
            Steering Committee
          </span>
          <h2 id="advocates-heading" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy">
            Our Child Safety Advocates
          </h2>
          <p className="text-on-surface-variant mt-3 text-body-lg">
            The psychologists, educators, and child protection professionals who lead IFDC's work to keep children safe and well in the digital world.
          </p>
        </div>

        {group('Office bearers', leads)}
        <div className="h-10" aria-hidden="true" />
        {group('Committee members', members)}
      </div>

      <BioDialog member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
