/*-- Xử lý togle Thanh Toán --*/
$(document).ready(function(){
    $("#label-1").click(function(){
        $("#pay_cod").collapse('toggle');
        $("#pay_bank").collapse('hide');
    });
    $("#label-2").click(function(){
        $("#pay_bank").collapse('toggle');
        $("#pay_cod").collapse('hide');
    });
});
