const services = [
  "Retífica de motor",
  "Manutenção e revisão",
  "Câmbio",
  "Freios",
  "Injeção eletrônica",
  "Diagnóstico com scanner",
  "Óleo e fluidos",
  "Peças e acessórios",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="mb-8 inline-flex w-fit rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300 shadow-2xl shadow-cyan-950/30">
          MG-DAFFE Mecânicos Automotivos • Vila Matilde • São Paulo
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--mg-green-neon)]">
              Técnica, confiança e precisão automotiva
            </p>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              A oficina certa para quem valoriza o carro, o tempo e a segurança.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              A MG-DAFFE une experiência mecânica, diagnóstico técnico e atendimento responsável para cuidar do seu veículo com clareza, método e compromisso.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/551125483171"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--mg-orange-neon)] px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-slate-950 shadow-lg shadow-orange-500/25 transition hover:scale-[1.02] hover:bg-orange-400"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="/servicos"
                className="rounded-full border border-[var(--mg-green-neon)]/60 px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-[var(--mg-green-neon)] transition hover:bg-[var(--mg-green-neon)] hover:text-slate-950"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-700/70 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--mg-cyan-neon)]">
                Serviços principais
              </p>

              <div className="mt-6 grid gap-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-slate-800 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-orange-400/30 bg-orange-500/10 p-4 text-sm leading-6 text-orange-100">
                Atendimento institucional inicial. Agendamento online, formulário e integração com leads ficam para fase própria, sem tocar no Portal operacional.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}