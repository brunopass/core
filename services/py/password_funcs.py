from hashlib import sha256
import re
import json

errores = json.load(open("../../error/errores.json", "r")) #Error codes

def passwd_hash(passwd):
    #Verify if the password is somewhat secure
    if re.fullmatch(r'[A-Za-z0-9@#$%^&+=]{8,}', passwd):
        #Encrypt the password with SHA256
        h = sha256()
        h.update(passwd.encode('utf-8'))
        return h.hexdigest()
    else:
        raise Exception(errores["PNS"])
