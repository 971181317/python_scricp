import json
import os
import time
import openpyxl

import requests

"""
通过mid，爬up主的全部视频
"""

# 从文件读取配置信息
with open("../conf/scricp_bilibili_conf.json", "r") as f:
    conf_map = json.load(f)
    print(conf_map)

# mid左右边界
left_mid = conf_map["left_mid"]
right_mid = conf_map["right_mid"]
# 文件保存地址
save_path = os.getcwd() + '/..' + conf_map["save_path"] + '/up_all_video_msg/' + str(left_mid) + '~' + str(right_mid) \
            + '_time：' + str(int(time.time()))

# 创建文件夹
if not os.path.exists(save_path):
    os.makedirs(save_path)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/73.0.3683.103 "
                  "Safari/537.36 "
}
url = 'https://api.bilibili.com/x/space/arc/search'
param = {
    'mid': 0,
    # ps:，每次查询的数量,不能超过30
    'ps': 30,
    # 分区名，0全部
    'tid': 0,
    # pn ：当前页
    'pn': 1,
    'order': 'pubdate',
    'jsonp': 'jsonp'
}


def get_and_save(_mid):
    param['mid'] = _mid
    param['pn'] = 1
    # 获取基础数据
    resp = requests.get(url=url, params=param, headers=headers)
    video_data = json.loads(resp.text)['data']
    video_count = video_data['page']['count']
    # 创建表格
    wb = openpyxl.Workbook()
    sheet = wb.active
    sheet.title = str(_mid) + 'up主视频信息'
    sheet['A%d' % 1].value = 'av'
    sheet['B%d' % 1].value = 'bv'
    sheet['C%d' % 1].value = '标题'
    sheet['D%d' % 1].value = '封面'
    sheet['E%d' % 1].value = '简介'
    sheet['F%d' % 1].value = '时长'
    sheet['G%d' % 1].value = '播放量'
    sheet['H%d' % 1].value = '播放量简写'
    sheet['I%d' % 1].value = '投稿日期'

    print('%d, count : %d' % (_mid, video_count))
    # 行数
    row = 2
    while row <= video_count + 1:
        resp = requests.get(url=url, params=param, headers=headers)
        video_data = json.loads(resp.text)['data']
        vlist = video_data['list']['vlist']

        for _v in vlist:
            sheet['A%d' % row].value = 'AV%d' % _v['aid']
            sheet['B%d' % row].value = _v['bvid']
            sheet['C%d' % row].value = _v['title']
            sheet['D%d' % row].value = _v['pic']
            sheet['E%d' % row].value = _v['description']
            sheet['F%d' % row].value = _v['length']
            sheet['G%d' % row].value = _v['play']
            sheet['H%d' % row].value = '%.1fw' % (_v['play'] / 10000)
            sheet['I%d' % row].value = _v['created']
            row += 1

        # 页数+1
        param['pn'] += 1
    print('end', _mid)
    # 保存表格
    wb.save(save_path + '/mid：%d，count：%d.xlsx' % (_mid, video_count))


# 运行
for i in range(left_mid, right_mid + 1):
    get_and_save(i)
