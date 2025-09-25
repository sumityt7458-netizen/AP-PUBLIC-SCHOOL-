// Load data from JSON file
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Header
    document.getElementById('schoolName').textContent = data.schoolName;
    document.getElementById('motto').textContent = data.motto;

    // About Section
    document.getElementById('established').textContent = data.established;
    document.getElementById('address').textContent = data.address;
    document.getElementById('students').textContent = data.students;
    document.getElementById('principal').textContent = data.principal;

    // Notices
    let noticeList = document.getElementById('noticeList');
    data.notices.forEach(notice => {
      let li = document.createElement('li');
      li.textContent = notice;
      noticeList.appendChild(li);
    });

    // Gallery
    let galleryContainer = document.getElementById('galleryContainer');
    data.gallery.forEach(imgUrl => {
      let img = document.createElement('img');
      img.src = imgUrl;
      galleryContainer.appendChild(img);
    });

    // Contact
    document.getElementById('email').textContent = data.email;
    document.getElementById('phone').textContent = data.phone;
  })
  .catch(err => console.error("Error loading data:", err));
