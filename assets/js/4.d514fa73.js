(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{245:function(e,t,o){e.exports=o.p+"assets/img/blessoverride.9430a551.png"},309:function(e,t,o){e.exports=o.p+"assets/img/extension.70027081.png"},310:function(e,t,o){e.exports=o.p+"assets/img/done.4cbabcae.png"},311:function(e,t,o){e.exports=o.p+"assets/img/location.4d2c18e9.png"},312:function(e,t,o){e.exports=o.p+"assets/img/error.d007cbad.png"},337:function(e,t,o){"use strict";o.r(t);var a=o(10),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installing-and-using-bootcamp-utilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-and-using-bootcamp-utilities"}},[e._v("#")]),e._v(" Installing and using BootCamp utilities")]),e._v(" "),t("p",[t("extoc")],1),e._v(" "),t("p",[e._v("So a neat feature of OpenCore is the ability to avoid the BIOS entirely and use the Startup disk solely for multiboot. The problem comes in when we try to boot windows and have no way of setting the boot option back to macOS. That's where the BootCamp utilities come in.")]),e._v(" "),t("ul",[t("li",[e._v("Note: This guide will not cover the creation of the Windows installer, only the installation of BootCamp drivers.\n"),t("ul",[t("li",[e._v("Example of Windows installer creation: "),t("a",{attrs:{href:"https://www.freecodecamp.org/news/how-make-a-windows-10-usb-using-your-mac-build-a-bootable-iso-from-your-macs-terminal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Build a Bootable Windows ISO"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Reminder: Windows "),t("strong",[e._v("MUST")]),e._v(" be GPT/GUID based, OpenCore will not boot legacy installs")])])]),e._v(" "),t("li",[e._v("Note 2: Using BootCamp utilities from macOS will erase the EFI/BOOT/BOOTx64.efi file on your EFI, which is needed for booting OpenCore. And OpenCore itself does not support MBR based installs so the utility is useless to us")])]),e._v(" "),t("h2",{attrs:{id:"preparations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[e._v("#")]),e._v(" Preparations")]),e._v(" "),t("p",[e._v("To start we'll need the following:")]),e._v(" "),t("ul",[t("li",[e._v("Windows already installed\n"),t("ul",[t("li",[e._v("MUST be UEFI/GPT based")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/corpnewt/brigadier",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brigadier"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("To download the BootCamp drivers")])])]),e._v(" "),t("li",[e._v("SMBIOS injection enabled\n"),t("ul",[t("li",[e._v("As the drivers have a SMBIOS check")])])]),e._v(" "),t("li",[e._v("Setup "),t("RouterLink",{attrs:{to:"/post-install/multiboot/bootstrap.html"}},[e._v("Bootstrap.efi")]),e._v(" "),t("ul",[t("li",[e._v("Not required but can help alleviate headaches when Windows erases the BOOTx64.efi OpenCore uses")])])],1)]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("To install, it's as simple as grabbing "),t("a",{attrs:{href:"https://github.com/corpnewt/brigadier",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brigadier"),t("OutboundLink")],1),e._v(" and running either "),t("code",[e._v("Brigadier.bat")]),e._v(" for Windows or "),t("code",[e._v("Brigadier.command")]),e._v(" for macOS. If the SMBIOS you're currently using either has BootCamp issues or want to download for another SMBIOS, you can add "),t("code",[e._v("-- model{SMBIOS}")]),e._v(" to the end:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" path/to/Brigadier\nbrigadier.bat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--model")]),e._v(" MacPro7,1\n")])])]),t("ul",[t("li",[t("strong",[e._v("Note")]),e._v(": Older versions of the BootCamp installer(6.0) do not support APFS, you'll need to either choose a newer SMBIOS that would have it bundled (ie. iMac 19,1 or MacPro7,1) or after installation update your bootcamp software. See below for more details on troubleshooting: "),t("a",{attrs:{href:"#windows-startup-disk-cant-see-apfs-drives"}},[e._v("Windows Startup Disk can't see APFS drives")])])]),e._v(" "),t("p",[t("img",{attrs:{src:o(309),alt:""}})]),e._v(" "),t("p",[e._v("Next, you will find our bootcamp drivers under either:")]),e._v(" "),t("ul",[t("li",[e._v("Windows:")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("to"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Brigadier"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("BootCamp-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ul",[t("li",[e._v("macOS:")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("path/to/Brigadier/BootCamp-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("/WindowsSupport.dmg\n")])])]),t("p",[e._v("macOS users will next need to expand WindowsSupport.dmg and place it somewhere Windows can get.")]),e._v(" "),t("p",[t("img",{attrs:{src:o(310),alt:""}})]),e._v(" "),t("p",[e._v("Next navigate to the "),t("code",[e._v("bootcamp-{version}\\BootCamp")]),e._v(" folder and run the Setup.exe:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(311),alt:""}})]),e._v(" "),t("p",[e._v("Once all is finished, you now have BootCamp switching! There should be a little BootCamp icon in your tray now that you can select which drive to boot to.")]),e._v(" "),t("ul",[t("li",[e._v("Note: For those no needing the extra drivers BootCamp provides, you can delete the following:\n"),t("ul",[t("li",[t("code",[e._v("$WinPEDriver$")]),e._v(": "),t("strong",[e._v("DO NOT")]),e._v(" delete the folder itself, just the drivers inside\n"),t("ul",[t("li",[e._v("Apple Wifi card users will want to keep the following:\n"),t("ul",[t("li",[t("code",[e._v("$WinPEDriver$/BroadcomWireless")])]),e._v(" "),t("li",[t("code",[e._v("$WinPEDriver$/BroadcomBluetooth")])]),e._v(" "),t("li",[t("code",[e._v("$WinPEDriver$/AppleBluetoothBroadcom")])])])])])]),e._v(" "),t("li",[t("code",[e._v("BootCamp/Drivers/...")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("DO NOT")]),e._v(" delete "),t("code",[e._v("BootCamp/Drivers/Apple")])]),e._v(" "),t("li",[e._v("Apple Wifi card users will want to keep the following:\n"),t("ul",[t("li",[t("code",[e._v("BootCamp/Drivers/Broadcom/BroadcomBluetooth")])])])])])])])])]),e._v(" "),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#cant-find-windowsbootcamp-drive-in-picker"}},[e._v("Can't find Windows/BootCamp drive in picker")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#you-cant-change-the-startup-disk-to-the-selected-disk-error"}},[e._v('"You can\'t change the startup disk to the selected disk" error')])]),e._v(" "),t("li",[t("a",{attrs:{href:"#booting-windows-results-in-bluescreen-or-linux-crashes"}},[e._v("Booting Windows results in BlueScreen or Linux crashes")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#booting-windows-error-ocb-startimage-failed---already-started"}},[e._v("Booting Windows error: "),t("code",[e._v("OCB: StartImage failed - Already started")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#windows-startup-disk-cant-see-apfs-drives"}},[e._v("Windows Startup Disk can't see APFS drives")])])]),e._v(" "),t("h2",{attrs:{id:"can-t-find-windows-bootcamp-drive-in-picker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-t-find-windows-bootcamp-drive-in-picker"}},[e._v("#")]),e._v(" Can't find Windows/BootCamp drive in picker")]),e._v(" "),t("p",[e._v("So with OpenCore, we have to note that legacy Windows installs are not supported, only UEFI. Most installs now are UEFI based but those made by BootCamp Assistant in macOS are legacy based, so you'll have to find other means to make an installer(Google's your friend). This also means MasterBootRecord/Hybrid partitions are also broken so you'll need to format the drive you want to install onto with DiskUtility.")]),e._v(" "),t("p",[e._v("Now to get onto troubleshooting:")]),e._v(" "),t("ul",[t("li",[e._v("Make sure "),t("code",[e._v("Misc -> Security -> ScanPolicy")]),e._v(" is set to "),t("code",[e._v("0")]),e._v(" to show all drives")])]),e._v(" "),t("p",[e._v("If Windows and OpenCore's boot loaders are on the same drive, you'll need to add a BlessOverride entry:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("Misc -"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" BlessOverride -"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EFI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Microsoft"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Boot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("bootmgfw.efi\n")])])]),t("ul",[t("li",[t("strong",[e._v("Note")]),e._v(": As of OpenCore 0.5.9, this no longer needs to be specified. OpenCore should pick up on this entry automatically")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(245),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"you-can-t-change-the-startup-disk-to-the-selected-disk-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#you-can-t-change-the-startup-disk-to-the-selected-disk-error"}},[e._v("#")]),e._v(' "You can\'t change the startup disk to the selected disk" error')]),e._v(" "),t("p",[e._v("This is commonly caused by either:")]),e._v(" "),t("ul",[t("li",[e._v("3rd Party NTFS Drivers (ie. Paragon)")]),e._v(" "),t("li",[e._v("Irregular partition setup of the Windows drive, specifically that the EFI is not the first partition.")]),e._v(" "),t("li",[e._v("You have BitLocker enabled")])]),e._v(" "),t("p",[e._v("To fix the first, either disable or uninstall these tools.")]),e._v(" "),t("p",[e._v("To fix the second, we need to enable this quirk:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("PlatformInfo -> Generic -> AdviseWindows -> True")])])]),e._v(" "),t("p",[t("img",{attrs:{src:o(312),alt:""}})]),e._v(" "),t("p",[e._v("To fix the third, you will be required to lift Bitlocker encryption.")]),e._v(" "),t("h2",{attrs:{id:"booting-windows-results-in-bluescreen-or-linux-crashes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#booting-windows-results-in-bluescreen-or-linux-crashes"}},[e._v("#")]),e._v(" Booting Windows results in BlueScreen or Linux crashes")]),e._v(" "),t("p",[e._v("This is due to alignment issues, make sure "),t("code",[e._v("SyncRuntimePermissions")]),e._v(" is enabled on firmwares supporting MATs. Check your logs whether your firmware supports Memory Attribute Tables(generally seen on 2018 firmwares and newer)")]),e._v(" "),t("p",[e._v("For Z390 and newer motherboards, you'll also want to enable "),t("code",[e._v("ProtectUefiServices")]),e._v(" to ensure OpenCore's patches are applying correctly.")]),e._v(" "),t("p",[e._v("If your firmware is quite old(generally 2013 and older), you'll want to enable "),t("code",[e._v("ProtectMemoryRegions")]),e._v(".")]),e._v(" "),t("p",[e._v("Due to the variations of firmwares from vendor to vendor, you'll need to play around with the combination of these 3 quirks and see which works best.")]),e._v(" "),t("p",[e._v("Common Windows error code:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("0xc000000d")])])]),e._v(" "),t("h2",{attrs:{id:"booting-windows-error-ocb-startimage-failed-already-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#booting-windows-error-ocb-startimage-failed-already-started"}},[e._v("#")]),e._v(" Booting Windows error: "),t("code",[e._v("OCB: StartImage failed - Already started")])]),e._v(" "),t("p",[e._v("This is due to OpenCore getting confused when trying to boot Windows and accidentally thinking it's booting OpenCore. This can be avoided by either move Windows to its own drive "),t("em",[e._v("or")]),e._v(" adding a custom drive path under BlessOverride. See "),t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration.pdf"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"#cant-find-windowsbootcamp-drive-in-picker"}},[e._v("Can't find Windows/BootCamp drive in picker")]),e._v(" entry for more details.")]),e._v(" "),t("h2",{attrs:{id:"windows-startup-disk-can-t-see-apfs-drives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-startup-disk-can-t-see-apfs-drives"}},[e._v("#")]),e._v(" Windows Startup Disk can't see APFS drives")]),e._v(" "),t("ul",[t("li",[e._v("Outdated BootCamp drivers(generally ver 6.0 will come with brigadier, BootCamp Utility in macOS provides newer version like ver 6.1). You can try to alleviate these issues by either updating to the newest release with Apple's software updater or selecting a newer SMBIOS from brigadier (ie. "),t("code",[e._v("--model iMac19,1")]),e._v(") and when running brigadier.")])]),e._v(" "),t("p",[e._v("For the latter, you'll need to run the following(replace "),t("code",[e._v("filename.msi")]),e._v(" with the BootCamp installation msi):")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("msiexec.exe /x "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"c:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\f"}},[e._v("\\f")]),e._v('ilename.msi"')]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);