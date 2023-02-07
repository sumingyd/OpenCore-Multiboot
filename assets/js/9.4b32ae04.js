(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{279:function(v,_,t){v.exports=t.p+"assets/img/msinfo.dca0625d.png"},280:function(v,_,t){v.exports=t.p+"assets/img/linuxefivar.76d4999a.png"},321:function(v,_,t){"use strict";t.r(_);var s=t(10),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"uefi-系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uefi-系统"}},[v._v("#")]),v._v(" UEFI 系统")]),v._v(" "),_("p",[v._v("自UEFI以来，磁盘默认的分区映射格式是GPT (GUID分区表)，它增加了对超过2TB的磁盘大小和超过4个分区的支持，这是MBR的限制，同时仍然对遗留系统的MBR保持向后兼容。如果你的电脑(预装的)安装了Windows 8(2012年及以后的版本)，那么你的磁盘很可能是GPT分区的。")]),v._v(" "),_("p",[v._v("通常，安装了Windows 8的2012+电脑会有一个UEFI固件(一些oem也发布了Windows 7版本，所以请确保你的电脑也有UEFI)，这是一个新传播的固件类型(从2000年开始开发)，自从英特尔切换后就已经部署在苹果电脑上了(但他们自己大量修改的固件，称为EFI，而不是UEFI，因为缺乏通用性)。这个新固件有一些新功能，如安全引导，帮助更快的引导，硬件直通，图形界面与鼠标支持(以及更多)。要了解更多关于UEFI和安全启动的信息，请查看Osy86撰写的"),_("a",{attrs:{href:"https://osy.gitbook.io/hac-mini-guide/details/secure-boot",target:"_blank",rel:"noopener noreferrer"}},[v._v("此处"),_("OutboundLink")],1),v._v(". 基本上，一个UEFI引导是这样的:")]),v._v(" "),_("ul",[_("li",[v._v("UEFI固件加载完成")]),v._v(" "),_("li",[v._v("加载其集成的驱动程序和服务")]),v._v(" "),_("li",[v._v("读取引导菜单条目并开始加载第一个引导条目\n"),_("ul",[_("li",[v._v("如果失败，启动下一个")])])]),v._v(" "),_("li",[v._v("加载引导装载程序\n"),_("ul",[_("li",[v._v("OS在此之后加载。")])])])]),v._v(" "),_("p",[v._v("通常，所述的“引导加载程序”包含在磁盘中的某个地方，这个地方被称为"),_("strong",[v._v("EFI分区")]),v._v("。你可以找到不同的东西，如ESP (EFI系统分区)，System, EFI, BOOT等。该分区被"),_("strong",[v._v("FAT32")]),v._v("格式化并标记为MBR中的"),_("strong",[v._v("EF00")]),v._v("或GPT中的"),_("strong",[v._v("C12A7328-F81F-11D2-BA4B-00A0C93EC93B")]),v._v(" GUID。这个分区通常包含由UEFI固件在启动时加载的EFI应用程序(如操作系统引导加载程序)(请记住这一点，因为这对以后的恢复很重要)。")]),v._v(" "),_("h1",{attrs:{id:"legacy-csm-系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#legacy-csm-系统"}},[v._v("#")]),v._v(" Legacy/CSM 系统")]),v._v(" "),_("p",[v._v("与UEFI相反，Legacy系统更老，也更成熟(可以追溯到第一代IBM pc)。在相同的系统上，它们肯定比UEFI有更多的限制和更慢的速度，但与许多操作系统(甚至在极少数情况下是macOS)具有更好的兼容性。2012年以前的电脑通常都有这种类型的固件(有些例外，比如服务器和一些专业的笔记本电脑等等，它们也可能有UEFI，在那种模式下它们是不可靠的)。电脑通常会安装比Windows 8更旧的Windows版本，硬盘容量小于2TB。一些桌面用户此时也会在Legacy模式下安装操作系统，即使他们的主板支持较新的UEFI标准。这可能会在以后的多引导中产生问题。")]),v._v(" "),_("p",[v._v("这些系统依赖于加载引导装载程序的另一种方法。这个软件通常写在磁盘的第一个扇区(格式化为MBR)，称为"),_("strong",[v._v("引导扇区")]),v._v("，这个扇区通常有512或4096字节大，BIOS将读取代码，将其复制到内存中，然后执行它，这时一个操作系统或引导加载程序菜单(如GRUB2)将显示:")]),v._v(" "),_("ul",[_("li",[v._v("BIOS启动")]),v._v(" "),_("li",[v._v("读取"),_("strong",[v._v("引导扇区")])]),v._v(" "),_("li",[v._v("将程序加载到内存中")]),v._v(" "),_("li",[v._v("执行程序")]),v._v(" "),_("li",[v._v("出现引导加载程序\n"),_("ul",[_("li",[v._v("操作系统现在开始启动。")])])])]),v._v(" "),_("h1",{attrs:{id:"系统之间的主要区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统之间的主要区别"}},[v._v("#")]),v._v(" 系统之间的主要区别")]),v._v(" "),_("p",[v._v("我们将把它们放在一个表中，以显示主要的区别:")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th"),v._v(" "),_("th",[_("strong",[v._v("UEFI")])]),v._v(" "),_("th",[_("strong",[v._v("Legacy")])])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("快速启动")]),v._v(" "),_("td",[v._v("✅ (在大多数情况下)")]),v._v(" "),_("td",[v._v("❌ (只有一些做到了，没有一个标准)")])]),v._v(" "),_("tr",[_("td",[v._v("引导加载程序通过引导菜单选择")]),v._v(" "),_("td",[v._v("✅ (在大多数情况下)")]),v._v(" "),_("td",[v._v("❌ (只有一些做到了，没有一个标准)")])]),v._v(" "),_("tr",[_("td",[v._v("安全启动")]),v._v(" "),_("td",[v._v("✅ (在大多数情况下)")]),v._v(" "),_("td",[v._v("❌ (只有一些做到了，没有一个标准)")])]),v._v(" "),_("tr",[_("td",[v._v("在不覆盖其他引导加载程序的情况下添加引导加载程序")]),v._v(" "),_("td",[v._v("✅ (在大多数情况下)")]),v._v(" "),_("td",[v._v("❌ (只有一些做到了，没有一个标准)")])]),v._v(" "),_("tr",[_("td",[v._v("支持2TB+启动盘")]),v._v(" "),_("td",[v._v("✅ (依赖硬件)")]),v._v(" "),_("td",[v._v("❌ (需要GPT，它在一些遗留系统上支持，2006+)")])]),v._v(" "),_("tr",[_("td",[v._v("传统硬件支持")]),v._v(" "),_("td",[v._v("⚠️ (取决于哪个硬件，CSM开关应该是可能的)")]),v._v(" "),_("td",[v._v("✅ (取决于硬件)")])]),v._v(" "),_("tr",[_("td",[v._v("更容易维护(管理引导加载程序和引导条目)")]),v._v(" "),_("td",[v._v("✅ (在大多数情况下)")]),v._v(" "),_("td",[v._v("❌ (只有一些做到了，没有一个标准)")])]),v._v(" "),_("tr",[_("td",[v._v("OS 支持")]),v._v(" "),_("td",[v._v("✅")]),v._v(" "),_("td",[v._v("✅")])])])]),v._v(" "),_("p",[v._v("除了传统硬件支持(现在很少了)，UEFI是在新硬件上双引导时使用的固件(2012+)。但是对于传统用户，也有一种方法可以获得一些UEFI特性，但只能通过DUET(稍后将讨论)。")]),v._v(" "),_("h1",{attrs:{id:"检测你正在使用的固件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#检测你正在使用的固件"}},[v._v("#")]),v._v(" 检测你正在使用的固件")]),v._v(" "),_("h2",{attrs:{id:"没有操作系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#没有操作系统"}},[v._v("#")]),v._v(" 没有操作系统")]),v._v(" "),_("p",[v._v("如果你的电脑:")]),v._v(" "),_("ul",[_("li",[v._v("来自 Ivy Bridge 时代(~2012年)及之后")]),v._v(" "),_("li",[v._v("有一个Windows 8贴纸")])]),v._v(" "),_("p",[v._v("那么它可能有"),_("strong",[v._v("UEFI系统")]),v._v("，也就是说，这并不意味着老一代的主板没有，然而随着Windows 8的发布，微软标准化了UEFI规范，以供oem获得认证(通常如果你选择品牌名称，如华硕，联想，惠普，戴尔…你可以开始了)。")]),v._v(" "),_("p",[v._v("如果比上面的版本更老，那么拥有合适的UEFI实现的机会就会减少，最好使用Legacy引导。")]),v._v(" "),_("h2",{attrs:{id:"在windows上"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在windows上"}},[v._v("#")]),v._v(" 在Windows上")]),v._v(" "),_("p",[v._v("打开运行(Win + R)，输入"),_("code",[v._v("msinfo32")]),v._v("，你将看到如下窗口:")]),v._v(" "),_("p",[_("img",{attrs:{src:t(279),alt:"MSINFO32 Window"}})]),v._v(" "),_("p",[v._v("检查"),_("strong",[v._v("BIOS Mode")]),v._v("，它会显示为"),_("strong",[v._v("UEFI")]),v._v("或"),_("strong",[v._v("Legacy")]),v._v("。请注意，这是针对Windows 8/10的，如果你使用的是Windows 7或更旧的版本，可能是在Legacy模式下运行。")]),v._v(" "),_("h2",{attrs:{id:"在linux上"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在linux上"}},[v._v("#")]),v._v(" 在Linux上")]),v._v(" "),_("h3",{attrs:{id:"方法-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法-1"}},[v._v("#")]),v._v(" 方法 1")]),v._v(" "),_("p",[v._v("在大多数情况下Linux发行版，可以运行")]),v._v(" "),_("p",[_("code",[v._v("ls /sys/firmware/efi")])]),v._v(" "),_("p",[_("img",{attrs:{src:t(280),alt:"img"}})]),v._v(" "),_("p",[v._v("如果文件夹存在，那么你正在UEFI模式下运行 (截图来源: Scooby-Chan#7971)")]),v._v(" "),_("h3",{attrs:{id:"方法-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法-2"}},[v._v("#")]),v._v(" 方法 2")]),v._v(" "),_("p",[v._v("你也可以下载并运行"),_("code",[v._v("efibootmgr")]),v._v("(可在在大多数情况下发行版下载)，你可以:")]),v._v(" "),_("ul",[_("li",[v._v("获取引导条目变量\n"),_("ul",[_("li",[v._v("你的系统正在运行UEFI")])])]),v._v(" "),_("li",[v._v("或者得到一条不支持EFI变量的错误消息\n"),_("ul",[_("li",[v._v("你的系统运行在Legacy模式下")])])])]),v._v(" "),_("hr"),v._v(" "),_("h1",{attrs:{id:"macos在所有这些中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#macos在所有这些中"}},[v._v("#")]),v._v(" macOS在所有这些中")]),v._v(" "),_("p",[v._v("macOS需要一些特殊处理，因为苹果公司想要(纵容他们的操作系统)，因此需要一套规则来让它安装到任何驱动器上:")]),v._v(" "),_("ul",[_("li",[v._v("GPT格式的磁盘")]),v._v(" "),_("li",[v._v("EFI分区至少200MB")])]),v._v(" "),_("p",[v._v("考虑到这两个要求，理论上你可以让它们实现，然后就可以了。如果您理解了这些需求中的操作，并且可以自己完成，那么您就可以开始了，如果没有，请留在这里获取有关如何正确解决此问题的更多提示和技巧。")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("接下来的部分:")]),v._v(" "),_("p",[v._v("例:")]),v._v(" "),_("ul",[_("li",[v._v("未安装操作系统:\n"),_("ul",[_("li",[v._v("数据库在同一个磁盘上")]),v._v(" "),_("li",[v._v("数据库在不同的磁盘上")])])]),v._v(" "),_("li",[v._v("已经安装的操作系统或驱动器中现有的数据\n"),_("ul",[_("li",[v._v("支持原生UEFI的系统:将你的旧引导操作系统转换为UEFI\n"),_("ul",[_("li",[v._v("Linux")]),v._v(" "),_("li",[v._v("Windows")]),v._v(" "),_("li",[v._v("系统只有Legacy启动选项:\n"),_("ul",[_("li",[v._v("DUET")])])])])])])])]),v._v(" "),_("p",[v._v("祝你好运，并"),_("strong",[v._v("备份你的数据")]),v._v("。")])])}),[],!1,null,null,null);_.default=a.exports}}]);