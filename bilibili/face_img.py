import time
import requests
import os

from bilibili.av_bv import av_to_bv


def get_face_img_and_save_file():
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
        return
    search_url = 'https://search.bilibili.com/all?keyword=' + str(_number)

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 \
                      (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
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

    # 保存图片到E盘的文件夹中
    os.mkdir("b站图片")
    os.chdir("b站图片")

    with open(str(number) + '  ' + str(time.time()) + '.jpg', 'wb') as f:
        img = requests.get(image_url)
        f.write(img.content)


table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'
tr = {}
for i in range(58):
    tr[table[i]] = i
s = [11, 10, 3, 8, 4, 6]
xor = 177451812
add = 8728348608


def dec(x):
    r = 0
    for idx in range(6):
        r += tr[x[s[idx]]] * 58 ** idx
    return (r - add) ^ xor


def enc(x):
    x = (x ^ xor) + add
    r = list('BV1  4 1 7  ')
    for i in range(6):
        r[s[i]] = table[x // 58 ** i % 58]
    return ''.join(r)
