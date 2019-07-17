Page({

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../camera/camera'
    })
  },
  chooseImageTap: function () {
    wx.showActionSheet({
      itemList: ['拍照', '从相册中选择'],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) { //0是拍照
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['camera'],
            success: function (res) {
              //res.tempFilePaths[0] 这个是图片
            },
          })
        } else if (res.tapIndex == 1) {
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: function (res) {
              //res.tempFilePaths[0] 这个是图片
            },
          })
        }
      }
    })
  }

}
)