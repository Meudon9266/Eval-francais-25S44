/* ======================================================
   cm2.js — Fonctions partagées du format CM2 interactif
   ======================================================
   - Inclusion automatique de cm2-tools.html
   - Navigation exoP*.html (Précédent / Accueil / Suivant / Liste)
   - Contrôles de police (A− / A+ global, A+ consigne)
   - Raccourcis clavier ← → Home
====================================================== */

(function(){
  const $  = (s,root=document)=>root.querySelector(s);
  const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));
  const root = document.documentElement;

  /* ========== 1. Contrôles de police ========== */
  const getPx = (name, fallback)=> {
    const v = getComputedStyle(root).getPropertyValue(name).trim();
    const n = parseInt(v || fallback, 10);
    return Number.isNaN(n) ? fallback : n;
  };
  const setPx = (name, px)=> root.style.setProperty(name, px + "px");

  function initFontControls(){
    const UI_MIN=16, UI_MAX=34, UI_STEP=2;
    const CONS_MIN=14, CONS_MAX=40, CONS_STEP=2;

    $("#incFont")?.addEventListener("click", ()=>{
      const cur = getPx("--ui-font", 22);
      setPx("--ui-font", Math.min(UI_MAX, cur + UI_STEP));
    });
    $("#decFont")?.addEventListener("click", ()=>{
      const cur = getPx("--ui-font", 22);
      setPx("--ui-font", Math.max(UI_MIN, cur - UI_STEP));
    });
    $("#incConsigne")?.addEventListener("click", ()=>{
      const cur = getPx("--consigne-font", 18);
      setPx("--consigne-font", Math.min(CONS_MAX, cur + CONS_STEP));
    });
  }

  /* ========== 2. Gestion de la navigation ========== */
  function computeNavTargets(lastPage){
    const file = location.pathname.split("/").pop();      // ex: exoP4.html
    const m = file.match(/^(.*?P)(\d+)\.html$/i);
    if(!m) return null;
    const prefix = m[1];                  // "exoP"
    const cur    = parseInt(m[2],10) || 1;
    const home   = `${prefix}1.html`;
    const prev   = `${prefix}${Math.max(1, cur-1)}.html`;
    const next   = (cur >= lastPage) ? home : `${prefix}${cur+1}.html`;
    const list   = "index.html";
    return {prefix, cur, home, prev, next, list, lastPage};
  }

  function bindNavIn(container, model){
    if(!model) return;
    const bPrev = $(".nav-prev", container);
    const bHome = $(".nav-home", container);
    const bNext = $(".nav-next", container);
    const bList = $(".nav-list", container);
    const info  = $(".nav-info", container);

    if(bPrev) bPrev.onclick = ()=> location.href = model.prev;
    if(bHome) bHome.onclick = ()=> location.href = model.home;
    if(bNext) bNext.onclick = ()=> location.href = model.next;
    if(bList) bList.onclick = ()=> location.href = model.list;
    if(info)  info.textContent = `Page ${model.cur} / ${model.lastPage}`;
  }

  function initKeyboardShortcuts(model){
    if(!model) return;
    window.addEventListener("keydown",(e)=>{
      if(e.key==="ArrowLeft")      location.href = model.prev;
      else if(e.key==="ArrowRight")location.href = model.next;
      else if(e.key==="Home")      location.href = model.home;
    });
  }

  /* ========== 3. Inclusion dynamique des fragments HTML ========== */
  async function includeFragments(){
    const mounts = $$("[data-include]");
    const tasks = mounts.map(async mount=>{
      const url = mount.getAttribute("data-include");
      try{
        const resp = await fetch(url);
        if(!resp.ok) throw new Error(resp.statusText);
        const html = await resp.text();
        mount.innerHTML = html;
      }catch(e){
        console.error("Erreur d’inclusion :", url, e);
        mount.innerHTML = `<div class="note small" style="color:#b91c1c">⚠️ Erreur de chargement : ${url}</div>`;
      }
    });
    await Promise.all(tasks);
  }

  /* ========== 4. Initialisation globale CM2 ========== */
  window.addEventListener("DOMContentLoaded", async ()=>{
    // 1) Inclure les fragments HTML (ex: cm2-tools.html)
    await includeFragments();

    // 2) Initialiser la navigation (haut et bas)
    const lastPage = parseInt(document.body.dataset.lastPage || "1", 10);
    const model = computeNavTargets(lastPage);
    $$(".navbar").forEach(nav => bindNavIn(nav, model));
    initKeyboardShortcuts(model);

    // 3) Initialiser les contrôles de police
    initFontControls();
  });
})();
