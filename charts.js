// ← EDIT YOUR DATA HERE

const stats = [
  { value: "37 Trillion", label: "Cells in the human body",       icon: "🔬" },
  { value: "98.7%",       label: "DNA shared with chimpanzees",   icon: "🧬" },
  { value: "8.7 Million", label: "Estimated species on Earth",    icon: "🌿" },
];

const units = [
  { number: "01", title: "Cell Biology",        desc: "Structure, function, and division of cells — the fundamental unit of all life.",              color: "#52b788" },
  { number: "02", title: "Genetics & Heredity", desc: "DNA, genes, traits, and how characteristics are passed from parent to offspring.",             color: "#40916c" },
  { number: "03", title: "Evolution",           desc: "Natural selection, adaptation, and the mechanisms that drive species change over time.",       color: "#2d6a4f" },
  { number: "04", title: "Ecosystems & Ecology",desc: "How living organisms interact with each other and with the physical environment around them.", color: "#1b4332" },
];

const mitosisSteps = [
  { step: "01", name: "Prophase",    desc: "Chromosomes condense and become visible. The nuclear envelope breaks down." },
  { step: "02", name: "Metaphase",   desc: "Chromosomes align along the cell's equator, each attached to spindle fibers." },
  { step: "03", name: "Anaphase",    desc: "Sister chromatids are pulled apart to opposite poles of the cell." },
  { step: "04", name: "Telophase",   desc: "Nuclear envelopes reform around each full set of chromosomes." },
  { step: "05", name: "Cytokinesis", desc: "The cytoplasm divides, producing two genetically identical daughter cells." },
];

const realWorld = [
  { icon: "⚕️", title: "Cancer",       desc: "Uncontrolled cell division causes cells to multiply unchecked, forming tumors. Understanding mitosis is the first step toward understanding cancer biology." },
  { icon: "🌽", title: "GMOs",         desc: "Genetically modified organisms use knowledge of heredity and DNA to introduce beneficial traits — like pest resistance — into crops and livestock." },
  { icon: "🦁", title: "Conservation", desc: "Ecological principles and evolutionary biology underpin every conservation strategy, from habitat protection to species reintroduction programs." },
];

const misconceptions = [
  { claim: "Evolution means humans came from monkeys.",  fix: "Humans and modern apes share a common ancestor — we didn't evolve from any living ape species. The lineages diverged millions of years ago." },
  { claim: "DNA and genes are the same thing.",          fix: "DNA is the molecule itself. A gene is a specific segment of DNA that contains instructions for building a particular protein or controlling a trait." },
  { claim: "Cells are the simplest unit of life.",       fix: "Cells are the smallest unit we consider 'alive', but they contain many smaller structures — organelles — that each carry out specific jobs. Organelles alone are not alive." },
];

// ─── Render: Stat Cards ──────────────────────────────────────────────────────
const statGrid = document.getElementById('stat-cards');
stats.forEach(s => {
  statGrid.innerHTML += `
    <div class="stat-card">
      <span class="stat-icon">${s.icon}</span>
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>`;
});

// ─── Render: Unit Cards ──────────────────────────────────────────────────────
const unitGrid = document.getElementById('unit-grid');
units.forEach(u => {
  unitGrid.innerHTML += `
    <article class="unit-card" style="--unit-color: ${u.color}">
      <span class="unit-number">${u.number}</span>
      <h3 class="unit-title">${u.title}</h3>
      <p class="unit-desc">${u.desc}</p>
    </article>`;
});

// ─── Punnett Square ──────────────────────────────────────────────────────────
function getAlleles(genotype) {
  return [genotype[0], genotype[1]];
}

function sortCombo(a, b) {
  const aUpper = a === a.toUpperCase();
  const bUpper = b === b.toUpperCase();
  if (aUpper && !bUpper) return -1;
  if (!aUpper && bUpper) return 1;
  return 0;
}

function buildPunnettSquare(p1, p2) {
  const a1 = getAlleles(p1);
  const a2 = getAlleles(p2);
  const grid = document.getElementById('punnett-grid');
  const results = document.getElementById('punnett-results');

  const offspring = [];

  // 3×3 grid: top-left empty, then a2 alleles as column headers, then a1 alleles as row headers
  const cells = [
    { type: 'header', content: '' },
    { type: 'header', content: a2[0] },
    { type: 'header', content: a2[1] },
  ];

  for (let i = 0; i < 2; i++) {
    cells.push({ type: 'header', content: a1[i] });
    for (let j = 0; j < 2; j++) {
      const combo = [a1[i], a2[j]].sort(sortCombo).join('');
      offspring.push(combo);
      cells.push({ type: 'result', content: combo, recessive: combo === combo.toLowerCase() });
    }
  }

  grid.innerHTML = `<div class="punnett-table">${
    cells.map(c =>
      c.type === 'header'
        ? `<div class="punnett-cell punnett-header">${c.content}</div>`
        : `<div class="punnett-cell punnett-result ${c.recessive ? 'recessive' : 'dominant'}">${c.content}</div>`
    ).join('')
  }</div>`;

  // Genotype ratio
  const genoMap = {};
  offspring.forEach(o => { genoMap[o] = (genoMap[o] || 0) + 1; });
  const genoRatio = Object.entries(genoMap).map(([k, v]) => `${v} ${k}`).join(' : ');

  // Phenotype ratio
  const recessiveCount = offspring.filter(o => o === o.toLowerCase()).length;
  const dominantCount  = 4 - recessiveCount;
  const phenoRatio = dominantCount > 0 && recessiveCount > 0
    ? `${dominantCount} Dominant : ${recessiveCount} Recessive`
    : dominantCount === 4 ? 'All Dominant' : 'All Recessive';

  results.innerHTML = `
    <div class="result-row">
      <span class="result-label">Genotype ratio</span>
      <span class="result-value">${genoRatio}</span>
    </div>
    <div class="result-row">
      <span class="result-label">Phenotype ratio</span>
      <span class="result-value">${phenoRatio}</span>
    </div>`;
}

document.getElementById('parent1').addEventListener('change', () => {
  buildPunnettSquare(document.getElementById('parent1').value, document.getElementById('parent2').value);
});
document.getElementById('parent2').addEventListener('change', () => {
  buildPunnettSquare(document.getElementById('parent1').value, document.getElementById('parent2').value);
});

buildPunnettSquare('Aa', 'Aa');

// ─── Render: Mitosis Process Flow ────────────────────────────────────────────
const flow = document.getElementById('process-flow');
mitosisSteps.forEach((s, i) => {
  flow.innerHTML += `
    <div class="process-step">
      <div class="step-badge">${s.step}</div>
      <h3 class="step-name">${s.name}</h3>
      <p class="step-desc">${s.desc}</p>
    </div>`;
  if (i < mitosisSteps.length - 1) {
    flow.innerHTML += `<div class="step-connector" aria-hidden="true">→</div>`;
  }
});

// ─── Render: Real-World Cards ─────────────────────────────────────────────────
const rwGrid = document.getElementById('rw-grid');
realWorld.forEach(r => {
  rwGrid.innerHTML += `
    <article class="rw-card">
      <span class="rw-icon">${r.icon}</span>
      <h3 class="rw-title">${r.title}</h3>
      <p class="rw-desc">${r.desc}</p>
    </article>`;
});

// ─── Render: Misconception Callouts ──────────────────────────────────────────
const callouts = document.getElementById('callouts');
misconceptions.forEach(m => {
  callouts.innerHTML += `
    <div class="callout">
      <p class="callout-claim"><span class="callout-x">✗</span><em>"${m.claim}"</em></p>
      <p class="callout-fix"><span class="callout-check">✓</span>${m.fix}</p>
    </div>`;
});
