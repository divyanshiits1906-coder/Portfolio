// projects.js

// Wait for DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
  // Check if current page is the homepage; exit if not
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  // Project data store containing details for the side drawer panels
  const projectsData = [
    {
      title: "Brandbook Guidelines",
      category: "Kronus",
      image: "/images/work-items/work-item-1.jpg",
      about: "A comprehensive visual identity guidelines manual detailing logomark constructions, grid spacing rules, color palettes, and typographic scales.",
      strategy: "We designed a modular grid framework to showcase logo spacing rules and typography structures, ensuring the brand guidelines convey luxury and operational precision.",
      review: "The brand guidelines are beautifully detailed and extremely easy to implement across our international teams.",
      reviewer: "Marketing Lead, Kronus",
      tools: ["Figma", "Adobe Illustrator"],
      link: "#"
    },
    {
      title: "Logo & Brandkit",
      category: "Vertical Elevators",
      image: "/images/work-items/work-item-2.jpg",
      about: "Complete brandkit and logo development showcasing clear space guides, letterhead structures, and business cards layouts.",
      strategy: "Using corporate black, warm sand, and structural vector alignments to communicate reliability and architectural strength.",
      review: "The new logo and corporate brand kit elevated our market positioning instantly.",
      reviewer: "Operations Director, Vertical Elevators",
      tools: ["Figma", "Adobe Illustrator"],
      link: "#"
    },
    {
      title: "Series A Pitchdeck & Research",
      category: "NeuroNest",
      image: "/images/work-items/work-item-3.jpg",
      about: "A comprehensive Series A fundraising presentation deck backed by consumer behavior research and psychology insights.",
      strategy: "Leveraged psychology of color perception and data visualization grids to make revenue streams and market sizes instantly comprehensible to venture capital investors.",
      review: "This presentation deck changed how we pitch. The slides are visually stunning and intellectually compelling.",
      reviewer: "Founder, NeuroNest",
      tools: ["Figma", "Canva"],
      link: "#"
    },
    {
      title: "Pre-seed Pitchdeck",
      category: "LexVault",
      image: "/images/work-items/work-item-5.jpg",
      about: "An investor pitch deck detailing the problem statement, product architecture, TAM, and growth opportunities for a legal tech SaaS startup.",
      strategy: "We structured slides with circular diagrams and clear typography hierarchies, making the legal tech workflow look simple and high-potential.",
      review: "LexVault closed its pre-seed round in record time. The investor deck was key to our communication.",
      reviewer: "Co-founder, LexVault",
      tools: ["Figma", "Adobe Illustrator"],
      link: "#"
    },
    {
      title: "Presentation & Brandkit",
      category: "Syros",
      image: "/images/work-items/work-item-6.jpg",
      about: "Sales presentation templates and tactile brandkit guidelines for a luxury boutique lifestyle brand.",
      strategy: "We combined soft cream layouts with elegant typography blocks, focusing on close-ups of premium stationery mockups to convey tactile luxury.",
      review: "Syros design assets perfectly express our brand's quiet luxury. The presentation slides look like a published magazine.",
      reviewer: "Creative Director, Syros",
      tools: ["Canva", "Adobe Illustrator"],
      link: "#"
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
    drawer.querySelector(".drawer-category").textContent = data.category;
    drawer.querySelector(".drawer-title").textContent = data.title;
    drawer.querySelector(".drawer-about").textContent = data.about;
    drawer.querySelector(".drawer-strategy").textContent = data.strategy;
    
    // Client testimonial review
    drawer.querySelector(".drawer-review").innerHTML = `"${data.review}" <span style="display:block; font-size:0.75rem; font-family:'supply-mono', monospace; font-style:normal; margin-top:0.75em; opacity:0.6;">— ${data.reviewer}</span>`;

    // Tools badges grid
    const toolsGrid = drawer.querySelector(".drawer-tools-grid");
    toolsGrid.innerHTML = ""; // Clear existing badges
    data.tools.forEach(tool => {
      const badge = document.createElement("span");
      badge.className = "drawer-tool-badge";
      badge.textContent = tool;
      toolsGrid.appendChild(badge);
    });

    // Case study hyperlink button
    drawer.querySelector(".drawer-link-btn").href = data.link;

    // Trigger panel open animations via CSS transition classes
    drawer.classList.add("open");
    document.body.style.overflow = "hidden"; // Lock page scroll background
  };

  // Close Drawer panel
  const closeDrawer = () => {
    drawer.classList.remove("open");
    document.body.style.overflow = ""; // Restore page scroll
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
