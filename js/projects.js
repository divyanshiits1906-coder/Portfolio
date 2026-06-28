// projects.js

// Wait for DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
  // Check if current page is the homepage; exit if not
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  // Project data store containing details for the side drawer panels
  const projectsData = [
    {
      title: "Real Estate Brand Kit & Identity",
      category: "Kronus",
      image: "/images/work-items/work-item-1.jpg",
      timeVal: "2",
      timeUnit: "Weeks",
      assetsVal: "120+",
      assetsLabel: "Assets",
      about: "Developed a brand kit for Kronus in the real estate space: a structured visual identity suitable for signage, digital, and print. The work follows the same rigor as prior brand projects—logo system, palette and type direction, spacing and usage rules, and Figma-organized deliverables for consistent rollout across marketing and property-related touchpoints.",
      strategy: "I designed a modular grid framework to showcase logo spacing rules and typography structures, ensuring the brand guidelines convey luxury and operational precision. Every element was carefully constructed to provide clear, actionable direction for teams implementing the brand across multiple touchpoints and media.",
      role: "Brand Designer",
      team: "Solo",
      status: "Completed",
      timelineSpan: "2 Weeks",
      tools: ["Figma", "Adobe Illustrator"],
      learnings: [
        "Brand systems for property and services brands: credibility without sterility",
        "Figma-first delivery for scalable brand libraries",
        "Reusing patterns from prior brand-kit engagements while tailoring to a new sector"
      ],
      skills: ["Brand Design", "Identity Design", "Logo Design", "Brand Guidelines", "Design Systems"],
      link: "/projects/kronus.pdf"
    },
    {
      title: "Logo & Brandkit",
      category: "Vertical Elevators",
      image: "/images/work-items/work-item-2.jpg",
      timeVal: "1",
      timeUnit: "Week",
      assetsVal: "90+",
      assetsLabel: "Assets",
      about: "Developed a comprehensive brand kit and identity guidelines for Vertical Elevators, a complete brand identity system that establishes visual consistency across all brand touchpoints. The project includes logo variations (horizontal and vertical), business card designs, branded merchandise mockups, and a complete brand book.",
      strategy: "I structured the system around a carefully curated color palette with 7 distinct shades and a typography pairing of primary and secondary typefaces. The design strategy emphasizes professionalism, trust, and modern corporate aesthetics, ensuring absolute brand consistency across all digital, print, and hardware applications.",
      role: "Brand Designer",
      team: "Solo",
      status: "Completed",
      timelineSpan: "1 Week",
      tools: ["Figma", "Adobe Illustrator"],
      learnings: [
        "Brand identity design and comprehensive brand kit development",
        "Color theory and palette creation for brand systems",
        "Typography selection and pairing for brand identity",
        "Logo design variations and clear space guidelines",
        "Merchandise design and brand application across different mediums",
        "Brand guideline documentation and presentation",
        "Figma advanced techniques for brand system organization"
      ],
      skills: ["Brand Design", "Identity Design", "Logo Design", "Brand Guidelines", "Design Systems"],
      link: "/projects/vertical_elevators.pdf"
    },
    {
      title: "SaaS Series A Pitchdeck & Research",
      category: "NeuroNest",
      image: "/images/work-items/work-item-3.jpg",
      timeVal: "2",
      timeUnit: "Weeks",
      about: "Designed a Series A investor pitch deck for NeuroNest, a conceptual healthcare SaaS startup focused on preventive mental wellness for college students. The project combined market research, structured storytelling, and presentation design to communicate business scalability, institutional impact, and investor confidence through a calm, data-driven visual narrative.",
      strategy: "The visual direction focused on building an investor-trustworthy healthcare SaaS aesthetic that felt calm, intelligent, and operationally mature. Using spacious layouts, soft clinical tones, and structured information hierarchy, the deck simplified dense market and financial data into a presentation system designed for clarity, readability, and narrative flow.",
      role: "Presentation & Visual Designer",
      team: "Solo",
      status: "Concept Project",
      tools: ["Figma", "Claude", "Perplexity"],
      learnings: [
        "Designing for investors requires clarity before creativity — every visual decision must reinforce confidence and comprehension.",
        "Balancing healthcare sensitivity with SaaS-style scalability helped shape a more credible visual direction for the concept.",
        "Structured narrative sequencing significantly improves how audiences absorb market, traction, and financial information in presentation environments."
      ],
      skills: ["Pitch Deck Design", "Presentation Narrative", "Market Research", "Visual Storytelling", "Information Design", "Layout Systems", "Startup Positioning"],
      link: "/projects/neuronest.pdf"
    },
    {
      title: "AI Legal-Tech Pitch Deck",
      category: "LexVault",
      image: "/images/work-items/work-item-5.jpg",
      timeVal: "2",
      timeUnit: "Weeks",
      about: "Designed an investor-focused pitch deck for LexVault, an AI-native legal infrastructure startup built for Indian SMEs and modern law practices. The project involved translating dense legal, compliance, and market research into a visually structured presentation system that communicates clarity, scalability, and long-term business potential to investors.",
      strategy: "The deck was designed around a minimal legal-tech visual language that balances enterprise credibility with futuristic AI positioning. I focused heavily on structuring complex information into digestible visual narratives using strong hierarchy, modular layouts, typography systems, and data-led storytelling to maintain readability across highly detailed slides.",
      role: "Presentation & Visual Designer",
      team: "Solo",
      status: "Completed",
      tools: ["Canva", "Adobe Illustrator", "Adobe Photoshop"],
      learnings: [
        "Designing for investor psychology requires balancing clarity, speed, and strategic storytelling.",
        "Legal-tech presentations demand precision without overwhelming the viewer with information.",
        "Strong hierarchy and modular layouts are essential when simplifying complex, data-heavy content.",
        "Presentation design extends beyond aesthetics into narrative construction and business communication."
      ],
      skills: ["Pitch Deck Design", "Presentation Systems", "Visual Storytelling", "Typography Systems", "Data Visualization", "Competitor Analysis", "Investor Communication Design", "Slide Structuring"],
      link: "/projects/lexvault.pdf"
    },
    {
      title: "Healthcare Brand Identity",
      category: "Syros",
      image: "/images/work-items/work-item-6.jpg",
      timeVal: "2",
      timeUnit: "Weeks",
      about: "SYROS is a healthcare brand identity system built around the idea of “quiet healthcare” — calm, precise, and human-centered. The project involved designing the brand strategy, logo system, typography direction, UI concepts, and scalable applications to create a modern healthcare presence that feels both technologically advanced and emotionally reassuring.",
      strategy: "The identity was designed using a minimal and editorial visual approach to move away from conventional clinical branding. Through structured grids, restrained typography, accessible color systems, and modular layouts, the brand was built to maintain consistency across digital and physical touchpoints while communicating trust, clarity, and premium care.",
      role: "Brand & Visual Designer",
      team: "Solo",
      status: "Completed",
      tools: ["Figma", "Adobe Illustrator"],
      learnings: [
        "Designing healthcare systems requires balancing emotional reassurance with operational precision.",
        "Strong brand systems are built through rules, consistency, and scalable decision-making — not just visuals.",
        "Editorial typography and restrained layouts can create trust more effectively than aggressive branding.",
        "Building application-first identities improves how brands scale across physical and digital environments."
      ],
      skills: ["Brand Strategy", "Visual Identity Design", "Logo System Development", "Typography System", "UI Direction & Digital Concepts", "Brand Guidelines", "Application Design", "Design Systems"],
      link: "/projects/syros.pdf"
    }
  ];

  // DOM Elements
  const drawer = document.getElementById("projectDrawer");
  if (!drawer) return;

  const backdrop = drawer.querySelector(".drawer-backdrop");
  const closeBtn = drawer.querySelector(".drawer-close-btn");
  const rows = document.querySelectorAll(".project-item-row");

  // Populate & Open Drawer
  const openDrawer = (projectIndex) => {
    const data = projectsData[projectIndex];
    if (!data) return;

    // Populate content elements inside the drawer panel
    drawer.querySelector(".drawer-cover-image").src = data.image;
    drawer.querySelector(".drawer-cover-image").alt = data.title;
    drawer.querySelector(".drawer-title").textContent = `${data.category} — ${data.title}`;
    drawer.querySelector(".drawer-about").textContent = data.about;
    drawer.querySelector(".drawer-strategy").textContent = data.strategy;
    
    // Populate Role, Team, Status Overview
    drawer.querySelector(".drawer-role").textContent = data.role;
    drawer.querySelector(".drawer-team").textContent = data.team;
    drawer.querySelector(".drawer-status").textContent = data.status;
    
    // Populate Timeline Stat display values
    drawer.querySelector(".drawer-time-val").textContent = data.timeVal;
    drawer.querySelector(".drawer-time-unit").textContent = data.timeUnit;
    
    // Populate Integrated Services skills grid
    const skillsGrid = drawer.querySelector(".drawer-skills-grid");
    skillsGrid.innerHTML = "";
    data.skills.forEach(skill => {
      const badge = document.createElement("span");
      badge.className = "drawer-skill-badge";
      badge.textContent = skill;
      skillsGrid.appendChild(badge);
    });

    // Populate Key Learnings bullet list
    const learningsList = drawer.querySelector(".drawer-learnings");
    learningsList.innerHTML = "";
    data.learnings.forEach(learning => {
      const li = document.createElement("li");
      li.textContent = learning;
      learningsList.appendChild(li);
    });

    // Tools badges grid
    const toolsGrid = drawer.querySelector(".drawer-tools-grid");
    toolsGrid.innerHTML = ""; // Clear existing badges
    data.tools.forEach(tool => {
      const badge = document.createElement("span");
      badge.className = "drawer-tool-badge";
      badge.textContent = tool;
      toolsGrid.appendChild(badge);
    });

    // Case study hyperlink button on image
    drawer.querySelector(".drawer-redirect-btn").href = data.link;

    // Trigger panel open animations via CSS transition classes
    drawer.classList.add("open");
    document.body.style.overflow = "hidden"; // Lock page scroll background
    if (window.lenis) window.lenis.stop(); // Stop Lenis background scrolling
  };

  // Close Drawer panel
  const closeDrawer = () => {
    drawer.classList.remove("open");
    document.body.style.overflow = ""; // Restore page scroll
    if (window.lenis) window.lenis.start(); // Restart Lenis background scrolling
  };

  // Attach event listeners for each project row click
  rows.forEach(row => {
    row.addEventListener("click", () => {
      const index = parseInt(row.getAttribute("data-project-index"));
      openDrawer(index);
    });
  });

  // Attach close handlers for close button and backdrop background click
  closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
});
