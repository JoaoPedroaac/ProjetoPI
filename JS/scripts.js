document.addEventListener('DOMContentLoaded', () => {
  const LOCAL_STORAGE_KEY = 'cards';
  const btnClearAll = document.getElementById('btnClearAll');
  const btnAdd = document.getElementById('btnAdd');
  const content = document.getElementById('content');
  const count = document.getElementById('count');

  init();

  function init() {
    btnAdd.addEventListener('click', addCard);
    btnClearAll.addEventListener('click', clearStorage);

    update();
  }

  function addCard() {
    const todoInput = document.getElementById('todoInput');
    const id = new Date().getTime();
    const description = todoInput.value;
    const data = {
      id,
      description,
    };

    if (!description) return;

    saveCardToStorage(data);
    update();

    todoInput.value = '';
    todoInput.focus();
  }

  function clearStorage() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    update();
  }

  function getCardsFromStorage() {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const cards = JSON.parse(raw);

    return cards || [];
  }

  function saveCardToStorage(data) {
    const cards = getCardsFromStorage();

    const newCards = [
      ...cards,
      data,
    ];
    const raw = JSON.stringify(newCards);

    localStorage.setItem(LOCAL_STORAGE_KEY, raw);
  }

  function deleteCard(id) {
    const cards = getCardsFromStorage();

    const filtered = cards.filter(card => card.id != id);

    const raw = JSON.stringify(filtered);

    localStorage.setItem(LOCAL_STORAGE_KEY, raw);

    update();
  }

  function configCards() {
    const buttons = [...document.querySelectorAll('.btnClear')];

    buttons.forEach(button => {
      const id = button.getAttribute('data-target');

      button.addEventListener('click', () => deleteCard(id));
    });
  }

  function update() {
    const cards = getCardsFromStorage();

    const cardsTemplate = cards.reduce((acc, card) => {
      const cardTemplate = mountCard(card);

      return acc + cardTemplate;
    }, '');

    content.innerHTML = cardsTemplate;
    count.innerText = cards.length;

    configCards();
  }

  function mountCard(data) {
    return `
      <div class="todo">
        <p>${data.description}</p>
        <button class="btnClear" data-target="${data.id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  }
});