"""Takes the email and password from the user used for authentication
and performs some verification and hashing"""

import sys
import json
from email_funcs import email_check
from password_funcs import passwd_hash

errores = json.load(open("../../error/errores.json", "r")) #Error codes
passwd = ""
email = ""

try:
    if not len(sys.argv) > 1: #This is greater than 1 because the index 0 holds the path to the file.
        raise Exception()
except:
    raise Exception(errores["NA"])

email = sys.argv[1]

try:
    passwd = sys.argv[2]
except:
    raise Exception(errores["NP"])

if(email.lower() != "null"):
    print(email_check(email))
print(passwd_hash(passwd))
sys.exit()