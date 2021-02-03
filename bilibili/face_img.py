import requests
import os


def get_face_img_and_save_file():
    """
    通过av号或者bv获取封面
    储存在项目目录中
    通过搜索的html的js代码中的json获取连接
    """
    # 抓图片网址
    BV_number = input("请输入BV号：")
    search_url = 'https://search.bilibili.com/all?keyword=' + str(BV_number)

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 \
                      (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
    }
    response = requests.get(search_url, headers=headers)  # 获取网页源代码
    page_text = response.text

    a = page_text.find(r'"pic":"')
    b = page_text.find(r'jpg')
    need_image = page_text[a + 7:b + 3].encode("utf-8").decode("unicode_escape")

    image_url = "https:" + str(need_image)

    # 保存图片到E盘的文件夹中
    os.mkdir("E:/b站图片")  # 已有文件夹的时候将该行代码注释掉
    os.chdir("E:/b站图片")

    with open(str(BV_number) + '.jpg', 'wb') as f:
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
