function sentComp() {
  const addEl = document.createElement("div");

  addEl.innerHTML = `<section class="section-sent">
  <h1 class="section-sent__title">Sent</h1>
  <ul class="section-sent__list">
      <li class="section-sent__mail">
          <a class="section-sent__enter" href="/sent/mail">
          Mail subject
            <img
            class="section-sent__enterbutton"
            src="../resources/Polygon 1.png"
            alt=""
            />
          </a>
      </li>
      <li class="section-sent__mail">
          <a class="section-sent__enter" href="/sent/mail">
          Mail subject
            <img
            class="section-sent__enterbutton"
            src="../resources/Polygon 1.png"
            alt=""
            />
            </a>
      </li>
  </ul>
</section>`;

  return addEl;
}

export { sentComp };
