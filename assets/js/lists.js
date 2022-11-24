// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘

// Print the first List
const printFirstList = () => {
  let icon = `<i class="list__head">Work</i>`;
  const position = 'beforeend';
  list_1.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.firstList) {
    // List item
    let item = `
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${link.link}"
        class="list__link"
        >${link.name}</a
        >
    `;
    const position = 'beforeend';
    list_1.insertAdjacentHTML(position, item);
  }
};

// Print the second List
const printSecondList = () => {
  let icon = `<i class="list__head">Social</i>`;
  const position = 'beforeend';
  list_2.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.secondList) {
    // List item
    let item = `
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
    const position = 'beforeend';
    list_2.insertAdjacentHTML(position, item);
  }
};

// Print the third List
const printThirdList = () => {
  let list_name = `<i class="list__head">Media</i>`;
  const position = 'beforeend';
  list_3.insertAdjacentHTML(position, list_name);
  for (const link of CONFIG.lists.thirdList) {
    // List item
    let item = `
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
    const position = 'beforeend';
    list_3.insertAdjacentHTML(position, item);
  }
};

// Print the second List
const printFourthList = () => {
  let icon = `<i class="list__head">Piracy</i>`;
  const position = 'beforeend';
  list_4.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.fourthList) {
    // List item
    let item = `
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
    const position = 'beforeend';
    list_4.insertAdjacentHTML(position, item);
  }
};

printFirstList();
printSecondList();
printThirdList();
printFourthList();
