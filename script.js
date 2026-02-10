$(document).ready(function () {

    const $inputBox = $('#input');
    const $listContainer = $('#list-container');

    $('#add-btn').on('click', function () {
        const value = $inputBox.val().trim();
        if (value === '') return alert('enter value');

        const $li = $('<li></li>');

        const $textSpan = $('<span>', {
            class: 'item-text',
            text: value
        });

        const $editSpan = $('<span>', {
            class: 'edit',
            title: 'Edit',
            html: '✎'
        });

        const $removeSpan = $('<span>', {
            class: 'remove',
            html: '&times;'
        });

        $li.append($textSpan, $editSpan, $removeSpan);
        $listContainer.append($li);

        $inputBox.val('');
    });

    $listContainer.on('click', '.remove', function () {
        $(this).parent().remove();
    });

    $listContainer.on('click', '.edit', function () {
        const $textSpan = $(this).siblings('.item-text');
        const updated = prompt('Edit item:', $textSpan.text());
        if (updated && updated.trim() !== '') {
            $textSpan.text(updated.trim());
        }
    });

});
