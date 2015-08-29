

// Production
/*
var $_CONFIG= new Array();
$_CONFIG["company_phone"] = "+34 636362224";
$_CONFIG["company_info_mail"] = "info@vixia.io";
$_CONFIG["debug_mode"] = true;
$_CONFIG["restricted_page"] = false;

var $_URL_SERVER = "http://www.vixia.io/";
var $_SERVER_PATH = "../../"+$_PATH;
*/

// Local Develop

var $_CONFIG= new Array();
$_CONFIG["company_phone"] = "+34 636362224";
$_CONFIG["company_info_mail"] = "info@vixia.io";
$_CONFIG["debug_mode"] = true;
$_CONFIG["restricted_page"] = false;

var $_SYSTEM= new Array();
$_SYSTEM["year"] = "2015";
$_SYSTEM["version"] = "0.9";
$_SYSTEM["url_server"] = "http://localhost:8888/vixia/";
$_SYSTEM["server_path"] = "../../"+$_PATH;




$("[data-ajax='system_year']").html($_SYSTEM["year"]);
$("[data-ajax='system_version']").html($_SYSTEM["version"]);


//
// Init system
//

var $_ajax = new Array();

$(".droparea").each(function(){
  $(this).attr("data-post",$_URL_SERVER+$(this).attr("data-post"));
})

$("form").submit(function(e){
  e.preventDefault();
});

var $_GET_STR="";
var delimiter="";

(function (){
  window.$_GET = [];
  if(location.search){
    var params = decodeURIComponent(location.search).match(/[a-z_]\w*(?:=[^&]*)?/gi);
    if(params){
      var pm, i = 0;
      for(; i < params.length; i++){
        pm = params[i].split('=');
        $_GET[pm[0]] = pm[1] || '';
        $_GET_STR+=delimiter+pm[0]+"||"+pm[1];
        delimiter="//";
      }
    }
  }
})();


function isset_and_not_empty($_value){
  if ((typeof $_value == 'undefined')||($_value == null)||($_value == "null")){
    return false;
  }
  return true;
}

function include($_script) {
  $.ajax({
    url: $_script,
    dataType: "script",
    async: false,
    success: function () {
    },
    error: function () {
    }
  });
}

function timestamp_to_str($_timestamp){

  if($_timestamp==-1){
    return $_s["Never"];
  }
  if($_timestamp==0){
    return $_s["Never"];
  }
  $_from_now = time() - $_timestamp;
  if ($_from_now < 1){
    return $_s["Now"];
  }

  $_timestamp_to_str = $_s["Now"];


  $_d = $_from_now ;
  if ($_d >= 1){
    $_timestamp_to_str=$_s["pre_time_str"];
    $_r = Math.round($_d);
    $_timestamp_to_str+=" "+$_r;
    if($_r > 1){
      $_timestamp_to_str+=$_s["_seconds"];
    }else{
      $_timestamp_to_str+=$_s["_second"];
    }
  }

  $_d = $_from_now / (60);
  if ($_d >= 1){
    $_timestamp_to_str=$_s["pre_time_str"];
    $_r = Math.round($_d);
    $_timestamp_to_str+=" "+$_r;
    if($_r > 1){
      $_timestamp_to_str+=$_s["_minutes"];
    }else{
      $_timestamp_to_str+=$_s["_minute"];
    }
  }

  $_d = $_from_now / (60*60);
  if ($_d >= 1){
    $_timestamp_to_str=$_s["pre_time_str"];
    $_r = Math.round($_d);
    $_timestamp_to_str+=" "+$_r;
    if($_r > 1){
      $_timestamp_to_str+=$_s["_hours"];
    }else{
      $_timestamp_to_str+=$_s["_hour"];
    }
  }

  $_d = $_from_now / (24 * 60 * 60);
  if ($_d >= 1){
    $_timestamp_to_str=$_s["pre_time_str"];
    $_r = Math.round($_d);
    $_timestamp_to_str+=" "+$_r;
    if($_r > 1){
      $_timestamp_to_str+=$_s["_days"];
    }else{
      $_timestamp_to_str=$_s["Yesterday"];
    }
  }

  $_d = $_from_now / (30*24*60*60);
  if ($_d >= 1){
    $_timestamp_to_str=$_s["pre_time_str"];
    $_r = Math.round($_d);
    $_timestamp_to_str+=" "+$_r;
    if($_r > 1){
      $_timestamp_to_str+=$_s["_months"];
    }else{
      $_timestamp_to_str+=$_s["_month"];
    }
  }

  $_d = $_from_now / (365*24*60*60);

  if ($_d >= 1){
    $_timestamp_to_str=$_s["pre_time_str"];
    $_r = Math.round($_d);
    $_timestamp_to_str+=" "+$_r;
    if($_r > 1){
      $_timestamp_to_str+=$_s["_years"];
    }else{
      $_timestamp_to_str+=$_s["_year"];
    }
  }

  return $_timestamp_to_str;

}

function substr_dots($_message, $_limit)
{
  var res;

  if($_limit<4)
  {

    return "...";
  }
  if($_message.length>$_limit){
    $_message = $_message.substring(0, $_limit-3);
    return $_message=$_message + "...";
  }
  return $_message;
}

function file_exists($_filename_url){
  $.ajax({
    url: $_filename_url,
    type:'HEAD',
    async:false,
    error: function(){
        return false;
    },
    success: function(){
      alert();
      return true;
    }
  });
}
