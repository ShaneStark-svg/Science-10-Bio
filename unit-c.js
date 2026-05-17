// ← EDIT YOUR DATA HERE

const ucStats = [
  { value: "37 Trillion", label: "Estimated cells in the human body",         icon: "🔬" },
  { value: "~10 µm",      label: "Typical eukaryotic cell diameter",          icon: "📏" },
  { value: "99.9%",       label: "DNA similarity between any two humans",     icon: "🧬" },
  { value: "10×",         label: "Standard eyepiece magnification on a compound light microscope", icon: "🔭" },
];

// ── Microscope Parts ──────────────────────────────────────────────────────────
const microscopeParts = [
  { name: "Eyepiece (Ocular Lens)", abbr: "10×", function: "The lens you look through. Almost always 10× magnification." },
  { name: "Body Tube",              abbr: "",    function: "Connects the eyepiece to the nosepiece and keeps lenses aligned." },
  { name: "Nosepiece",              abbr: "",    function: "Rotating disc that holds the objective lenses. Turn it to switch magnification." },
  { name: "Objective Lenses",       abbr: "4×/10×/40×", function: "4× scanning, 10× low power, 40× high power. Always start on 4×." },
  { name: "Stage",                  abbr: "",    function: "Flat platform where the glass slide is placed. Stage clips hold the slide." },
  { name: "Diaphragm",              abbr: "",    function: "Controls how much light reaches the specimen. Adjust for contrast." },
  { name: "Coarse Adjustment Knob", abbr: "",    function: "Large knob. Moves the stage up/down for rough focus. Use only on low power (4×)." },
  { name: "Fine Adjustment Knob",   abbr: "",    function: "Small knob. Sharpens focus precisely. Use on medium and high power." },
  { name: "Arm",                    abbr: "",    function: "Structural support connecting head to base. Always carry the microscope by the arm and base together." },
  { name: "Base",                   abbr: "",    function: "The bottom support. Provides stability for the whole microscope." },
  { name: "Light Source",           abbr: "",    function: "Illuminates the specimen from below. Older models use a mirror to reflect light." },
];

// ── Cell Theory ───────────────────────────────────────────────────────────────
const cellTheory = [
  { num: "1", principle: "All living things are made of one or more cells." },
  { num: "2", principle: "The cell is the basic unit of life — all life functions occur inside cells." },
  { num: "3", principle: "All cells come from pre-existing cells (they do not appear spontaneously)." },
];

// ── Organelles ────────────────────────────────────────────────────────────────
const organelles = [
  {
    name: "Nucleus", emoji: "🔵", found: "both", color: "#3b82f6",
    function: "The control centre of the cell. Contains the cell's DNA and directs all cell activities including protein synthesis and cell division.",
    structure: "Round structure with a double membrane (nuclear envelope). Contains the chromosomes (DNA) and a smaller body called the nucleolus, which makes ribosomes."
  },
  {
    name: "Cell Membrane", emoji: "🟡", found: "both", color: "#f59e0b",
    function: "Controls what enters and exits the cell. Selectively permeable — lets some molecules pass through while blocking others.",
    structure: "Thin, flexible layer made of fats (phospholipids) with embedded proteins. Surrounds every cell."
  },
  {
    name: "Mitochondria", emoji: "🟠", found: "both", color: "#f97316",
    function: "Produces ATP (the cell's energy currency) through cellular respiration. Uses glucose and oxygen to release energy. The more active the cell, the more mitochondria it has.",
    structure: "Double membrane with a folded inner layer to increase surface area. Has its own DNA, separate from the nucleus."
  },
  {
    name: "Ribosomes", emoji: "⚪", found: "both", color: "#6b7280",
    function: "The site of protein synthesis. Reads instructions from the nucleus and assembles amino acids into proteins.",
    structure: "The smallest organelle. Found floating in the cytoplasm or attached to the endoplasmic reticulum."
  },
  {
    name: "Endoplasmic Reticulum (ER)", emoji: "🟤", found: "both", color: "#92400e",
    function: "A network of membranes that processes and transports proteins (rough ER, covered in ribosomes) and synthesizes lipids (smooth ER, no ribosomes).",
    structure: "Network of connected membranes attached to the outer nuclear membrane. Rough ER is studded with ribosomes; smooth ER is not."
  },
  {
    name: "Golgi Apparatus", emoji: "🟢", found: "both", color: "#10b981",
    function: "The cell's post office. Receives proteins from the ER, modifies them, and packages them into vesicles for delivery inside or outside the cell.",
    structure: "Stacked, flattened membrane sacs. Buds off vesicles to ship proteins to their destination."
  },
  {
    name: "Lysosomes", emoji: "🔴", found: "animal", color: "#ef4444",
    function: "The cell's cleanup crew. Contains digestive enzymes that break down waste materials, worn-out organelles, and bacteria.",
    structure: "Small membrane sacs containing digestive enzymes. The acidic interior keeps the enzymes active."
  },
  {
    name: "Vacuole", emoji: "💧", found: "both", color: "#60a5fa",
    function: "Stores water, nutrients, and waste. In plant cells the large central vacuole fills with water to create pressure that keeps the plant firm.",
    structure: "Fluid-filled sac with a single membrane. The large central vacuole in plant cells can take up most of the cell's volume."
  },
  {
    name: "Chloroplast", emoji: "🍀", found: "plant", color: "#22c55e",
    function: "The site of photosynthesis. Uses light energy, CO₂, and water to produce glucose and oxygen. Contains chlorophyll, the green pigment that absorbs light.",
    structure: "Green, oval organelle with a double membrane and inner stacks of membranes called grana. Contains chlorophyll."
  },
  {
    name: "Cell Wall", emoji: "🟫", found: "plant", color: "#78350f",
    function: "Provides rigid structural support and protection. Prevents the cell from bursting when the vacuole fills with water.",
    structure: "Rigid outer layer made of cellulose (in plants). Supports and protects the cell. Water and small molecules pass through freely."
  },
];

// ── Photosynthesis (simplified for Science 10) ────────────────────────────────
const photosynthesisSteps = [
  { step: "01", name: "Light Absorbed",    desc: "Chlorophyll in the chloroplasts absorbs sunlight — mainly red and blue wavelengths. Green light is reflected, which is why plants look green." },
  { step: "02", name: "Reactants Taken In", desc: "Water (H₂O) is absorbed through the roots. Carbon dioxide (CO₂) enters through tiny pores on the leaf called stomata." },
  { step: "03", name: "Glucose Produced",  desc: "Using light energy, the cell converts CO₂ and H₂O into glucose (C₆H₁₂O₆). Oxygen (O₂) is released as a byproduct through the stomata." },
];

// ── Cellular Respiration (simplified for Science 10) ─────────────────────────
const respirationSteps = [
  { step: "01", name: "Glucose Broken Down", desc: "Glucose from food is broken down in the cytoplasm. A small amount of ATP is produced and pyruvate is formed, which moves into the mitochondria." },
  { step: "02", name: "Energy Released",     desc: "Inside the mitochondria, pyruvate is fully broken down using oxygen. A large amount of ATP is produced, along with carbon dioxide and water as waste." },
  { step: "03", name: "ATP Powers the Cell", desc: "The ATP produced powers all cell activities — movement, growth, protein synthesis, and active transport. One glucose molecule yields approximately 36 ATP." },
];

// ── Mitosis (simplified for Science 10) ──────────────────────────────────────
const mitosisSteps = [
  { step: "I",  name: "Interphase",   desc: "The cell grows, carries out normal functions, and copies all of its DNA. By the end, every chromosome has been duplicated." },
  { step: "01", name: "Prophase",     desc: "Chromosomes condense and become visible. The nuclear envelope breaks down. Spindle fibres begin to form." },
  { step: "02", name: "Metaphase",    desc: "Chromosomes line up along the centre of the cell. Spindle fibres attach to each chromosome." },
  { step: "03", name: "Anaphase",     desc: "Spindle fibres pull the chromosomes apart, moving one complete set to each end of the cell." },
  { step: "04", name: "Telophase",    desc: "A nuclear envelope forms around each set of chromosomes. Two nuclei now exist in one cell." },
  { step: "05", name: "Cytokinesis",  desc: "The cytoplasm divides. In animal cells a cleavage furrow pinches inward; in plant cells a new cell plate forms down the middle. Result: two identical daughter cells." },
];

// ── Diffusion & Osmosis ───────────────────────────────────────────────────────
const transportConcepts = [
  {
    title: "Diffusion",
    icon: "→",
    color: "#0ea5e9",
    def: "The movement of particles from an area of high concentration to an area of low concentration. Particles spread out until evenly distributed.",
    example: "Oxygen diffuses from the air (high O₂) into your blood (low O₂) in the lungs. No energy required — this is passive transport.",
  },
  {
    title: "Osmosis",
    icon: "💧",
    color: "#6366f1",
    def: "The movement of water through a selectively permeable membrane from an area of low solute concentration to an area of high solute concentration.",
    example: "Plant roots absorb water from soil via osmosis. The soil water has fewer dissolved particles than root cells, so water moves in.",
  },
  {
    title: "Hypertonic Solution",
    icon: "↑",
    color: "#f97316",
    def: "A solution with a higher solute concentration than inside the cell. Water moves OUT of the cell — the cell shrinks.",
    example: "Saltwater is hypertonic to most cells. Red blood cells placed in saltwater shrivel (crenate) because water leaves.",
  },
  {
    title: "Hypotonic Solution",
    icon: "↓",
    color: "#22c55e",
    def: "A solution with a lower solute concentration than inside the cell. Water moves INTO the cell — the cell swells.",
    example: "Pure water is hypotonic to most cells. Red blood cells in pure water swell and can burst (lyse).",
  },
  {
    title: "Isotonic Solution",
    icon: "=",
    color: "#94a3b8",
    def: "A solution with the same solute concentration as inside the cell. No net movement of water — the cell keeps its normal shape.",
    example: "Normal saline (0.9% salt) is isotonic to human cells. IV fluids are isotonic so they don't damage blood cells.",
  },
];

// ── Real-World Connections ────────────────────────────────────────────────────
const ucRealWorld = [
  { icon: "🏥", title: "Cancer & Cell Division",         desc: "Cancer is uncontrolled mitosis — the cell cycle checkpoints that normally stop damaged cells from dividing break down. Understanding mitosis is the basis for chemotherapy and radiation therapy." },
  { icon: "🛢️", title: "Alberta Oil Sands & Bioremediation", desc: "Prokaryotic bacteria are used in bioremediation to break down oil contamination in Alberta's oil sands. Scientists deploy bacteria that consume hydrocarbons, cleaning contaminated soil and water." },
  { icon: "🌾", title: "GM Canola & Plant Cells",        desc: "Canola is Alberta's most valuable crop. GM canola varieties were created by inserting new genes directly into plant cells — using the cell's own nucleus and ribosomes to express the new trait." },
];

// ── Misconceptions ────────────────────────────────────────────────────────────
const ucMisconceptions = [
  {
    claim: "Mitochondria only exist in animal cells.",
    fix: "Mitochondria are found in virtually all eukaryotic cells — including plant cells. Plants need ATP for growth, reproduction, and active transport. They just also have chloroplasts."
  },
  {
    claim: "Plants only do photosynthesis, not cellular respiration.",
    fix: "All living plant cells carry out cellular respiration continuously, day and night. Photosynthesis only happens in cells with chloroplasts when light is available. Roots, for example, only do respiration."
  },
  {
    claim: "Bigger cells are more evolved or more efficient.",
    fix: "Cell size is constrained by the surface area to volume ratio. As a cell grows, its volume increases faster than its surface area — meaning it can't exchange materials fast enough. Larger isn't better."
  },
  {
    claim: "The cell membrane is just a barrier that keeps things in.",
    fix: "The membrane is a dynamic, active structure. It actively controls what enters and exits, receives signals, and identifies the cell. It's much more than a wall."
  },
  {
    claim: "Osmosis only happens in plants.",
    fix: "Osmosis happens in all living cells — animal cells included. Your red blood cells, kidney cells, and intestinal cells all rely on osmosis constantly."
  },
];

// ── Glossary ──────────────────────────────────────────────────────────────────
const ucGlossary = [
  { term: "Cell Theory",          def: "Three principles: all living things are made of cells; the cell is the basic unit of life; all cells come from pre-existing cells." },
  { term: "Spontaneous Generation", def: "The disproved idea that living things could arise from non-living matter. Disproved by Redi (1668) and Pasteur (1859)." },
  { term: "Organelle",            def: "A specialized structure within a cell that performs a specific function, analogous to an organ in the body." },
  { term: "Prokaryote",           def: "A cell type that lacks a membrane-bound nucleus. DNA floats freely in the cytoplasm. Examples: bacteria, archaea." },
  { term: "Eukaryote",            def: "A cell type with a true membrane-bound nucleus and other membrane-bound organelles. Examples: animal, plant, fungal, and protist cells." },
  { term: "Selectively Permeable", def: "Describes a membrane that allows some substances to pass through but not others. Controls what enters and exits the cell." },
  { term: "Diffusion",            def: "Movement of particles from high concentration to low concentration. Passive — requires no energy." },
  { term: "Osmosis",              def: "The diffusion of water across a selectively permeable membrane, from low solute concentration to high solute concentration." },
  { term: "Hypertonic",           def: "A solution with a higher solute concentration than the cell's interior. Water moves out — the cell shrinks." },
  { term: "Hypotonic",            def: "A solution with a lower solute concentration than the cell's interior. Water moves in — the cell swells." },
  { term: "Isotonic",             def: "A solution with the same solute concentration as the cell's interior. No net water movement." },
  { term: "ATP",                  def: "Adenosine triphosphate — the universal energy currency of all living cells. Produced in cellular respiration and used to power cell activities." },
  { term: "Photosynthesis",       def: "The process by which plants, algae, and cyanobacteria convert CO₂, H₂O, and light energy into glucose and O₂." },
  { term: "Cellular Respiration", def: "The process by which all living cells break down glucose using O₂ to release energy as ATP, producing CO₂ and H₂O." },
  { term: "Mitosis",              def: "Cell division that produces two genetically identical daughter cells. Used for growth and tissue repair in eukaryotes." },
  { term: "Chlorophyll",          def: "The green pigment in chloroplasts that absorbs light energy for photosynthesis." },
  { term: "Stomata",              def: "Tiny pores on the surface of leaves that allow CO₂ in and O₂ out during photosynthesis, and O₂ in during respiration." },
  { term: "Cytokinesis",          def: "The splitting of the cytoplasm after mitosis, producing two separate daughter cells." },
];

// ─── Render: Stat Cards ──────────────────────────────────────────────────────
const statGrid = document.getElementById('uc-stats');
ucStats.forEach(s => {
  statGrid.innerHTML += `
    <div class="stat-card">
      <span class="stat-icon">${s.icon}</span>
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>`;
});

// ─── Render: Cell Theory ──────────────────────────────────────────────────────
const ctList = document.getElementById('cell-theory-list');
if (ctList) {
  cellTheory.forEach(c => {
    ctList.innerHTML += `
      <div class="cell-theory-item">
        <span class="ct-num">${c.num}</span>
        <p class="ct-text">${c.principle}</p>
      </div>`;
  });
}

// ─── Render: Microscope Parts ─────────────────────────────────────────────────
const partsList = document.getElementById('microscope-parts');
if (partsList) {
  microscopeParts.forEach(p => {
    partsList.innerHTML += `
      <div class="scope-part">
        <span class="scope-part__name">${p.name}${p.abbr ? ` <em>(${p.abbr})</em>` : ''}</span>
        <span class="scope-part__fn">${p.function}</span>
      </div>`;
  });
}

// ─── Render: Organelle Cards ──────────────────────────────────────────────────
const organelleGrid = document.getElementById('organelle-grid');

function renderOrganelles(filter) {
  const list = filter === 'all'
    ? organelles
    : organelles.filter(o => o.found === filter || (filter === 'both' && o.found === 'both'));

  organelleGrid.innerHTML = list.map(o => `
    <div class="organelle-card">
      <div class="organelle-header" style="border-left-color: ${o.color}">
        <span class="organelle-emoji">${o.emoji}</span>
        <h3 class="organelle-name">${o.name}</h3>
        <span class="organelle-badge organelle-badge--${o.found}">
          ${o.found === 'both' ? 'All cells' : o.found === 'plant' ? 'Plant only' : 'Animal only'}
        </span>
      </div>
      <div class="organelle-body">
        <p class="organelle-function"><strong>Function:</strong> ${o.function}</p>
        <p class="organelle-structure"><strong>Structure:</strong> ${o.structure}</p>
      </div>
    </div>`).join('');
}

renderOrganelles('all');

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderOrganelles(btn.dataset.filter);
  });
});

// ─── Render: Process Flows ────────────────────────────────────────────────────
function renderFlow(id, steps) {
  const el = document.getElementById(id);
  el.innerHTML = steps.map((s, i) => `
    <div class="process-step">
      <div class="step-badge">${s.step}</div>
      <h3 class="step-name">${s.name}</h3>
      <p class="step-desc">${s.desc}</p>
    </div>
    ${i < steps.length - 1 ? '<div class="step-connector" aria-hidden="true">→</div>' : ''}`).join('');
}

renderFlow('photo-flow', photosynthesisSteps);
renderFlow('resp-flow', respirationSteps);
renderFlow('mitosis-flow', mitosisSteps);

// ─── Render: Diffusion & Osmosis ──────────────────────────────────────────────
const transportGrid = document.getElementById('transport-grid');
if (transportGrid) {
  transportConcepts.forEach(t => {
    transportGrid.innerHTML += `
      <div class="transport-card" style="border-top-color: ${t.color}">
        <span class="transport-icon" style="color: ${t.color}">${t.icon}</span>
        <h3 class="transport-title">${t.title}</h3>
        <p class="transport-def">${t.def}</p>
        <p class="transport-example"><strong>Example:</strong> ${t.example}</p>
      </div>`;
  });
}

// ─── Organelle Quiz ───────────────────────────────────────────────────────────
let quizScore = 0;
let quizTotal = 0;
const shuffledOrganelles = [...organelles].sort(() => Math.random() - 0.5);
let qIdx = 0;

function getOptions(correct) {
  const others = organelles
    .filter(o => o.name !== correct.name)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(o => o.name);
  return [correct.name, ...others].sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  const q = shuffledOrganelles[qIdx % shuffledOrganelles.length];
  const opts = getOptions(q);

  document.getElementById('quiz-prompt').innerHTML =
    `Which organelle: <strong>${q.function.split('.')[0].toLowerCase()}</strong>?`;

  document.getElementById('quiz-options').innerHTML = opts.map(opt => `
    <button class="quiz-btn" data-correct="${opt === q.name}">${opt}</button>`).join('');

  updateScore();

  document.querySelectorAll('.quiz-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quizTotal++;
      if (btn.dataset.correct === 'true') quizScore++;

      document.querySelectorAll('.quiz-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('quiz-btn--correct');
        else if (b === btn) b.classList.add('quiz-btn--wrong');
      });

      updateScore();
      setTimeout(() => { qIdx++; loadQuestion(); }, 1500);
    });
  });
}

function updateScore() {
  document.getElementById('quiz-score').innerHTML = quizTotal > 0
    ? `<span class="score-text">Score: <strong>${quizScore}/${quizTotal}</strong> (${Math.round(quizScore / quizTotal * 100)}%)</span>`
    : `<span class="score-text">Answer a question to start your score.</span>`;
}

loadQuestion();

// ─── Render: Real-World Cards ─────────────────────────────────────────────────
const rwGrid = document.getElementById('uc-rw');
ucRealWorld.forEach(r => {
  rwGrid.innerHTML += `
    <article class="rw-card">
      <span class="rw-icon">${r.icon}</span>
      <h3 class="rw-title">${r.title}</h3>
      <p class="rw-desc">${r.desc}</p>
    </article>`;
});

// ─── Render: Misconceptions ───────────────────────────────────────────────────
const callouts = document.getElementById('uc-callouts');
ucMisconceptions.forEach(m => {
  callouts.innerHTML += `
    <div class="callout">
      <p class="callout-claim"><span class="callout-x">✗</span> <em>"${m.claim}"</em></p>
      <p class="callout-fix"><span class="callout-check">✓</span> ${m.fix}</p>
    </div>`;
});

// ─── Render: Glossary ─────────────────────────────────────────────────────────
const glossaryGrid = document.getElementById('uc-glossary');
ucGlossary.forEach(g => {
  glossaryGrid.innerHTML += `
    <div class="glossary-card">
      <dt class="glossary-term">${g.term}</dt>
      <dd class="glossary-def">${g.def}</dd>
    </div>`;
});
