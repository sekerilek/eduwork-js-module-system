class Tabel {
  constructor(init) {
    this.init = init;
  }
  buatHeader(data) {
    let buka = `<thead><tr>`;
    let tutup = `</tr></thead>`;

    data.forEach((d) => {
      buka += `<th>${d}</th>`;
    });

    return buka + tutup;
  }
  buatBody(data) {
    let buka = `<tbody>`;
    let tutup = `</tbody>`;

    data.forEach((d) => {
      buka += `
      <tr>
        <td>${d[0]}</td>
        <td>${d[1]}</td>
        <td>${d[2]}</td>
      </tr>
      `;
    });

    return buka + tutup;
  }
  render(element) {
    let table =
      `<table class="table table-dark table-hover">` +
      this.buatHeader(this.init.columns) +
      this.buatBody(this.init.data) +
      `</table>`;
    element.innerHTML = table;
  }
}

export default Tabel;
