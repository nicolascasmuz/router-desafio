function mailSentComp() {
  const addEl = document.createElement("div");

  addEl.innerHTML = `<section class="section-mailsent">
    <h1 class="section-mailsent__title">Enviado</h1>
    <div class="section-mailsent__box">
      <h2 class="section-mailsent__mailsubject">Mail subject</h2>
      <p class="section-mailsent__mailbody">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
        consequuntur necessitatibus eos voluptates quas alias cumque sint
        quisquam repudiandae vitae, itaque magni autem voluptatibus libero
        nemo! Quos ex optio laborum!
      </p>
    </div>
  </section>`;

  return addEl;
}

export { mailSentComp };
