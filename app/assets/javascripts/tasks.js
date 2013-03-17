jQuery.fn.submitOnCheck = function () {
  this.find('input:checkbox').on('click', function(){
    $(this).parent('form').submit();
  });
  return this;
}

jQuery.fn.resetForm = function() { 
  this.each(function(){
    this.reset();
  });
  return this;
}

// Hide new task form on blur and replace with new task link
// ====== Not using for now =============
/*jQuery.fn.hideAndReplaceWith = function($form, $link){
  this.blur(function(){
    $form.fadeOut(function(){
      $link.fadeIn('fast');
      $(this).remove();
    })('fast');
  });
}*/

$(function(){
  $('.edit_task').submitOnCheck();
});
