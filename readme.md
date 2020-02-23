# 前端面试题

编写以下三模块。

### 商品列表页
素材在 data/01 文件夹中

要求：
- 实现商列表布局，显示图片、商品名称、价格等主要元素即可
- 可以切换列表模式为小图模式，样式见 list2.png
- 滚动到底加载分页，数据在 data2.json 中

### 商品详情页，颜色尺码选择
素材在 data/02 文件夹中

要求：

- 商品详情实现轮播和选择颜色尺码区域布局和功能
- 点击颜色尺码区域弹出颜色尺码选择区域
- 颜色、尺码、商品数联动（参见下方说明和联动示例）
- 实现底部 浮动状态栏(首页、立即购买、加购物车这一栏)样式布局

说明：

- 数据使用 data/01/data.json，其中 galleryList 为轮播图片，图片域名为 https://pic.bonwebuy.com/。
- saleAttrList字段存储了颜色尺码的图片、名称
- skuInfo字段存储了sku(单个商品的单个颜色下的单个尺码)对应的库存
- 选择颜色，如果对应的尺码没有库存，则该尺码不可选（颜色置灰，用虚线框表示）。
- 购买数量不不能大于当前库存，若切换颜色尺码后，购买数量大于库存时，将购买数量修改为库存数。

联动示例：

- 1.选择颜色 实详黄 颜色code值为20(saleAttrList.saleAttr1List.saleAttr1ValueCode)
- 2.尺码code分别为30、32、34、36、37(saleAttrList.saleAttr2List.saleAttr2ValueCode)
- 3.skuInfo中颜色code为20的记录有两条，尺码code为30、37，库存stockNum值为5。
- 4.此时尺码选项中code值为30、37的选项可选，其它尺码选项置灰。
- 5.选择尺码code为30的选项，skuInfo中对应(颜色code为20、尺码code为30)库存为5。
- 5.下方购买数量此时最大值为5(sku中对应库存)如果前值大于5则应该重置为5。
- 6.点击+号，购买数量不能超过当前5(sku中对应库存)，点击-号，购买数量不能小于1。