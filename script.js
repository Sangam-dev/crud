$(document).ready(function () {

    const $inputBox = $('#input');
    const $listContainer = $('#list-container');

    function saveData() {
        localStorage.setItem('groceryList', $listContainer.html());
    }

    function loadData() {
        const data = localStorage.getItem('groceryList');
        if (data) $listContainer.html(data);
    }

    $('#add-btn').on('click', function () {
        const value = $inputBox.val().trim();
        if (value === '') return alert('enter value');

        const $li = $('<li></li>');
        const $textSpan = $('<span>', { class: 'item-text', text: value });
        const $editSpan = $('<span>', { class: 'edit', title: 'Edit', html: '✎' });
        const $removeSpan = $('<span>', { class: 'remove', html: '&times;' });

        $li.append($textSpan, $editSpan, $removeSpan);
        $listContainer.append($li);

        saveData();
        $inputBox.val('');
    });

    $listContainer.on('click', '.remove', function () {
        $(this).parent().remove();
        saveData();
    });

    $listContainer.on('click', '.edit', function () {
        const $textSpan = $(this).siblings('.item-text');
        const updated = prompt('Edit item:', $textSpan.text());
        if (updated && updated.trim() !== '') {
            $textSpan.text(updated.trim());
            saveData();
        }
    });

    $listContainer.on('click', 'li, .item-text', function () {
        const $li = $(this).is('li') ? $(this) : $(this).parent();
        $li.toggleClass('checked');
        saveData();
    });

    loadData();
});
