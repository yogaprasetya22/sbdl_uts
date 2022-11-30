let objDataMhs = [
    { nim: "2020087013", nama: "RIVALSYACH ADINANTO", kdProdi: "SIF" },
    { nim: "2021081001", nama: "RAJASA RUSMANA ", kdProdi: "SIF" },
    { nim: "2021081002", nama: "YESSY", kdProdi: "SIF" },
    { nim: "2021081005", nama: "HAFID ROIHAN", kdProdi: "SIF" },
    { nim: "2021081024", nama: "LOLA ADRIANI PUTRI", kdProdi: "SIF" },
    { nim: "2021081025", nama: "GLORYS", kdProdi: "SIF" },
];

const show = document.getElementById("show");
const hidden = document.getElementById("hidden");
const tambah = document.getElementById("tambah");
const tabel = document.getElementById("tabel");
const kirim = document.getElementById("kirim");
const form = document.getElementById("form");
// form.style.display = "none";

// show
show.addEventListener("click", () => {
    tabel.style.display = "table";
    kirim.style.display = "table";
    // form.style.display = "none";
    Tampil(objDataMhs);
});

// hidden
hidden.addEventListener("click", () => {
    tabel.style.display = "table";
    kirim.style.display = "table";
    // form.style.display = "none";
    Kosong(objDataMhs);
});

function Tampil(data) {
    let konz = document.getElementById("konz");
    konz.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        // let td1 = document.createElement('td');
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        // td1.innerHTML = i + 1;
        td2.innerHTML = data[i].nim;
        td3.innerHTML = data[i].nama;
        td4.innerHTML = data[i].kdProdi;

        const btnHapus = document.createElement("button");
        const btnEdit = document.createElement("button");
        btnHapus.innerHTML = "Hapus";
        btnEdit.innerHTML = "Edit";
        btnHapus.setAttribute("onclick", `Hapus(${i})`);
        btnEdit.setAttribute("onclick", `Edit(${i})`);
        td5.innerHTML = btnHapus.outerHTML + " " + btnEdit.outerHTML;

        // tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        konz.appendChild(tr);
    }
}

function Kosong(data) {
    let konz = document.getElementById("konz");
    konz.innerHTML = "";
}

function sendJson() {
    const xhr = new XMLHttpRequest();
    const url = "php/tambah.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log(xhr.responseText);
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };

    const dataJson = JSON.stringify(objDataMhs);
    xhr.send(dataJson);
}

tambah.addEventListener("click", () => {
    // tabel.style.display = "none";
    // kirim.style.display = "none";
    // form.style.display = "block";
});

function tambahData(e) {
    e.preventDefault();
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("name").value;
    const prodi = document.getElementById("prodi").value;
    const data = { nim, nama, prodi };
    const xhr = new XMLHttpRequest();
    const url = "./php/tambah-data.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log(xhr.responseText);
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };

    const dataJson = JSON.stringify(data);
    xhr.send(dataJson);
    // tabel.style.display = "none";
    // kirim.style.display = "none";
    // form.style.display = "block";
}

function Hapus(i) {
    const nama = document.getElementById("name").value;
    console.log(nama, i);
}
function Edit(i) {
    console.log(i);
}
