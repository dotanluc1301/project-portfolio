# Add Siam Hospital Dashboard and Siam Loyalty Projects

Incorporate two new featured enterprise projects—the **Siam Hospital Dashboard** and **Siam Cosmetic Loyalty Platform**—into the portfolio's project showcase within `app/data.json`, positioned directly between "BI - Customer Shopping Behavior Analysis" and "Business Analysis Documentation", complete with tailored business analysis descriptions, live links, and high-fidelity project preview graphics.

## User Review & Critical Decisions

> [!IMPORTANT]
> The two projects have been positioned precisely between "BI - Customer Shopping Behavior Analysis" and "Business Analysis Documentation" as requested. Review the planned project titles, tailored BA/Product Owner descriptions, and visual presentation below before execution.

- **Item 1: Siam Hospital Operations Dashboard**
  - **Title**: `Siam Hospital - Operations & Analytics Dashboard`
  - **URL**: `http://dashboard.siamhospital.com.vn:3000/`
  - **Description**: `Interactive hospital operations and clinical intelligence dashboard tracking patient flow, departmental KPIs, resource utilization, and revenue performance.`
  - **Visual Asset**: High-fidelity dashboard analytics interface mockup (`/siam-dashboard.png`) featuring hospital metrics, operational graphs, and patient throughput KPIs.
- **Item 2: Siam Cosmetic Loyalty Platform**
  - **Title**: `Siam Cosmetic - Customer Loyalty & Rewards Platform`
  - **URL**: `https://siam-cosmetic-loyalty.vercel.app/`
  - **Description**: `Customer retention and loyalty web application featuring membership tier management, accumulated points redemption, personalized rewards, and promotional campaign workflows.`
  - **Visual Asset**: Modern cosmetic clinic loyalty app interface mockup (`/siam-loyalty.png`) displaying member tiers, points balance, and aesthetic treatment rewards.

---

## 1. Overview & Core Concept

- **What It Does**: Enhances Do Tan Luc's portfolio with two live commercial web applications in the Healthcare/Hospitality and Aesthetic Cosmetic domains, demonstrating end-to-end expertise in business requirements elicitation, dashboard reporting, and customer engagement platforms.
- **Target Audience**: Prospective employers, recruiters, and engineering leaders evaluating senior Business Analyst, Product Owner, and Scrum Master qualifications.
- **Key Value**: Provides tangible proof of experience managing complex hospital BI dashboards and consumer-facing retention platforms, elevating the portfolio's breadth beyond academic assessments and templates.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Scrolling to Projects Section**: The user scrolls to Section 04 ("Projects & Assessments").
2. **Carousel / Horizontal Gallery Inspection**:
   - The user sees cards in order:
     1. *BI - Customer Shopping Behavior Analysis*
     2. *Siam Hospital - Operations & Analytics Dashboard* (New)
     3. *Siam Cosmetic - Customer Loyalty & Rewards Platform* (New)
     4. *Business Analysis Documentation*
     5. *EVOL Take-Home Assessment*
     6. *Tapestry Take-Home Assessment*
     7. *REDEX Take-Home Assessment*
3. **Card Interaction & Navigation**:
   - Hovering over each card activates a glowing cyan border transition (`hover:border-[#3bc7e5]`).
   - Clicking "View Project" opens the live portal in a secure external tab (`target="_blank"` with `rel="noopener noreferrer"`).

### Visual Identity & Theme
- **Theme Alignment**: Dark navy canvas (`#0a1629`) with glowing cyan accents (`#3bc7e5`) and vibrant purple gradients (`from-[#3bc7e5] to-[#8b5cf6]`).
- **Aspect Ratio & Card Geometry**: Consistent $300\text{px}$ card width with $160\text{px}$ aspect container for project preview artwork.
- **Image Generation Specifications**:
  - `siam_dashboard`: Modern dark-mode hospital intelligence dashboard with KPI stat cards, patient admission charts, and clinical workload heatmaps.
  - `siam_loyalty`: Elegant aesthetic cosmetics customer loyalty web interface with member card, rewards catalog, and appointment booking points.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Positioning & Array Order in `data.json`**:
  - *Chosen Approach*: Direct insertion at indices 1 and 2 of `data.json`'s `projects` array, ensuring exact placement between "BI - Customer Shopping Behavior Analysis" and "Business Analysis Documentation".
  - *Why*: Preserves user-specified sequencing and chronological / priority narrative.
- **Decision 2: High-Fidelity Local Assets vs. External Placeholders**:
  - *Chosen Approach*: Generate dedicated visual preview images using `generate_image`, saving them as local static assets (`/public/siam-dashboard.png` and `/public/siam-loyalty.png`) and referencing them directly in `data.json`.
  - *Why*: Prevents third-party image load failures or broken placeholders in sandboxed browser environments.
- **Decision 3: Professional Business Analyst Phrasing**:
  - *Chosen Approach*: Highlight key business analysis dimensions (KPI tracking, clinical throughput, member tier workflows, campaign retention) to align with the portfolio's primary brand persona as a Business Analyst / Product Owner.

---

## 4. Technical Architecture & Data Strategy

```
┌──────────────────────────────────────────────────────────────┐
│                      app/data.json                           │
│  "projects": [                                               │
│    { "title": "BI - Customer Shopping Behavior Analysis" },  │
│    { "title": "Siam Hospital - Operations & Analytics", ... },│ ◄── [NEW ITEM 1]
│    { "title": "Siam Cosmetic - Customer Loyalty", ... },      │ ◄── [NEW ITEM 2]
│    { "title": "Business Analysis Documentation" },           │
│    ...                                                       │
│  ]                                                           │
└──────────────────────────────┬───────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────┐
│             components/projects-section.tsx                  │
│  - Reads data.projects                                       │
│  - Displays horizontal scrollable carousel                   │
│  - Renders next/image with fallback & external link button   │
└──────────────────────────────────────────────────────────────┘
```

### Data Schema Update
```json
{
  "title": "Siam Hospital - Operations & Analytics Dashboard",
  "description": "Interactive hospital operations and clinical intelligence dashboard tracking patient flow, departmental KPIs, resource utilization, and revenue performance.",
  "outcomes": "",
  "link": "http://dashboard.siamhospital.com.vn:3000/",
  "image": "/siam-dashboard.png"
},
{
  "title": "Siam Cosmetic - Customer Loyalty & Rewards Platform",
  "description": "Customer retention and loyalty web application featuring membership tier management, accumulated points redemption, personalized rewards, and promotional campaign workflows.",
  "outcomes": "",
  "link": "https://siam-cosmetic-loyalty.vercel.app/",
  "image": "/siam-loyalty.png"
}
```

### Verification & Testing
1. Validate `data.json` JSON syntax.
2. Confirm image assets exist in `/public/` and load correctly with Next.js `<Image>`.
3. Verify carousel rendering, card count update from 5 to 7 (`Projects & Assessments (7)`), and outbound link behavior.
4. Run `compile_applet` and `lint_applet` to confirm flawless build.
