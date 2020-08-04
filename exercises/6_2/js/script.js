const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const selectList = document.querySelector('#state');

function createOption() {
  const option = document.createElement('option');
  return option;
}

function addOption(addTo, arrayToAdd) {
  for (let i in arrayToAdd) {
    let newOption = createOption();
    newOption.value = i;
    newOption.innerText = arrayToAdd[i];
    addTo.appendChild(newOption);
  }

}

window.onload = function () {
  addOption(selectList, states);
};
