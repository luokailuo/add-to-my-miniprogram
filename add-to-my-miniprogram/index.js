const ADD_TO_MY_PROGRAM = "ADD_TO_MY_MINIPROGRAM"
Component({
  /**
   * 组件的一些选项
   */
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 显示时长(秒)
    duration: {
      type: Number,
      value: 6
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function () {
      // 是否已显示过
      const cache = wx.getStorageSync(ADD_TO_MY_PROGRAM)
      if (cache) return

      // 右上角胶囊按钮位置信息
      const menu = wx.getMenuButtonBoundingClientRect()
      const marginRight = Math.round(menu.width * 15 / 20)

      this.setData({
        show: true,
        marginRight,
      })
      // 显示时长(秒)
      setTimeout(() => {
        this.setData({
          show: false
        })
      }, this.data.duration * 1000)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide: function () {
      this.setData({
        show: false
      })
      wx.setStorage({
        key: ADD_TO_MY_PROGRAM,
        data: +new Date,
      })
    },
  }
})