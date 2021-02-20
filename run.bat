rem 窗口大小
mode con cols=130 lines=40
rem 应用名称
title 小脚本   作者：淺い空  qq：971181317 wx：dxy090909
@echo off
rem 之后命令都不显示命令行

rem 将cmd编码转为utf-8
@chcp 65001
cls
echo 欢迎使用本脚本，制作者：淺い空
echo.
echo 如果在使用中出现什么问题，欢迎反馈
echo qq：971181317 wx：dxy090909
echo.
echo.
rem 创建下载路径   %~dp0当前路径
if not exist %~dp0download mkdir download
echo 默认下载路径：%~dp0download
rem 转到指定目录

pause