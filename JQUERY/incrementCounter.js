// function increment (selector) {
//     let div = $(selector)
//     .append('<textarea class="counter" disabled>0</textarea>')
//     .append('<button class="btn" id="incrementBtn">Increment</button>')
//     .append('<button class="btn" id="addBtn">Add</button>')
//     .append('<ul class="results"> </ul>');

//     $('#incrementBtn').click(function() {
//         let counter = $('.counter').val();
//         counter = parseInt(counter) + 1;
//         $('.counter').text(counter);
//     });
//     $('#addBtn').click(function() {
//         let listItemsValue = parseInt($('.counter').val());
            
//         let li  = $('<li>').text(listItemsValue);
//         $('.results').append(li);
//     });
// }

function increment (selector) {
    let div = $(selector);
    let fragment = document.createDocumentFragment();
   
    let textarea = $('<textarea></textarea>').val(0);
    textarea.addClass('counter');
    textarea.attr('disabled', true);
   
    let incrementButton = $('<button>Increment</button>');
    incrementButton.addClass('btn');
    incrementButton.attr('id','incrementBtn');

    let addButton = $('<button>Add</button>');
    addButton.addClass('btn');
    addButton.attr('id', 'addBtn');
    
    let ul = $('<ul></ul>');
    ul.addClass('results');
    


    incrementButton.on('click',function (event) {
        let counter = parseInt(textarea.val());
        textarea.val(++counter);
    });
    addButton.click(function() {
        let listItemsValue = parseInt($('.counter').val());
            
        let li  = $('<li>').text(listItemsValue);
        $('.results').append(li);
    });

    textarea.appendTo(fragment);
    incrementButton.appendTo(fragment);
    addButton.appendTo(fragment);
    ul.appendTo(fragment);
    div.append(fragment);
}