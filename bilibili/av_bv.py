"""
    av和bv的转换
    方法：https://www.zhihu.com/question/381784377/answer/1099438784
"""

table = ('fZodR9XQDSUm21yCkr6zBqiveYah8bt4x'
         'sWpHnJE7jL5VG3guMTKNPAwcF')
tr = {}
s = [11, 10, 3, 8, 4, 6]
xor = 177451812
add = 8728348608


def bv_to_av(x):
    """
    :param x: bv号str
    :return: av号str
    """
    init()
    # 切去头
    r = 0
    for idx in range(6):
        r += tr[x[s[idx]]] * 58 ** idx
    return 'AV' + str((r - add) ^ xor)


def av_to_bv(x):
    """
    :param x: av号str
    :return: bv号str
    """
    init()
    # 切了av
    x = int(x[2:])
    x = (x ^ xor) + add
    r = list('BV1  4 1 7  ')
    for i in range(6):
        r[s[i]] = table[x // 58 ** i % 58]
    return ''.join(r)


def init():
    for i in range(58):
        tr[table[i]] = i
