function openTab(tabName) {
    var i, tabcontent, tabbuttons;

    // Ẩn tất cả nội dung tab
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Xóa class active khỏi tất cả các nút
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // Hiển thị tab được chọn và thêm class active cho nút tương ứng
    document.getElementById(tabName).style.display = "block";
    document.querySelector(`button[onclick="openTab('${tabName}')"]`).className += " active";
}

// Thiết lập tab mặc định khi trang tải lên
document.addEventListener('DOMContentLoaded', function () {
    openTab('register');

    // Lắng nghe sự kiện chỉnh sửa các ô có thể chỉnh sửa
    document.addEventListener('input', function (e) {
        if (e.target.classList.contains('editable')) {
            var cellValue = e.target.textContent.trim().toUpperCase();
            if (cellValue === 'Y') {
                e.target.classList.add('working');
                e.target.classList.remove('not-working');
            } else if (cellValue === 'N') {
                e.target.classList.add('not-working');
                e.target.classList.remove('working');
            } else {
                // Loại bỏ màu nếu nhập khác Y hoặc N
                e.target.classList.remove('working', 'not-working');
            }
        }
    });
});
