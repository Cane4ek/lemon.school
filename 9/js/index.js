
$(function(){
$("#textDiv").html('<div class="tab1 tab"><div class="tabs-column tabs-column2"><h2 class="tabs-column2-hrading">Tabs with soft transitioning effect</h2><p class="tabs-column2-text tabs-column2-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.</p><p class="tabs-column2-text tabs-column2-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p><a href="#" class="tabs-column2-link">Dowload</a></div><div class="tabs-column tabs-column3"><img src="images/image/city.png" alt="city" class="tabs-column3-img"></div></div>');

$("#tab1").on("click",function(){
	$(this).parent().find('.active').removeClass('active');
	$(this).addClass('active');
$("#textDiv").html('<div class="tab1 tab"><div class="tabs-column tabs-column2"><h2 class="tabs-column2-hrading">Tabs with soft transitioning effect</h2><p class="tabs-column2-text tabs-column2-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.</p><p class="tabs-column2-text tabs-column2-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p><a href="#" class="tabs-column2-link">Dowload</a></div><div class="tabs-column tabs-column3"><img src="images/image/city.png" alt="city" class="tabs-column3-img"></div></div>');
});
$("#tab2").on("click",function(){
	$(this).parent().find('.active').removeClass('active');
	$(this).addClass('active');
$("#textDiv").html('<div class="tab2 tab tab-switch"><div class="tabs-column tabs-column2"><h2 class="tabs-column2-hrading">Tabs with soft transitioning effect</h2><p class="tabs-column2-text tabs-column2-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.</p><p class="tabs-column2-text tabs-column2-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p><a href="#" class="tabs-column2-link">Dowload</a></div><div class="tabs-column tabs-column3"><img src="images/image/city2.png" alt="city" class="tabs-column3-img"></div></div>');
});
$("#tab3").on("click",function(){
	$(this).parent().find('.active').removeClass('active');
	$(this).addClass('active');
$("#textDiv").html('<div class="tab3 tab tab-switch"><div class="tabs-column tabs-column2"><h2 class="tabs-column2-hrading">Tabs with soft transitioning effect</h2><p class="tabs-column2-text tabs-column2-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.</p><p class="tabs-column2-text tabs-column2-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p><a href="#" class="tabs-column2-link">Dowload</a></div><div class="tabs-column tabs-column3"><img src="images/image/city.png" alt="city" class="tabs-column3-img"></div></div>');
});


});