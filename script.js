// script.js

// ทำให้เลื่อนนุ่ม ๆ เวลากดเมนู
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // หยุดการกระโดดหน้าจอทันที
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  ``
  