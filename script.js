$(document).ready(function () {
    const $inputBox = $('#input');
    const $listContainer = $('#list-container');

    $('#add-btn').on('click', function () {
        const value = $inputBox.val().trim();

        if (value === '') {
            alert('enter value');
            return;
        }

        const $li = $('<li></li>');
        const $textSpan = $('<span></span>', {
            class: 'item-text',
            text: value
        });

        $li.append($textSpan);
        $listContainer.append($li);

        $inputBox.val('');
    });
});
