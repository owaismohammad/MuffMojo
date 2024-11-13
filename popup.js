// This code runs immediately when the popup opens to show emojis
document.addEventListener('DOMContentLoaded', function() {
    const emojiList = document.getElementById('emoji-list');

    // Example emoji suggestions
    const emojis = ['😀', '😁', '😎', '❤️', '💥', '🎉', '🥳', '🌟', '🔥'];

    // Clear existing emojis
    emojiList.innerHTML = '';

    // Add each emoji to the list
    emojis.forEach(emoji => {
        const span = document.createElement('span');
        span.textContent = emoji;
        emojiList.appendChild(span);
    });
});
