/* ==========================================================================
   DevOps Portfolio JavaScript - Shivam Pandey
   Phase 1 + Phase 2
   ========================================================================== */

/* ============================================================
   PHASE 2: Project Data
   ============================================================ */
const projectData = {
  addressbook: {
    title: 'AddressBook CI/CD Pipeline',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    githubUrl: 'https://github.com/amanpandey8120/addressbook-cicd-project',
    experience: 'StarAgile DevOps Training',
    problem: 'Manual build and deployment of a Java Maven-based AddressBook application introduced inconsistency and error-prone processes without automated validation.',
    solution: 'Implemented an end-to-end CI/CD pipeline using Jenkins that automatically triggers on code commits, runs the Maven build, and deploys the application through containerized stages.',
    architecture: [
      { icon: 'fas fa-user', label: 'Developer' },
      { icon: 'fab fa-github', label: 'GitHub Push' },
      { icon: 'fas fa-infinity', label: 'Jenkins Trigger' },
      { icon: 'fas fa-hammer', label: 'Maven Build' },
      { icon: 'fab fa-docker', label: 'Docker Image' },
      { icon: 'fas fa-server', label: 'Deployment' },
      { icon: 'fas fa-check-circle', label: 'Application Live' }
    ],
    technologies: ['Jenkins', 'Maven', 'Docker', 'Git', 'GitHub', 'Linux', 'Java'],
    devopsFocus: ['CI/CD Pipeline', 'Containerization', 'Build Automation', 'Git Workflow', 'Linux Environment'],
    implementation: 'Jenkins pipeline configured with Jenkinsfile for pipeline-as-code. Maven handles dependency management and artifact generation. Docker containerizes the built artifact for consistent deployments across environments.'
  },

  banking: {
    title: 'StarAgile Banking Finance CI/CD',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    githubUrl: 'https://github.com/amanpandey8120/star-agile-banking-finance',
    experience: 'StarAgile DevOps Training',
    problem: 'Banking web application required a reliable, automated pipeline from code commit to containerized deployment with multi-stage validation to ensure stability.',
    solution: 'Designed and implemented a multi-stage Jenkins CI/CD pipeline integrating Docker containerization, Kubernetes orchestration, and AWS cloud deployment for the banking application.',
    architecture: [
      { icon: 'fas fa-user', label: 'Developer' },
      { icon: 'fab fa-github', label: 'GitHub' },
      { icon: 'fas fa-infinity', label: 'Jenkins CI' },
      { icon: 'fas fa-hammer', label: 'Build & Test' },
      { icon: 'fab fa-docker', label: 'Docker Image' },
      { icon: 'fas fa-dharmachakra', label: 'Kubernetes' },
      { icon: 'fab fa-aws', label: 'AWS Deploy' }
    ],
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Git', 'Maven', 'Linux'],
    devopsFocus: ['CI/CD Pipeline', 'Containerization', 'Container Orchestration', 'Cloud Deployment', 'Automation'],
    implementation: 'Jenkins pipeline automates build → test → containerize → deploy stages. Docker images pushed to registry and deployed via Kubernetes manifests on AWS infrastructure, demonstrating a complete enterprise DevOps workflow.'
  },

  php: {
    title: 'PHP Application Deployment',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    githubUrl: 'https://github.com/amanpandey8120/php-project',
    experience: 'StarAgile DevOps Training',
    problem: 'PHP application required a structured automated deployment process replacing manual, error-prone deployment steps with a consistent, repeatable pipeline.',
    solution: 'Set up a Jenkins-based CI/CD pipeline for the PHP application with version-controlled source code, automated build triggers, and containerized deployment using Docker.',
    architecture: [
      { icon: 'fas fa-user', label: 'Developer' },
      { icon: 'fab fa-github', label: 'GitHub Push' },
      { icon: 'fas fa-infinity', label: 'Jenkins Pipeline' },
      { icon: 'fab fa-docker', label: 'Docker Build' },
      { icon: 'fas fa-server', label: 'Application Deployed' }
    ],
    technologies: ['PHP', 'Docker', 'Jenkins', 'Git', 'Linux'],
    devopsFocus: ['CI/CD Pipeline', 'Containerization', 'Git Workflow', 'Linux Administration'],
    implementation: 'Jenkins pipeline configured to pull from GitHub, build the PHP application environment using Docker, and deploy to the target server. Demonstrates core CI/CD practices for web application delivery.'
  },

  apache: {
    title: 'Apache Web Server Deployment',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    githubUrl: 'https://github.com/amanpandey8120/apachewebsite',
    experience: 'StarAgile DevOps Training',
    problem: 'Web application required proper server configuration and a repeatable deployment approach on a Linux environment using Apache HTTP Server.',
    solution: 'Configured and deployed a web application on Apache HTTP Server, demonstrating Linux server administration, web server configuration, and version-controlled deployment.',
    architecture: [
      { icon: 'fab fa-github', label: 'GitHub Repo' },
      { icon: 'fas fa-terminal', label: 'Linux Server' },
      { icon: 'fas fa-cogs', label: 'Apache Config' },
      { icon: 'fas fa-globe', label: 'Website Live' }
    ],
    technologies: ['Apache HTTP Server', 'Linux', 'Git', 'Shell Scripting'],
    devopsFocus: ['Linux Server Admin', 'Web Server Configuration', 'Deployment', 'Version Control'],
    implementation: 'Apache web server configured on a Linux environment with virtual host setup. Repository contains web application code and configuration files for consistent, repeatable server setup and deployment.'
  },

  healthcare: {
    title: 'Healthcare Application CI/CD',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    githubUrl: 'https://github.com/amanpandey8120/health-care-project',
    experience: 'StarAgile DevOps Training',
    problem: 'Healthcare web application needed automated, reliable deployments with consistent configuration management across environments using infrastructure automation tools.',
    solution: 'Built an automated CI/CD pipeline for the healthcare application using Jenkins, Docker for containerization, and Ansible for configuration management, deployed on AWS infrastructure.',
    architecture: [
      { icon: 'fas fa-user', label: 'Developer' },
      { icon: 'fab fa-github', label: 'GitHub' },
      { icon: 'fas fa-infinity', label: 'Jenkins CI' },
      { icon: 'fas fa-hammer', label: 'Build' },
      { icon: 'fab fa-docker', label: 'Docker' },
      { icon: 'fas fa-robot', label: 'Ansible Deploy' },
      { icon: 'fab fa-aws', label: 'AWS' }
    ],
    technologies: ['Jenkins', 'Ansible', 'Docker', 'AWS', 'Git', 'Linux'],
    devopsFocus: ['CI/CD Pipeline', 'Configuration Management', 'Containerization', 'Cloud Deployment', 'Infrastructure Automation'],
    implementation: 'Jenkins triggers automated builds on code push. Docker containerizes the application for consistency. Ansible manages server configuration and deployment automation, ensuring idempotent infrastructure state across environments.'
  },

  insureme: {
    title: 'InsureMe — Infrastructure Automation',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    githubUrl: 'https://github.com/amanpandey8120/insureme-project-SHIVAM--PANDEY-staragile',
    experience: 'StarAgile DevOps Training',
    problem: 'Insurance application required cloud infrastructure provisioning and automated deployment with infrastructure-as-code practices for reproducible, version-controlled environments.',
    solution: 'Implemented infrastructure-as-code using Terraform for cloud resource provisioning, Docker for containerization, and Jenkins for CI/CD automation, deployed on AWS.',
    architecture: [
      { icon: 'fas fa-layer-group', label: 'Terraform IaC' },
      { icon: 'fab fa-aws', label: 'AWS Infra' },
      { icon: 'fas fa-infinity', label: 'Jenkins CI/CD' },
      { icon: 'fab fa-docker', label: 'Docker Container' },
      { icon: 'fas fa-server', label: 'Application Deployed' }
    ],
    technologies: ['Terraform', 'Docker', 'AWS', 'Jenkins', 'Git', 'Linux'],
    devopsFocus: ['Infrastructure as Code', 'Cloud Provisioning', 'Containerization', 'CI/CD Automation', 'AWS'],
    implementation: 'Terraform provisions AWS infrastructure resources in a declarative, version-controlled manner. Jenkins pipeline automates build and deployment. Docker ensures application portability across the provisioned cloud infrastructure.'
  },

  agroaid: {
    title: 'AgroAid — Mandi Price Prediction',
    category: 'aiml',
    categoryLabel: 'AI/ML & Data',
    githubUrl: 'https://github.com/amanpandey8120/mandi-prize',
    experience: 'KD Infovision — AI/ML Engineer',
    problem: 'Agricultural commodity price volatility at Mandi markets makes it difficult for farmers and traders to make informed buying/selling decisions.',
    solution: 'Developed a machine learning solution that processes historical Mandi price data and builds predictive models to forecast commodity prices, enabling data-driven market decisions.',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Processing', 'NumPy'],
    implementation: 'Historical price data ingestion and preprocessing using Pandas. Feature engineering on temporal and commodity-level attributes. Machine learning model training (regression) using Scikit-learn for price forecasting.'
  }
};

/* ============================================================
   PHASE 2: Filter Tabs
   ============================================================ */
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const allCards = document.querySelectorAll('.project-card');
  const subsections = document.querySelectorAll('.projects-subsection');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      // Filter cards
      allCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          if (category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });

      // Show/hide subsections based on filter
      subsections.forEach(section => {
        const sectionCat = section.getAttribute('data-category-section');
        if (filter === 'all') {
          section.classList.remove('filter-hidden');
        } else if (sectionCat === 'featured') {
          // Always show featured when showing all; for specific filters, still show featured if it has matching cards
          const featuredVisibleCards = section.querySelectorAll(`.project-card[data-category="${filter}"]`);
          if (featuredVisibleCards.length > 0) {
            section.classList.remove('filter-hidden');
          } else {
            section.classList.add('filter-hidden');
          }
        } else if (sectionCat === filter) {
          section.classList.remove('filter-hidden');
        } else {
          section.classList.add('filter-hidden');
        }
      });
    });
  });
}

/* ============================================================
   PHASE 2: Project Modal
   ============================================================ */
function buildPipeline(steps) {
  if (!steps || steps.length === 0) return '';
  let html = '<div class="pipeline-diagram">';
  steps.forEach((step, i) => {
    html += `
      <div class="pipeline-step">
        <div class="pipeline-step-icon"><i class="${step.icon}"></i></div>
        <div class="pipeline-step-label">${step.label}</div>
      </div>`;
    if (i < steps.length - 1) {
      html += '<div class="pipeline-arrow"><i class="fas fa-chevron-right"></i></div>';
    }
  });
  html += '</div>';
  return html;
}

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modal-body');

  const isDevOps = data.category === 'devops';
  const badgeClass = isDevOps ? 'devops-badge' : 'aiml-badge';
  const badgeIcon = isDevOps ? 'fas fa-cloud' : 'fas fa-brain';
  const titleColor = isDevOps ? 'var(--primary)' : 'var(--accent-purple)';
  const sectionTitleClass = isDevOps ? '' : 'aiml-title';

  let techTagsHtml = data.technologies.map(t => `<span class="mini-tag">${t}</span>`).join('');

  let devopsFocusHtml = '';
  if (data.devopsFocus && data.devopsFocus.length > 0) {
    devopsFocusHtml = `
      <div class="modal-section">
        <div class="modal-section-title ${sectionTitleClass}">
          <i class="fas fa-bullseye"></i> DevOps Focus Areas
        </div>
        <div class="focus-tags">
          ${data.devopsFocus.map(f => `<span class="focus-tag">${f}</span>`).join('')}
        </div>
      </div>`;
  }

  let architectureHtml = '';
  if (data.architecture && data.architecture.length > 0) {
    architectureHtml = `
      <div class="modal-section">
        <div class="modal-section-title ${sectionTitleClass}">
          <i class="fas fa-project-diagram"></i> CI/CD Pipeline Architecture
        </div>
        ${buildPipeline(data.architecture)}
      </div>`;
  }

  body.innerHTML = `
    <div class="modal-header">
      <div class="modal-category-badge">
        <span class="category-badge ${badgeClass}"><i class="${badgeIcon}"></i> ${data.categoryLabel}</span>
      </div>
      <h2 class="modal-title" id="modal-title" style="color: ${titleColor};">${data.title}</h2>
      <p class="modal-subtitle"><i class="fas fa-link" style="color: var(--text-dim); margin-right: 6px;"></i>${data.experience}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title ${sectionTitleClass}">
        <i class="fas fa-exclamation-circle"></i> Problem
      </div>
      <p>${data.problem}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title ${sectionTitleClass}">
        <i class="fas fa-lightbulb"></i> Solution
      </div>
      <p>${data.solution}</p>
    </div>

    ${architectureHtml}

    ${devopsFocusHtml}

    <div class="modal-section">
      <div class="modal-section-title ${sectionTitleClass}">
        <i class="fas fa-microchip"></i> Technologies
      </div>
      <div class="modal-tech-tags">${techTagsHtml}</div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title ${sectionTitleClass}">
        <i class="fas fa-cogs"></i> Implementation
      </div>
      <p>${data.implementation}</p>
    </div>

    <div class="modal-footer-actions">
      <a href="${data.githubUrl}" target="_blank" rel="noopener" class="btn btn-outline">
        <i class="fab fa-github"></i> View GitHub Repository
      </a>
    </div>`;

  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', closeProjectModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeProjectModal();
    }
  });
}

/* ============================================================
   PHASE 1: Core Interactions
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Close menu when clicking any nav link
    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
          closeMobileMenu();
        }
      });
    });
  }

  function openMobileMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  // IntersectionObserver for Scroll Active Link Highlighting
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*="#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);
  highlightNavOnScroll(); // Initial check

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  const feedbackEl = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          feedbackEl.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. Shivam will get back to you soon.';
        }
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        setTimeout(() => {
          if (feedbackEl) feedbackEl.style.display = 'none';
        }, 6000);
      }, 1000);
    });
  }

  // Phase 2: Init
  initFilterTabs();
  initModal();

  // Phase 3: Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* Copy Email Utility */
function copyEmail() {
  const email = 'pandeyshivam4657@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.getElementById('btn-copy-email');
    if (btn) {
      btn.innerHTML = '<i class="fas fa-check" style="color:var(--accent-green);"></i>';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-copy"></i>';
      }, 2000);
    }
  }).catch(() => {
    alert('Email: ' + email);
  });
}


