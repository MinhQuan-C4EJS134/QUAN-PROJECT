let shopItemsData = [
  {
    id: "chuykc",
    name: "Macbook Air 13 2022 M2, RAM 8GB, SSD 512GB",
    price: 46660000,
    desc: `
    Macbook Air 13 2022 M2, RAM 8GB, SSD 512GB<br>
    Mã Sản Phẩm: V000001<br>
    – Thương hiệu: APPLE<br>
    – Dòng sản phẩm: Macbook Air 13 2022 M2<br>
    – CPU: Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine<br>
    – Ram: 8GB unified memory<br>
    – Ổ cứng: 512GB SSD storage<br>
    Màn hình: 13.6-inch Liquid Retina display with True Tone<br>
    – Tình trạng: Hàng New, Nguyên Seal, Chính Hãng<br>
    – Trọng lượng: 1,05g`,
    img: "./images/1B.jpg",
  }

];

let numbWithComma = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
