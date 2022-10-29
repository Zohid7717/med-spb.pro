document.querySelectorAll('.faq-dropdown__container').forEach(function (faqDropdownWrapper) {
  
  const faqDropdownButton = faqDropdownWrapper.querySelector('.faq-dropdown__button');
  const faqDropdownText = faqDropdownWrapper.querySelector('.faq-dropdown__text');
  const faqDropdownButtonIcon = faqDropdownWrapper.querySelector('.faq-dropdown__button-icon');
  faqDropdownButton.addEventListener('click', function (e) {
    e.stopPropagation();
    faqDropdownText.classList.toggle('faq-dropdown__text-visible');
    faqDropdownButton.classList.toggle('active');
    faqDropdownButtonIcon.classList.toggle('active');
  });
  document.addEventListener('click', function (e) {
    if (e.target !== faqDropdownButton) {
      faqDropdownButton.classList.remove('active');
      faqDropdownButtonIcon.classList.remove('active');
      faqDropdownText.classList.remove('faq-dropdown__text-visible');
    }
  })
});

