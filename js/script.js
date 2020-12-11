document.addEventListener('DOMContentLoaded', () => {

  let myBtns=document.querySelectorAll('.question');
  myBtns.forEach(function(btn) {

      btn.addEventListener('click', () => {
        myBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });

  });

});