<!DOCTYPE html>
<html>
<head>
<style data-omelette-print-defaults>
@media print {
  @page { margin: 0.5in; }
  h1, h2, h3, h4, h5, h6 { break-after: avoid; }
  figure, table, pre, blockquote, img, svg, tr, [class~="card" i] { break-inside: avoid; }
  img, svg { max-width: 100%; }
  p { orphans: 3; widows: 3; }
}
</style>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&family=Source+Sans+3:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  a { color: #d9a44e; }
  a:hover { color: #c78a2f; }
</style>
</helmet>
<x-import component-from-global-scope="deck-stage" from="./deck-stage.js" width="1920" height="1080" hint-size="100%,100%">

<!-- ═══════════ SLIDE 1 · TITLE ═══════════ -->
<section data-label="Cover" data-speaker-notes="Open the defence. Frame the thesis: agentic AI sits at the peak of expectation, but the evidence tells a quieter story. Three lenses — economic, human-value, regulatory." style="background:#1f2a38;padding:80px 96px 84px;font-family:'Source Sans 3',sans-serif;color:#eef1f5;display:flex;flex-direction:column;justify-content:space-between;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:19px;letter-spacing:.36em;color:#d9a44e;text-transform:uppercase;">Capstone Project Defence · July 2026</div>
    <div style="display:flex;align-items:flex-start;gap:16px;">
      <img src="assets/logo.png" alt="United Institute" style="height:104px;width:auto;">
    </div>
  </div>

  <div>
    <div style="font-family:'Spectral',Georgia,serif;font-size:112px;font-weight:800;line-height:.98;letter-spacing:-.015em;color:#eef1f5;">Beyond the Hype Cycle</div>
    <div style="font-family:'Spectral',Georgia,serif;font-size:38px;font-weight:300;font-style:italic;color:#c4cdd8;margin-top:26px;max-width:1180px;line-height:1.32;">Agentic AI in the European enterprise: the promise versus the reality gap.</div>
    <div style="display:flex;gap:14px;margin-top:40px;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:16px;letter-spacing:.16em;text-transform:uppercase;color:#d9a44e;border:1px solid rgba(217,164,78,.45);border-radius:6px;padding:10px 18px;">Economic</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:16px;letter-spacing:.16em;text-transform:uppercase;color:#d9a44e;border:1px solid rgba(217,164,78,.45);border-radius:6px;padding:10px 18px;">Human-Value</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:16px;letter-spacing:.16em;text-transform:uppercase;color:#d9a44e;border:1px solid rgba(217,164,78,.45);border-radius:6px;padding:10px 18px;">Regulatory</div>
    </div>
  </div>

  <div style="display:flex;justify-content:space-between;align-items:flex-end;border-top:1px solid rgba(255,255,255,.16);padding-top:26px;">
    <div>
      <div style="font-family:'Spectral',Georgia,serif;font-size:30px;font-weight:600;color:#eef1f5;">Clara Koch Silva</div>
      <div style="font-size:19px;color:#aab3bf;margin-top:6px;">Dual Master — International Business Management (Technology) &amp; MBA</div>
      <div style="font-size:19px;color:#9aa6b4;margin-top:2px;">United International Business School</div>
    </div>
    <div style="text-align:right;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.24em;color:#9aa6b4;text-transform:uppercase;">Supervisor</div>
      <div style="font-size:21px;font-weight:600;color:#eef1f5;margin-top:6px;">Prof. Dr. Nik Neshat</div>
    </div>
  </div>
</section>

<!-- ═══════════ SLIDE 2 · INTRODUCTION ═══════════ -->
<section data-label="Introduction" data-speaker-notes="Define agentic AI, then show the promise/reality split ($450B vs 95% no impact). Close with three reasons this matters now: hype driving decisions, Europe under-studied, law predates the tech." style="background:#1f2a38;padding:64px 96px 68px;font-family:'Source Sans 3',sans-serif;color:#eef1f5;display:flex;flex-direction:column;justify-content:space-between;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:18px;letter-spacing:.3em;color:#d9a44e;text-transform:uppercase;">Introduction · Topic &amp; Context</div>
    <div style="display:flex;align-items:flex-start;gap:14px;"><img src="assets/logo.png" alt="United Institute" style="height:80px;width:auto;"></div>
  </div>
  <div style="font-family:'Spectral',Georgia,serif;font-size:42px;font-weight:400;line-height:1.12;margin-top:16px;max-width:1500px;color:#eef1f5;">A technology riding the highest wave of expectation — while the evidence tells a quieter story.</div>

  <div style="display:grid;grid-template-columns:1.15fr 1fr;gap:30px;margin-top:36px;align-items:stretch;">
    <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:30px 34px;box-shadow:0 10px 26px rgba(30,40,55,.05);">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:16px;letter-spacing:.2em;color:#9aa6b4;text-transform:uppercase;">What is agentic AI?</div>
      <div style="font-size:26px;font-weight:300;line-height:1.42;color:#c4cdd8;margin-top:16px;">Systems that perceive, decide and act autonomously to pursue evolving goals — moving from passive assistants to coordinated multi-agent workers with memory and tool use.</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;">
      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:26px 26px;display:flex;flex-direction:column;justify-content:space-between;">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.18em;color:#d9a44e;text-transform:uppercase;">The promise</div>
        <div style="font-family:'Spectral',Georgia,serif;font-size:64px;font-weight:800;color:#eef1f5;line-height:1;margin:8px 0;">$450B</div>
        <div style="font-size:17px;color:#aab3bf;line-height:1.35;">Agentic enterprise value forecast by 2028</div>
      </div>
      <div style="background:#16202b;border:1px solid #16202b;border-radius:12px;padding:26px 26px;display:flex;flex-direction:column;justify-content:space-between;">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.18em;color:#d9a44e;text-transform:uppercase;">The reality</div>
        <div style="font-family:'Spectral',Georgia,serif;font-size:64px;font-weight:800;color:#f4f1ea;line-height:1;margin:8px 0;">95%</div>
        <div style="font-size:17px;color:#b7c0cd;line-height:1.35;">of GenAI pilots show no measurable P&amp;L impact — MIT NANDA</div>
      </div>
    </div>
  </div>

  <div style="font-family:'IBM Plex Mono',monospace;font-size:16px;letter-spacing:.2em;color:#9aa6b4;text-transform:uppercase;margin-top:34px;">Why this matters now</div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:28px;margin-top:16px;">
    <div style="border-top:2px solid #d9a44e;padding-top:16px;">
      <div style="display:flex;align-items:baseline;gap:10px;"><span style="font-family:'Spectral',Georgia,serif;font-size:26px;font-weight:700;color:#d9a44e;">01</span><span style="font-size:22px;font-weight:600;color:#eef1f5;">Hype is driving real decisions</span></div>
      <div style="font-size:19px;color:#aab3bf;line-height:1.4;margin-top:10px;">Klarna and DeepL cut ~1,000 jobs on AI promises — Klarna reversed after quality collapsed. Gartner: &gt;40% of agentic projects cancelled by 2027.</div>
    </div>
    <div style="border-top:2px solid #d9a44e;padding-top:16px;">
      <div style="display:flex;align-items:baseline;gap:10px;"><span style="font-family:'Spectral',Georgia,serif;font-size:26px;font-weight:700;color:#d9a44e;">02</span><span style="font-size:22px;font-weight:600;color:#eef1f5;">Europe is under-studied</span></div>
      <div style="font-size:19px;color:#aab3bf;line-height:1.4;margin-top:10px;">Most evidence is US-centred. EU data-sovereignty rules, adoption lag (4% vs 7%) and the AI Act create a distinct context.</div>
    </div>
    <div style="border-top:2px solid #d9a44e;padding-top:16px;">
      <div style="display:flex;align-items:baseline;gap:10px;"><span style="font-family:'Spectral',Georgia,serif;font-size:26px;font-weight:700;color:#d9a44e;">03</span><span style="font-size:22px;font-weight:600;color:#eef1f5;">The law predates the technology</span></div>
      <div style="font-size:19px;color:#aab3bf;line-height:1.4;margin-top:10px;">The EU AI Act (Reg. 2024/1689) was drafted before autonomous agents existed — Arts. 12–14, 26 strain against multi-agent systems.</div>
    </div>
  </div>
</section>

<!-- ═══════════ SLIDE 3 · OBJECTIVE & METHOD ═══════════ -->
<section data-label="Objective &amp; Method" data-speaker-notes="One core question (RQ0) breaks into three gaps. Explain why this design: firm-level data barely exists, so grading Tier 3-4 projections against Tier 1-2 evidence makes the gap itself the object of measurement. Walk the funnel: 910 → 210 → 70, plus N=86 survey." style="background:#1f2a38;padding:64px 96px 68px;font-family:'Source Sans 3',sans-serif;color:#eef1f5;display:flex;flex-direction:column;justify-content:space-between;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:18px;letter-spacing:.3em;color:#d9a44e;text-transform:uppercase;">Objective &amp; Method</div>
    <div style="display:flex;align-items:flex-start;gap:14px;"><img src="assets/logo.png" alt="United Institute" style="height:80px;width:auto;"></div>
  </div>
  <div style="font-family:'Spectral',Georgia,serif;font-size:42px;font-weight:400;line-height:1.12;margin-top:16px;max-width:1500px;color:#eef1f5;">One question, three gaps — measured against an auditable, bias-graded evidence base.</div>

  <div style="display:grid;grid-template-columns:1.1fr 1fr;gap:34px;margin-top:34px;flex:1;">
    <div style="display:flex;flex-direction:column;justify-content:space-between;">
      <div style="background:#16202b;border-radius:12px;padding:28px 32px;">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.2em;color:#d9a44e;text-transform:uppercase;">The core question · RQ0</div>
        <div style="font-family:'Spectral',Georgia,serif;font-size:27px;font-weight:400;line-height:1.34;color:#f4f1ea;margin-top:14px;">How does the total cost of ownership of agentic AI compare with the human value it actually delivers — shaped by organisational readiness, regulation and human capability?</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:22px;">
        <div style="display:flex;gap:16px;align-items:baseline;border-bottom:1px solid rgba(255,255,255,.16);padding-bottom:12px;"><span style="font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:600;color:#d9a44e;white-space:nowrap;">RQ1</span><span style="font-size:22px;color:#c4cdd8;"><b style="color:#eef1f5;">Economic</b> · TCO vs projected ROI</span></div>
        <div style="display:flex;gap:16px;align-items:baseline;border-bottom:1px solid rgba(255,255,255,.16);padding-bottom:12px;"><span style="font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:600;color:#d9a44e;white-space:nowrap;">RQ2</span><span style="font-size:22px;color:#c4cdd8;"><b style="color:#eef1f5;">Human-value</b> · augmentation vs deskilling</span></div>
        <div style="display:flex;gap:16px;align-items:baseline;"><span style="font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:600;color:#d9a44e;white-space:nowrap;">RQ3</span><span style="font-size:22px;color:#c4cdd8;"><b style="color:#eef1f5;">Regulatory</b> · EU AI Act vs dynamic agents</span></div>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;justify-content:space-between;">
      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:26px 30px;">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.16em;color:#9aa6b4;text-transform:uppercase;">SPAR-4-SLR + PRISMA · graded for vendor bias</div>
        <div style="display:flex;align-items:center;gap:14px;margin-top:20px;flex-wrap:wrap;">
          <div style="text-align:center;"><div style="font-family:'Spectral',Georgia,serif;font-size:40px;font-weight:800;color:#eef1f5;line-height:1;">910</div><div style="font-size:14px;color:#9aa6b4;margin-top:4px;">identified</div></div>
          <div style="color:#d9a44e;font-size:24px;">→</div>
          <div style="text-align:center;"><div style="font-family:'Spectral',Georgia,serif;font-size:40px;font-weight:800;color:#eef1f5;line-height:1;">210</div><div style="font-size:14px;color:#9aa6b4;margin-top:4px;">screened · κ=0.74</div></div>
          <div style="color:#d9a44e;font-size:24px;">→</div>
          <div style="text-align:center;"><div style="font-family:'Spectral',Georgia,serif;font-size:40px;font-weight:800;color:#d9a44e;line-height:1;">70</div><div style="font-size:14px;color:#9aa6b4;margin-top:4px;">coded</div></div>
        </div>
        <div style="font-size:18px;color:#aab3bf;margin-top:18px;border-top:1px solid rgba(255,255,255,.12);padding-top:14px;">+ practitioner survey (N=86) — illustrative perception data.</div>
      </div>

      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:24px 30px;margin-top:20px;">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.16em;color:#9aa6b4;text-transform:uppercase;">Evidence tiers</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 22px;margin-top:14px;font-size:19px;color:#c4cdd8;">
          <div><b style="color:#d9a44e;font-family:'IBM Plex Mono',monospace;">T1</b> Peer-reviewed</div>
          <div><b style="color:#d9a44e;font-family:'IBM Plex Mono',monospace;">T2</b> Institutional</div>
          <div><b style="color:#9aa6b4;font-family:'IBM Plex Mono',monospace;">T3</b> Analyst houses</div>
          <div><b style="color:#9aa6b4;font-family:'IBM Plex Mono',monospace;">T4</b> Vendor / SEO</div>
        </div>
      </div>

      <div style="font-size:18px;color:#aab3bf;line-height:1.42;margin-top:18px;font-style:italic;font-family:'Spectral',serif;">Why this design: firm-level outcome data barely exists — the promise lives in vendor claims. Grading projections against evidence turns the promise–reality gap itself into the object of measurement.</div>
    </div>
  </div>
</section>

<!-- ═══════════ SLIDE 4 · MAIN FINDINGS ═══════════ -->
<section data-label="Main Findings" data-speaker-notes="Three gaps, three verdicts. For each RQ contrast the Tier 3-4 promise against the Tier 1-2 realised evidence. Economic gap is WIDE, human-value MODERATE, regulatory MOD–WIDE." style="background:#1f2a38;padding:64px 96px 68px;font-family:'Source Sans 3',sans-serif;color:#eef1f5;display:flex;flex-direction:column;justify-content:space-between;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:18px;letter-spacing:.3em;color:#d9a44e;text-transform:uppercase;">Main Findings</div>
    <div style="display:flex;align-items:flex-start;gap:14px;"><img src="assets/logo.png" alt="United Institute" style="height:80px;width:auto;"></div>
  </div>
  <div style="font-family:'Spectral',Georgia,serif;font-size:42px;font-weight:400;line-height:1.12;margin-top:16px;color:#eef1f5;">Three gaps, three verdicts — what was promised vs. what the evidence shows.</div>

  <div style="display:grid;grid-template-columns:180px 1fr 1fr;gap:0;margin-top:30px;border-top:2px solid #eef1f5;flex:1;grid-template-rows:auto 1fr 1fr 1fr;">
    <div style="padding:14px 0;"></div>
    <div style="padding:14px 24px 14px 0;font-family:'IBM Plex Mono',monospace;font-size:15px;letter-spacing:.14em;color:#9aa6b4;text-transform:uppercase;">Promised — Tier 3–4</div>
    <div style="padding:14px 0 14px 24px;font-family:'IBM Plex Mono',monospace;font-size:15px;letter-spacing:.14em;color:#d9a44e;text-transform:uppercase;border-left:1px solid rgba(255,255,255,.16);">Realised — graded Tier 1–2 evidence</div>

    <div style="padding:20px 0;border-top:1px solid rgba(255,255,255,.16);display:flex;flex-direction:column;justify-content:center;">
      <div style="font-family:'Spectral',serif;font-size:27px;font-weight:700;color:#eef1f5;">Economic</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;color:#9aa6b4;margin-top:4px;">RQ1</div>
      <div style="display:inline-block;margin-top:12px;font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#fff;background:#b8432b;border-radius:5px;padding:5px 11px;">Gap: Wide</div>
    </div>
    <div style="padding:20px 24px 20px 0;border-top:1px solid rgba(255,255,255,.16);font-size:21px;color:#aab3bf;line-height:1.42;display:flex;flex-direction:column;justify-content:center;">$450B agentic value by 2028; 33% of enterprise apps agentic.</div>
    <div style="padding:20px 0 20px 24px;border-top:1px solid rgba(255,255,255,.16);border-left:1px solid rgba(255,255,255,.16);font-size:21px;color:#c4cdd8;line-height:1.42;display:flex;flex-direction:column;justify-content:center;">~6% of firms reach ≥5% EBIT · 4% of EU firms in production · 40–60% hidden TCO · &gt;40% of projects forecast cancelled by 2027.</div>

    <div style="padding:20px 0;border-top:1px solid rgba(255,255,255,.16);display:flex;flex-direction:column;justify-content:center;">
      <div style="font-family:'Spectral',serif;font-size:27px;font-weight:700;color:#eef1f5;">Human-value</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;color:#9aa6b4;margin-top:4px;">RQ2</div>
      <div style="display:inline-block;margin-top:12px;font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#fff;background:#c99a3f;border-radius:5px;padding:5px 11px;">Gap: Moderate</div>
    </div>
    <div style="padding:20px 24px 20px 0;border-top:1px solid rgba(255,255,255,.16);font-size:21px;color:#aab3bf;line-height:1.42;display:flex;flex-direction:column;justify-content:center;">65% of workers shift to high-value tasks; AI as “assistant, not replacement.”</div>
    <div style="padding:20px 0 20px 24px;border-top:1px solid rgba(255,255,255,.16);border-left:1px solid rgba(255,255,255,.16);font-size:21px;color:#c4cdd8;line-height:1.42;display:flex;flex-direction:column;justify-content:center;">49% not using agentic AI · 71% save &lt;1h/day · freed time absorbed by volume · oversight burden = “reverse augmentation.”</div>

    <div style="padding:20px 0;border-top:1px solid rgba(255,255,255,.16);display:flex;flex-direction:column;justify-content:center;">
      <div style="font-family:'Spectral',serif;font-size:27px;font-weight:700;color:#eef1f5;">Regulatory</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;color:#9aa6b4;margin-top:4px;">RQ3</div>
      <div style="display:inline-block;margin-top:12px;font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#fff;background:#b8432b;border-radius:5px;padding:5px 11px;">Gap: Mod–Wide</div>
    </div>
    <div style="padding:20px 24px 20px 0;border-top:1px solid rgba(255,255,255,.16);font-size:21px;color:#aab3bf;line-height:1.42;display:flex;flex-direction:column;justify-content:center;">The EU AI Act as a clear, one-off compliance framework.</div>
    <div style="padding:20px 0 20px 24px;border-top:1px solid rgba(255,255,255,.16);border-left:1px solid rgba(255,255,255,.16);font-size:21px;color:#c4cdd8;line-height:1.42;display:flex;flex-direction:column;justify-content:center;">Arts. 12–14 strain against multi-agent tool chains · runtime drift vs. “substantial modification” unresolved · untraceable drift = not lawfully deployable.</div>
  </div>
</section>

<!-- ═══════════ SLIDE 5 · KEY INSIGHT ═══════════ -->
<section data-label="Key Insight · P3" data-speaker-notes="The counter-intuitive finding: 'regulation suppresses innovation' does not hold. The EU AI Act's controls (Arts. 12-14) overlap with the mitigations that fix MAST failure modes. Compliance engineering and reliability engineering are the same problem — hypothesis P3." style="background:#1f2a38;padding:64px 96px 68px;font-family:'Source Sans 3',sans-serif;color:#eef1f5;display:flex;flex-direction:column;justify-content:space-between;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:18px;letter-spacing:.3em;color:#d9a44e;text-transform:uppercase;">The Key Insight · Hypothesis P3</div>
    <div style="display:flex;align-items:flex-start;gap:14px;"><img src="assets/logo.png" alt="United Institute" style="height:80px;width:auto;"></div>
  </div>
  <div style="font-family:'Spectral',Georgia,serif;font-size:46px;font-weight:400;line-height:1.1;margin-top:16px;color:#eef1f5;"><span style="text-decoration:line-through;text-decoration-thickness:2px;color:#7f8b9a;">“Regulation suppresses innovation”</span> does not hold.</div>

  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:26px;margin-top:34px;">
    <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:26px 30px;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.16em;color:#d9a44e;text-transform:uppercase;">EU AI Act controls</div>
      <div style="font-size:23px;color:#c4cdd8;line-height:1.42;margin-top:14px;">Arts. 12–14: trace logs · human-in-the-loop gates · drift monitoring.</div>
    </div>
    <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:26px 30px;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.16em;color:#d9a44e;text-transform:uppercase;">MAST failure modes</div>
      <div style="font-size:23px;color:#c4cdd8;line-height:1.42;margin-top:14px;">Verification <b style="color:#fff;">23.5%</b> · inter-agent <b style="color:#fff;">32.3%</b> — the ways multi-agent systems break.</div>
    </div>
    <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:26px 30px;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.16em;color:#d9a44e;text-transform:uppercase;">Synergy</div>
      <div style="font-size:23px;color:#c4cdd8;line-height:1.42;margin-top:14px;">Governance-by-design doubles as reliability engineering.</div>
    </div>
  </div>

  <div style="position:relative;width:960px;height:340px;margin:30px auto 0;">
    <div style="position:absolute;left:10px;top:10px;width:500px;height:320px;border-radius:50%;border:2px solid #7f8b9a;background:rgba(127,139,154,.14);"></div>
    <div style="position:absolute;right:10px;top:10px;width:500px;height:320px;border-radius:50%;border:2px solid #d9a44e;background:rgba(191,139,63,.16);"></div>
    <div style="position:absolute;left:66px;top:112px;width:230px;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.14em;color:#9aa6b4;text-transform:uppercase;">EU AI Act controls</div>
      <div style="font-size:22px;color:#e6eaf0;line-height:1.36;margin-top:8px;">Trace logs · HITL gates · drift monitoring</div>
    </div>
    <div style="position:absolute;right:66px;top:112px;width:230px;text-align:right;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:.14em;color:#d9a44e;text-transform:uppercase;">Reliability mitigations</div>
      <div style="font-size:22px;color:#e6eaf0;line-height:1.36;margin-top:8px;">Verification &amp; inter-agent failure fixes</div>
    </div>
    <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;width:190px;">
      <div style="font-family:'Spectral',serif;font-size:28px;font-weight:700;color:#fff;line-height:1.08;">Same engineering</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:15px;letter-spacing:.18em;color:#d9a44e;text-transform:uppercase;margin-top:8px;">P3 Synergy</div>
    </div>
  </div>

  <div style="display:flex;align-items:center;gap:34px;margin-top:34px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:12px;padding:26px 36px;">
    <div style="font-family:'Spectral',serif;font-size:30px;font-weight:600;color:#d9a44e;white-space:nowrap;">Hypothesis: P3 is plausible.</div>
    <div style="width:1px;align-self:stretch;background:rgba(255,255,255,.18);"></div>
    <div style="font-size:22px;color:#c4cdd8;line-height:1.44;">The controls the EU AI Act demands (Arts. 12–14) structurally overlap with the mitigations that make agents reliable. In Europe, building agentic AI <b style="color:#fff;">for compliance</b> and building it <b style="color:#fff;">for value</b> are the same engineering problem.</div>
  </div>
</section>

<!-- ═══════════ SLIDE 6 · INTERACTIVE EXPECTATION GAP ═══════════ -->
<section data-label="The Expectation Gap" data-speaker-notes="Interactive: toggle the scenarios (AI hype, GDP forecast, worker wages, 'just needs time') to show how high expectations tower over modest realised returns. The chasm is the finding." style="padding:0;">
  <dc-import name="Expectation Gap" hint-size="1920px,1080px"></dc-import>
</section>

<!-- ═══════════ SLIDE 7 · REFLECTIONS & CONCLUSION ═══════════ -->
<section data-label="Reflections &amp; Conclusion" data-speaker-notes="Close: the gap is a system problem, not a model problem — TCO under-estimation and readiness deficits, not model capability or EU regulation. Give the three policy moves, state limitations honestly, and land the 2026 recommendation: make P3 measurable with CSS & TUE metrics." style="background:#1f2a38;padding:64px 96px 68px;font-family:'Source Sans 3',sans-serif;color:#eef1f5;display:flex;flex-direction:column;justify-content:space-between;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:18px;letter-spacing:.3em;color:#d9a44e;text-transform:uppercase;">Reflections &amp; Conclusion</div>
    <div style="display:flex;align-items:flex-start;gap:14px;"><img src="assets/logo.png" alt="United Institute" style="height:80px;width:auto;"></div>
  </div>
  <div style="font-family:'Spectral',Georgia,serif;font-size:44px;font-weight:400;line-height:1.1;margin-top:16px;color:#eef1f5;">The gap is real — but it's a system problem, not a model problem.</div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;margin-top:34px;flex:1;">

    <!-- LEFT: the answer, as a diagram -->
    <div style="display:flex;flex-direction:column;justify-content:center;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:15px;letter-spacing:.18em;color:#9aa6b4;text-transform:uppercase;">What the answer means</div>
      <div style="display:flex;flex-direction:column;align-items:center;margin-top:28px;">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;width:100%;">
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:18px 14px;min-height:104px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
            <div style="width:9px;height:9px;background:#d9a44e;border-radius:2px;margin-bottom:10px;"></div>
            <div style="font-size:20px;font-weight:600;color:#eef1f5;line-height:1.28;">TCO under-estimation</div>
          </div>
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:18px 14px;min-height:104px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
            <div style="width:9px;height:9px;background:#d9a44e;border-radius:2px;margin-bottom:10px;"></div>
            <div style="font-size:20px;font-weight:600;color:#eef1f5;line-height:1.28;">Organisational-readiness deficits</div>
          </div>
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:18px 14px;min-height:104px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
            <div style="width:9px;height:9px;background:#d9a44e;border-radius:2px;margin-bottom:10px;"></div>
            <div style="font-size:20px;font-weight:600;color:#eef1f5;line-height:1.28;">Productivity J-curve · delayed benefits</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;margin:14px 0;">
          <div style="width:2px;height:26px;background:#d9a44e;"></div>
          <div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:9px solid #d9a44e;"></div>
        </div>
        <div style="width:100%;background:#16202b;border-radius:10px;padding:24px 30px;text-align:center;">
          <div style="font-family:'Spectral',serif;font-size:28px;font-weight:600;color:#f4f1ea;line-height:1.2;">A system problem — not a model problem</div>
        </div>
        <div style="margin-top:18px;font-size:18px;color:#9aa6b4;">Ruled out: <span style="text-decoration:line-through;">model capability</span> · <span style="text-decoration:line-through;">EU regulation</span></div>
      </div>
      <div style="margin-top:28px;font-family:'Spectral',serif;font-style:italic;font-size:17px;color:#9aa6b4;line-height:1.42;">Limitations: 6 of 9 TCO components rest on Tier-4 triangulation; the N=86 survey measures perception, not causal impact.</div>
    </div>

    <!-- RIGHT: policy implications, as a diagram -->
    <div style="display:flex;flex-direction:column;justify-content:center;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:15px;letter-spacing:.18em;color:#9aa6b4;text-transform:uppercase;">Policy &amp; practice</div>
      <div style="display:flex;flex-direction:column;align-items:center;margin-top:28px;">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;width:100%;">
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:18px 14px;min-height:104px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:600;color:#d9a44e;margin-bottom:8px;">01</div>
            <div style="font-size:20px;font-weight:600;color:#eef1f5;line-height:1.28;">Budget true TCO</div>
          </div>
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:18px 14px;min-height:104px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:600;color:#d9a44e;margin-bottom:8px;">02</div>
            <div style="font-size:20px;font-weight:600;color:#eef1f5;line-height:1.28;">Human + AI by default</div>
          </div>
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:18px 14px;min-height:104px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:600;color:#d9a44e;margin-bottom:8px;">03</div>
            <div style="font-size:20px;font-weight:600;color:#eef1f5;line-height:1.28;">Deploy from strategy, not hype</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;margin:14px 0;">
          <div style="width:2px;height:26px;background:#d9a44e;"></div>
          <div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:9px solid #d9a44e;"></div>
        </div>
        <div style="width:100%;background:#16202b;border-radius:10px;padding:22px 30px;text-align:center;">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.14em;color:#d9a44e;text-transform:uppercase;">Recommendation · 2026</div>
          <div style="font-family:'Spectral',serif;font-size:26px;font-weight:600;color:#f4f1ea;line-height:1.22;margin-top:8px;">Make P3 measurable — CSS + TUE metrics</div>
          <div style="font-size:16px;color:#aeb7c2;margin-top:6px;">Component Synergy Score &amp; Tool Utilization Efficacy (Raza et al., 2026)</div>
        </div>
      </div>
    </div>
  </div>
</section>

</x-import>
</x-dc>
<script>
(async () => {
  if (!document.title || !document.title.trim()) document.title = "Capstone Deck";
  // rAF raced with a short timeout: inside a cross-origin iframe (PrintMode),
  // rAF can be throttled or paused even while the tab is focused, which would
  // hang the scroll loop and never reach print(). Same pattern as
  // buildExportSettleScript (export/shared.ts).
  var raf = function () {
    return Promise.race([
      new Promise(function (r) { requestAnimationFrame(r); }),
      new Promise(function (r) { setTimeout(r, 50); }),
    ]);
  };
  var t0 = performance.now();
  var mark = function (phase) {
    var ms = Math.round(performance.now() - t0);
    console.info('[autoprint]', phase, ms + 'ms');
    try { parent.postMessage({ __omelette_autoprint: { phase: phase, ms: ms } }, '*'); } catch (e) {}
  };
  mark('start');
  // Prepend so page-supplied @page / break rules (deck-stage's margin:0,
  // author CSS) keep source-order precedence over the baseline.
  const baseCss = document.createElement('style');
  baseCss.textContent = "@media print {\n  figure, table { break-inside: avoid; }\n  *, *::before, *::after {\n    print-color-adjust: exact; -webkit-print-color-adjust: exact;\n    backdrop-filter: none !important; -webkit-backdrop-filter: none !important;\n    animation-delay: -99s !important; animation-duration: .001s !important;\n    animation-iteration-count: 1 !important; animation-fill-mode: both !important;\n    animation-play-state: running !important; transition-duration: 0s !important;\n  }\n}";
  document.head.prepend(baseCss);
  if (document.readyState === 'loading') {
    await new Promise((r) => document.addEventListener('DOMContentLoaded', r, { once: true }));
  }
  let ds = document.querySelector('deck-stage');
  // whenDefined never resolves when nothing registers the element, so only
  // await it when a <deck-stage> tag exists (and race a timeout regardless).
  if (ds && !customElements.get('deck-stage')) {
    try {
      await Promise.race([
        customElements.whenDefined('deck-stage'),
        new Promise((r) => setTimeout(r, 3000)),
      ]);
    } catch (e) {}
    ds = document.querySelector('deck-stage');
  }
  // dc-runtime assigns window.DCLogic at init and mounts into #dc-root on
  // DOMContentLoaded; settle on that subtree so React has rendered before
  // print(). Non-DC pages fall through to weighing body.
  const isDc = !ds && 'DCLogic' in window;
  const settleRoot = ds || (isDc ? document.getElementById('dc-root') : null) || document.body;
  if (settleRoot) {
    // Weigh only content children — skip script/style/template so inline
    // Babel/CSS doesn't register as stable "content" before the framework
    // has mounted anything.
    const MEDIA = 'img,svg,canvas,video,picture,iframe,embed,object';
    const weigh = () => {
      let text = 0, media = 0;
      for (const c of settleRoot.children) {
        const t = c.tagName;
        if (t === 'SCRIPT' || t === 'STYLE' || t === 'TEMPLATE') continue;
        text += (c.textContent || '').trim().length;
        media += c.querySelectorAll(MEDIA).length + (c.matches(MEDIA) ? 1 : 0);
      }
      return text + media * 100;
    };
    // "Non-zero and stable" alone is not sufficient to mean rendered: generic
    // body can carry a static shell while async main content is pending, and
    // #dc-root can carry the root DC's static text while child refs are still
    // .sc-placeholder boxes. Gate generic on readyState 'complete', and never
    // accept stability while a dc-runtime placeholder is present.
    const isGeneric = settleRoot === document.body;
    // A placeholder whose fetch failed (.sc-placeholder-error inside) keeps
    // .sc-placeholder forever — don't wait on it. JS loop, not :has(), so an
    // engine without :has() support can't throw out of the while and skip
    // print() entirely.
    var pendingPlaceholders = function () {
      var all = settleRoot.querySelectorAll('.sc-placeholder'), n = 0;
      for (var i = 0; i < all.length; i++)
        if (!all[i].querySelector('.sc-placeholder-error')) n++;
      return n;
    };
    const deadline = Date.now() + 15000;
    let last = -1, stable = 0;
    while (Date.now() < deadline) {
      const n = weigh();
      const ready =
        (!isGeneric || document.readyState === 'complete') &&
        pendingPlaceholders() === 0;
      if (n > 0 && n === last && ready) { if (++stable >= 2) break; } else { stable = 0; }
      last = n;
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  mark('settle-done' + (settleRoot ? ' (errs=' + settleRoot.querySelectorAll('.sc-placeholder-error').length + ' pending=' + pendingPlaceholders() + ')' : ''));
  // Project support.js may predate runtime default-seeding; push via bridge.
  if (isDc && window.__dcSetProps && window.__dcRootName) {
    try {
      const dpEl = document.querySelector('script[data-dc-script]');
      const meta = JSON.parse((dpEl && dpEl.getAttribute('data-props')) || '{}');
      const bag = {};
      for (const k in meta)
        if (k[0] !== '$' && meta[k] && meta[k].default !== undefined)
          bag[k] = meta[k].default;
      if (Object.keys(bag).length) {
        window.__dcSetProps(window.__dcRootName(), bag);
        await new Promise((r) => setTimeout(r, 50));
      }
    } catch (e) {}
  }
  // Reveal content gated on scroll or visibility before printing. Lazy <img>,
  // IntersectionObserver fade-ins, and collapsed <details> don't render while
  // off-screen, so a long page would print with them blank or closed. Open
  // every <details>, force native-lazy images eager, and scroll the document
  // through its full height to trip lazy-load + IO; then wait (bounded) for the
  // newly-triggered images. Inert for deck-stage (slides aren't scroll-gated).
  try {
    for (const d of document.querySelectorAll('details')) d.open = true;
    for (const img of document.querySelectorAll('img[loading="lazy"]'))
      img.loading = 'eager';
    const scroller = document.scrollingElement || document.documentElement;
    const full = Math.max(scroller.scrollHeight, document.body.scrollHeight);
    const step = window.innerHeight || 800;
    var scrollDeadline = Date.now() + 4000;
    for (let y = 0; y <= full && Date.now() < scrollDeadline; y += step) {
      window.scrollTo(0, y);
      await raf();
    }
    window.scrollTo(0, 0);
    await Promise.race([
      Promise.all(
        [...document.images].map((img) =>
          img.complete
            ? null
            : new Promise((res) => {
                img.addEventListener('load', res, { once: true });
                img.addEventListener('error', res, { once: true });
              })
        )
      ),
      new Promise((r) => setTimeout(r, 4000)),
    ]);
  } catch (e) {}
  mark('scroll-done');
  try { await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 3000))]); } catch (e) {}
  mark('fonts-done');
  // Jump every animation to its end state so print() never captures a slide
  // mid-entrance. Ordering matters: the 0s-transition style must be live
  // BEFORE data-deck-active is set so attribute-keyed transitions don't
  // start a (now-0s) run from the pre-active base.
  const st = document.createElement('style');
  st.textContent = '*,*::before,*::after{animation-delay:-99s !important;animation-duration:.001s !important;animation-iteration-count:1 !important;animation-fill-mode:both !important;animation-play-state:running !important;transition-duration:0s !important}';
  document.head.appendChild(st);
  for (const d of document.querySelectorAll('deck-stage')) {
    for (const c of d.children) {
      const t = c.tagName;
      if (t === 'SCRIPT' || t === 'STYLE' || t === 'TEMPLATE') continue;
      c.setAttribute('data-deck-active', '');
    }
  }
  // Re-append deck-stage's @page last so no author @page can add a margin and
  // spill each full-bleed slide onto two sheets. Backstop for old copies.
  if (ds) {
    let pg = document.getElementById('deck-stage-print-page');
    if (!pg) {
      pg = document.createElement('style');
      pg.textContent = '@page{size:' + (+ds.getAttribute('width') || 1920) +
        'px ' + (+ds.getAttribute('height') || 1080) + 'px;margin:0}';
    }
    document.body.appendChild(pg);
  }
  try {
    const sweep = () => {
      for (const a of document.getAnimations()) {
        try { a.finish(); } catch (e) {
          try { a.currentTime = (a.effect && a.effect.getComputedTiming().duration) || 0; a.pause(); } catch (e2) {}
        }
      }
    };
    sweep();
    await raf();
    sweep();
    await raf();
  } catch (e) {}
  // A document that owns its print CSS (the doc-page starter injects the
  // meta at runtime; hand-rolled print designs author it) gets no automatic
  // page geometry and keeps its forced breaks: strip the injected default
  // @page — write time cannot see a runtime-injected meta — skip the frame
  // override below, and skip the fakepage-flattening further down. What
  // still applies: the print baseline and break-hygiene defaults (no @page
  // in either; low specificity, so the document's own print CSS wins) and
  // the break-inside relaxation on >page elements (avoid on those cannot
  // be honored whoever authored it).
  var ownsPrint = !!document.querySelector('meta[name="omelette-owns-print" i]');
  if (ownsPrint) {
    var dst = document.querySelector('style[data-omelette-print-defaults]');
    if (dst && dst.textContent) {
      dst.textContent = dst.textContent.replace(/@page\b[^{}]*\{[^}]*\}/, '');
    }
  }
  // Size the PDF page to the rendered design unless the file opted into
  // standard paper via @page{size:letter|A4|…} or declared print ownership
  // via the meta above. Decks own their own @page.
  // Wrappers (body, …) lose padding+margin so the frame sits at (0,0); the
  // frame itself loses only margin — its padding is INSIDE the measured
  // rect and must stay, or content shifts and leaves a gap at bottom/right.
  var __m = null;
  try { __m = (() => {
  var STAMP = true;
  var docEl = document.documentElement;
  var doc = { width: docEl.scrollWidth, height: docEl.scrollHeight };
  // Name-presence check, case-insensitive — the same contract as the
  // instant-PDF path's runtime check in deck-stage-export.ts. The name is
  // a string literal here because that file interpolates this script into
  // its print script, so importing a shared constant from it would be a
  // cycle; measure.test.ts pins the literal so the two cannot drift apart
  // silently.
  var ownsPrint = !!document.querySelector('meta[name="omelette-owns-print" i]');

  var ds = document.querySelector('deck-stage');
  if (ds) {
    var dw = Number(ds.getAttribute('width')) || 1920;
    var dh = Number(ds.getAttribute('height')) || 1080;
    var n = typeof ds.length === 'number' ? ds.length : ds.children.length;
    var idx = typeof ds.index === 'number' ? ds.index : 0;
    var frames = [];
    for (var i = 0; i < n; i++) frames.push({ left: 0, top: 0, width: dw, height: dh });
    return { kind: 'deck', source: 'declared', doc: doc, frames: frames,
      authored: frames.map(function(){return{width:true,height:true}}),
      deck: { width: dw, height: dh, slideCount: n, index: idx },
      signals: { paperPage: false, pxPage: false, ownsPrint: ownsPrint } };
  }

  // Declared kind: a doc-page tag names the kind outright, so no signal
  // heuristics run (like the deck branch above, signals report false —
  // they describe inferred classifications only). The tag alone is not
  // trusted: the element must have upgraded (shadowRoot present), so a
  // leftover tag whose script was deleted falls through to the heuristics
  // that handle plain markup.
  var stageSx = window.scrollX || 0, stageSy = window.scrollY || 0;
  var dp = document.querySelector('doc-page');
  if (dp && dp.shadowRoot) {
    // Crop to the sheet, not the host — the desk around it is screen-only
    // chrome that must not land in PNG exports.
    var sheet = dp.shadowRoot.querySelector('.sheet');
    var sr = (sheet || dp).getBoundingClientRect();
    return { kind: 'paper-doc', source: 'declared', doc: doc,
      frames: [{ left: sr.left + stageSx, top: sr.top + stageSy,
        width: sr.width, height: sr.height }],
      authored: [{ width: false, height: false }],
      signals: { paperPage: false, pxPage: false, ownsPrint: ownsPrint } };
  }
  var paperPage = false, pxPage = false;
  var eachRule = function (fn) {
    for (var s = 0; s < document.styleSheets.length; s++) {
      var rs; try { rs = document.styleSheets[s].cssRules; } catch (e) { continue; }
      for (var r = 0; r < rs.length; r++) {
        fn(rs[r]);
        if (rs[r].cssRules) for (var n = 0; n < rs[r].cssRules.length; n++) fn(rs[r].cssRules[n]);
      }
    }
  };
  eachRule(function (r) {
    if (r.type !== 6) return;
    var m = /\bsize\s*:\s*([^;}]+)/i.exec(r.cssText || '');
    if (!m) return;
    if (/\b(letter|a[3-5]|legal|ledger)\b/i.test(m[1])) paperPage = true;
    if (/\d+(?:\.\d+)?px\b/i.test(m[1])) pxPage = true;
  });
  var signals = { paperPage: paperPage, pxPage: pxPage, ownsPrint: ownsPrint };

  var pxVal = function (v) {
    var m = /^(\d+(?:\.\d+)?)px$/.exec(v || ''); return m ? +m[1] : 0;
  };
  var authoredPx = function (el, prop) {
    if (pxVal(el.style[prop])) return true;
    var attr = el.getAttribute(prop);
    if (attr && /^\d+$/.test(attr)) return true;
    var hit = false;
    eachRule(function (r) {
      if (hit || r.type !== 1 || !r.style) return;
      try { if (el.matches(r.selectorText) && pxVal(r.style[prop])) hit = true; } catch (e) {}
    });
    return hit;
  };

  var el = document.body, rootPxW = false;
  for (;;) {
    var kids = [];
    for (var c = 0; c < el.children.length; c++) {
      var t = el.children[c].tagName;
      if (t !== 'SCRIPT' && t !== 'STYLE' && t !== 'TEMPLATE') kids.push(el.children[c]);
    }
    if (kids.length !== 1 || !(kids[0] instanceof HTMLElement)) break;
    if (STAMP) el.setAttribute('data-om-frame-wrap', '');
    el = kids[0];
    rootPxW = authoredPx(el, 'width');
    if (rootPxW) break;
  }
  if (!rootPxW) rootPxW = authoredPx(el, 'width');

  // @page{size:letter} alone is a flowing doc; with a px-width root it's a
  // fixed sheet pretending to be paper — fall through and size to render.
  if (paperPage && !rootPxW) {
    return { kind: 'paper-doc', source: 'inferred', doc: doc, signals: signals,
      frames: [{ left: 0, top: 0, width: doc.width, height: doc.height }],
      authored: [{ width: false, height: false }] };
  }

  var sx = window.scrollX || 0, sy = window.scrollY || 0;
  var rectOf = function (e) {
    var r = e.getBoundingClientRect();
    var oy; try { oy = getComputedStyle(e).overflowY; } catch (err) {}
    var h = oy === 'visible' ? Math.max(r.height, e.scrollHeight || 0) : r.height;
    return { left: r.left + sx, top: r.top + sy, width: r.width, height: h };
  };

  // Multi-frame: off unless the page opts in via data-om-multi-frame on the
  // stop element — the explicit opt-in is what guards against card grids
  // and pricing tables that match the geometry but aren't separate
  // canvases. Two ways to name the frames, explicit first:
  // 1. Descendants marked data-om-frame-export (the social-frames starter
  //    marks each asset frame; shells/panels around them are presentation,
  //    so nesting is expected). Document order.
  // 2. Fallback, no marked descendants: direct children with an authored px
  //    width AND height (the original geometry heuristic).
  // Frames may be different sizes (a gallery mixes 1080×1920 stories with
  // 728×90 banners); data-om-frame-label rides along for export filenames.
  if (el.hasAttribute('data-om-multi-frame')) {
    var visOk = function (e) {
      var cs; try { cs = getComputedStyle(e); } catch (err) { return false; }
      return cs.display !== 'none' && cs.visibility !== 'hidden' && cs.position !== 'fixed';
    };
    // A frame's crop is its VISUAL box — never the scrollHeight-inflated
    // rect that rectOf computes for page roots. Shadow-DOM hover controls
    // (image-slot's Replace bar parks 29px below its host) and similar
    // escaping UI contribute scrollable overflow to the frame, and the
    // inflated height both squashes the nominal-size resize and drags
    // content below the frame into the crop. Zoom-independent; bit every
    // slot-bearing frame.
    var frameRectOf = function (e) {
      var r = e.getBoundingClientRect();
      return { left: r.left + sx, top: r.top + sy, width: r.width, height: r.height };
    };
    var pushCand = function (list, e) {
      if (!visOk(e)) return;
      var rc = frameRectOf(e);
      if (rc.width < 2 || rc.height < 2) return;
      var lbl = e.getAttribute('data-om-frame-label');
      if (lbl) rc.label = lbl;
      list.push(rc);
    };
    var cands = [];
    var marked = el.querySelectorAll('[data-om-frame-export]');
    if (marked.length) {
      for (var mk = 0; mk < marked.length; mk++) pushCand(cands, marked[mk]);
    } else {
      for (var k = 0; k < el.children.length; k++) {
        var ch = el.children[k];
        if (!authoredPx(ch, 'width') || !authoredPx(ch, 'height')) continue;
        pushCand(cands, ch);
      }
    }
    if (cands.length >= 2) {
      return { kind: 'multi-frame', source: 'inferred', doc: doc, signals: signals,
        frames: cands, authored: cands.map(function(){return{width:true,height:true}}) };
    }
  }

  if (STAMP) el.setAttribute('data-om-frame', '');
  return { kind: 'single-canvas', source: 'inferred', doc: doc, signals: signals,
    frames: [rectOf(el)],
    authored: [{ width: rootPxW, height: authoredPx(el, 'height') }] };
})(); } catch (e) {}
  var frame = null;
  if (!ownsPrint && __m && __m.kind === 'single-canvas') {
    var f = __m.frames && __m.frames[0];
    if (f && f.width >= 200 && f.height >= 200) {
      frame = f;
      var fst = document.createElement('style');
      fst.textContent = '@media print{@page{size:' + Math.ceil(f.width) + 'px ' +
        Math.ceil(f.height) + 'px;margin:0}' +
        'html,body,[data-om-frame-wrap]{padding:0!important;margin:0!important;background:none!important}' +
        '[data-om-frame]{margin:0!important}}';
      document.body.appendChild(fst);
    }
  }
  // Relax break-inside on oversized elements. An element taller than a
  // printable page can't honor break-inside: avoid — browsers either overflow
  // it or push it whole to the next page, leaving a blank gap, then break it
  // anyway at an arbitrary point. After the final layout (content revealed,
  // animations jumped), find elements taller than a page that still compute
  // break-inside: avoid and reset them to auto, so the browser breaks them at
  // their children's boundaries instead (children keep their own avoid). PAGE_PX
  // is a conservative portrait estimate at 96 CSS px/in — Letter/A4 usable
  // height minus our 0.5in margins — so only clearly-oversized elements are
  // touched and under-page elements still stay whole. Skipped for decks (slides
  // are sized to the page) and for fixed-size canvases (frame set, or an author
  // px-based @page) — runs as before for flowing docs on letter/A4.
  try {
    if (!ds && !frame && !(__m && __m.signals && __m.signals.pxPage)) {
      const PAGE_PX = 1024;
      // Our print defaults add a real @page margin only when the source has
      // no @page of its own; computed style can't tell us (it reports screen
      // media), so read the injected rule directly.
      const defaults = document.querySelector('style[data-omelette-print-defaults]');
      const pageInset = /@page\s*\{[^}]*margin/.test(defaults ? defaults.textContent || '' : '');
      const SEL = 'section,article,figure,table,pre,blockquote,[class~="card" i],[class~="page" i],[class~="sheet" i]';
      for (const el of document.body.querySelectorAll(SEL)) {
        if (el instanceof HTMLElement && el.offsetHeight > PAGE_PX) {
          el.setAttribute('data-om-oversized', '');
          // Fake-paged docs simulate sheets with over-tall break-after:page
          // boxes; honoring the break spills half-blank pages and ends a
          // colored box mid-sheet. Flow them, and (only when we own the page
          // inset) drop the redundant padding/background via the rule below.
          const cs = getComputedStyle(el);
          // An owns-print doc's forced breaks are intentional sheet
          // boundaries, never fake-paged simulation — don't strip them.
          // The break-inside relaxation above still applies: avoid on a
          // >page element is impossible to honor whoever authored it.
          if (
            !ownsPrint &&
            (cs.breakAfter === 'page' || cs.pageBreakAfter === 'always')
          ) {
            el.setAttribute('data-om-fakepage', '');
          }
        }
      }
      const ost = document.createElement('style');
      ost.textContent = '@media print{' +
        '[data-om-oversized]{break-inside:auto !important;page-break-inside:auto !important}' +
        '[data-om-fakepage]{break-after:auto !important;page-break-after:auto !important}' +
        (pageInset ? '[data-om-fakepage]{padding:0 !important;background:none !important}' : '') +
        '}';
      document.head.appendChild(ost);
    }
  } catch (e) {}
  // macOS Preview renders Skia-PDF Luminosity soft-masks as opaque grey boxes;
  // swap the CSS that triggers them for Preview-safe forms.
  try {
    for (const el of document.body.querySelectorAll('*')) {
      const cs = getComputedStyle(el);

      if (cs.boxShadow !== 'none' && cs.filter === 'none') {
        const outs = [], kept = [];
        for (const s of cs.boxShadow.split(/,(?![^(]*[)])/)) {
          const t = s.trim();
          const m = t.match(/^(rgba?[(][^)]+[)]) (-?[0-9.]+px) (-?[0-9.]+px) ([0-9.]+px) -?[0-9.]+px$/);
          if (m && parseFloat(m[4]) > 0) outs.push('drop-shadow(' + m[2] + ' ' + m[3] + ' ' + m[4] + ' ' + m[1] + ')');
          else kept.push(t);
        }
        if (outs.length) {
          el.style.setProperty('filter', outs.join(' '), 'important');
          el.style.setProperty('box-shadow', kept.join(', ') || 'none', 'important');
        }
      }

      const mask = cs.maskImage && cs.maskImage !== 'none' ? cs.maskImage : cs.webkitMaskImage;
      if (mask && mask !== 'none' && cs.filter === 'none') el.style.setProperty('filter', 'opacity(1)', 'important');
    }
  } catch (e) {}
  mark('print-calling');
  setTimeout(() => { try { window.print(); } catch (e) {} }, 200);
})();
</script>
</body>
</html>
