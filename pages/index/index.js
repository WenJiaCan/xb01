//index.js
//获取应用实例
const app = getApp()

Page({
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  bindTap: function () {
    wx.navigateTo({
      url: '../camera/camera',
    })
  }
  //搜索框
  /*suo: function (e) {

    wx.navigateTo({

      url: '../search/search',

    })

  }
  */
  
})
