// IE8+ compatible demo site

$(function () {
  var $xStart = $('#xStart');
  var $xEnd = $('#xEnd');

  var $yStart = $('#yStart');
  var $yEnd = $('#yEnd');

  var $width = $('#width');
  var $height = $('#height');

  var $charStart = $('#charStart');
  var $charEnd = $('#charEnd');

  var $length = $('#length');

  var $text = $('#text');

  var $infobar = $('#infobar');


  var positionInfobar = function () {
    var selectionInfo = lightrange.getSelectionInfo();

    $xStart.text(selectionInfo.xStart);
    $xEnd.text(selectionInfo.xEnd);

    $yStart.text(selectionInfo.yStart);
    $yEnd.text(selectionInfo.yEnd);

    $width.text(selectionInfo.width);
    $height.text(selectionInfo.height);

    $charStart.text(selectionInfo.charStart);
    $charEnd.text(selectionInfo.charEnd);

    $length.text(selectionInfo.length);

    $text.text(selectionInfo.text);

    $infobar.css('top', selectionInfo.yStart - $infobar.outerHeight() - 4);
    $infobar.css('left', selectionInfo.xStart + (selectionInfo.width / 2 - $infobar.outerWidth() / 2));
  };



  $('body').on('click', function () {
    positionInfobar();
    $infobar.addClass('active');
  });
  $('body, main').on('scroll', function () {
    positionInfobar();
  });
  $(window).on('resize', function () {
    positionInfobar();
  });

  $('#save-selection').on('click', function () {
    lightrange.saveSelection();
    // Preventing from display empty infobar if clicked at start
    return false;
  });
  $('#restore-selection').on('click', function () {
    lightrange.restoreSelection();
    positionInfobar();
    // Preventing from display empty infobar if clicked at start
    return false;
  });

});
