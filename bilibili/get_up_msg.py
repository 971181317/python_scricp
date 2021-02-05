import json
import os
import time

import requests

"""
对up注信息的拉取，然后储存头像
up猪的范围 和 头像的储存位置 依赖于get_up_msg_conf.json文件
"""
# 从文件读取配置信息
with open("../conf/scricp_bilibili_conf.json", "r") as f:
    conf_map = json.load(f)
    print(conf_map)

# mid左右边界
left_mid = conf_map["left_mid"]
right_mid = conf_map["right_mid"]
# 文件保存地址
save_path = conf_map["save_path"] + '\\up_msg\\' + str(left_mid) + '~' + str(right_mid) \
            + '_time：' + str(int(time.time()))
save_face_img_path = save_path + '\\img'

# 创建文件夹
if not os.path.exists(save_path):
    os.mkdir(save_path)
if not os.path.exists(save_face_img_path):
    os.mkdir(save_face_img_path)


# 获取信息保存文件
def get_msg_and_save_file(_mid):
    url = 'https://api.bilibili.com/x/space/acc/info?mid=' + str(_mid) + '&jsonp=jsonp'
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36(KHTML, like Gecko) "
                      "Chrome/73.0.3683.103 Safari/537.36 "
    }
    response = requests.get(url=url, headers=headers)
    up_msg = json.loads(response.text)
    msg = {
        'mid': up_msg['data']['mid'],
        'name': up_msg['data']['name'],
        'sex': up_msg['data']['sex'],
        'face': up_msg['data']['face'],
        'join_time': up_msg['data']['jointime'],
        'level': up_msg['data']['level'],
    }
    os.chdir(save_path)
    # 写资料
    with open('' + str(_mid) + '.txt', 'wb') as f:
        f.write(str(msg).encode('utf-8'))
    # 写头像
    os.chdir(save_face_img_path)
    with open('' + str(_mid) + '.jpg', 'wb') as f:
        f.write(requests.get(up_msg['data']['face']).content)
    print(i)


# 运行
for i in range(left_mid, right_mid + 1):
    get_msg_and_save_file(i)
