/* ── nav-template.js — injects the shared nav into every page ── */

const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo">Your Name</a>
    <ul class="nav-links" role="list">
      <li><a href="../index.html">Home</a></li>
      <li><a href="../pages/about.html">About</a></li>
      <li><a href="../pages/skills.html">Skills</a></li>
      <li><a href="../pages/projects.html">Projects</a></li>
      <li><a href="../pages/certifications.html">Certifications</a></li>
      <li><a href="../pages/contact.html" class="nav-cta">Contact</a></li>
    </ul>
    <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

// Pages at root level use different paths
const NAV_HTML_ROOT = NAV_HTML
  .replace(/href="\.\.\/index\.html"/g, 'href="index.html"')
  .replace(/href="\.\.\/pages\//g, 'href="pages/');

function injectNav(isRoot = false) {
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.outerHTML = isRoot ? NAV_HTML_ROOT : NAV_HTML;
  }
}
