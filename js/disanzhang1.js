(function () {
    //discount info
    var hotel={
        name:'山风',
        roomRate:240,
        discount:15,
        offerPrice:function(){
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }
    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;

    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);

    specialRate.textContent = '$' + hotel.offerPrice();

    var expiryMsg;
    var today; 
    var elEnds;

    function offerExpires(today){
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        weekFromToday = new Date(today.getTime() + 7*24*60*60*1000);
        dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        monthNames = ['January','February', 'March','April','May','June','July','August','September','October','November','December'];
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[ weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }
        today = new Date();
        elEnds = document.getElementById('offerEnds');
        elEnds.innerHTML = offerExpires(today);

        var height1=document.getElementById("titleblock").offsetHeight;
        var height2=document.getElementById("table").style.height=height1+'px';
        
       
        //height2.offsetHeight=height1.offsetHeight;
}());

