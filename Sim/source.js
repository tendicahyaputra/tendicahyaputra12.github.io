document.getElementById("year").innerHTML = new Date().getFullYear();
function buy(produk_name) {
    const message = `Hallo apakah barang ready${produk_name}`
    const whatsapp = `https://wa.me/6287710542581&text=${message}`
    location.href = whatsapp
}

function showPage(pageId) {
  // Mengambil semua elemen dengan kelas 'page'
  var pages = document.getElementsByClassName('page');

  // Menggunakan loop untuk menyembunyikan semua halaman kecuali yang dipilih
  for (var i = 0; i < pages.length; i++) {
      if (pages[i].id === pageId) {
          pages[i].style.display = 'block';
      } else {
          pages[i].style.display = 'none';
      }
  }

  // Menghapus kelas 'active' dari semua tautan menu
  var links = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
  for (var j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
  }

  // Menambahkan kelas 'active' pada tautan menu yang dipilih
  document.querySelector('.navbar a[href="#' + pageId + '"]').classList.add('active');
}


function sendWhatsAppMessage() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name.trim() == "" || phone.trim() == "" || message.trim() == "") {
        alert("Mohon isi semua bidang sebelum mengirim pesan WhatsApp.");
        return;
    }

    var phoneNumber = "6287710542581"; // Ganti dengan nomor WhatsApp penerima
    var encodedMessage = encodeURIComponent(message);
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;

    window.open(whatsappURL);
}