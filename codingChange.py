import base64

'''
    编码转换
'''


# base64加密
def base64_encode(s):
    _s = s.encode("utf-8")
    return base64.b64encode(_s).decode("utf-8")


# base64解密
def base64_decode(s):
    return base64.b64decode(s).decode("utf-8")
