function sumSoDuong(mangNhap) {
  var sum = 0;
  for (var i = 0; i < mangNhap.length; i++) {
    const number = mangNhap[i];
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

function countSoDuong(mangNhap) {
  var count = 0;
  for (var i = 0; i < mangNhap.length; i++) {
    const number = mangNhap[i];
    if (number > 0) {
      count++;
    }
  }
  return count;
}

function findMinimum(mangNhap) {
  var min = mangNhap[0];

  for (var i = 1; i < mangNhap.length; i++) {
    var number = mangNhap[i];
    if (number < min) {
      min = number;
    }
  }
  return min;
}

function findMinSoDuong(mangNhap) {
  var min = mangNhap[0];
  var index = 0;
  for (var i = 1; i < mangNhap.length; i++) {
    var number = mangNhap[i];
    if (number > 0 && number < min) {
      min = number;
      index = i;
    }
  }
  return min;
}

function findChanCuoiCung(mangNhap) {
  var soChan = -1;
  for (var i = 0; i < mangNhap.length; i++) {
    var number = mangNhap[i];
    if (number % 2 == 0) {
      soChan = number;
    }
  }
  return soChan;
}
//. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function changeLocation(mangNhap) {
  var temp = 0;
  for (var i = 0; i < mangNhap.length; i++) {
    var number = mangNhap[i];
  }
}

function sortTangDan(mangNhap){
    for (var i =0; i< mangNhap.length-1; i++){
        for (var j = i+1 ; j < mangNhap.length; j++){
            if (mangNhap[i] > mangNhap[j]) {
                var temp = mangNhap[i];
                mangNhap[i] = mangNhap[j];
                mangNhap[j] = temp;
            }
        }
    }
    return mangNhap;
    
}

const submit = document.getElementById("submit");
submit.onclick = function () {
  const mangNhap = document
    .getElementById("mangNhap")
    .value.split(" ")
    .map(Number); // Chuyển chuỗi nhập vào thành mảng số
  const chucNang = document.getElementById("chucNang").value;

  var ketQua = 0;

  switch (chucNang) {
    case "1":
      ketQua = sumSoDuong(mangNhap);
      break;
    case "2":
      ketQua = countSoDuong(mangNhap);
      break;
    case "3":
      ketQua = findMinimum(mangNhap);
      break;
    case "4":
      ketQua = findMinSoDuong(mangNhap);
      break;
    case "5":
      ketQua = findChanCuoiCung(mangNhap);
      break;
    case "6":
      ketQua = changeLocation(mangNhap);
      break;
      case "7":
      ketQua = sortTangDan(mangNhap);
      break;
    // Thêm các trường hợp xử lý cho các chức năng khác ở đây...

    default:
      break;
  }
  const footer = document.getElementById("footer");
  footer.innerHTML = "<p class='alert alert-primary'>: " + ketQua + "</p>";
};

function showHiddenConnect() {
  const mangNhap = document
    .getElementById("mangNhap")
    .value.split(" ")
    .map(Number); // Chuyển chuỗi nhập vào thành mảng số
  const chucNang = document.getElementById("chucNang").value;
  var viTri = document.getElementById("viTri");

  if (chucNang !== "6") {
    viTri.style.display = "none";
  } else if (chucNang === "6") {
    viTri.style.display = "block";
  }
}
