// Mobile menu
  const hamb = document.getElementById('hamb');
  const mobileMenu = document.getElementById('mobileMenu');
  hamb.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // Service tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector('.tab-panel[data-panel="' + btn.dataset.tab + '"]').classList.add('active');
    });
  });

  // Booking confirmation
  const confirmBtn = document.getElementById('confirmBtn');
  const bookForm = document.getElementById('bookForm');
  const confirmBox = document.getElementById('confirmBox');
  confirmBtn.addEventListener('click', () => {
    const inputs = bookForm.querySelectorAll('input[required], select[required]');
    let valid = true;
    inputs.forEach(i => { if(!i.value){ valid = false; i.style.borderColor = '#B8896F'; } });
    if(!valid) return;
    bookForm.style.display = 'none';
    confirmBox.classList.add('show');
  });
