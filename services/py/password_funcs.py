from hashlib import sha256
import re

def passwd_hash(passwd):
    #Verify if the password is somewhat secure
    if re.fullmatch(r'[A-Za-z0-9@#$%^&+=]{8,}', passwd):
        #Devolver su hash
        h = sha256()
        h.update(passwd.encode('utf-8'))
        return h.hexdigest()
    else:
        raise Exception(errores["PNS"])
