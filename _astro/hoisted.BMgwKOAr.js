import"./hoisted.Drh4FbPM.js";document.querySelectorAll("[data-wa-form]").forEach(e=>{e.addEventListener("submit",s=>{s.preventDefault();const{method:r,intro:p,number:n}=e.dataset,o=[p??""];new FormData(e).forEach((i,d)=>{String(i).trim()&&o.push(`${d}: ${String(i).trim()}`)});const a=o.join(`
`);if(window.gtag?.("event","generate_lead",{method:r,page_path:location.pathname}),n){window.open(`https://wa.me/${n}?text=${encodeURIComponent(a)}`,"_blank","noopener");return}const t=e.parentElement?.querySelector("[data-composed]");t&&(t.hidden=!1,t.textContent=`Preview only, nothing has been sent. Once Kismat confirms its WhatsApp number, this message opens in WhatsApp, ready to send:

${a}`)})});
