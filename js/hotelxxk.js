window.onload=function(){
    var titleId = document.getElementById("table_title");//alert(titleid.lenth);
    var titleName = titleId.getElementsByTagName("li"); 
    var contentId = document.getElementById("table-content");
    var tableContent = contentId.getElementsByTagName("div");
   //alert(tableContent.lenth);
    if(titleName.length != tableContent.length){
        return;
    }
    for(var i = 0; i<titleName.length;i++){
        titleName[i].id=i;
        titleName[i].onmouseover = function(){
            for(var j=0;j<titleName.length;j++){
                titleName[j].className="";
                tableContent[j].style.display="none";
            }
            this.className = "select";
            tableContent[this.id].style.display = "block";
        }   
    }
}