$('.tab-list').each(function () {
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $spanel = $($link.attr('href'));
    $this.on('click','.tab-control',function(e){
        e.preventDefault();
        var $link=$(this);
        var id=this.hash;
        if(id&&!$click.is('.active')){
            $panel.removeClass('active');
            $tab.removeClass('active');
            $panel=$(id).addClass('active');
            $tab=$link.parent().addClass('active');
        }
    });
});