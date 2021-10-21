Component({
  properties: {
  },
  data: {
    originImgUrl: '',
    canImgDraggable: true,
    opacityValue: 50,
    showBar: true,
    offsetY: 0
  },
  lifetimes: {
    attached() {}
  },
  methods: {
    // 导入原图视觉稿
    addImage() {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          this.setData({
            originImgUrl: tempFilePaths || ''
          })
        }
      })
    },
    // 锁定&解锁原视觉稿
    toggleImgDraggable() {
      this.setData({
        canImgDraggable: !this.data.canImgDraggable
      })
    },

    // 变更视觉稿透明度
    onChangeOpacity(e) {
      this.setData({
        opacityValue: e.detail.value
      })
    },

    // 纵向向上偏移视觉稿
    moveUp() {
      this.setData({
        offsetY: this.data.offsetY - 1
      })
    },

    // 纵向向下偏移视觉稿
    moveDown() {
      this.setData({
        offsetY: this.data.offsetY + 1
      })
    },

    // 手动拖拽事件回调
    moveUI(e) {
      this.setData({
        offsetY: e.detail.y || 0
      })
    },

    // 收起工具栏
    hiddenBar() {
      this.setData({
        showBar: false
      })
    },

    // 展开工具栏
    showSettingBar() {
      this.setData({
        showBar: true
      })
    }
  }
})
