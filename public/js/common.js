$(".tours-filter #cat").on('hover', function () {
    var count = $(this).children().length;
    $(this).attr('size', count);
}, function () {
    $(this).removeAttr('size');
});
$(".tours-filter #days").on('hover', function () {
    var count = $(this).children().length;
    $(this).attr('size', count);
}, function () {
    $(this).removeAttr('size');
});

$(".tours-filter #cat").on('change', function () {
    filterItems()
});
$(".tours-filter #days").on('change', function () {
    filterItems()
});
$("#reset").on('click', function(){
    $(".tours-filter #cat").val('-1');
    $(".tours-filter #days").val('-1');
    filterItems();
});
function filterItems() {
    $.ajax({
        url:'/tours/filter',
        type:'get',
        data : {
            category:$(".tours-filter #cat").val(),
            days:$(".tours-filter #days").val()
        }
    }).done(function(data){
        $("#tours").html(data);
    })
}
$('#eltd_search_opener-2').on('click', function(){
    $('#search-animate').addClass('animation');
    $('#search-animate').removeClass('animation-close');
    setTimeout(function() { $('input[name="s"]').focus() }, 300);
    // $('input[name="s"]').focus()
});
$('#search-closer').on('click', function(){
    $('#search-animate').addClass('animation-close');
    $('#search-animate').removeClass('animation');
});