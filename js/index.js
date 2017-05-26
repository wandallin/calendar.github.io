//取得當前時間
var now = new Date();

//日曆的小時
var times = ['1a','2a','3a','4a','5a','6a',
            '7a','8a','9a','10a','11a','12',
            '1p','2p','3p','4p','5p','6p',
            '7p','8p','9p','10p','11p',''];

//日曆的星期別對應的日期
var weeks = [
  {day: 'Mon', num: '', dayClass:''},
  {day: 'Tue', num: '', dayClass:''},
  {day: 'Wed', num: '', dayClass:''},
  {day: 'Thu', num: '', dayClass:''},
  {day: 'Fri', num: '', dayClass:''},
  {day: 'Sat', num: '', dayClass:''},
  {day: 'Sun', num: '', dayClass:''}
];

var month = ['Jan','Feb','Mar','Apr','May','Jun',
            'Jul','Aug','Sep','Oct','Nov','Dec'];

var monthNow = month[now.getMonth()];
var yearNow = now.getFullYear();

//加入日期加減的function
Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

//計算日曆的星期對應的日期
var days = [];
for( var a = 1; a <= 7; a++ ){
  var dayClass = now.addDays(-now.getDay() + a).getFullYear() +''+
                 now.addDays(-now.getDay() + a).getMonth() +''+
                 now.addDays(-now.getDay() + a).getDate();
  days[a-1] = {
    dayClass: dayClass,
    day: now.addDays(-now.getDay() + a).getDate()
  };
}
for( var a = 0; a < 7; a++ ){
  weeks[a].num = days[a].day;
  weeks[a].dayClass = days[a].dayClass;
}

//Vue.js
var app = new Vue({
  el: '#app',
  data: {
    title: '',    //日曆左上方年月顯示
    weeks: weeks, //儲存星期對應的日期
    month: month, //儲存月份的英文縮寫
    times: times, //儲存am&pm的縮寫
    monthNow: monthNow,  //儲存當下月份
    yearNow: yearNow,    //儲存當下年份
    selected: '', //判斷被選取的格子是哪一個
    showFree: false, //判斷是否顯示空檔時間
    colors: ['#F58165','#FBB653', '#52DCE2', '#59DCE1'],
    newtodo: {
      name: "", //儲存輸入的計畫名稱
      len: "",  //儲存輸入的時間長度
      color: "",//儲存出入的顏色
    },
    works: {
    '1a2017423': [
      { name: 'test001', length: '40px', color: '#F58165' },
      { name: 'test002', length: '40px', color: '#FBB653' }
      ]
    },
    showAd: false
  },
  mounted() {
    //計算出title的日期文字
    var date = new Date();
    this.title = this.monthNow + ' ' + this.yearNow;
  },
  computed: {
    
  },
  methods:{
    //顯示空檔時間
    show_free(){
      if(this.showFree)
        this.showFree = false;
      else
        this.showFree = true;
    },
    addnote(){
      
    },
    showAdd(){
      if(this.showAd)
        this.showAd = false;
      else
        this.showAd = true;
    }
  }
});