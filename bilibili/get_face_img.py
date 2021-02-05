import time
import requests
import os

from bilibili.av_bv import av_to_bv

"""
通过av号或者bv获取封面
储存在项目目录中
通过搜索的html的js代码中的json获取连接
"""
# 抓图片网址
number = input("请输入BV或AV号：")
_number = number
if _number.startswith("av") | _number.startswith("AV"):
    _number = av_to_bv(_number)[2:]
elif (not _number.startswith("bv")) & (not _number.startswith("BV")):
    print('输入信息不正确')
    exit()
search_url = 'https://search.bilibili.com/all?keyword=' + str(_number)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/73.0.3683.103 "
                  "Safari/537.36 "
}
# 获取html文件
response = requests.get(search_url, headers=headers)
page_text = response.text

# 找到第一章图片的位置
a = page_text.find(r'"pic":"')
b = page_text.find(r'jpg')
# 防止乱码
img_uri = page_text[a + 7:b + 3].encode("utf-8").decode("unicode_escape")
image_url = "https:" + str(img_uri)

# 封面保存位置
if not os.path.exists('b站图片'):
    os.mkdir('b站图片')
os.chdir("b站图片")

with open(str(number) + '  ' + str(time.time()) + '.jpg', 'wb') as f:
    img = requests.get(image_url)
    f.write(img.content)
