// عدّاد الأعضاء (يمكن ربطه ببوت الديسكورد لاحقًا)
document.addEventListener('DOMContentLoaded', function() {
    const memberCount = document.createElement('div');
    memberCount.className = 'member-count';
    memberCount.innerHTML = '👥 عدد الجنود: <span id="count">100</span>';
    document.querySelector('header').appendChild(memberCount);
});
