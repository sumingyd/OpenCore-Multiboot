# 使用OpenCore进行多重引导

大家好!看起来你试图在你的系统上安装macOS和`$(OtherOS)`，但是你也不想在这个过程中弄乱`$(OtherOS)`和macOS。在这里，我们将引导您通过大量步骤来实现这一点，同时尽可能不影响操作系统设置。

## 固件类型

多重引导在很大程度上受到正在运行的固件类型的影响。本指南将包括已知的两种类型是:

* UEFI
* Legacy/CSM/BIOS

一旦您使用OpenCore，差异就很小，但对于后者可能有点困难。除此之外，本指南将涵盖以下内容:

1. 什么是多启动?它是如何工作的?
2. 分区和磁盘分离
3. UEFI
   1. 所有操作系统使用一个磁盘
   2. 不同的操作系统对应不同的磁盘
4. Legacy
   1. 所有操作系统使用一个磁盘
   2. 不同的操作系统对应不同的磁盘
5. 故障排除
6. 小贴士和技巧

### 免责声明

我们不会对设备损坏、硬盘损坏、热核战争，或者因为内核崩溃而没有保存工作而被解雇负责。你有责任在做任何事情之前仔细阅读一切。在尝试互联网上的任何东西之前，先做调查，如果你有任何问题，请寻求支持，因为“这是互联网”。如果你这样做了，你就是在选择在互联网上跟随随机的东西，如果你指责我们弄坏了你的设备，我们会嘲笑你。

现在我们已经解决了这个问题，让我们开始吧，祝你好运。
