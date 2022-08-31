import { inboxComp } from "../components/inbox";
import { sentComp } from "../components/sent";
import { mailInboxComp } from "../components/inbox-mail";
import { mailSentComp } from "../components/sent-mail";

function handleRoute(route) {
  const routes = [
    {
      path: /\//,
      handler: inboxComp,
    },
    {
      path: /\/inbox/,
      handler: inboxComp,
    },
    {
      path: /\/sent/,
      handler: sentComp,
    },
    {
      path: /\/inbox\/mail/,
      handler: mailInboxComp,
    },
    {
      path: /\/sent\/mail/,
      handler: mailSentComp,
    },
  ];

  for (const r of routes) {
    const contentEl = document.querySelector(".content-comp");
    const buttonEl = document.querySelector(".button");

    if (r.path.test(route)) {
      const el = r.handler();
      if (contentEl?.firstChild) {
        contentEl.firstChild.remove();
      }
      contentEl?.appendChild(el);
      main(el);
    }
  }
}

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

function main(content: any = document) {
  const homeEl = document.querySelector(".header__link-logo") as HTMLElement;

  homeEl.addEventListener("click", (e) => {
    e.preventDefault();
    const route = (e.target as any).getAttribute("href");
    goTo(route);
  });

  const buttonsEl = document.querySelectorAll(".button");

  for (const link of buttonsEl) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = (e.target as any).getAttribute("href");
      goTo(route);

      if (link.textContent == "Inbox") {
        (link as HTMLElement).style.backgroundColor = "#393939";
      } else if (link.textContent == "Sent") {
        (link as HTMLElement).style.backgroundColor = "#393939";
      }
    });
  }

  const mailInboxEl = content.querySelectorAll(".section-inbox__enter");

  for (const link of mailInboxEl) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = (e.target as any).getAttribute("href");
      goTo(route);
    });
  }

  const mailSentEl = content.querySelectorAll(".section-sent__enter");

  for (const link of mailSentEl) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = (e.target as any).getAttribute("href");
      goTo(route);
    });
  }

  const buscarEl = document.querySelector(".header__button") as HTMLElement;

  buscarEl.addEventListener("click", (e) => {
    e.preventDefault();
  });

  window.addEventListener("load", (e) => {
    const targetObj = e.target as any;
    const urlString = targetObj.URL;
    goTo(urlString.slice(21));
  });
}

main();
