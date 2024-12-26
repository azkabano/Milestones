document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
    const skills = document.getElementById('skills') as HTMLElement | null;

    if (toggleButton && skills) {
        toggleButton.addEventListener('click', () => {
            skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
        });
    } else {
        console.error('One or more elements (toggleButton or skills) are not found in the DOM.');
    }
});
