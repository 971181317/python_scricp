def to_unicode():
    input_str = bytes(input(), "Utf-8")
    decode_str = input_str.decode('gbk', "ignore")
    print(decode_str)
