function inboxComp() {
  const addEl = document.createElement("div");

  addEl.innerHTML = `<section class="section-inbox">
  <h1 class="section-inbox__title">Inbox</h1>
  <ul class="section-inbox__list">
      <li class="section-inbox__mail">
          <a class="section-inbox__enter" href="/inbox/mail">
          Mail subject
            <img
            class="section-inbox__enterbutton"
            src="../resources/Polygon 1.png"
            alt=""
            />
          </a>
      </li>
      <li class="section-inbox__mail">
          <a class="section-inbox__enter" href="/inbox/mail">
          Mail subject
            <img
            class="section-inbox__enterbutton"
            src="../resources/Polygon 1.png"
            alt=""
            />
            </a>
      </li>
  </ul>
</section>`;

  return addEl;
}

export { inboxComp };
