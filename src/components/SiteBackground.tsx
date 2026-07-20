/**
 * Global ambient background rendered once behind all content.
 * Fixed aurora glows + a faded dot grid + film grain so the page keeps
 * subtle depth and colour as you scroll (instead of turning flat black).
 */
export default function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#0d0d20_0%,#08081a_45%,#050510_100%)]" />
      <div className="site-glow site-glow-a" />
      <div className="site-glow site-glow-b" />
      <div className="site-glow site-glow-c" />
      <div className="site-dots" />
      <div className="site-grain" />
    </div>
  );
}
