const faq = document.querySelector('.faq');

faq.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains('heading') || target.parentNode.classList.contains('heading')) {
		let heading = target;
		if (target.parentNode.classList.contains('heading')) {
			heading = target.parentNode;
		}
		const item = heading.parentNode;
		item.classList.toggle('active');
	}
});
