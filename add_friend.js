// add friend
var listUsers = document.getElementsByClassName("_42ft _4jy0 FriendRequestAdd addButton _4jy3 _4jy1 selected _51sy");
var cnt = 0, timeEachCycle = 20000, timeEachAdd = 0;
setInterval(function () {
  var frequency = Math.floor(Math.random() * 5) + 3;
  timeEachAdd = 1500 + Math.random() * 1500;
  cnt += 1; // bỏ qua 1 friend
  for (let i = 0; i < frequency; i++) {
    setTimeout(function() {
      cnt += 1;
      listUsers[cnt].click();
      console.log("frequency = ",frequency, "cnt = ", cnt, "timeEachAdd = ", timeEachAdd);
    }, i * timeEachAdd)
  }
  // load new friend
  window.scrollTo(0,document.body.scrollHeight);
}, timeEachCycle);