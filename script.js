const faq = document.querySelector('.faq');

faq.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains('heading') || target.parentNode.classList.contains('heading')) {
		let heading = target;
		if (target.parentNode.classList.contains('heading')) {
			heading = target.parentNode;
		}
		const item = heading.parentNode;
		const img = item.querySelector('.heading img');
		const p = item.querySelector('.content');
		p.classList.toggle('active');
		img.classList.toggle('active');
	}
});
// when active, accordion item content gets class active and padding-y2
