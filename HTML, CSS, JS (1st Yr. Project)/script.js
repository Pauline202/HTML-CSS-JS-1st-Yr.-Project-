function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'admin') {
      document.getElementById('login-page').classList.add('hidden');
      document.getElementById('main-content').classList.remove('hidden');
      showSection('customer');
    } else {
      alert('Invalid login. Try admin/admin');
    }
  }
  
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
      section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
  }