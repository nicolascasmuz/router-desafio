function mailInboxComp() {
  const addEl = document.createElement("div");

  addEl.innerHTML = `<section class="section-mailinbox">
    <h1 class="section-mailinbox__title">Recibido</h1>
    <div class="section-mailinbox__box">
      <h2 class="section-mailinbox__mailsubject">Mail subject</h2>
      <p class="section-mailinbox__mailbody">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
        consequuntur necessitatibus eos voluptates quas alias cumque sint
        quisquam repudiandae vitae, itaque magni autem voluptatibus libero
        nemo! Quos ex optio laborum!
      </p>
    </div>
  </section>`;

  return addEl;
}

export { mailInboxComp };
